(function(t){function e(e){for(var i,a,o=e[0],c=e[1],u=e[2],h=0,f=[];h<o.length;h++)a=o[h],s[a]&&f.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/math-train/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"076c":function(t,e,n){},"1fdc":function(t,e,n){},"4eee":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{dark:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.infoShow,expression:"infoShow"}],staticClass:"overlay"}),n("Navigation",{on:{openInfoModal:function(e){t.infoShow=!t.infoShow},toogleContent:function(e){t.show=!t.show},refresh:t.refresh}}),n("div",{staticClass:"progress-wrap"},[n("ProgressBar",{attrs:{wrong:t.wrongCounter,right:t.rightCounter}})],1),n("div",{staticClass:"oper-wrap",class:{show:t.show}},[n("OperPick",{on:{operchange:t.operChange}})],1),n("div",{staticClass:"mian-wrap"},[n("Main",{attrs:{curoper:t.oper,firstmin:t.firstNumber.min,firstmax:t.firstNumber.max,secondmin:t.secondNumber.min,secondmax:t.secondNumber.max,reRand:t.reRandomValues},on:{scoresIncrement:t.progressChange}})],1),n("div",{staticClass:"range-wrap",class:{show:t.show}},[n("div",[n("RangePick",{attrs:{title:"First number range pick"},on:{changecurlimits:t.firstNumberChangeLimits}})],1),n("div",[n("RangePick",{attrs:{title:"Second number range pick"},on:{changecurlimits:t.secondNumberChangeLimits}})],1)]),n("transition",{attrs:{name:"slide-fade"}},[n("InfoModal",{directives:[{name:"show",rawName:"v-show",value:t.infoShow,expression:"infoShow"}],on:{closewindow:function(e){t.infoShow=!1}}})],1)],1)],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1"),n("div",{staticClass:"line",class:{default:t.isEmpty}},[n("span",{staticClass:"right",class:{rightAnim:t.rightAnim}},[t._v("Right "),n("span",{staticClass:"dig"},[t._v(t._s(t.right))])]),n("span",{staticClass:"wrong",class:{wrongAnim:t.wrongAnim}},[n("span",{staticClass:"dig"},[t._v(t._s(t.wrong))]),t._v(" Wrong")]),n("div",{staticClass:"wrong-line",style:{left:t.left}})])])},o=[],c=(n("c5f6"),{props:{right:Number,wrong:Number},data:function(){return{wrongAnim:!1,rightAnim:!1}},computed:{left:function(){var t=this.right+this.wrong;return 100-100*+this.wrong/t+"%"},isEmpty:function(){return 0===this.right&&0===this.wrong}},watch:{right:function(){var t=this;this.rightAnim=!0,setTimeout(function(){return t.rightAnim=!1},500)},wrong:function(){var t=this;this.wrongAnim=!0,setTimeout(function(){return t.wrongAnim=!1},500)}}}),u=c,l=(n("d624"),n("2877")),h=Object(l["a"])(u,a,o,!1,null,"7ba48a30",null),f=h.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"choice-btns"},[n("v-btn",{staticClass:"btn-oper plus",class:{"cyan darken-4":t.state.plusActive},attrs:{flat:""},on:{click:function(e){return t.changeOper("plusActive")}}}),n("v-btn",{staticClass:"btn-oper minus",class:{"cyan darken-4":t.state.minusActive},attrs:{flat:""},on:{click:function(e){return t.changeOper("minusActive")}}}),n("v-btn",{staticClass:"btn-oper multy",class:{"cyan darken-4":t.state.multyActive},attrs:{flat:""},on:{click:function(e){return t.changeOper("multyActive")}}}),n("v-btn",{staticClass:"disabled btn-oper div",class:{"cyan darken-4":t.state.divActive},attrs:{flat:"",disabled:""},on:{click:function(e){return t.changeOper("divActive")}}})],1)])},m=[],v=(n("456d"),n("ac6a"),{data:function(){return{state:{plusActive:!0,minusActive:!1,multyActive:!1,divActive:!1}}},methods:{changeOper:function(t){var e,n=this;switch(Object.keys(this.state).forEach(function(t){n.state[t]=!1}),this.state[t]=!0,t){case"plusActive":e="plus";break;case"minusActive":e="minus";break;case"multyActive":e="multy";break;case"divActive":e="div";break}this.$emit("operchange",e)}}}),p=v,g=(n("f587"),Object(l["a"])(p,d,m,!1,null,"3f67d398",null)),b=g.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.check(e)}}},[n("span",{staticClass:"op"},[n("span",{staticClass:"first"},[t._v(t._s(t.first))]),n("span",{staticClass:"oper"},[t._v(t._s(t.operToDisplay))]),n("span",{staticClass:"second"},[t._v(t._s(t.second))])]),n("span",{staticClass:"eq"},[t._v("=")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticClass:"answer",class:{wrongAnimation:t.wrongAnimation,rightAnimation:t.rightAnimation},attrs:{type:"number"},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})])])},k=[],y=(n("4f7f"),n("5df3"),n("f400"),n("d225")),C=n("b0b4");function x(t,e){return JSON.stringify(t)===JSON.stringify(e)}var _=function(){function t(){Object(y["a"])(this,t),this.limitsStore=new Map,this.numbersHash=new Map}return Object(C["a"])(t,[{key:"randInt",value:function(t,e){return Math.floor(Math.random()*(e-t+1))+t}},{key:"limitsChangeCheck",value:function(t,e){return!this.limitsStore.has(e)||!x(this.limitsStore.get(e),t)}},{key:"limitsRanOutCheck",value:function(t,e){var n=t[1]-t[0]-1,i=this.numbersHash.get(e).size;return i>=n}},{key:"createOrClearHash",value:function(t){this.numbersHash.has(t)?this.numbersHash.get(t).clear():this.numbersHash.set(t,new Set)}},{key:"setlimits",value:function(t,e){this.limitsStore.set(t,e)}},{key:"pushInHahs",value:function(t,e){var n=this.numbersHash.get(t);n.add(e),this.numbersHash.set(t,n)}},{key:"randUnique",value:function(t,e){var n=this.randInt(e[0],e[1]);while(this.numbersHash.get(t).has(n))n=this.randInt(e[0],e[1]);return n}},{key:"get",value:function(t,e){var n;return(this.limitsChangeCheck(e,t)||this.limitsRanOutCheck(e,t))&&this.createOrClearHash(t),this.setlimits(t,e),n=this.randUnique(t,e),this.pushInHahs(t,n),n}}]),t}(),M=new _,A={props:{curoper:String,firstmin:Number,firstmax:Number,secondmin:Number,secondmax:Number,reRand:Boolean},data:function(){return{answer:null,first:0,second:0,wrongAnimation:!1,rightAnimation:!1}},created:function(){this.generateRandom()},computed:{operToDisplay:function(){var t;switch(this.curoper){case"plus":t="+";break;case"minus":t="-";break;case"multy":t="×";break;case"div":t="÷";break}return t||""}},methods:{getAnswer:function(){switch(this.curoper){case"plus":return this.first+this.second;case"minus":return this.first-this.second;case"multy":return this.first*this.second;case"div":return this.first/this.second}},check:function(){var t=this;""!==this.answer&&(this.getAnswer()===parseInt(this.answer,10)?(this.generateRandom(),this.rightAnimation=!0,setTimeout(function(){return t.rightAnimation=!1},300),this.$emit("scoresIncrement",!0)):(this.wrongAnimation=!0,setTimeout(function(){return t.wrongAnimation=!1},400),this.$emit("scoresIncrement",!1))),this.answer=""},generateRandom:function(){this.first=M.get(1,[this.firstmin,this.firstmax]),this.second=M.get(2,[this.secondmin,this.secondmax])}},watch:{firstmin:function(){this.generateRandom()},firstmax:function(){this.generateRandom()},secondmin:function(){this.generateRandom()},secondmax:function(){this.generateRandom()}}},O=A,N=(n("d584"),Object(l["a"])(O,w,k,!1,null,"7eeff9c0",null)),S=N.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"window"},[n("v-card-title",{staticClass:"headline",attrs:{dark:""}},[n("v-icon",{staticClass:"mr-3"},[t._v("equalizer")]),t._v("\n    Welcome to Math Trainer\n  ")],1),n("v-card-text",[t._v("\n    Want to train your oral account skills? Well, this app was written\n    specifically for that. Select a range of randomly generated values for\n    both numbers and go!\n  ")]),n("footer",{staticClass:"footer"},[n("v-btn",{staticClass:"cyan darken-4",on:{click:t.closeWindow}},[t._v("Okey")])],1)],1)},R=[],H={data:function(){return{}},methods:{closeWindow:function(){this.$emit("closewindow")}}},P=H,$=(n("ef7c"),Object(l["a"])(P,j,R,!1,null,"17239c30",null)),I=$.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"cyan darken-4",attrs:{fixed:""}},[n("v-toolbar-title",[t._v("Math trainer")]),n("v-spacer"),n("v-toolbar-items",{},[t.isHide?t._e():n("v-btn",{attrs:{icon:"",flat:""},on:{click:t.toggle}},[n("v-icon",[t._v("visibility_off")])],1),t.isHide?n("v-btn",{attrs:{icon:"",flat:""},on:{click:t.toggle}},[n("v-icon",[t._v("visibility")])],1):t._e(),n("v-btn",{attrs:{icon:"",flat:""},on:{click:t.refresh}},[n("v-icon",[t._v("refresh")])],1),n("v-btn",{attrs:{icon:"",href:"https://github.com/Resetand/Resetand.github.io",primary:"",flat:""}},[n("v-icon",[t._v("code")])],1),n("v-btn",{staticClass:"ml-3",attrs:{icon:"",flat:""},on:{click:t.showInfoModal}},[n("v-icon",[t._v("info")])],1)],1)],1)},T=[],W={data:function(){return{isHide:!1,bottomNav:"recent"}},methods:{showInfoModal:function(){this.$emit("openInfoModal")},toggle:function(){this.isHide=!this.isHide,this.$emit("toogleContent")},refresh:function(){this.$emit("refresh")}}},q=W,U=(n("66df"),Object(l["a"])(q,E,T,!1,null,"70f4b0f2",null)),B=U.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[n("v-progress-circular",t._g({attrs:{light:"",rotate:90,size:260,width:2,value:t.getValue,color:"teal"}},i),[n("div",[n("v-flex",{staticStyle:{width:"100px"},attrs:{shrink:""}},[n("v-text-field",{staticClass:"mt-0",attrs:{"hide-details":"",type:"number",label:"From"},on:{keyup:t.checker,change:function(e){return t.valueUptade(0)}},model:{value:t.valueMin,callback:function(e){t.valueMin=e},expression:"valueMin"}})],1),n("v-flex",{staticStyle:{width:"100px"},attrs:{shrink:""}},[n("v-text-field",{staticClass:"mt-25",attrs:{"hide-details":"",type:"number",label:"To"},on:{keyup:t.checker,change:function(e){return t.valueUptade(1)}},model:{value:t.valueMax,callback:function(e){t.valueMax=e},expression:"valueMax"}})],1)],1)])]}}])},[n("span",[t._v(t._s(t.title))])])},J=[],L={data:function(){return{CirclePivot:5e3,valueMin:0,valueMax:400}},props:{title:String},computed:{getValue:function(){var t=Math.abs(this.valueMin-this.valueMax);return 100*t/this.CirclePivot}},methods:{valueUptade:function(){this.valueMin||(this.valueMin="0"),this.valueMax||(this.valueMax="0"),this.valueMax=+this.valueMax,this.valueMin=+this.valueMin,this.$emit("changecurlimits",{min:+this.valueMin,max:+this.valueMax})},checker:function(){if(+this.valueMin>+this.valueMax){var t=[+this.valueMax,+this.valueMin];this.valueMin=t[0],this.valueMax=t[1]}}}},V=L,z=(n("f151"),Object(l["a"])(V,F,J,!1,null,"a1cfad10",null)),D=z.exports,G={name:"app",components:{ProgressBar:f,OperPick:b,Main:S,InfoModal:I,Navigation:B,RangePick:D},data:function(){return{show:!1,infoShow:!1,reRandomValues:!1,oper:"plus",wrongCounter:0,rightCounter:0,firstNumber:{min:0,max:400},secondNumber:{min:0,max:400}}},methods:{operChange:function(t){this.oper=t},firstNumberChangeLimits:function(t){this.firstNumber.min=t.min,this.firstNumber.max=t.max},secondNumberChangeLimits:function(t){this.secondNumber.min=t.min,this.secondNumber.max=t.max},progressChange:function(t){t?this.rightCounter++:this.wrongCounter++},refresh:function(){this.wrongCounter=0,this.rightCounter=0}}},K=G,Q=(n("5c0b"),Object(l["a"])(K,s,r,!1,null,null,null)),X=Q.exports,Y=n("9483");Object(Y["a"])("".concat("/math-train/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d1e7");var Z=n("ce5b"),tt=n.n(Z);n("bf40");i["default"].use(tt.a,{iconfont:"md"}),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(X)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),s=n.n(i);s.a},"5e27":function(t,e,n){},"66df":function(t,e,n){"use strict";var i=n("e29f"),s=n.n(i);s.a},"818d":function(t,e,n){},a36b:function(t,e,n){},d584:function(t,e,n){"use strict";var i=n("818d"),s=n.n(i);s.a},d624:function(t,e,n){"use strict";var i=n("4eee"),s=n.n(i);s.a},e29f:function(t,e,n){},ef7c:function(t,e,n){"use strict";var i=n("1fdc"),s=n.n(i);s.a},f151:function(t,e,n){"use strict";var i=n("076c"),s=n.n(i);s.a},f587:function(t,e,n){"use strict";var i=n("a36b"),s=n.n(i);s.a}});
//# sourceMappingURL=app.970f8247.js.map