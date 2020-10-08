// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../geometry","../../../core/arrayUtils","../../../core/Error","../../../core/maybe","../../../core/promiseUtils","../../../core/accessorSupport/decorators","../DimensionalDefinition","../wmsUtils","./BaseRaster","./multipartParser","./wcsCapabilitiesParser","./wcsCoverageParser","../rasterFunctions/pixelUtils"],(function(e,t,i,r,n,o,s,a,u,c,l,p,d,f,h,v){"use strict";var g=["nearest neighbor","bilinear","bicubic"],m=["nearest","linear","cubic"],w=["nearest-neighbor","linear","cubic"];return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.datasetFormat="WCSServer",t}return i.__extends(t,e),t.prototype.open=function(e){var t;return i.__awaiter(this,void 0,void 0,(function(){var r,s,a,u,c,l,p,d,f,v=this;return i.__generator(this,(function(i){switch(i.label){case 0:return[4,this.init()];case 1:return i.sent(),r=null==e?void 0:e.signal,[4,this._getCapabilities(r)];case 2:if(s=i.sent(),this.capabilities=s,this.version||("2.0"===(a=null===(t=s.capabilitiesVersion)||void 0===t?void 0:t.slice(0,3))||"1.1"===a||"1.0"===a?this.version=s.capabilitiesVersion:(a=n.find(s.supportedVersions,(function(e){return"2.0.1"===e}))||n.find(s.supportedVersions,(function(e){return"2.0"===e.slice(0,3)}))||n.find(s.supportedVersions,(function(e){return"1.1"===e.slice(0,3)}))||n.find(s.supportedVersions,(function(e){return"1.0"===e.slice(0,3)}))||"1.0.0",this.version=a)),this.coverageId||(this.coverageId=s.coverages[0].id),null==(u=s.coverages.filter((function(e){return e.id===v.coverageId}))[0]))throw new o("wcsraster-open","the coverageId "+this.coverageId+" does not exist in capabilities");return[4,this._describeCoverage(r)];case 3:return c=i.sent(),this.coverageInfo=c[0],"2.0"===this.version.slice(0,3)&&(this.coverageInfo.lonLatEnvelope=u.lonLatEnvelope,this.coverageInfo.supportedInterpolations=h.standardizeInterpolations(s.supportedInterpolations)),this.datasetName=this.coverageInfo.title,l=this.coverageInfo.rasterInfo,this.createRemoteDatasetStorageInfo(l,512,512),this._set("rasterInfo",l),[4,this._getPixelTypeAndBandCount(r)];case 4:return p=i.sent(),d=p.pixelType,f=p.bandCount,l.pixelType=d,1===l.bandCount&&f>1&&(l.bandCount=f),this.updateTileInfo(),[2]}}))}))},t.prototype.fetchRawTile=function(e,t,n,s){return void 0===s&&(s={}),i.__awaiter(this,void 0,void 0,(function(){var a,u,c,l,p,d,f,h,g,m,w,x,y,b;return i.__generator(this,(function(i){switch(i.label){case 0:return a=this.rasterInfo.storageInfo,u=a.tileInfo,c=a.maximumPyramidLevel,l=u.lodAt(Math.max(c-e,0)),p=new r.Point({x:l.resolution,y:l.resolution,spatialReference:u.spatialReference}),d=this.getTileExtent(p,t,n,u),f=u.size,h=f[0],g=f[1],m=this.rasterInfo.extent,w=d.xmax>m.xmax||d.ymin<m.ymin,x=d,w&&(x=d.clone().intersection(m),h=Math.floor((x.xmax-x.xmin)/l.resolution),g=Math.floor((x.ymax-x.ymin)/l.resolution)),h<=1||g<=1?[2,null]:[4,this._getCoverage(x,h,g,s)];case 1:return(y=i.sent())?[4,this.decodePixelBlock(y,{width:h,height:g,planes:null,pixelType:null})]:[2,null];case 2:if((b=i.sent())&&(b.width!==h||b.height!==g))throw new o("wcsraster-fetch","the reponse has unexpected dimension width: "+b.width+", height: {pixelBlock.height}");return w&&(b=v.clip(b,{x:0,y:0},{width:u.size[0],height:u.size[1]})),[2,b]}}))}))},t.prototype._getCapabilities=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,r,n;return i.__generator(this,(function(i){switch(i.label){case 0:t={service:"WCS",request:"GetCapabilities"},this.version&&(t.version=this.version,t.acceptVersions=this.version),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.request(this.url,{query:t,responseType:"xml",signal:e})];case 2:return r=i.sent().data,[2,f.parseCapabilities(r)];case 3:if(n=i.sent(),!a.isAbortError(n))throw new o("wcslayer:open","wcs capabilities is not valid or supported");throw n;case 4:return[2]}}))}))},t.prototype._describeCoverage=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,r,n,s;return i.__generator(this,(function(i){switch(i.label){case 0:t={service:"WCS",request:"DescribeCoverage",version:this.version},"1.0"===(r=this.version.slice(0,3))?t.coverage=this.coverageId:"1.1"===r?t.identifiers=this.coverageId:"2.0"===r&&(t.coverageId=this.coverageId),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this.request(this.url,{query:t,responseType:"xml",signal:e})];case 2:return n=i.sent().data,[2,h.parseCoverages(n,this.version)];case 3:if(s=i.sent(),!a.isAbortError(s))throw new o("wcslayer:open","wcs coverage description is not valid or supported");throw s;case 4:return[2]}}))}))},t.prototype._getPixelTypeAndBandCount=function(e){return i.__awaiter(this,void 0,void 0,(function(){var t,n,a,u,l,p,d,f,h,v;return i.__generator(this,(function(i){switch(i.label){case 0:return t=this.rasterInfo,n=t.pixelSize,a=t.extent,u=t.multidimensionalInfo,l=a.center,p=new r.Extent({xmin:l.x-n.x,xmax:l.x+n.x,ymin:l.y-n.y,ymax:l.y+n.y,spatialReference:a.spatialReference}),s.isSome(u)&&(f=u.variables[0],d=[],f.dimensions.forEach((function(e){d.push(new c({variableName:f.name,dimensionName:e.name,values:e.hasRegularIntervals?e.extent[0]:e.values[0],isSlice:!0}))}))),[4,this._getCoverage(p,2,2,{multidimensionalDefinition:d,signal:s.unwrap(e)})];case 1:if(!(h=i.sent()))throw new o("wcsraster-open","unable to determine pixel type");return[4,this.decodePixelBlock(h,{width:2,height:2,planes:null,pixelType:null})];case 2:return[2,{pixelType:(v=i.sent()).pixelType,bandCount:v.getPlaneCount()}]}}))}))},t.prototype._getCoverage=function(e,t,r,n){return i.__awaiter(this,void 0,void 0,(function(){var s,a,u,c,l;return i.__generator(this,(function(i){switch(i.label){case 0:return s=this.coverageInfo.coverageDescription,a=s.version,u="2.0"===s.version?this._getCoverage201Parameters(e,t,r,n,s):"1.1"===s.version?this._getCoverage110Parameters(e,t,r,n,s):this._getCoverage100Parameters(e,t,r,n),[4,this.request(this.url,{query:u,signal:n.signal,responseType:"array-buffer"})];case 1:if(c=i.sent(),"1.0"===a)return[2,c.data];if((l=d.parse(c)).isMultipart)return[2,l.data.filter((function(e){var t;return(null===(t=e.contentType)||void 0===t?void 0:t.toLowerCase().indexOf("image"))>-1}))[0].contentData];throw new o("wcsraster:getcoverage","response is not a valid coverage")}}))}))},t.prototype._getInterpolationIndex=function(e){return-1===this.coverageInfo.supportedInterpolations.indexOf(e)?0:"nearest"===e?0:"bilinear"===e?1:"cubic"===e?2:0},t.prototype._getCoverage100Parameters=function(e,t,i,r){var o=this,s=e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,a=e.spatialReference.wkid,u=n.find(this.coverageInfo.supportedFormats||[],(function(e){return e.toLowerCase().indexOf("tiff")>-1}))||"GEOTIFF",c=r.bandIds,l=r.interpolation,p=this._getInterpolationIndex(l),d=c?c.map((function(e){return o.coverageInfo.bandNames[e]})):null,f=g[p];return{service:"WCS",request:"GetCoverage",version:this.version,coverage:this.coverageId,format:u,crs:"EPSG:"+a,bbox:s,width:t,height:i,interpolation:f,band:null==d?void 0:d.join(",")}},t.prototype._getCoverage110Parameters=function(e,t,i,r,o){var s,a=this,u=r.multidimensionalDefinition,c=r.bandIds,p=r.interpolation,d=e.spatialReference.wkid,f="urn:ogc:def:crs:EPSG::"+d,h=n.find(this.coverageInfo.supportedFormats||[],(function(e){return e.toLowerCase().indexOf("tiff")>-1}))||"image/tiff",v=this._getInterpolationIndex(p),g=m[v],w=o.domain.spatialDomain,x=w.origin.x<=w.envelope.xmin&&w.origin.y<=w.envelope.ymin,y=e.width/t,b=e.height/i*(x?1:-1),I=x?[e.xmin,e.ymin]:[e.xmin,e.ymax],_=w.useEPSGAxis&&l.coordsReversed(d),C=_?I[1]+","+I[0]:I[0]+","+I[1],S=_?b+",0,0,"+y:y+",0,0,"+b,T=y/2,O=e.xmin+T,P=e.xmax-T,E=Math.abs(b)/2,L=e.ymin+E,q=e.ymax-E,G=_?L+","+O+","+q+","+P+","+f:O+","+L+","+P+","+q+","+f,R=o.range.filter((function(e){return e.axis.some((function(e){return e.identifier.toLowerCase().indexOf("band")>-1}))}))[0],D=R&&g&&c?R.identifier+":"+g+"["+R.axis[0].identifier+"["+c.join(",")+"]]":null;if(u)for(var j=function(e){var t=u[e].values,i=u[e].dimensionName.toLowerCase(),r=u[e].variableName.toLowerCase();if(t.length>0)if(t[0]instanceof Array&&(t=t[0]),"stdtime"===i)s=t.map((function(e){return a._convertToISOTime(e)})).join(",");else{var n=o.range.filter((function(e){return e.identifier.toLowerCase()===r}))[0];if(n){var c=n.axis.filter((function(e){return e.identifier.toLowerCase()===i}))[0];c&&(D=n.identifier+":"+g+"["+c.identifier+"["+t.join(",")+"]]")}}},A=0;A<u.length;A++)j(A);return{service:"WCS",request:"GetCoverage",version:this.version,identifier:this.coverageId,format:h,crs:"EPSG:"+d,boundingbox:G,gridCS:"urn:ogc:def:cs:OGC:0.0:Grid2dSquareCS",gridType:"urn:ogc:def:method:WCS:1.1:2dGridIn2dCrs",gridOrigin:C,gridOffsets:S,gridBaseCRS:f,timeSequence:s,rangeSubset:D}},t.prototype._convertToISOTime=function(e,t){return void 0===t&&(t=!1),(t?new Date(24*(e-25569)*60*60*1e3):new Date(e)).toISOString()},t.prototype._getCoverage201Parameters=function(e,t,i,r,o){var s=this,a=r.multidimensionalDefinition,u=r.interpolation,c=this._getInterpolationIndex(u),l="http://www.opengis.net/def/interpolation/OGC/1/"+w[c],p=n.find(this.coverageInfo.supportedFormats||[],(function(e){return e.toLowerCase().indexOf("tiff")>-1}))||"image/tiff",d=this.coverageInfo.bandNames,f=o.boundedBy,h=o.domainSet,v=o.rangeType,g=f.isEastFirst?0:1,m=1-g,x=h.axisLabels,y=x[g],b=x[m],I="http://www.opengis.net/def/crs/EPSG/0/"+e.spatialReference.wkid,_=[];_.push(y+","+I+"("+e.xmin+","+e.xmax+")"),_.push(b+","+I+"("+e.ymin+","+e.ymax+")");var C=[];if(x.length>2)for(var S=2;S<x.length;S++){var T=h.origin[S];if(x[S].toLowerCase().indexOf("time")>-1){var O=T.toString();f.uomLabels[S].toLowerCase().indexOf("ole")>-1&&(C.push(x[S]),O=this._convertToISOTime(T,!0)),_.push(x[S]+",http://www.opengis.net("+O+")")}else _.push(x[S]+",http://www.opengis.net("+T+")")}var P=null;if(a){var E=[];v.forEach((function(e){return e.forEach((function(e){return E.push(e.name)}))}));var L=[],q=function(e){var t=n.find(x,(function(t){return t===a[e].dimensionName})),i=n.find(E,(function(t){return t===a[e].variableName}));if(-1===L.indexOf(i)&&L.push(i),t){var r=a[e].values;if(r.length>0){Array.isArray(r[0])&&(r=r[0]);var o="";o=t.toLowerCase().indexOf("time")>-1?r.map((function(e){return s._convertToISOTime(e)})).join(","):r.join(",");var u=n.findIndex(_,(function(e){return 0===e.indexOf(t+",http://www.opengis.net")}));-1===u&&_.push(t+",http://www.opengis.net("+o+")"),-1!==u&&-1===_[u].indexOf("("+o+")")&&_.splice(u,1,t+",http://www.opengis.net("+o+")")}}};for(S=0;S<a.length;S++)q(S);L.length&&(P=L.join(","))}else if(null==d?void 0:d.length){P=(r.bandIds?r.bandIds.map((function(e){return d[e]})):d).join(",")}var G=_.join("&subset="),R=y+"("+t+"),"+b+"("+i+")";return{service:"WCS",request:"GetCoverage",version:this.version,coverageId:this.coverageId,rangesubset:P,interpolation:l,scaleSize:R,subset:G,format:p,outputcrs:I}},i.__decorate([u.property({type:String,json:{write:!0}})],t.prototype,"datasetFormat",void 0),i.__decorate([u.property()],t.prototype,"tileType",void 0),i.__decorate([u.property({type:String,json:{write:!0}})],t.prototype,"version",void 0),i.__decorate([u.property({type:String,json:{write:!0}})],t.prototype,"coverageId",void 0),t=i.__decorate([u.subclass("esri.layers.support.rasterDatasets.ImageServerRaster")],t)}(p)}));