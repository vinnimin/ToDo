import sql
from flask import Flask, render_template, jsonify, request
from flask_bootstrap import Bootstrap

app = Flask(__name__)
Bootstrap(app)

@app.route("/")
def index():
    return render_template('index.html')

@app.route('/addTask', methods=['POST'])
def addTask():
    taskStatus = request.form['taskStatus']
    taskName = request.form['taskName']

    if taskName:
        sql.sqlInsert(taskName, taskStatus)
        return jsonify({'success' : 'success'})

    return jsonify({'error' : 'error'})

@app.route('/deleteTask', methods=['POST'])
def deleteTask():
    taskName = request.form['taskName']

    if taskName:
        sql.sqlDelete(taskName)
        return jsonify({'success' : 'success'})

    return jsonify({'error' : 'error'})

if __name__ == "__main__":
    app.run(debug=True)