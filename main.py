import os

from flask import Flask
from flask import render_template
from flask import jsonify

import db
from db import get_db


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

    @app.route('/list')
    def getList():
        db = get_db()
        item_list = db.execute(
            'SELECT * FROM list WHERE auth = \'auth\''
        ).fetchall()
        item_list = list(map(lambda e : e['item'], item_list))
        return jsonify(
            items=item_list
        )

    
    db.init_app(app)

    return app
