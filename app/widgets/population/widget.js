define([
  'dojo/_base/declare',
  'dojo/_base/lang',
  'dojo/topic',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'esri/layers/FeatureLayer',
  'dojo/text!./widget.html'
], function(
  declare, lang, topic,
  _WidgetBase, _TemplatedMixin,
  FeatureLayer,
  templateString
) {

  var hitch = lang.hitch;

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

      this.own(
        topic.subscribe('blend-select-update', hitch(this, 'updateBlendMode'))
      );
    },

    updateBlendMode: function(mode) {
      console.log('update blend mode with dojo/topic');
      var layer = this.get('layer');
      var renderer = this.get('renderer');
      renderer.blendMode = mode;
      layer.setRenderer(renderer);
      layer.refresh();
    }

  });

});
