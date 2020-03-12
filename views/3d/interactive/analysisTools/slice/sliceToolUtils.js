// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/decorateHelper","../../../../../core/compilerUtils","../../../../../core/maybe","../../../../../core/screenUtils","../../../../../core/libs/gl-matrix-2/mat4","../../../../../core/libs/gl-matrix-2/mat4f64","../../../../../core/libs/gl-matrix-2/quat","../../../../../core/libs/gl-matrix-2/vec3","../../../../../core/libs/gl-matrix-2/vec3f64","../../manipulatorUtils","./sliceToolConfig","../../../support/geometryUtils","../../../support/stack","../../../webgl-engine/lib/Geometry","../../../webgl-engine/lib/GeometryUtil","../../../webgl-engine/materials/ColorMaterial","../../../webgl-engine/materials/NativeLineMaterial","../../../webgl-engine/materials/RibbonLineMaterial","../../../webgl-engine/materials/SlicePlaneMaterial","../../../../interactive/Manipulator3D"],function(e,t,a,r,i,n,o,s,c,l,d,v,u,g,m,R,_,T,p,f,E,I){function A(e,t,a,r,i,n,o,s,c){return b(t,s.worldUpAtPosition(e,m.sv3d.get()),n,o,c.basis1,c.basis2),l.vec3.scale(c.basis1,c.basis1,r),l.vec3.scale(c.basis2,c.basis2,i),l.vec3.copy(c.origin,t),l.vec3.scale(c.origin,c.origin,-a),l.vec3.add(c.origin,c.origin,e),g.boundedPlane.fromValues(c.origin,c.basis1,c.basis2,c)}function b(e,t,a,n,o,s){var c=t,d=l.vec3.dot(e,c),v=Math.abs(d)>u.VERTICAL_DOT_THRESHOLD?"vertical":"horizontal",g=m.sv3d.get(),R=m.sv3d.get(),_=function(){l.vec3.cross(g,c,a.viewUp),l.vec3.cross(R,c,g)},T=function(e){l.vec3.cross(R,e,c),l.vec3.copy(g,c)};if(i.isSome(n)&&n!==v)switch(n){case"vertical":_();break;case"horizontal":T(a.viewUp);break;default:r.neverReached(n)}else switch(v){case"vertical":_();break;case"horizontal":T(e);break;default:r.neverReached(v)}var p=l.vec3.cross(m.sv3d.get(),g,R);l.vec3.dot(p,a.viewForward)>0&&l.vec3.scale(R,R,-1),l.vec3.normalize(o,g),l.vec3.normalize(s,R)}function S(e,t,a,r,i,n){var o=l.vec3.copy(m.sv3d.get(),i.origin);l.vec3.add(o,o,l.vec3.scale(m.sv3d.get(),i.basis1,e.direction[0]<0?1:-1)),l.vec3.add(o,o,l.vec3.scale(m.sv3d.get(),i.basis2,e.direction[1]<0?1:-1));var s=l.vec3.length(i.basis1),c=l.vec3.length(i.basis2),d=l.vec3.subtract(m.sv3d.get(),a,o),v=l.vec3.subtract(m.sv3d.get(),t,o),R=0,_=0;if(G(e)){var T=C(i),p=C(n);R=s-.5*e.direction[0]*l.vec3.dot(i.basis1,v)/s,_=c-.5*e.direction[1]*l.vec3.dot(i.basis2,v)/c;var f=p/T;R*=f,_*=f}var E=.5*e.direction[0]*l.vec3.dot(i.basis1,d)/s,I=.5*e.direction[1]*l.vec3.dot(i.basis2,d)/c,A=R+E,b=_+I,S=l.vec3.scale(m.sv3d.get(),i.basis1,A/s),h=l.vec3.scale(m.sv3d.get(),i.basis2,b/c);(A<=0||F(n.origin,S,r)<=u.PLANE_MIN_BASIS_SCREEN_LEN2)&&l.vec3.copy(S,n.basis1),(b<=0||F(n.origin,h,r)<=u.PLANE_MIN_BASIS_SCREEN_LEN2)&&l.vec3.copy(h,n.basis2);var O=l.vec3.copy(m.sv3d.get(),o);return l.vec3.add(O,O,l.vec3.scale(m.sv3d.get(),S,e.direction[0]<0?-1:1)),l.vec3.add(O,O,l.vec3.scale(m.sv3d.get(),h,e.direction[1]<0?-1:1)),g.boundedPlane.fromValues(O,S,h,n)}function h(e,t){return u.INITIAL_PLANE_HALF_SIZE_VIEW_PROPORTION*Math.min(t.width,t.height)*t.computeRenderPixelSizeAt(e)}function O(e,t,a,r){var i=l.vec3.cross(m.sv3d.get(),t,a);return l.vec3.cross(i,i,t),g.plane.fromPositionAndNormal(e,i,r)}function y(e,t){return v.calculateTranslateRotateFromBases(e.basis1,e.basis2,e.origin,t)}function P(e,t,a){var r=t.worldUpAtPosition(e.origin,m.sv3d.get()),i=q(e,r),n=N(r,e),o=l.vec3.copy(m.sv3d.get(),i?1===n?e.basis1:e.basis2:e.plane);return g.plane.fromPositionAndNormal(e.origin,o,a)}function D(e,t,a,r,i){var s=r.worldUpAtPosition(a.origin,m.sv3d.get()),c=q(a,s),v=N(s,a),R=H(a),_=c&&2!==v?R.basis2Positive:R.basis1Positive,T=m.sm4d.get();o.mat4.rotateZ(T,t,_.rotationIdx*Math.PI/2);var p=l.vec3.subtract(m.sv3d.get(),_.position,a.origin);l.vec3.normalize(p,p);var f=l.vec3.scale(m.sv3d.get(),p,i.computeScreenPixelSizeAt(_.position)*u.SHIFT_RESTART_OFFSET_DISTANCE);l.vec3.add(f,f,_.position);var E=i.projectPoint(f,n.castRenderScreenPointArray3(m.sv3d.get())),I=M(i,E);g.ray.fromRender(i,E,X),l.vec3.normalize(X.direction,X.direction);var A=m.sv3d.get();!I&&g.boundedPlane.intersectRay(a,X,A)&&(f=A),T[12]=0,T[13]=0,T[14]=0,e.modelTransform=T,e.position=d.vec3f64.clone(f),I?e.state|=K:e.state&=~K}function M(e,t){var a=e.viewport,r=a[0],i=a[1],n=a[2],o=a[3],s=Math.min(n,o)/16,c=!0;return t[0]<r+s?(t[0]=r+s,c=!1):t[0]>r+n-s&&(t[0]=r+n-s,c=!1),t[1]<i+s?(t[1]=i+s,c=!1):t[1]>i+o-s&&(t[1]=i+o-s,c=!1),c}function w(e,t,a,r){var i=l.vec3.length(r.basis1),n=l.vec3.length(r.basis2),s=U(r),c=C(r),d=l.vec3.set(m.sv3d.get(),0,0,0);l.vec3.add(d,l.vec3.scale(m.sv3d.get(),r.basis1,t.direction[0]),l.vec3.scale(m.sv3d.get(),r.basis2,t.direction[1])),l.vec3.add(d,r.origin,d);var v=0,u=1;if(G(t))1===t.direction[0]&&-1===t.direction[1]?v=Math.PI/2:1===t.direction[0]&&1===t.direction[1]?v=Math.PI:-1===t.direction[0]&&1===t.direction[1]&&(v=3*Math.PI/2),u=c;else{var g=0!==t.direction[0]?1:2,R=1===g?n:i;v=1===g?Math.PI/2:0,u=R-s}var _=o.mat4.identity(m.sm4d.get());o.mat4.rotateZ(_,_,v),o.mat4.scale(_,_,l.vec3.set(m.sv3d.get(),u,u,u)),o.mat4.multiply(_,a,_),_[12]=0,_[13]=0,_[14]=0,e.modelTransform=_,e.position=d}function L(e,t,a,r){var i=r.worldUpAtPosition(a.origin,m.sv3d.get()),n=q(a,i),s=N(i,a),c=H(a),l=n&&2!==s?c.basis2Negative:c.basis1Negative,d=o.mat4.identity(m.sm4d.get());o.mat4.rotateZ(d,d,l.rotationIdx*Math.PI/2),n&&o.mat4.rotateX(d,d,Math.PI/2),o.mat4.multiply(d,t,d),d[12]=0,d[13]=0,d[14]=0,e.modelTransform=d,e.position=l.position}function N(e,t){return Math.abs(l.vec3.dot(t.basis1,e))>Math.abs(l.vec3.dot(t.basis2,e))?1:2}function H(e){return{basis1Positive:{position:l.vec3.add(m.sv3d.get(),e.origin,e.basis1),rotationIdx:0},basis2Positive:{position:l.vec3.add(m.sv3d.get(),e.origin,e.basis2),rotationIdx:1},basis1Negative:{position:l.vec3.subtract(m.sv3d.get(),e.origin,e.basis1),rotationIdx:2},basis2Negative:{position:l.vec3.subtract(m.sv3d.get(),e.origin,e.basis2),rotationIdx:3}}}function F(e,t,a){var r=a.projectPoint(l.vec3.add(m.sv3d.get(),e,t),n.castRenderScreenPointArray3(m.sv3d.get())),i=a.projectPoint(l.vec3.subtract(m.sv3d.get(),e,t),n.castRenderScreenPointArray3(m.sv3d.get()));return l.vec3.squaredLength(l.vec3.subtract(r,r,i))}function U(e){var t=l.vec3.length(e.basis1),a=l.vec3.length(e.basis2);return u.RESIZE_HANDLE_EDGE_PADDING_FRAC*Math.min(t,a)}function C(e){return U(e)}function G(e){return 0!==e.direction[0]&&0!==e.direction[1]}function k(e){var a=[d.vec3f64.fromValues(0,0,-u.SHIFT_RESTART_ARROW_LENGTH/2),d.vec3f64.fromValues(0,0,u.SHIFT_RESTART_ARROW_LENGTH/2)],r=Z(a,!0),i=function(e,t){return W(a,a,{tubeRadius:u.SHIFT_RESTART_TUBE_RADIUS,tipRadius:u.SHIFT_RESTART_TIP_RADIUS,tipLength:u.SHIFT_RESTART_TIP_LENGTH,tubeFocusMultiplier:u.SHIFT_RESTART_TUBE_FOCUS_MULTIPLIER,tipFocusMultiplier:u.SHIFT_RESTART_TIP_FOCUS_MULTIPLIER,padding:e,bothEnds:!0,flat:null,focusTipLength:!0,addCap:t})},n=i(0,!1),o=i(u.SHIFT_RESTART_ARROW_OUTLINE_WIDTH,!0),s=new T({color:u.SHIFT_RESTART_ARROW_TIP_COLOR,cullFace:2},"slice-shift");s.renderOccluded=8;var c=new T({color:u.SHIFT_RESTART_ARROW_CAP_COLOR,cullFace:2},"slice-shift");c.renderOccluded=8;var l=new T({color:u.SHIFT_RESTART_TUBE_COLOR,cullFace:2},"slice-shift");l.renderOccluded=8;var v=new T({color:u.SHIFT_RESTART_OUTLINE_COLOR,transparent:!0,writeDepth:!1,cullFace:1},"slice-shift");v.renderOccluded=2;var g=new R(_.createPolylineGeometry([[0,0,0],[-u.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]),"slice-rotate-heading"),m=new R(_.createPolylineGeometry([[0,0,0],[-u.SHIFT_RESTART_OFFSET_DISTANCE,0,0]]),"slice-rotate-heading"),f=new p({color:u.SHIFT_RESTART_CALLOUT_COLOR},"slice-rotate-heading");return f.renderOccluded=4,new I.Manipulator3D({view:e,renderObjects:n.normal.map(function(e){var a=e.part,r=e.geometry,i=e.transform;return{geometry:r,material:"tip"===a?s:"cap"===a?c:l,transform:i,stateMask:1|t.DidPointerMoveRecentlyFlag}}).concat(o.normal.map(function(e){var a=e.geometry,r=e.transform;return{geometry:a,material:v,transform:r,stateMask:1|t.DidPointerMoveRecentlyFlag}}),[{geometry:g,material:f,stateMask:1|t.DidPointerMoveRecentlyFlag|K}],n.focused.map(function(e){var a=e.part,r=e.geometry,i=e.transform;return{geometry:r,material:"tip"===a?s:"cap"===a?c:l,transform:i,stateMask:2|t.DidPointerMoveRecentlyFlag}}),o.focused.map(function(e){var a=e.geometry,r=e.transform;return{geometry:a,material:v,transform:r,stateMask:2|t.DidPointerMoveRecentlyFlag}}),[{geometry:m,material:f,stateMask:2|t.DidPointerMoveRecentlyFlag|K}]),autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[r]},collisionPriority:1,radius:u.SHIFT_RESTART_TIP_RADIUS,snapToPointer:!1,moveOnDrag:!1,state:t.DidPointerMoveRecentlyFlag})}function z(e){var a=.1*Math.PI,r=1.7*Math.PI,i=u.ROTATE_HEADING_DISC_RADIUS,n=i*u.ROTATE_HEADING_DISC_RADIUS_FOCUS_MULTIPLIER,o=u.ROTATE_HEADING_DISC_ARROW_RADIUS,s=u.ROTATE_HEADING_DISC_ARROW_RADIUS*u.ROTATE_HEADING_DISC_RADIUS_FOCUS_MULTIPLIER,c=u.ROTATE_HEADING_OFFSET_DISTANCE,l=function(e){for(var t=[],i=0;i<32;i++){var n=Math.PI+a+(r-a)*i/31;t.push(d.vec3f64.fromValues(c+e*Math.cos(n),e*Math.sin(n),0))}return t},v=l(o),g=l(s),m=Z(v,!1),f=W(v,g,{tubeRadius:u.ROTATE_HEADING_TUBE_RADIUS,tipRadius:u.ROTATE_HEADING_TIP_RADIUS,tipLength:u.ROTATE_HEADING_TIP_LENGTH,tubeFocusMultiplier:u.ROTATE_HEADING_TUBE_FOCUS_MULTIPLIER,tipFocusMultiplier:u.ROTATE_HEADING_TIP_FOCUS_MULTIPLIER,padding:0,bothEnds:!1,flat:{thickness:2},focusTipLength:!0,addCap:!0}),E=new T({color:u.ROTATE_HEADING_ARROW_COLOR,cullFace:2},"slice-rotate-heading");E.renderOccluded=8;var A=new R(_.createPolylineGeometry([[0,0,0],[c-i,0,0]]),"slice-rotate-heading"),b=new R(_.createPolylineGeometry([[0,0,0],[c-n,0,0]]),"slice-rotate-heading"),S=new p({color:u.ROTATE_HEADING_CALLOUT_COLOR},"slice-rotate-heading");S.renderOccluded=4;var h=d.vec3f64.fromValues(0,0,1),O=d.vec3f64.fromValues(c,0,0),y=new R(_.createCylinderGeometry(1,i,32,h,O),"slice-rotate-heading"),P=new R(_.createCylinderGeometry(1,n,32,h,O),"slice-rotate-heading"),D=new T({color:u.ROTATE_HEADING_DISC_COLOR,transparent:!0,writeDepth:!1,cullFace:2},"slice-rotate-heading");return D.renderOccluded=8,new I.Manipulator3D({view:e,renderObjects:f.normal.map(function(e){var a=e.geometry,r=e.transform;return{geometry:a,material:E,transform:r,stateMask:1|t.DidPointerMoveRecentlyFlag}}).concat([{geometry:y,material:D,stateMask:1|t.DidPointerMoveRecentlyFlag},{geometry:A,material:S,stateMask:1|t.DidPointerMoveRecentlyFlag}],f.focused.map(function(e){var a=e.geometry,r=e.transform;return{geometry:a,material:E,transform:r,stateMask:2|t.DidPointerMoveRecentlyFlag}}),[{geometry:P,material:D,stateMask:2|t.DidPointerMoveRecentlyFlag},{geometry:b,material:S,stateMask:2|t.DidPointerMoveRecentlyFlag}]),autoScaleRenderObjects:!1,collisionType:{type:"line",paths:[m]},collisionPriority:1,radius:u.ROTATE_HEADING_TIP_RADIUS,snapToPointer:!1,moveOnDrag:!1,state:t.DidPointerMoveRecentlyFlag})}function x(e){var t=[[-1,-1,0],[1,-1,0],[1,1,0],[-1,1,0],[-1,-1,0]],a=new R(_.createPolylineGeometry(t),"slice-outline"),r=u.PLANE_OUTLINE_COLOR.slice(),i=new f({color:r,writeDepth:!1,width:u.PLANE_OUTLINE_WIDTH},"slice-outline");return i.renderOccluded=4,{manipulator:new I.Manipulator3D({view:e,renderObjects:[{geometry:a,material:i}],interactive:!1,autoScaleRenderObjects:!1,worldSized:!0}),material:i}}function j(e){var t=new R(_.createSquareGeometry(),"slice-grid"),a=u.PLANE_BACKGROUND_COLOR.slice(),r=new E({backgroundColor:a,gridColor:u.GRID_COLOR,gridWidth:4},"slice-grid");return r.renderOccluded=4,{manipulator:new I.Manipulator3D({view:e,renderObjects:[{geometry:t,material:r}],interactive:!1,autoScaleRenderObjects:!1,worldSized:!0}),material:r}}function V(e,t){var a=G(t),r=a?[d.vec3f64.fromValues(1,0,0),d.vec3f64.fromValues(0,0,0),d.vec3f64.fromValues(0,1,0)]:[d.vec3f64.fromValues(1,0,0),d.vec3f64.fromValues(-1,0,0)],i=new R(_.createPolylineGeometry(r),"slice-resize"),n=u.HANDLE_COLOR.concat([1]),o=function(e){var t=new f({color:n,width:e},"slice-resize");return t.renderOccluded=4,t},s=function(){var e=new p({color:n},"slice-resize");return e.renderOccluded=4,e},c=a?u.RESIZE_HANDLE_CORNER_WIDTH:u.RESIZE_HANDLE_EDGE_WIDTH,l=c*u.DISPLAY_FOCUS_MULTIPLIER,v=function(e){return e>1?o(e):s()};return new I.Manipulator3D({view:e,renderObjects:[{geometry:i,material:v(c),stateMask:1},{geometry:i,material:v(l),stateMask:2}],collisionType:{type:"line",paths:[r]},autoScaleRenderObjects:!1,worldSized:!0,radius:a?u.RESIZE_HANDLE_CORNER_INPUT_RADIUS:u.RESIZE_HANDLE_EDGE_INPUT_RADIUS,snapToPointer:!1,moveOnDrag:!1})}function W(e,t,a){var r=function(r){var n=(r?t:e).slice(0),v=l.vec3.subtract(m.sv3d.get(),n[0],n[1]);l.vec3.normalize(v,v);var u=l.vec3.subtract(m.sv3d.get(),n[n.length-1],n[n.length-2]);if(l.vec3.normalize(u,u),a.padding>0){var g=l.vec3.scale(d.vec3f64.create(),u,-a.padding);if(n[n.length-1]=l.vec3.add(g,g,n[n.length-1]),a.bothEnds){var T=l.vec3.scale(d.vec3f64.create(),v,-a.padding);n[0]=l.vec3.add(T,T,n[0])}}var p=r?a.tipFocusMultiplier:1,f=a.tipLength*(a.focusTipLength?p:1),E=a.tipRadius*p,I=o.mat4.identity(m.sm4d.get());if(a.padding>0){var A=f/4,b=l.vec3.set(m.sv3d.get(),0,A,0),S=1+a.padding/A;o.mat4.translate(I,I,b),o.mat4.scale(I,I,l.vec3.set(m.sv3d.get(),S,S,S)),o.mat4.translate(I,I,l.vec3.scale(b,b,-1/S))}var h=o.mat4.identity(s.mat4f64.create()),O=d.vec3f64.fromValues(0,1,0),y=o.mat4.fromQuat(s.mat4f64.create(),c.quat.rotationTo(m.sq4d.get(),O,u));y[12]=n[n.length-1][0],y[13]=n[n.length-1][1],y[14]=n[n.length-1][2],o.mat4.multiply(y,y,I);var P,D,M=new R(B(a.tubeRadius*(r?a.tubeFocusMultiplier:1)+a.padding,a.flat,n),"arrow-tube"),w=[{part:"tube",geometry:M,transform:h}];if(i.isSome(a.flat)?P=new R(_.createExtrudedTriangle(f,E,E,a.flat.thickness),"arrow-tip"):(P=new R(_.createConeGeometry(f,E,24,!1,!1,!0),"arrow-tip"),D=new R(_.createConeGeometry(f,E,24,!1,!0,!1),"arrow-cap")),w.push({part:"tip",geometry:P,transform:y}),D&&w.push({part:"cap",geometry:D,transform:y}),a.bothEnds){var L=o.mat4.fromQuat(s.mat4f64.create(),c.quat.rotationTo(m.sq4d.get(),O,v));L[12]=n[0][0],L[13]=n[0][1],L[14]=n[0][2],o.mat4.multiply(L,L,I),w.push({part:"tip",geometry:P,transform:L}),D&&w.push({part:"cap",geometry:D,transform:L})}return w};return{normal:r(!1),focused:r(!0)}}function B(e,t,a){var r=[];if(i.isSome(t))r.push([e,t.thickness/2],[-e,t.thickness/2],[-e,-t.thickness/2],[e,-t.thickness/2]);else for(var n=0;n<12;n++){var o=n/12*2*Math.PI;r.push([Math.cos(o)*e,Math.sin(o)*e])}return _.createPathExtrusionGeometry(r,a,[],[],!1)}function Z(e,t){var a=l.vec3.subtract(d.vec3f64.create(),e[e.length-1],e[e.length-2]);if(l.vec3.normalize(a,a),l.vec3.scale(a,a,u.ROTATE_HEADING_TIP_LENGTH),l.vec3.add(a,a,e[e.length-1]),t){var r=l.vec3.subtract(d.vec3f64.create(),e[0],e[1]);return l.vec3.normalize(r,r),l.vec3.scale(r,r,u.ROTATE_HEADING_TIP_LENGTH),l.vec3.add(r,r,e[0]),[r].concat(e,[a])}return e.concat([a])}function q(e,t){return Math.abs(l.vec3.dot(e.plane,t))<=u.PERPENDICULAR_GROUND_DOT_THRESHOLD}function Q(e){switch(e.type){case"building-scene":case"csv":case"feature":case"geo-rss":case"geojson":case"graphics":case"group":case"integrated-mesh":case"kml":case"map-notes":case"point-cloud":case"scene":case"stream":case"unknown":case"unsupported":case null:return!1;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"elevation":case"imagery":case"map-image":case"open-street-map":case"tile":case"vector-tile":case"web-tile":case"wms":case"wmts":return!0;default:return r.neverReached(e.type),!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.createPlane=A,t.normalToBases=b,t.resizePlane=S,t.calculatePlaneHalfSize=h,t.createShiftPlane=O,t.calculateBoundedPlaneTranslateRotate=y,t.createRotatePlane=P,t.updateShiftRestartHandle=D,t.updateResizeHandle=w,t.updateRotateHeadingHandle=L,t.calculateScreenSpaceBasisLength2=F,t.calculateResizeHandlePadding=U,t.calculateDiagonalResizeHandleScale=C,t.isDiagonalResizeHandle=G,t.createShiftManipulator=k,t.createRotateManipulator=z,t.createOutlineManipulator=x,t.createGridManipulator=j,t.createResizeManipulator=V,t.createArrowGeometry=W,t.addArrowTips=Z,t.isAlwaysDrapedLayer=Q,t.DidPointerMoveRecentlyFlag=16;var K=32,X=g.ray.create()});