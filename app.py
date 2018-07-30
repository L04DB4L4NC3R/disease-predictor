import os
from flask import Flask,render_template,jsonify
import requests

app = Flask(__name__)


@app.route("/",methods=["GET"])
def index():
    return jsonify({"status":True})


@app.route("/weather/<place>",methods=["GET"])
def getWeather(place):
    data = requests.get("http://samples.openweathermap.org/data/2.5/history/city?q="+place+"&appid=" + os.environ.get("WEATHER_APPID")).json()
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)