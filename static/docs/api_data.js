define({ "api": [
  {
    "type": "GET",
    "url": "/weather/{place}",
    "title": "India weather info",
    "name": "India_weather_info",
    "group": "all",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "place",
            "description": "<p>place as a GET parameter</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "response-example",
          "content": "{\n  \"calctime\": 0.0875, \n  \"city_id\": 2643743, \n  \"cnt\": 3, \n  \"cod\": \"200\", \n  \"list\": [\n    {\n      \"clouds\": {\n        \"all\": 92\n      }, \n      \"dt\": 1485717216, \n      \"main\": {\n        \"grnd_level\": 1016.76, \n        \"humidity\": 100, \n        \"pressure\": 1016.76, \n        \"sea_level\": 1024.45, \n        \"temp\": 279.946, \n        \"temp_max\": 279.946, \n        \"temp_min\": 279.946\n      }, \n      \"rain\": {\n        \"3h\": 2.69\n      }, \n      \"weather\": [\n        {\n          \"description\": \"light rain\", \n          \"icon\": \"10n\", \n          \"id\": 500, \n          \"main\": \"Rain\"\n        }\n      ], \n      \"wind\": {\n        \"deg\": 163.001, \n        \"speed\": 4.59\n      }\n    }, \n    {\n      \"clouds\": {\n        \"all\": 92\n      }, \n      \"dt\": 1485745061, \n      \"main\": {\n        \"grnd_level\": 1012.12, \n        \"humidity\": 98, \n        \"pressure\": 1012.12, \n        \"sea_level\": 1019.71, \n        \"temp\": 282.597, \n        \"temp_max\": 282.597, \n        \"temp_min\": 282.597\n      }, \n      \"rain\": {\n        \"3h\": 0.405\n      }, \n      \"weather\": [\n        {\n          \"description\": \"light rain\", \n          \"icon\": \"10n\", \n          \"id\": 500, \n          \"main\": \"Rain\"\n        }\n      ], \n      \"wind\": {\n        \"deg\": 226, \n        \"speed\": 4.04\n      }\n    }, \n    {\n      \"clouds\": {\n        \"all\": 90\n      }, \n      \"dt\": 1485768552, \n      \"main\": {\n        \"humidity\": 93, \n        \"pressure\": 1011, \n        \"temp\": 279.38, \n        \"temp_max\": 280.15, \n        \"temp_min\": 278.15\n      }, \n      \"weather\": [\n        {\n          \"description\": \"mist\", \n          \"icon\": \"50d\", \n          \"id\": 701, \n          \"main\": \"Mist\"\n        }, \n        {\n          \"description\": \"fog\", \n          \"icon\": \"50d\", \n          \"id\": 741, \n          \"main\": \"Fog\"\n        }\n      ], \n      \"wind\": {\n        \"deg\": 30, \n        \"speed\": 2.6\n      }\n    }\n  ], \n  \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.py",
    "groupTitle": "all"
  },
  {
    "type": "get",
    "url": "/",
    "title": "landing page",
    "name": "landing_page",
    "group": "all",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "status",
            "description": "<p>true/false</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "response-example",
          "content": "{\n    \"status\":true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./app.py",
    "groupTitle": "all"
  }
] });
