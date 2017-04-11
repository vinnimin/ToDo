import sqlite3

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