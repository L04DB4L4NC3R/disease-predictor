from dotenv import load_dotenv
load_dotenv()
import os
from flask import Flask,render_template,jsonify
import requests
from flask_apidoc import ApiDoc

app = Flask(__name__)
doc = ApiDoc(app=app)


"""
@api {get} / landing page
@apiName landing page
@apiGroup all

@apiSuccess {boolean} status true/false

@apiParamExample {json} response-example
{
    "status":true
}
"""
@app.route("/",methods=["GET"])
def index():
    return jsonify({"status":True})


"""
@api {GET} /weather/{place} India weather info
@apiName India weather info
@apiGroup all

@apiParam {string} place place as a GET parameter

@apiParamExample {json} response-example
{
  "calctime": 0.0875, 
  "city_id": 2643743, 
  "cnt": 3, 
  "cod": "200", 
  "list": [
    {
      "clouds": {
        "all": 92
      }, 
      "dt": 1485717216, 
      "main": {
        "grnd_level": 1016.76, 
        "humidity": 100, 
        "pressure": 1016.76, 
        "sea_level": 1024.45, 
        "temp": 279.946, 
        "temp_max": 279.946, 
        "temp_min": 279.946
      }, 
      "rain": {
        "3h": 2.69
      }, 
      "weather": [
        {
          "description": "light rain", 
          "icon": "10n", 
          "id": 500, 
          "main": "Rain"
        }
      ], 
      "wind": {
        "deg": 163.001, 
        "speed": 4.59
      }
    }, 
    {
      "clouds": {
        "all": 92
      }, 
      "dt": 1485745061, 
      "main": {
        "grnd_level": 1012.12, 
        "humidity": 98, 
        "pressure": 1012.12, 
        "sea_level": 1019.71, 
        "temp": 282.597, 
        "temp_max": 282.597, 
        "temp_min": 282.597
      }, 
      "rain": {
        "3h": 0.405
      }, 
      "weather": [
        {
          "description": "light rain", 
          "icon": "10n", 
          "id": 500, 
          "main": "Rain"
        }
      ], 
      "wind": {
        "deg": 226, 
        "speed": 4.04
      }
    }, 
    {
      "clouds": {
        "all": 90
      }, 
      "dt": 1485768552, 
      "main": {
        "humidity": 93, 
        "pressure": 1011, 
        "temp": 279.38, 
        "temp_max": 280.15, 
        "temp_min": 278.15
      }, 
      "weather": [
        {
          "description": "mist", 
          "icon": "50d", 
          "id": 701, 
          "main": "Mist"
        }, 
        {
          "description": "fog", 
          "icon": "50d", 
          "id": 741, 
          "main": "Fog"
        }
      ], 
      "wind": {
        "deg": 30, 
        "speed": 2.6
      }
    }
  ], 
  "message": ""
}

"""
@app.route("/weather/<place>",methods=["GET"])
def getWeather(place):
    data = requests.get("http://samples.openweathermap.org/data/2.5/history/city?q="+place+"&appid=" + os.environ.get("WEATHER_APPID")).json()
    return jsonify(data)



@app.route("/docs",methods=["GET"])
def docss():
  return render_template("./static/index.html")

if __name__ == '__main__':
    app.run(debug=True)