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

define(["require","exports","./MemoryRequirements","./TileBufferData","./TileDisplayData","./Utils","./WGLDisplayList","./WGLDisplayObject","./WGLDisplayRecord","./mesh/VertexBuffer","./mesh/factories/WGLMeshFactory","./util/Reader","./util/serializationUtils","./util/Writer"],function(e,t,r,a,i,s,f,n,l,o,u,v,d,h){function D(e,t){var r={};for(var a in e){var i={data:new Uint32Array(t*e[a]/4),stride:e[a]};r[a]=i}return r}function p(e){return[e.fill||{},e.line||{},e.icon||{},e.text||{},e.label||{}]}var y=new r.default,c=new r.default;return function(){function e(){this.tileDisplayData=null,this.tileBufferData=null}return e.prototype.reshuffle=function(){y.reset();var t=this._collectDisplayRecords();for(var r in t)for(var i=t[r],n=0,l=i;n<l.length;n++){var o=l[n];y.needMore(o.geometryType,o.meshData?o.meshData.vertexCount:o.vertexCount,o.meshData?o.meshData.indexData.length:o.indexCount)}for(var u=t.length,v=new a,r=0;r<u;++r){v.geometries[r].indexBuffer=new Uint32Array(Math.round(1.15*y.indicesFor(r)));var d=[];for(var h in this.tileBufferData.geometries[r].vertexBuffer)d.push(this.tileBufferData.geometries[r].vertexBuffer[h].stride);var D=e._computeVertexAlignment(d),p=Math.round(1.15*y.verticesFor(r)),g=e._align(p,D);for(var m in this.tileBufferData.geometries[r].vertexBuffer){var B=this.tileBufferData.geometries[r].vertexBuffer[m].stride,x=Math.round(g*B/4);v.geometries[r].vertexBuffer[m]={stride:B,data:new Uint32Array(x)}}}c.reset(),this.tileDisplayData.displayList=new f;for(var r=0;r<u;++r){for(var i=t[r],w=0,M=i;w<M.length;w++){var o=M[w];if(o.meshData)o.writeMeshDataToBuffers(c.verticesFor(r),v.geometries[r].vertexBuffer,c.indicesFor(r),v.geometries[r].indexBuffer),o.meshData=null;else{var b=this.tileBufferData.geometries[r].vertexBuffer,L=this.tileBufferData.geometries[r].indexBuffer,T=v.geometries[r].vertexBuffer,F=v.geometries[r].indexBuffer,z=c.verticesFor(r),A=c.indicesFor(r);s.copyMeshData(z,A,T,F,o,b,L),o.vertexFrom=z,o.indexFrom=A}c.needMore(r,o.vertexCount,o.indexCount)}this.tileDisplayData.displayList.addToList(i)}this.tileBufferData=v},e.prototype.getStrides=function(){for(var e=[],t=0;t<this.tileBufferData.geometries.length;++t){var r=this.tileBufferData.geometries[t];e[t]={};for(var a in r.vertexBuffer)e[t][a]=r.vertexBuffer[a].stride}return e},e.prototype._guessSize=function(){for(var e=this.tileDisplayData.displayObjects,t=Math.min(e.length,4),r=0,a=0;a<t;a++)r=Math.max(r,e[a].displayRecords.length);return 2*(12*e.length+e.length*r*40)},e.prototype.serialize=function(){var e=this.tileBufferData.serialize(),t=this.tileBufferData.getBuffers(),r=this.tileDisplayData.serialize(new h.default(Int32Array,this._guessSize())),a=r.buffer();return t.push(a),{result:{displayData:a,bufferData:e},transferList:t}},e.decode=function(t){var r=u.MaterialStore.deserialize(new v.default(t.materialStore)),s=d.deserializeList(new v.default(t.displayObjects),n,{store:r}),f={};for(var l in t.vertexBuffersMap)f[l]=o.VertexBuffers.decode(t.vertexBuffersMap[l]);var h=new e,D=new i,p=new a;D.displayObjects=s;for(var y in f){var c=f[y];p.geometries[y].indexBuffer=c.indexBuffer,p.geometries[y].vertexBuffer=c.namedBuffers}return h.tileDisplayData=D,h.tileBufferData=p,h},e.bind=function(t,r){var a=new e;return a.tileDisplayData=t,a.tileBufferData=r,a},e.create=function(t,r){var s=new e;s.tileDisplayData=new i,s.tileDisplayData.displayObjects=t;for(var f=[0,0,0,0,0],n=[0,0,0,0,0],o=[[],[],[],[],[]],u=0,v=t;u<v.length;u++)for(var d=v[u],h=0,y=d.displayRecords;h<y.length;h++){var c=y[h];o[c.geometryType].push(c),f[c.geometryType]+=c.meshData.vertexCount,n[c.geometryType]+=c.meshData.indexData.length}for(var g=new a,m=p(r),B=0;B<5;B++){var x=new Uint32Array(n[B]),w=D(m[B],f[B]);l.writeAllMeshDataToBuffers(o[B],w,x),g.geometries[B]={indexBuffer:x,vertexBuffer:w}}return s.tileBufferData=g,s},e._align=function(e,t){var r=e%t;return 0===r?e:e+(t-r)},e._computeVertexAlignment=function(e){for(var t=!1,r=!1,a=0,i=e;a<i.length;a++){var s=i[a];s%4==2?t=!0:s%4!=0&&(r=!0)}return r?4:t?2:1},e.prototype._collectDisplayRecords=function(){for(var e=[[],[],[],[],[]],t=this.tileDisplayData.displayObjects,r=0,a=t;r<a.length;r++)for(var i=a[r],s=0,f=i.displayRecords;s<f.length;s++){var n=f[s];e[n.geometryType].push(n)}return e},e}()});