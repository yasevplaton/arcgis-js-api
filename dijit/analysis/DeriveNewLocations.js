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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","./utils","./CreditEstimator","./ExpressionGrid","dojo/i18n!../../nls/jsapi","dojo/text!./templates/DeriveNewLocations.html"],function(t,e,s,i,n,o,a,r,h,l,d,u,c,y,p,m,L,_,f,x,v,w,C,g,j,S,A,I,b,N,k,B,E,F,D,G,U,P){var J=e([p,m,L,_,f,E,B],{declaredClass:"esri.dijit.analysis.DeriveNewLocations",templateString:P,widgetsInTemplate:!0,i18n:null,toolName:"DeriveNewLocations",helpFileName:"DeriveNewLocations",resultParameter:"resultLayer",primaryActionButttonClass:"esriAnalysisSubmitButton",analysisLayer:null,inputLayers:[],constructor:function(t){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode)},destroy:function(){this.inherited(arguments),i.forEach(this._pbConnects,n.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),s.mixin(this.i18n,U.deriveNewLocations),s.mixin(this.i18n,U.expressionGrid)},postCreate:function(){this.inherited(arguments),y.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",s.hitch(this,this.validateServiceName)),this._buildUI()},startup:function(){},_onClose:function(t){t&&(this._save(),this.emit("save",{save:!0})),this.emit("close",{save:t})},_handleSaveBtnClick:function(){if(this._form.validate()&&this.expressionGrid.validate()){this._saveBtn.set("disabled",!0);var t,e,s,n,a={},r={};e=this.expressionGrid.get("expressionMap"),a.expressions=o.toJson(e.expressions),a.data=o.toJson(e.data),s=[],s=i.map(e.inputLayers,function(t){return this.constructAnalysisInputLyrObj(t)},this),a.inputLayers=o.toJson(s),a.aLayer=o.toJson(this.constructAnalysisInputLyrObj(this.analysisLayer)),this.returnFeatureCollection||(a.OutputName=o.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=o.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(t={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(t.extent=this.map.extent._normalize(!0)),a.context=o.toJson(t)),r.jobParams=a,n=this.i18n.itemDescription,n+="<div><i><u>"+this.i18n.expression+"</u> "+e.expressionString+"</i></div>",r.itemParams={description:n,tags:h.substitute(this.i18n.itemTags,{analysisLayerName:this.analysisLayer.name}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(r.itemParams.folder=this.get("folderId")),this.execute(r)}},_handleShowCreditsClick:function(t){t.preventDefault();var e,n,a={};if(!this._form.validate()||!this.expressionGrid.validate())return l.set(this._showCreditsLink,"color","grey"),void l.set(this._showCreditsLink,"cursor","default");l.set(this._showCreditsLink,"color",""),l.set(this._showCreditsLink,"cursor",""),e=this.expressionGrid.get("expressionMap"),a.expressions=o.toJson(e.expressions),n=[],n=i.map(e.inputLayers,function(t){return this.constructAnalysisInputLyrObj(t)},this),a.inputLayers=o.toJson(n),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(a.context=o.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,a).then(s.hitch(this,function(t){this._usageForm.set("content",t),this._usageDialog.show()}))},_save:function(){},_buildUI:function(){var t=!0;this.signInPromise.then(s.hitch(this,F.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),this.analysisLayer&&this.rerun&&this.inputLayers&&i.forEach(this.inputLayers,function(t){t&&this.analysisLayer&&(this.analysisLayer.url===t.url||this.analysisLayer.name===t.name)&&(this.analysisLayer=t)},this),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),t=!1),this.rerun&&this.data&&this.expressions&&this.selectedInputLayers&&F.updateExpressions(this),this.data&&(t=!1),this._updateAnalysisLayerUI(t),l.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(s.hitch(this,function(t){this.folderStore=t,F.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),l.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),l.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none"),this._loadConnections()},_updateAnalysisLayerUI:function(t){this.analysisLayer&&(t&&(this.outputLayerName=h.substitute(this.i18n.outputLayerName,{analysisLayerName:this.analysisLayer.name})),this._outputLayerInput.set("value",this.outputLayerName)),this.expressionGrid||(this.expressionGrid=new G({analysisLayer:this.analysisLayer,inputLayers:this.inputLayers,allowAllInputOperands:!0,primaryActionButttonClass:this.get("primaryActionButttonClass"),showReadyToUseLayers:this.get("showReadyToUseLayers"),showBrowseLayers:this.showBrowseLayers,isServerAdvanceLicensed:this.isServerAdvanceLicensed,owningWidget:this,data:!t&&this.data},u.create("div",{style:"width:100%;"},this._expressionGridTd)),this._updateHandle=this.expressionGrid.on("update-expressions",s.hitch(this,this._handleUpdateExpressions)))},_handleUpdateExpressions:function(t){t.length>1?(l.set(this._showCreditsLink,"color",""),l.set(this._showCreditsLink,"cursor","")):(l.set(this._showCreditsLink,"color","grey"),l.set(this._showCreditsLink,"cursor","default"))},showReadyToUseLayersDialog:function(t,e){this._isAnalysisSelect=t,this.signInPromise.then(s.hitch(this,function(){this._createBrowseItems({browseValue:e,isDialog:!0},{},this.layersSelect)}))},_handleBrowseItemsSelect:function(t,e){t&&t.selection&&F.addAnalysisReadyLayer({item:t.selection,layers:this.inputLayers,layersSelect:this.layersSelect,browseDialog:{},widget:this},e).always(s.hitch(this,function(){this._isAnalysisSelect&&(this.analysisLayer=this.inputLayers[this.layersSelect.get("value")],this._updateAnalysisLayerUI(!0))}))},_loadConnections:function(){this.on("start",s.hitch(this,"_onClose",!0)),this._connect(this._closeBtn,"onclick",s.hitch(this,"_onClose",!1))},_setAnalysisGpServerAttr:function(t){t&&(this.analysisGpServer=t,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setDisableRunAnalysisAttr:function(t){this._saveBtn.set("disabled",t)},_setInputLayersAttr:function(t){this.inputLayers=t},_getInputLayersAttr:function(){return this.inputLayers},_setAnalysisLayerAttr:function(t){this.analysisLayer=t},_getAnalysisLayerAttr:function(){return this.analysisLayer},_setAnalysisLayersAttr:function(t){this.analysisLayers=t},validateServiceName:function(t){return F.validateServiceName(t,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},_setPrimaryActionButttonClassAttr:function(t){this.primaryActionButttonClass=t},_getPrimaryActionButttonClassAttr:function(){return this.primaryActionButttonClass},_connect:function(t,e,s){this._pbConnects.push(n.connect(t,e,s))}});return a("extend-esri")&&s.setObject("dijit.analysis.DeriveNewLocations",J,N),J});