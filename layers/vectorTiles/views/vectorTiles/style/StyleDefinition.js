// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["require","exports"],function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.backgroundLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:"visible"}},e.fillLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:"visible"}},e.lineLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:"visible"},"line-cap":{type:"enum",values:["butt","round","square"],default:"butt"},"line-join":{type:"enum",values:["bevel","round","miter"],default:"miter"},"line-miter-limit":{type:"number",default:2},"line-round-limit":{type:"number",default:1.05}},e.symbolLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:"visible"},"symbol-placement":{type:"enum",values:["point","line"],default:"point"},"symbol-spacing":{type:"number",minimum:1,default:250},"symbol-avoid-edges":{type:"boolean",default:!1},"icon-image":{type:"string"},"icon-allow-overlap":{type:"boolean",default:!1},"icon-ignore-placement":{type:"boolean",default:!1},"icon-optional":{type:"boolean",default:!1},"icon-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:"auto"},"icon-size":{type:"number",minimum:0,default:1},"icon-rotate":{type:"number",default:0},"icon-padding":{type:"number",minimum:0,default:2},"icon-keep-upright":{type:"boolean",default:!1},"icon-offset":{type:"array",value:"number",length:2,default:[0,0]},"text-field":{type:"string"},"text-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:"auto"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"]},"text-size":{type:"number",minimum:0,default:16},"text-max-width":{type:"number",minimum:0,default:10},"text-line-height":{type:"number",default:1.2},"text-letter-spacing":{type:"number",default:0},"text-justify":{type:"enum",values:["left","center","right"],default:"center"},"text-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:"center"},"text-max-angle":{type:"number",minimum:0,default:45},"text-rotate":{type:"number",default:0},"text-padding":{type:"number",minimum:0,default:2},"text-keep-upright":{type:"boolean",default:!0},"text-transform":{type:"enum",values:["none","uppercase","lowercase"],default:"none"},"text-offset":{type:"array",value:"number",length:2,default:[0,0]},"text-allow-overlap":{type:"boolean",default:!1},"text-ignore-placement":{type:"boolean",default:!1},"text-optional":{type:"boolean",default:!1}},e.circleLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:"visible"}},e.backgroundPaintDefinition={"background-opacity":{type:"number",minimum:0,maximum:1,default:1},"background-color":{type:"color",default:[0,0,0,1]},"background-pattern":{type:"string"}},e.fillPaintDefinition={"fill-opacity":{type:"number",minimum:0,maximum:1,default:1},"fill-antialias":{type:"boolean",default:!0},"fill-color":{type:"color",default:[0,0,0,1]},"fill-outline-color":{type:"color",default:[0,0,0,0]},"fill-translate":{type:"array",value:"number",length:2,default:[0,0]},"fill-translate-anchor":{type:"enum",values:["map","viewport"],default:"map"},"fill-pattern":{type:"string"}},e.linePaintDefinition={"line-opacity":{type:"number",minimum:0,maximum:1,default:1},"line-color":{type:"color",default:[0,0,0,1]},"line-translate":{type:"array",value:"number",length:2,default:[0,0]},"line-translate-anchor":{type:"enum",values:["map","viewport"],default:"map"},"line-width":{type:"number",minimum:0,default:1},"line-gap-width":{type:"number",minimum:0,default:0},"line-offset":{type:"number",default:0},"line-blur":{type:"number",minimum:0,default:0},"line-dasharray":{type:"array",value:"number",default:[]},"line-pattern":{type:"string"}},e.symbolPaintDefinition={"icon-opacity":{type:"number",minimum:0,maximum:1,default:1},"icon-color":{type:"color",default:[0,0,0,1]},"icon-halo-color":{type:"color",default:[0,0,0,0]},"icon-halo-width":{type:"number",minimum:0,default:0},"icon-halo-blur":{type:"number",minimum:0,default:0},"icon-translate":{type:"array",value:"number",length:2,default:[0,0]},"icon-translate-anchor":{type:"enum",values:["map","viewport"],default:"map"},"text-opacity":{type:"number",minimum:0,maximum:1,default:1},"text-color":{type:"color",default:[0,0,0,1]},"text-halo-color":{type:"color",default:[0,0,0,0]},"text-halo-width":{type:"number",minimum:0,default:0},"text-halo-blur":{type:"number",minimum:0,default:0},"text-translate":{type:"array",value:"number",length:2,default:[0,0]},"text-translate-anchor":{type:"enum",values:["map","viewport"],default:"map"}},e.rasterPaintDefinition={"raster-opacity":{type:"number",minimum:0,maximum:1,default:1},"raster-hue-rotate":{type:"number",default:0},"raster-brightness-min":{type:"number",minimum:0,maximum:1,default:0},"raster-brightness-max":{type:"number",minimum:0,maximum:1,default:1},"raster-saturation":{type:"number",minimum:-1,maximum:1,default:0},"raster-contrast":{type:"number",minimum:-1,maximum:1,default:0},"raster-fade-duration":{type:"number",minimum:0,default:300}},e.circlePaintDefinition={"circle-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-radius":{type:"number",minimum:0,default:5},"circle-color":{type:"color",default:[0,0,0,1]},"circle-blur":{type:"number",minimum:0,default:0},"circle-translate":{type:"array",value:"number",length:2,default:[0,0]},"circle-translate-anchor":{type:"enum",values:["map","viewport"],default:"map"},"circle-stroke-width":{type:"number",minimum:0,default:0},"circle-stroke-color":{type:"color",default:[0,0,0,1]},"circle-stroke-opacity":{type:"number",minimum:0,maximum:1,default:1}},e}();t.StyleDefinition=i});