define([
  'esri/dijit/PopupTemplate'
], function(
  PopupTemplate
) {
  return new PopupTemplate({
    "title": "{NAME} County, {STATE_NAME}",
    "fieldInfos": [
      {
        "fieldName": "POP2012",
        "label": "2012 Population",
        "visible": true,
        "format": {
          "places": 0,
          "digitSeparator": true
        }
      }, {
        "fieldName": "POP12_SQMI",
        "label": "Density, per sq. mi.",
        "visible": true,
        "format": {
          "places": 0,
          "digitSeparator": true
        }
      }, {
        "fieldName": "WHITE",
        "label": "White",
        "visible": true,
        "format": {
          "places": 0,
          "digitSeparator": true
        }
      }, {
        "fieldName": "ASIAN",
        "label": "Asian",
        "visible": true,
        "format": {
          "places": 0,
          "digitSeparator": true
        }
      }, {
        "fieldName": "BLACK",
        "label": "African American",
        "visible": true,
        "format": {
          "places": 0,
          "digitSeparator": true
        }
      }, {
        "fieldName": "HISPANIC",
        "label": "Hispanic",
        "visible": true,
        "format": {
          "places": 0,
          "digitSeparator": true
        }
      }, {
        "fieldName": "AMERI_ES",
        "label": "Native American/Alaskan",
        "visible": true,
        "format": {
          "places": 0,
          "digitSeparator": true
        }
      }
    ]
  });
});