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

define(["require","dojo/_base/declare","dojo/on","dojo/dom-class","dojo/dom-construct","dojox/html/entities","../BaseWidget","../infographicUtils/dom","../infographicUtils/formatVariable","./supportClasses/Prizm5Data","dojo/i18n!esri/nls/jsapi"],function(e,i,t,n,a,o,l,s,r,d,_){function c(e){return"POD_"+h(e)}function h(e){return e=e+1+"",1===e.length&&(e="0"+e),e}return _=_.geoenrichment.dijit.Prizm5,i(l,{baseClass:"Infographics_Prizm5",_mainTable:null,_detailsTable:null,_noSegmentsDiv:null,_openRowIndex:-1,createUIExpanded:function(e){this.inherited(arguments),this._createUI(e)},createUICollapsed:function(e){this.inherited(arguments),this._createUI(e)},_createUI:function(e){this._mainTable=e.addContent("table",{class:"Prizm5_Main_Table"}),s.createCols(this._mainTable,[.25,.4,.35])},updateUIExpanded:function(){this.inherited(arguments),this._updateUI()},updateUICollapsed:function(){this.inherited(arguments),this._updateUI()},_updateUI:function(){var i=this;this._toMainView();for(var o=this._get3DominantSegementsInfo(),l=this._mainTable;l.rows.length;)l.deleteRow(-1);if(!o.length)return void this._showNoSegementsInfo();o.forEach(function(o,s){function d(){h=c.insertCell(-1)}var c,h;c=l.insertRow(-1),c._info=o,t(c,"click",function(){i._toDetailViewForRow(c,s)}),n.add(c,"Prizm5_LifeStyle"),d(),n.add(h,"Prizm5_LifeStyle_Image code_"+o.code+" LifeStyleBorder");var u=a.create("div",null,h);u.style.backgroundImage="url("+e.toUrl("../themes/common/images/prizm5/"+o.code+".jpg")+")",u.style.borderColor=o.color,a.create("span",{class:"Prizm5_LifeStyle_Image_Code LifeStyleBorder code_"+o.code,innerHTML:o.code},u).style.borderColor=o.color,d(),n.add(h,"Prizm5_Main_Name"),h.innerHTML="<span class='Prizm5_Main_Label'>"+o.alias+"</span><br><span class='Prizm5_Main_Value'>"+o.value+" "+_.hhLabel+"</span>",d(),n.add(h,"Prizm5_Main_Pct"),h.innerHTML="<span class='Prizm5_Main_Pct_Value'>"+r({units:"pct",decimals:1},o.percentValue)+"</span><br><span class='Prizm5_Main_Pct_Label'>"+_.prtHhLabel+"</span>",d(),n.add(h,"Prizm5_Main_Arrow"),a.create("div",null,h)})},_get3DominantSegementsInfo:function(){for(var e=[],i=this.getValueByName(0,"POD_TOT"),t=0;t<68;t++){var n=c(t),a=this.getValueByName(0,n);if(a){var o=h(t),l=d.LIFE_STYLES[o];e.push({index:t,code:h(t),alias:l.name,fieldName:n,value:a,percentValue:a/i*100,color:d.URBANITY_TO_COLOR[l.urbanity],hhIncome:l.hhIncome,urbanity:l.urbanity,lifeStage:l.lifeStage})}}return e.sort(function(e,i){return i.value-e.value}),e.length=Math.min(e.length,3),e},_toDetailViewForRow:function(e,i){this._openRowIndex===i?(this._openRowIndex=-1,this._toMainView()):(this._openRowIndex=i,this._toDetailView(e,e._info))},_toMainView:function(){for(var e=0;e<this._mainTable.rows.length;e++)n.remove(this._mainTable.rows[e],"clicked");this._detailsTableRow&&(a.destroy(this._detailsTableRow),this._detailsTable=null,this._detailsTableRow=null),this._noSegmentsDiv&&a.destroy(this._noSegmentsDiv),this._noSegmentsDiv=null},_toDetailView:function(e,i){this._toMainView(),n.add(e,"clicked"),this._createDetailsTable(e),this._createDetailedViewExpanded(i)},_createDetailsTable:function(e){this._detailsTableRow=a.create("tr",null,e,"after");var i=a.create("td",{colSpan:"4"},this._detailsTableRow);this._detailsTable=a.create("table",{class:"Prizm5_Details_Table"},i),s.createCols(this._detailsTable,[.5,.5])},_createDetailedViewExpanded:function(e){function i(){c=u.insertRow(-1)}function l(e,i){s("Prizm5_Details_FieldCell");var t=r("Prizm5_Details_FieldCellContent");r("Prizm5_Details_Label",e,t),r("Prizm5_Details_SubLabel",i,t)}function s(e){h=c.insertCell(-1),e&&n.add(h,e)}function r(e,i,t){var n={};return e&&(n.class=e),i&&(n.innerHTML=o.encode(i)),a.create("div",n,t||h)}var c,h,u=this._detailsTable;i(),l(_.hhIncome,e.hhIncome),l(_.urbanity,e.urbanity),i(),l(_.lifeStage,e.lifeStage),i(),s(),h.colSpan=2,r("Prizm5_Details_LinkIcon dijitInline");var m=r("Wizard_Link Prizm5_Details_Link dijitInline",_.viewFullSegmentProfile);t(m,"click",function(){window.open(d.getUrl(e.index),"_blank")})},isDetailedViewOpen:function(){return this._openRowIndex>=0},getOpenDetailedViewRowIndex:function(){return this._openRowIndex},openDetailedViewAt:function(e){this._toDetailViewForRow(this._mainTable.rows[e],e)},collapseContent:function(){this._openRowIndex=-1,this._toMainView()},_showNoSegementsInfo:function(){this._noSegmentsDiv=a.create("div",{class:"esriGEAbsoluteStretched esriGEContentVerticalAlignMiddle Prizm5_noSegmentsDiv",innerHTML:_.noSegmentsFound},this._mainTable,"after")}})});