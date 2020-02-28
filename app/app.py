import json

from flask import Flask, render_template, jsonify
from app.data import population_file

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/countries')
def api_list_countries():
    with population_file.open() as f:
        return jsonify(data=json.load(f))


if __name__ == '__main__':
    app.run()
