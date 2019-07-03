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

define(["esri/dijit/geoenrichment/when","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/utils/DataUtil","esri/dijit/geoenrichment/utils/ImageUtil","esri/dijit/geoenrichment/utils/ImageInfoUtil"],function(e,i,t,n,r){return{collectImageResources:function(a,o,s){a&&a.files&&a.files.forEach(function(e){var i=t.getContentType(e.name);i&&"image/"===i.substr(0,6)&&(o[s(e.name)]=n.base64DataToDataURL(e.data,i))});var l=[];for(var u in o)l.push(function(i){return e(r.getImageInfo(o[i],i),null,function(){delete o[i]})}(u));return i(l)}}});