import os

from flask import Flask
from flask import render_template
from flask import jsonify
from flask import request

import db
from db import *

def create_app(test_config=None):

    app = Flask(__name__)
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flask-react.sqlite'),
    )
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    @app.route('/')
    def index():              
        return render_template('index.html')

    @app.route('/task')
    def getList():
        db = get_db()
        item_list = db.execute(
            'SELECT * FROM task'
        ).fetchall()
        item_list = list(map(lambda e : e['item'], item_list))
        return jsonify(
            items=item_list
        )

    @app.route('/saveItem', methods=['POST'])
    def saveItem():
        item_to_save = request.json['name']
        db = get_db()
        db.execute(
            'INSERT INTO list (user_fk, item) VALUES (1, ?);', (item_to_save,)
        )
        db.commit()
        return jsonify(success=True)

    @app.route('/removeItem', methods=['POST'])
    def removeItem():
        item_to_remove = request.json['name']
        db = get_db()
        db.execute(
            'DELETE FROM list WHERE id = (SELECT id FROM list where item = ? limit 1);', (item_to_remove,)
        )
        db.commit()
        return jsonify(success=True)
    
    db.init_app(app)

    return app


