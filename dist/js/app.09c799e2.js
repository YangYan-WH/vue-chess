(function(n){function t(t){for(var i,r,u=t[0],c=t[1],s=t[2],f=0,C=[];f<u.length;f++)r=u[f],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&C.push(l[r][0]),l[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(n[i]=c[i]);a&&a(t);while(C.length)C.shift()();return o.push.apply(o,s||[]),e()}function e(){for(var n,t=0;t<o.length;t++){for(var e=o[t],i=!0,u=1;u<e.length;u++){var c=e[u];0!==l[c]&&(i=!1)}i&&(o.splice(t--,1),n=r(r.s=e[0]))}return n}var i={},l={app:0},o=[];function r(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=i,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)r.d(e,i,function(t){return n[t]}.bind(null,i));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="/vue-chess/dist/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var a=c;o.push([0,"chunk-vendors"]),e()})({0:function(n,t,e){n.exports=e("56d7")},"034f":function(n,t,e){"use strict";var i=e("85ec"),l=e.n(i);l.a},"07e1":function(n,t,e){"use strict";var i=e("2acc"),l=e.n(i);l.a},"2acc":function(n,t,e){},"56d7":function(n,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),l=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"wrapper"},[e("h4",[n._v("3 个相连即获胜")]),e("div",{staticClass:"board"},[e("div",{staticClass:"row"},[e("Cell",{attrs:{n:n.n,ifContinue:n.ifContinue},on:{click:function(t){return n.onClickCell(0,t)}}}),e("Cell",{attrs:{n:n.n,ifContinue:n.ifContinue},on:{click:function(t){return n.onClickCell(1,t)}}}),e("Cell",{attrs:{n:n.n,ifContinue:n.ifContinue},on:{click:function(t){return n.onClickCell(2,t)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:n.n,ifContinue:n.ifContinue},on:{click:function(t){return n.onClickCell(3,t)}}}),e("Cell",{attrs:{n:n.n,ifContinue:n.ifContinue},on:{click:function(t){return n.onClickCell(4,t)}}}),e("Cell",{attrs:{n:n.n,ifContinue:n.ifContinue},on:{click:function(t){return n.onClickCell(5,t)}}})],1),e("div",{staticClass:"row"},[e("Cell",{attrs:{n:n.n,ifContinue:n.ifContinue},on:{click:function(t){return n.onClickCell(6,t)}}}),e("Cell",{attrs:{n:n.n,ifContinue:n.ifContinue},on:{click:function(t){return n.onClickCell(7,t)}}}),e("Cell",{attrs:{n:n.n,ifContinue:n.ifContinue},on:{click:function(t){return n.onClickCell(8,t)}}})],1)]),e("div",{staticClass:"result",class:{success:!!n.result}},[n._v(n._s(n.result?n.result+" 获得胜利":"胜负未分"))])])},o=[],r=(e("d81d"),function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"cell",on:{click:n.onClickSelf}},[n.a?[n._v(n._s(n.text))]:void 0],2)}),u=[],c={props:{n:0,ifContinue:Boolean},data:function(){return{a:!1,b:"X",c:"〇",text:""}},methods:{onClickSelf:function(){this.text||!1===this.ifContinue||(this.a=!0,this.text=this.n%2===0?this.b:this.c,this.$emit("click",this.text))}}},s=c,a=(e("07e1"),e("2877")),f=Object(a["a"])(s,r,u,!1,null,null,null),C=f.exports,p={data:function(){return{n:0,map:[[null,null,null],[null,null,null],[null,null,null]],result:null,ifContinue:!0}},components:{Cell:C},methods:{onClickCell:function(n,t){console.log("app"),console.log(t),console.log(n),this.map[Math.floor(n/3)][n%3]=t,this.n=this.n+1,this.ifContinue&&this.tell(t)},tell:function(n){for(var t=this.map,e=(this.result,0);e<2;e++)t[e][0]&&t[e][0]===t[e][1]&&t[e][1]===t[e][2]&&(this.result=n,this.ifContinue=!1);for(var i=0;i<2;i++)t[0][i]&&t[0][i]===t[1][i]&&t[1][i]===t[2][i]&&(this.result=n,this.ifContinue=!1);t[0][0]&&t[0][0]===t[1][1]&&t[1][1]===t[2][2]&&(this.result=n,this.ifContinue=!1),t[2][0]&&t[2][0]===t[1][1]&&t[1][1]===t[0][2]&&(this.result=n,this.ifContinue=!1)}}},h=p,d=(e("034f"),Object(a["a"])(h,l,o,!1,null,null,null)),v=d.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(n){return n(v)}}).$mount("#app")},"85ec":function(n,t,e){}});
//# sourceMappingURL=app.09c799e2.js.map