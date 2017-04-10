import sqlite3
from flask import Flask
from flask import render_template
#from flask_sqlalchemy import SQLAlchemy
from flask import request
from flask_bootstrap import Bootstrap

app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:/db/todolist.db'
#db = SQLAlchemy(app)
Bootstrap(app)

#Db Connection
database = 'db/todolist.db'
def db_connection():
    return sqlite3.connect(database)

def sqlInsert(task, status):
    db = db_connection()
    sql = 'insert into tasks values(?,?)'
    db.execute(sql,[task, status])
    db.commit()
    db.close()

def sqlDelete(task):
    db = db_connection()
    sql = 'delete from tasks where name = ?'
    db.execute(sql, [task])
    db.commit()
    db.close()

@app.route("/")
def index():
    task = request.args.get('task')
    status = request.args.get('status')
    #sqlInsert(task, status)
    #sqlDelete(task)
    return render_template('index.html', html_page_task=task, html_page_status=status)

if __name__ == "__main__":
    app.run()