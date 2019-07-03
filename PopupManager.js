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

define(["./geometry/Extent","./geometry/ScreenPoint","./kernel","./layerUtils","./tasks/query","dijit/registry","dojo/_base/array","dojo/_base/declare","dojo/_base/Deferred","dojo/_base/lang","dojo/has","dojo/on","dojo/promise/all","dojo/Stateful","require"],function(e,r,a,t,i,n,s,o,l,u,c,d,f,p,h){var y,m=o(p,{declaredClass:"esri.PopupManager",enabled:!1,map:null,_mapClickHandle:null,_featureLayersCache:{},constructor:function(e){this._mapClickHandler=u.hitch(this,this._mapClickHandler)},setMap:function(e){if(this.map){if(e===this.map)return;this.unsetMap()}this.map=e,this._setupClickHandler()},unsetMap:function(){this.map&&(this.map=null),this._mapClickHandle&&(this._mapClickHandle.remove(),this._mapClickHandle=null)},getMapLayer:function(e){var r;if(e&&(r=e.getLayer())){var a=r.id;if(this._featureLayersCache[a]){var t=a.lastIndexOf("_");t>-1&&(a=a.substring(0,t),r=this.map.getLayer(a))}}return r},_enabledSetter:function(e){this.enabled=e,this._setupClickHandler()},_setupClickHandler:function(){this._mapClickHandle&&(this._mapClickHandle.remove(),this._mapClickHandle=null),this.enabled&&this.map&&(this._mapClickHandle=this.map.on("click",this._mapClickHandler))},_mapClickHandler:function(e){var r=this.map.infoWindow,a=e.graphic;r&&this.map.loaded&&(r.clearFeatures&&r.setFeatures?this._showPopup(e):a&&a.getInfoTemplate()&&this._showInfoWindow(a,e.mapPoint))},_showPopup:function(a){var t=this.map,n=t.infoWindow,o=this,u=[],c=[t.graphics].concat(s.map(t.graphicsLayerIds,t.getLayer,t));s.forEach(c,function(e){e&&e.loaded&&e.infoTemplate&&!e.suspended&&u.push(e)});var d=[];s.forEach(t.layerIds,function(e){var r=t.getLayer(e);r&&r.loaded&&!r.suspended&&(o._isImageServiceLayer(r)&&r.infoTemplate?u.push(r):"esri.layers.WMSLayer"===r.declaredClass&&r.getFeatureInfoURL?u.push(r):"esri.layers.ArcGISDynamicMapServiceLayer"!==r.declaredClass&&"esri.layers.ArcGISTiledMapServiceLayer"!==r.declaredClass||!r.infoTemplates||d.push(r))});var f=t.getResolutionForPopup();this._getSubLayerFeatureLayers(d,f).then(function(c){u=u.concat(c);var d=a.graphic&&a.graphic.getParentGraphic()||a.graphic,p=null;if(d&&d.getInfoTemplate()&&!o._isImageServiceLayer(d.getLayer())&&(p=d),u.length||p){var h=o._calculateClickTolerance(u),y=a.screenPoint,m=t.toMap(new r(y.x-h,y.y+h)),g=t.toMap(new r(y.x+h,y.y-h)),v=new e(m.x,m.y,g.x,g.y,t.spatialReference);if(v=v.intersects(t.extent)){var _=new i,L=!!p,b=!0,C=s.map(u,function(e){_.timeExtent=e.useMapTime?t.timeExtent:null;var r=o._isReductionEnabled(e);e=r?e.getFeatureReductionLayer():e;var i,n=o._featureLayersCache[e.id];if(o._isImageServiceLayer(e)){_.geometry=a.mapPoint,b=!1;var u={};u.rasterAttributeTableFieldPrefix="Raster.",u.returnDomainValues=!0,i=e.queryVisibleRasters(_,u),i.addCallback(function(){var r=e.getVisibleRasters();return L=L||r.length>0,r})}else if("esri.layers.WMSLayer"===e.declaredClass){i=new l;var c=e._getPopupGraphic(t,a.screenPoint);c?(i.resolve([c]),L=!0):i.resolve([])}else if(n||"function"==typeof e.queryFeatures&&(0===e.currentMode||1===e.currentMode))_.geometry=v,i=e.queryFeatures(_),i.addCallback(function(e){var r=[];return s.forEach(e.features,function(e){e.visible&&(r.push(e),n&&e.setResolution(f))}),L=L||r.length>0,r});else{i=new l;var d=s.filter(e.graphics,function(e){return e&&e.visible&&v.intersects(e.geometry)});if(r&&o._isParentLayer(e,p)){var h=o._findGraphicById(d,p,"cluster_id");h&&(p=h)}L=L||d.length>0,i.resolve(d)}return i});if(p){var w=new l;w.resolve([p]),C.unshift(w)}if(!s.some(C,function(e){return!e.isFulfilled()})&&!L)return n.hide(),void n.clearFeatures();n.setFeatures(C),n.show(a.mapPoint,{closestFirst:b})}}})},_getSubLayerFeatureLayers:function(e,r,a){r=r||null;var i=a||new l,n=[],o=e.length,u=this.map.getScale(),c=!1,p=this;e:for(var m=0;m<o;m++){var g=e[m],v=g.dynamicLayerInfos||g.layerInfos;if(v){var _=null;g._params&&(g._params.layers||g._params.dynamicLayers)&&(_=g.visibleLayers),_=t._getVisibleLayers(v,_);for(var L=t._getLayersForScale(u,v),b=v.length,C=0;C<b;C++){var w=v[C],I=w.id,M=g.infoTemplates[I];if(!w.subLayerIds&&M&&M.infoTemplate&&s.indexOf(_,I)>-1&&s.indexOf(L,I)>-1){if(!y){c=!0;break e}var S=g.id+"_"+I,x=this._featureLayersCache[S];if(x&&x.loadError)continue;if(!x){var k=M.layerUrl;k||(k=w.source?this._getLayerUrl(g.url,"/dynamicLayer"):this._getLayerUrl(g.url,I)),x=new y(k,{parentLayer:g,id:S,drawMode:!1,mode:y.MODE_SELECTION,outFields:this._getOutFields(M.infoTemplate),resourceInfo:M.resourceInfo,source:w.source}),this._featureLayersCache[S]=x}x.setDefinitionExpression(g.layerDefinitions&&g.layerDefinitions[I]),x.setGDBVersion(g.gdbVersion),x.setInfoTemplate(M.infoTemplate),x.setMaxAllowableOffset(r),x.setUseMapTime(!!g.useMapTime),g.layerDrawingOptions&&g.layerDrawingOptions[I]&&g.layerDrawingOptions[I].renderer&&x.setRenderer(g.layerDrawingOptions[I].renderer),n.push(x)}}}}if(c){var F=new l;h(["./layers/FeatureLayer"],function(e){y=e,F.resolve()}),F.then(function(){p._getSubLayerFeatureLayers(e,r,i)})}else{var T=[];s.forEach(n,function(e){if(!e.loaded){var r=new l;d.once(e,"load, error",function(){r.resolve()}),T.push(r.promise)}}),T.length?f(T).then(function(){n=s.filter(n,function(e){return!e.loadError&&e.isVisibleAtScale(u)}),i.resolve(n)}):(n=s.filter(n,function(e){return e.isVisibleAtScale(u)}),i.resolve(n))}return i.promise},_getLayerUrl:function(e,r){var a=e.indexOf("?");return-1===a?e+"/"+r:e.substring(0,a)+"/"+r+e.substring(a)},_getOutFields:function(e){var r;return e.info&&"esri.dijit.PopupTemplate"===e.declaredClass?(r=[],s.forEach(e.info.fieldInfos,function(e){var a=e.fieldName&&e.fieldName.toLowerCase();a&&"shape"!==a&&0!==a.indexOf("relationships/")&&r.push(e.fieldName)})):r=["*"],r},_calculateClickTolerance:function(e){var r,a,t=6;return s.forEach(e,function(e){(r=e.renderer)&&("esri.renderer.SimpleRenderer"===r.declaredClass?(a=r.symbol,a&&a.xoffset&&(t=Math.max(t,Math.abs(a.xoffset))),a&&a.yoffset&&(t=Math.max(t,Math.abs(a.yoffset)))):"esri.renderer.UniqueValueRenderer"!==r.declaredClass&&"esri.renderer.ClassBreaksRenderer"!==r.declaredClass||s.forEach(r.infos,function(e){a=e.symbol,a&&a.xoffset&&(t=Math.max(t,Math.abs(a.xoffset))),a&&a.yoffset&&(t=Math.max(t,Math.abs(a.yoffset)))}))}),t},_showInfoWindow:function(e,r){var a=this.map.infoWindow,t=e.geometry,i=t&&"point"===t.type?t:r,s=e.getContent();if(a.setTitle(e.getTitle()),s&&u.isString(s.id)){var o=n.byId(s.id);o&&o.set&&/_PopupRenderer/.test(o.declaredClass)&&o.set("showTitle",!1)}a.setContent(s),a.show(i)},_findGraphicById:function(e,r,a){var t,i=r.attributes,n=i&&i[a];return s.some(e,function(e){var r=e.attributes;return r&&r[a]===n&&(t=e),!!t}),t},_isParentLayer:function(e,r){var a=r&&r.getLayer();return e&&a===e},_isReductionEnabled:function(e){return e&&e.isFeatureReductionActive&&e.isFeatureReductionActive()},_isImageServiceLayer:function(e){return"esri.layers.ArcGISImageServiceLayer"===e.declaredClass||"esri.layers.ArcGISImageServiceVectorLayer"===e.declaredClass}});return c("extend-esri")&&(a.PopupManager=m),m});