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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojo/_base/connect","dojo/_base/json","dojo/_base/fx","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/number","dojo/date/locale","dojo/fx/easing","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ToggleButton","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/form/RadioButton","dijit/Dialog","dojox/form/CheckedMultiSelect","dojo/_base/kernel","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","./CreditEstimator","../../geometry/jsonUtils","../../toolbars/draw","../../graphic","../../layers/FeatureLayer","./utils","../../geometry/Point","../../geometry/Polyline","../../geometry/Polygon","../../geometry/Multipoint","../../geometry/Extent","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../SpatialReference","./ItemTypes","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ExtractData.html"],function(t,e,i,s,a,n,r,o,l,h,u,d,c,y,_,p,m,f,x,g,L,b,v,S,j,A,C,F,E,w,I,D,P,B,M,N,O,k,T,R,J,G,U,V,q,z,H,Y,W,K,Q,X,Z,$,tt,et,it,st,at){var nt=e([g,L,b,v,S,J,G],{declaredClass:"esri.dijit.analysis.ExtractData",templateString:at,widgetsInTemplate:!0,clip:!1,dataFormat:"CSV",inputLayers:null,featureLayers:null,outputLayerName:null,i18n:null,toolName:"ExtractData",helpFileName:"ExtractData",resultParameter:"contentID",constructor:function(t,e){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode)},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,n.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),this.i18n={},i.mixin(this.i18n,st.common),i.mixin(this.i18n,st.analysisTools),i.mixin(this.i18n,st.extractDataTool)},postCreate:function(){this.inherited(arguments),p.add(this._form.domNode,"esriSimpleForm"),d.set(this._inputLayersSelect.selectNode,"width","90%"),this._buildUI()},startup:function(){},_onClose:function(t){t&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:t})},clear:function(){this._clearFeature(),this._featureLayer&&(this.map.removeLayer(this._featureLayer),this._featureLayer=null),this._toolbar.deactivate()},_buildJobParams:function(){var t,e,i={};if(e=s.map(this._inputLayersSelect.get("value"),function(t){return this.featureLayers[parseInt(t,10)]},this),t=[],t=s.map(e,function(t){return this.constructAnalysisInputLyrObj(t,!0)},this),i.InputLayers=t,i.Clip=this.get("clip"),i.DataFormat=this._dataFormatSelect.get("value"),"-1"!==this._extentSelect.get("value")||this._extentArea)this._extentArea&&this._featureLayer?i.Extent=r.toJson(this.constructAnalysisInputLyrObj(this._featureLayer)):i.Extent=r.toJson(this.constructAnalysisInputLyrObj(this.studyAreaLayers[parseInt(this._extentSelect.get("value"),10)-1])),i.context=r.toJson({extent:this.get("extent")});else{var n=new $($.STYLE_NULL,new tt(tt.STYLE_SOLID,new a([0,0,0]),4)),o=this._createBoundingPolyFeatColl(),l=this.map.extent._normalize(!0),h=new Q(l.spatialReference);h.addRing([[l.xmin,l.ymin],[l.xmin,l.ymax],[l.xmax,l.ymax],[l.xmax,l.ymin],[l.xmin,l.ymin]]),o.add(new z(h,n)),i.Extent=r.toJson(this.constructAnalysisInputLyrObj(o)),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(i.context=r.toJson({extent:this.map.extent._normalize(!0)}))}return i.OutputName=r.toJson({itemProperties:{title:this._outputLayerInput.get("value"),description:this.i18n.itemDescription,tags:this.i18n.itemTags,snippet:this.i18n.itemSnippet,folderId:this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):""}}),i},_handleShowCreditsClick:function(t){var e={};t.preventDefault(),this._form.validate()&&(e=this._buildJobParams(),this.isCreditCalcAsync||(e.InputLayers=r.toJson(e.InputLayers)),this.getCreditsEstimate(this.toolName,e).then(i.hitch(this,function(t){this._usageForm.set("content",t),this._usageDialog.show()})))},_handleSaveBtnClick:function(t){var e={},i={};this._form.validate()&&(this._saveBtn.set("disabled",!0),e=this._buildJobParams(),i.jobParams=e,this._clearFeature(),this._featureLayer&&(this.map.removeLayer(this._featureLayer),this._featureLayer=null),this.execute(i))},_save:function(){},_buildUI:function(){var t;if(t=f.format(new Date,{locale:k.locale,formatLength:"medium"}),this._loadConnections(),d.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this.signInPromise.then(i.hitch(this,Y.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),this._outputLayerInput.set("value",u.substitute(this.i18n.outputfileName,{datetime:t})),this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName),this.featureLayers&&s.forEach(this.featureLayers,function(t,e){this._inputLayersSelect.addOption({value:e,label:t.name,selected:this.featureLayers&&-1!==s.indexOf(this.inputLayers,t)})},this),this.studyAreaLayers){var e=[{value:"-1",label:this.i18n.sameAsDisplay}];s.forEach(this.studyAreaLayers,function(t,i){e.push({value:i+1,label:u.substitute(this.i18n.sameAsLayer,{layername:t.name})})},this),this._extentSelect.addOption(e)}this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName),d.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(i.hitch(this,function(t){this.folderStore=t,Y.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),d.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),this.clip&&this._clipRadioBtn.set("value",this.clip),this.dataFormat&&this._dataFormatSelect.set("value",this.dataFormat)},_loadConnections:function(){this.on("start",i.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!1))},_handleDataFormatSelectChange:function(){var t,e,i;e=!1,i=this._dataFormatSelect.get("value"),"CSV"===i?(e=s.some(this._inputLayersSelect.get("value"),function(e){return t=this.featureLayers[parseInt(e,10)],"esriGeometryPolyline"===t.geometryType||"esriGeometryPolygon"===t.geometryType},this),e?(this._showMessages(this.i18n.linesCSVValidationMsg),this.set("disableRunAnalysis",!0)):(this._handleCloseMsg(),this.set("disableRunAnalysis",!1))):(this._handleCloseMsg(),this.set("disableRunAnalysis",!1))},_clearFeature:function(){this._extentArea&&(this._featureLayer&&this._featureLayer.applyEdits(null,null,[this._extentArea]),this.map.graphics.remove(this._extentArea),this._extentArea=null)},_handleExtentSelectChange:function(t){var e,i;this._drawExtentBtn.set("disabled","-1"!==this._extentSelect.get("value")),this._extentArea&&(this._clearFeature(),this._extentSelect.updateOption({value:"-1",label:this.i18n.sameAsDisplay})),"-1"!==t?(e=this.featureLayers[parseInt(t-1,10)].toJson(),i=this.featureLayers[parseInt(t-1,10)],this.set("extent",R.isDefined(e.layerDefinition.extent)?e.layerDefinition.extent:this._getLayerFullExtent(i))):this.set("extent",this.map.extent._normalize(!0))},_getLayerFullExtent:function(t){var e=null;return s.forEach(t.graphics,function(t,i){var s=this._getExtent(t.geometry);s&&(e=e?e.union(s):s)},this),e},_getExtent:function(t){if(!t)return null;var e=null;return"esri.geometry.Extent"===t.declaredClass?e=t:"esri.geometry.Point"===t.declaredClass?e=new Z(t.x-1e-4,t.y-1e-4,t.x+1e-4,t.y+1e-4,t.spatialReference):(e=t.getExtent())&&(e.spatialReference=new et(t.spatialReference.toJson())),e},_handleExtentBtnClick:function(t){t.preventDefault(),this.emit("drawtool-activate",{}),this._toolbar.activate(q.POLYGON),this._featureLayer||(this._featureLayer=this._createBoundingPolyFeatColl(),this.map.addLayer(this._featureLayer)),this._clearFeature()},_addFeatures:function(t){this.emit("drawtool-deactivate",{}),this._toolbar.deactivate();var e,i;e=[],i={},this._extentArea=new z(t),i.description="blayer desc",i.title="blayer",this._extentArea.setAttributes(i),this.map.graphics.add(this._extentArea),e.push(this._extentArea),this._featureLayer.applyEdits(e,null,null),this.set("extent",t.getExtent()),this._extentSelect.updateOption({value:"-1",label:this.i18n.drawnBoundary})},_setExtentAttr:function(t){this.extent=t},_getExtentAttr:function(){return this.extent},_setAnalysisGpServerAttr:function(t){t&&(this.analysisGpServer=t,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setFeatureLayersAttr:function(t){this.set("studyAreaLayers",t),this.featureLayers=s.filter(t,function(t){return-1!==t.capabilities.indexOf("Extract")})},_getFeatureLayersAttr:function(){return this.featureLayers},_setInputLayersAttr:function(t){this.inputLayers=t},_getInputLayersAttr:function(){return this.inputLayers=s.map(this._inputLayersSelect.get("value"),function(t){return this.featureLayers[parseInt(t,10)]},this),this.inputLayers},_setStudyAreaLayersAttr:function(t){this.studyAreaLayers=t.filter(function(t){return-1===[it.TABLE,it.BTABLE].indexOf(t.type)})},_setClipAttr:function(t){this.clip=t},_getClipAttr:function(){return this.clip=this._clipRadioBtn.get("checked"),this.clip},_setDataFormatAttr:function(t){this.dataFormat=t},_getDataFormatAttr:function(){return this._dataFormatSelect.get("value")},_setDisableRunAnalysisAttr:function(t){this._saveBtn.set("disabled",t)},_setMapAttr:function(t){this.map=t,this._toolbar=new q(this.map),this.set("extent",this.map.extent._normalize(!0)),n.connect(this._toolbar,"onDrawEnd",i.hitch(this,this._addFeatures))},_connect:function(t,e,i){this._pbConnects.push(n.connect(t,e,i))},_showMessages:function(t){c.set(this._bodyNode,"innerHTML",t),o.fadeIn({node:this._errorMessagePane,easing:x.quadIn,onEnd:i.hitch(this,function(){d.set(this._errorMessagePane,{display:""})})}).play()},_handleCloseMsg:function(t){t&&t.preventDefault(),o.fadeOut({node:this._errorMessagePane,easing:x.quadOut,onEnd:i.hitch(this,function(){d.set(this._errorMessagePane,{display:"none"})})}).play()},_createBoundingPolyFeatColl:function(t){var e=t||"boundary",i=Y.createPolygonFeatureCollection(e);return new H(i,{id:e})}});return l("extend-esri")&&i.setObject("dijit.analysis.ExtractData",nt,T),nt});