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
        task_list = list(map(lambda e : {'id': e['id'], 'item': e['item'], 'achieved': e['achieved']}, item_list))
        return jsonify(
            items=task_list
        )

    @app.route('/saveItem', methods=['POST'])
    def saveItem():
        item_to_save = request.json['name']
        db = get_db()
        db.execute(
            'INSERT INTO task (user_fk, item, achieved) VALUES (1, ?, false);', (item_to_save,)
        )
        db.commit()
        return jsonify(success=True)

    @app.route('/removeItem', methods=['POST'])
    def removeItem():
        item_to_remove = request.json['name']
        db = get_db()
        db.execute(
            'DELETE FROM task WHERE id = (SELECT id FROM task where item = ? limit 1);', (item_to_remove,)
        )
        db.commit()
        return jsonify(success=True)


    @app.route('/toggleItem', methods=['POST'])
    def toggleItem():
        print('Toggle')
        id = request.json['id']
        achieved = request.json['achieved']
        db = get_db()
        db.execute(
            'UPDATE task SET achieved = ? where id = ?;', (achieved, id)
        )
        db.commit()
        return jsonify(success=True)
    
    db.init_app(app)

    return app


