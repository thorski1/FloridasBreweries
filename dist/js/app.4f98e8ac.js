(function(e){function t(t){for(var n,i,s=t[0],c=t[1],u=t[2],f=0,p=[];f<s.length;f++)i=s[f],o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},2217:function(e,t,r){},4176:function(e,t,r){},4207:function(e,t,r){"use strict";var n=r("2217"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("e11e"),o=(r("6cc5"),r("b107"),r("2b0e")),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container-fluid"},[r("Brew")],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[e._m(0),r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("BrewList",{attrs:{brews:e.brews},on:{"mouse-over-brew":e.mouseOverBrew,"mouse-left-brew":e.mouseLeftBrew}})],1),r("div",{staticClass:"col-6"},[r("BrewMap",{attrs:{brews:e.brews}})],1)])])},c=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-12"},[r("h1",{staticClass:"text-center text-info"},[e._v("Breweries")])])])}],u=r("bc3a"),l=r.n(u),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card brew-list"},[r("ul",{staticClass:"list-group list-group-flush"},e._l(e.brews,function(t,n){return r("li",{key:n,staticClass:"list-group-item",on:{mouseover:function(t){return e.mouseOver(n)},mouseleave:function(t){return e.mouseLeave(n)}}},[e._v(e._s(t.name)+", "+e._s(t.state))])}),0)])},p=[],b={name:"BrewList",props:{brews:Array},methods:{mouseOver:function(e){this.$emit("mouse-over-brew",e)},mouseLeave:function(e){this.$emit("mouse-left-brew",e)}}},d=b,m=(r("6b24"),r("2877")),w=Object(m["a"])(d,f,p,!1,null,"355bcf2e",null),v=w.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row map"},[r("l-map",{attrs:{zoom:e.zoom,center:e.center},on:{"update:zoom":e.zoomUpdate,"update:center":e.centerUpdate}},[r("l-tile-layer",{attrs:{url:e.url,attribution:e.attribution}}),e._l(e.brews,function(t,n){return r("l-marker",{key:n,attrs:{"lat-lng":e.latLng(t.latitude,t.longitude)}},[r("l-icon",{attrs:{"icon-size":t.iconSize,"icon-url":e.icon}})],1)})],2)],1)},g=[],y=r("2699"),_=r("a40a"),O=r("4e2b"),x=r("fbba"),B=r("bc44"),C=r.n(B),z={name:"BrewMap",props:{brews:Array},data:function(){return{zoom:7,center:L.latLng(27.988405,-82.098),url:"https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=c615b4f97ced434abc7290f0317b040a",currentCenter:L.latLng(27.988405,-82.098),currentZoom:7,attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',marker:L.latLng(47.41322,-1.219482),icon:C.a,iconSize:[30,30]}},components:{LMap:y["a"],LTileLayer:_["a"],LMarker:O["a"],LIcon:x["a"]},methods:{latLng:function(e,t){return L.latLng(e,t)},centerUpdate:function(e){this.currentCenter=e},zoomUpdate:function(e){this.currentZoom=e}}},j=z,S=(r("4207"),Object(m["a"])(j,h,g,!1,null,"3bad9599",null)),M=S.exports,k={name:"Brew",components:{BrewList:v,BrewMap:M},data:function(){return{brews:[],normalIcon:[30,30],largeIcon:[50,50]}},mounted:function(){var e=this;l.a.get("https://api.openbrewerydb.org/breweries?by_state=florida").then(function(t){e.brews=t.data.map(function(t){return t.iconSize=e.normalIcon,t})})},methods:{mouseOverBrew:function(e){this.brews[e].iconSize=this.largeIcon},mouseLeftBrew:function(e){this.brews[e].iconSize=this.normalIcon}}},I=k,U=Object(m["a"])(I,s,c,!1,null,"656ddf46",null),$=U.exports,P={name:"app",components:{Brew:$}},E=P,T=Object(m["a"])(E,a,i,!1,null,null,null),A=T.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(A)}}).$mount("#app"),delete n["Icon"].Default.prototype._getIconUrl,n["Icon"].Default.mergeOptions({iconRetinaUrl:r("584d"),iconUrl:r("6397"),shadowUrl:r("e2b9")})},"6b24":function(e,t,r){"use strict";var n=r("4176"),o=r.n(n);o.a},b107:function(e,t,r){},bc44:function(e,t,r){e.exports=r.p+"img/beer.eb474b1e.png"}});
//# sourceMappingURL=app.4f98e8ac.js.map