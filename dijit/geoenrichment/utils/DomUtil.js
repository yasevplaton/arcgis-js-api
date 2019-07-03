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

define(["dojo/_base/lang","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","esri/dijit/geoenrichment/Deferred","dojo/domReady!"],function(e,t,n,o,r,i,d){function l(){return s||(s=o.create("div",{class:"esriGEOffscreen"},document.body)),s}var a={};a.isHidden=function(e){return e&&n.contains(e,"esriGEHidden")},a.hasVisibleChildren=function(e){if(!e||!e.children.length)return!1;for(var t=0;t<e.children.length;t++)if(!a.isHidden(e.children[t]))return!0;return!1},a.hide=function(e){return a.addTag(e,"esriGEHidden")},a.show=function(e){return a.removeTag(e,"esriGEHidden")},a.addTag=function(e,t){return a.applyCallback(e,function(e){e&&n.add(e,t)})},a.removeTag=function(e,t){return a.applyCallback(e,function(e){e&&n.remove(e,t)})},a.applyCallback=function(t,n,o){return o&&(n=e.hitch(o,n)),Array.isArray(t)?t.forEach(n):n(t),t},a.getChildIndex=function(e,t){if(!e||!e.children||!t)return-1;for(var n=0;n<e.children.length;n++)if(e.children[n]===t)return n;return-1},a.getChildren=function(e){if(!e||!e.children)return null;for(var t=[],n=0;n<e.children.length;n++)t.push(e.children[n]);return t},a.getChildNodes=function(e){if(!e||!e.childNodes)return null;for(var t=[],n=0;n<e.childNodes.length;n++)t.push(e.childNodes[n]);return t},a.isChildOf=function(e,t,n){var o=!1,r=function(e){if(n&&!n(e))return!1;e.parentNode===t?o=!0:e.parentNode&&r(e.parentNode)};return e&&r(e),o},a.isNodeInLayout=function(e){return a.isChildOf(e,document.body,function(e){return!a.isHidden(e)&&"none"!=i.get(e,"display")&&!n.contains(e,"dijitHidden")})},a.isNodeVisible=function(e){return a.isChildOf(e,document.body,function(e){return!n.contains(e,"dijitHidden")&&"hidden"!=i.get(e,"visibility")})},a.isNodeOnscreen=function(e){return a.isChildOf(e,document.body,function(e){return!n.contains(e,"esriGEOffscreen")})},a.enableContent=function(e,t,d){if(e){d=d||{};var l=e.children.length-1;if(!(l<0)){var a=e.children[l];if(n.contains(a,"esriGEDisabledContent")||(a=null),t)a&&e.removeChild(a);else if(a=a||o.create("div",{class:"esriGEDisabledContent"+(d.overlayClass?" "+d.overlayClass:"")},e),!1!==d.fitParent){var s=r[d.marginBox?"getMarginBox":"getContentBox"](e).h;s&&(s=s.toString()+"px",i.set(a,{height:s,marginTop:"-"+s}))}return a}}},a.enableContentAbsolute=function(e,t,n){if(e){n=n||{};var o=i.get(e,"position");return"relative"!==o&&"absolute"!==o&&i.set(e,"position","relative"),a.enableContent(e,t,{overlayClass:"esriGEAbsoluteStretched "+(n.overlayClass||"")+(n.isTransparent?" esriGEDisabledContentTransparent ":""),fitParent:!1})}};var s;a.hideNodeInBackground=function(e,n){if(e){if(e._hideNodeInBackgroundUndoController)return e._hideNodeInBackgroundUndoController;var r=o.create("div",null,e,"after"),i=o.create("div",{style:"position: absolute; left: 0px; top: 0px;"},l());o.place(e,i);var d="DomUtil.hideNodeInBackground"+(n?"."+n:"");t.set(r,"_bg_memo_node",d),t.set(i,"_bg_temp_node",d);var a={undo:function(){r&&(r.parentNode&&o.place(e,r,"replace"),o.destroy(r),o.destroy(i),s.children.length||(o.destroy(s),s=null),r=null,delete e._hideNodeInBackgroundUndoController)},remove:function(){this.undo()}};return e._hideNodeInBackgroundUndoController=a,a}},a.showNodeFromBackground=function(e){e&&e._hideNodeInBackgroundUndoController&&e._hideNodeInBackgroundUndoController.undo()},a.noTransformPosition=function(e){function t(e){for(var t={x:0,y:0},n=e;n.offsetParent;)t.x+=n.offsetLeft,t.y+=n.offsetTop,n=n.offsetParent,t.x+=i.get(n,"borderLeftWidth"),t.y+=i.get(n,"borderTopWidth");return t}if(e){var n;if(e instanceof SVGElement&&e.getBBox){var o=e.ownerSVGElement&&e.ownerSVGElement.parentNode;n=o&&t(o);var r=e.getBBox();return{x:(r.x||0)+n.x,y:(r.y||0)+n.y,w:r.width||0,h:r.height||0}}return n=t(e),{x:n.x,y:n.y,w:function(e){return i.get(e,"width")+i.get(e,"paddingLeft")+i.get(e,"paddingRight")+i.get(e,"borderLeftWidth")+i.get(e,"borderRightWidth")}(e),h:function(e){return i.get(e,"height")+i.get(e,"paddingTop")+i.get(e,"paddingBottom")+i.get(e,"borderTopWidth")+i.get(e,"borderBottomWidth")}(e)}}},a.uniteNodeBoxes=function(e,t){var n=1e6,o=1e6,r=-1e6,i=-1e6;e.forEach(function(e){var t=a.noTransformPosition(e);n=Math.min(n,t.x),o=Math.min(o,t.y),r=Math.max(r,t.x+t.w),i=Math.max(i,t.y+t.h)});var d={x:n,y:o,w:r-n,h:i-o};if(t){var l=a.noTransformPosition(t);d.x-=l.x,d.y-=l.y}return d},a.getNodesBox=function(e,t){var n=1e6,o=-1e6,i=1e6,d=-1e6;return e.forEach(function(e){var l=t&&t.ignoreTranformation?a.noTransformPosition(e):r.position(e);n=Math.min(n,l.x),i=Math.min(i,l.y),o=Math.max(o,l.x+l.w),d=Math.max(d,l.y+l.h)}),{x:n,y:i,w:o-n,h:d-i}},a.traverseChildren=function(e,t){function n(e){if(e&&e.children)for(var o=0;o<e.children.length;o++){var r=e.children[o];if(t(r))return;n(r)}}n(e)},a.scrollToListNode=function(e,t,n){var o=t.offsetTop+t.clientHeight,r=e.scrollTop+e.clientHeight,i=o-r;i>0&&(e.scrollTop+=i),n&&(o-=t.clientHeight-n.offsetTop,(i=e.scrollTop-o)>0&&(e.scrollTop-=i))};var u;return a.getScrollbarSize=function(){if(!u){var e=o.create("div",null,document.body);e.style.width="100px",e.style.height="100px",e.style.overflow="scroll",e.style.position="absolute",e.style.top="9999px",u={w:e.offsetWidth-e.clientWidth,h:e.offsetHeight-e.clientHeight},o.destroy(e)}return u},a.hasScrollbars=function(e){var t=i.getComputedStyle(e);return{w:"scroll"===t.overflowX||e.offsetWidth>e.clientWidth&&"auto"===t.overflowX,h:"scroll"===t.overflowY||e.offsetHeight>e.clientHeight&&"auto"===t.overflowY}},a.getMeasureContext=function(e){return e=e||{},e.style=e.style?e.style+" ":"",e.style+="display: inline-block; position: absolute; left: 0; top: 0;",{div:o.create("div",e,document.body),measureText:function(e){this.div.innerHTML=e;var t=r.getMarginBox(this.div);return delete t.l,delete t.t,t},destroy:function(){o.destroy(this.div)}}},a.getTextBox=function(e,t){var n=a.getMeasureContext(t),o=n.measureText(e);return n.destroy(),o},a.stealFocus=function(){var e=new d;try{var t=o.create("input",{type:"text",style:"position: absolute; left: 0px; top: 0px;"});o.place(t,document.body),t.select(),o.destroy(t)}catch(e){}return setTimeout(e.resolve,0),e.promise},a.getWindowBox=function(){for(var e=[],t=0,n=document.body.children.length;t<n;t++){var o=document.body.children[t];a.isHidden(o)||(a.hide(o),e.push(o))}var r={w:document.body.clientWidth,h:document.body.clientHeight};return e.forEach(function(e){a.show(e)}),r},a.getBorder=function(e){return{t:i.toPixelValue(e,i.get(e,"borderTopWidth")),r:i.toPixelValue(e,i.get(e,"borderRightWidth")),b:i.toPixelValue(e,i.get(e,"borderBottomWidth")),l:i.toPixelValue(e,i.get(e,"borderLeftWidth"))}},a});