from flask import Flask
from flask import jsonify
import json

app = Flask(__name__)

advisory = json.load('static/Advisory.json')
teacher = json.load('static/teachers.json')
Y13 = json.load('static/YearGroups/Y13.json')

@app.route('/')
def ping():
    return 'Server is up'

@app.route('/Advisory')
def Advisory():
    try:
	    return jsonify(advisory)
    except Exception as e:
	    return str(e)

@app.route('/Teacher')
def Teacher():
    try:
	    return jsonify(teacher)
    except Exception as e:
	    return str(e)

@app.route('/YearGroups/Y13')
def Y13():
    try:
	    return jsoninfy(Y13)
    except Exception as e:
	    return str(e)



if __name__ == '__main__':
    app.run()