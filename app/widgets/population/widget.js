define([
  'dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'esri/layers/FeatureLayer',
  'dojo/text!./widget.html'
], function(
  declare,
  _WidgetBase, _TemplatedMixin,
  FeatureLayer,
  templateString
) {

  return declare([_WidgetBase, _TemplatedMixin], {

    templateString: templateString,

    baseClass: 'population-info',

    postCreate: function() {
      var layerOptions = this.get('layerOptions');
      var renderer = this.get('renderer');
      var url = this.get('url');
      var map = this.get('map');

      var layer = new FeatureLayer(url, layerOptions);
      layer.setRenderer(renderer);
      map.addLayer(layer);

      this.set('layer', layer);
    }

  });

});
