define([
  'esri/symbols/SimpleFillSymbol',
  'esri/symbols/SimpleLineSymbol',
  'esri/renderers/BlendRenderer',
  'esri/Color'
], function (
  SimpleFillSymbol, SimpleLineSymbol,
  BlendRenderer,
  Color
) {

  //Set the blendRenderer's parameters
  var blendRendererOptions = {
    blendMode: 'darken', //By default, it uses "source-over", uncomment to display different mode
    //See: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
    symbol: new SimpleFillSymbol().setOutline(new SimpleLineSymbol().setWidth(0)),
    fields: [
      {
        field: 'AMERI_ES',
        color: new Color([230, 0, 0])
      }, {
        field: 'HISPANIC',
        color: new Color([56, 168, 0])
      }, {
        field: 'BLACK',
        color: new Color([0, 169, 230])
      }, {
        field: 'ASIAN',
        color: new Color([255, 0, 197])
      }
    ],
    opacityStops: [
      {
        value: 0,
        opacity: 0
      },
      {
        value: .2,
        opacity: .7
      }
    ],
    normalizationField: 'POP2012'
  };

  return new BlendRenderer(blendRendererOptions);

});