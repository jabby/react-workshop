define({ "api": [
  {
    "type": "get",
    "url": "/wines",
    "title": "All Wines",
    "name": "All_Wines",
    "group": "Wines",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "wines",
            "description": "<p>List of wines</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "wines.name",
            "description": "<p>Name of the wine</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\"name\" : \"Chateau Margaux\"},\n  {\"name\" : \"Chateau Angelus\"}\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/server.js",
    "groupTitle": "Wines"
  }
] });