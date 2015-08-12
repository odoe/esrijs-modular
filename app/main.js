define([
  'esri/map',
  'esri/layers/ArcGISTiledMapServiceLayer',
  'app/widgets/population/widget',
  'app/widgets/blendselection/widget',
  'app/utils/popupUtil',
  'app/utils/rendererUtil'
], function(
  Map, ArcGISTiledMapServiceLayer,
  PopulationWidget, BlendSelectionWidget,
  popup,
  renderer
) {

  var map = new Map('map', {
    center: [-100, 38],
    zoom: 5
  });

  var tileLayer = new ArcGISTiledMapServiceLayer('http://tiles.arcgis.com/tiles/nzS0F0zdNLvs7nc8/arcgis/rest/services/US_Counties_basemap/MapServer');
  map.addLayer(tileLayer);

  map.on('load', function() {

    var populationWidget = new PopulationWidget({
      layerOptions: {
        outFields: ['WHITE', 'POP2012', 'AMERI_ES', 'HISPANIC', 'BLACK', 'ASIAN', 'POP12_SQMI', 'NAME', 'STATE_NAME'],
        opacity: 1,
        infoTemplate: popup
      },
      renderer: renderer,
      map: map,
      url: 'http://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Counties_Generalized/FeatureServer/0'
    }, 'population-container');

    var blendSelectionWidget = new BlendSelectionWidget({}, 'blend-selection-container');
    // one way to do update the blendMode
    blendSelectionWidget.on('blend-select-update', function(mode) {
      console.log('update blend mode with events');
      renderer.blendMode = mode;
      populationWidget.get('layer').setRenderer(renderer);
      populationWidget.get('layer').refresh();
    });
  });

});
