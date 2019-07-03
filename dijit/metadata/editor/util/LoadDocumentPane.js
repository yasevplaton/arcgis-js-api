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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/aspect","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/has","../../base/xml/xmlUtil","../../base/xml/XmlInterrogator","../../base/Templated","dojo/text!./templates/LoadDocumentPane.html","dojo/i18n!../../nls/i18nBase","../../base/TabButton","../../../../kernel"],function(t,e,i,o,n,s,a,d,r,l,h,c,p,g,m){var u=t([h],{_escapeSingleQuotes:!0,_inputFileNode:null,_working:!1,arcgisMode:!0,editor:null,dialogBroker:null,prompt:null,templateString:c,postCreate:function(){this.inherited(arguments),this.fileSection.xtnAsTemplate=!1,this.editor&&(this.arcgisMode=this.editor.gxeContext.arcgisMode,"string"==typeof this.editor.gxeContext.filePromptText&&(this.filePrompt.innerHTML=this.editor.gxeContext.filePromptText),"string"==typeof this.editor.gxeContext.asTemplateText&&(this.labelNode.innerHTML=this.editor.gxeContext.asTemplateText)),this._initialize()},onSelect:function(t,e,i){},onSelectPullItem:function(){},_addBrowseButton:function(){var t=s.create("div",{},this.importNode);this._inputFileNode=s.create("input",{class:"gxeLine",type:"file",onchange:e.hitch(this,function(t){this._loadXmlFile(t)})},t)},_addDocType:function(t){var i=s.create("div",{},this.typesNode),o=s.create("div",{class:"gxeClickableText gxeLine",onclick:e.hitch(this,function(){this._working||this._loadDocType(t)})},i);this.arcgisMode?this.setI18nNodeText(o,p.editor.load.templatePrompt):this.setI18nNodeText(o,t.caption)},_initialize:function(){null!==this.prompt&&(this.setI18nNodeText(this.promptNode,this.prompt),this.promptNode.style.display="");var t=this.editor.getEditDocument(),e=window&&window.FileReader,o=t&&this.editor.gxeAdaptor.getAllowPullItem(),n=this.editor.gxeContext.filterDocumentTypes();this._setMode("file"),i.forEach(n,function(t){this._addDocType(t)},this),e?this._addBrowseButton():a.set(this.fileTab.domNode,"display","none"),o||a.set(this.itemTab.domNode,"display","none"),this.arcgisMode&&a.set(this.typeTab.domNode,"display","none"),a.set(this.itemTab.domNode,"display","none"),this.astCheckBoxNode.checked=!1;try{this.astCheckBoxSection.style.display="block",this.editor&&this.arcgisMode&&(this.editor.gxeAdaptor.portalItemContext||(this.astCheckBoxSection.style.display="none"))}catch(t){console.error(t)}},_loadDocType:function(t){this._working||this.onSelect(t,null,!1)},_loadXmlFile:function(t){if(this.importWarningNode.innerHTML="",this.importWarningSection.style.display="none",t&&t.target&&t.target.files&&FileReader){var i=null,n=t.target.files;if(n&&1===n.length&&(i=n[0]),i){this._showMessage(p.editor.load.loading);var s=new FileReader;this.own(o.after(s,"onload",e.hitch(this,function(t){t&&t.target&&t.target.result?this._working||(this._showMessage(p.editor.load.loading),this._parseAndLoad(t.target.result)):this._showUnrecognizedXml(p.editor.load.warnings.badFile)}),!0)),s.readAsText(i)}}},_onFileTabClick:function(t){this._working||this._setMode(t.xtnMode)},_onItemTabClick:function(t){this._working||this._setMode(t.xtnMode)},_onPullItemClick:function(){this._working||this.onSelectPullItem()},_onTemplateTabClick:function(t){this._working||this._setMode(t.xtnMode)},_onTypeTabClick:function(t){this._working||this._setMode(t.xtnMode)},_parseAndLoad:function(t){var e=null;try{e=r.parseFromString(t)}catch(t){return console.error(t),void this._showUnrecognizedXml(p.editor.load.warnings.badFile)}var i=this.editor.gxeContext.filterDocumentTypes(),o=new l,n=o.interrogate(e,i),s=this.astCheckBoxNode.checked&&!0;n?this.onSelect(n,e,s):this._showUnrecognizedXml(p.editor.load.warnings.notSupported)},_setMode:function(t){var e=[this.typeTab,this.fileTab,this.itemTab];i.forEach(e,function(e){t===e.xtnMode?n.add(e.domNode,"current"):n.remove(e.domNode,"current")}),this.fileSection.xtnAsTemplate="template"===t,"type"===t?(a.set(this.fileSection,"display","none"),a.set(this.itemSection,"display","none"),a.set(this.typesSection,"display","")):"item"===t?(a.set(this.typesSection,"display","none"),a.set(this.fileSection,"display","none"),a.set(this.itemSection,"display","")):(a.set(this.typesSection,"display","none"),a.set(this.itemSection,"display","none"),a.set(this.fileSection,"display",""))},_showMessage:function(t){if(this.dialogBroker){var e=this.dialogBroker.okCancelBar;e&&e.showWorking(t)}},_showUnrecognizedXml:function(t){this.arcgisMode?this.setNodeText(this.importWarningNode,p.editor.load.importWarning):this.setNodeText(this.importWarningNode,t),this.importWarningSection.style.display="block",this.dialogBroker&&this.dialogBroker.okCancelBar&&this.dialogBroker.okCancelBar.hideWorking()}});return d("extend-esri")&&e.setObject("dijit.metadata.editor.util.LoadDocumentPane",u,m),u});