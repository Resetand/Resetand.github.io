(function(t){function e(e){for(var i,a,o=e[0],c=e[1],l=e[2],h=0,f=[];h<o.length;h++)a=o[h],s[a]&&f.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(i=!1)}i&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},s={app:0},r=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/math-train/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0526":function(t,e,n){},"1fdc":function(t,e,n){},"390e":function(t,e,n){},"40ed":function(t,e,n){"use strict";var i=n("0526"),s=n.n(i);s.a},"4eee":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{dark:""}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.infoShow,expression:"infoShow"}],staticClass:"overlay"}),n("Navigation",{on:{openInfoModal:function(e){t.infoShow=!t.infoShow},toogleContent:function(e){t.show=!t.show},refresh:t.refresh}}),n("div",{staticClass:"progress-wrap"},[n("ProgressBar",{attrs:{wrong:t.wrongCounter,right:t.rightCounter}})],1),n("div",{staticClass:"oper-wrap",class:{show:t.show}},[n("OperPick",{on:{operchange:t.operChange}})],1),n("div",{staticClass:"mian-wrap"},[n("Main",{attrs:{curoper:t.oper,firstmin:t.firstNumber.min,firstmax:t.firstNumber.max,secondmin:t.secondNumber.min,secondmax:t.secondNumber.max},on:{scoresIncrement:t.progressChange}})],1),n("div",{staticClass:"range-wrap",class:{show:t.show}},[n("RangePick",{attrs:{title:"First number range pick"},on:{changecurlimits:t.firstNumberChangeLimits}}),n("RangePick",{attrs:{title:"Second number range pick"},on:{changecurlimits:t.secondNumberChangeLimits}})],1),n("transition",{attrs:{name:"slide-fade"}},[n("InfoModal",{directives:[{name:"show",rawName:"v-show",value:t.infoShow,expression:"infoShow"}],on:{closewindow:function(e){t.infoShow=!1}}})],1)],1)],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1"),n("div",{staticClass:"line",class:{default:t.isEmpty}},[n("span",{staticClass:"right",class:{rightAnim:t.rightAnim}},[t._v("Right "),n("span",{staticClass:"dig"},[t._v(t._s(t.right))])]),n("span",{staticClass:"wrong",class:{wrongAnim:t.wrongAnim}},[n("span",{staticClass:"dig"},[t._v(t._s(t.wrong))]),t._v(" Wrong")]),n("div",{staticClass:"wrong-line",style:{left:t.left}})])])},o=[],c=(n("c5f6"),{props:{right:Number,wrong:Number},data:function(){return{wrongAnim:!1,rightAnim:!1}},computed:{left:function(){var t=this.right+this.wrong;return 100-100*+this.wrong/t+"%"},isEmpty:function(){return 0===this.right&&0===this.wrong}},watch:{right:function(){var t=this;this.rightAnim=!0,setTimeout(function(){return t.rightAnim=!1},500)},wrong:function(){var t=this;this.wrongAnim=!0,setTimeout(function(){return t.wrongAnim=!1},500)}}}),l=c,u=(n("d624"),n("2877")),h=Object(u["a"])(l,a,o,!1,null,"7ba48a30",null),f=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"choice-btns"},[n("v-btn",{staticClass:"btn-oper plus",class:{"cyan darken-4":t.state.plusActive},attrs:{flat:""},on:{click:function(e){return t.changeOper("plusActive")}}}),n("v-btn",{staticClass:"btn-oper minus",class:{"cyan darken-4":t.state.minusActive},attrs:{flat:""},on:{click:function(e){return t.changeOper("minusActive")}}}),n("v-btn",{staticClass:"btn-oper multy",class:{"cyan darken-4":t.state.multyActive},attrs:{flat:""},on:{click:function(e){return t.changeOper("multyActive")}}}),n("v-btn",{staticClass:"disabled btn-oper div",class:{"cyan darken-4":t.state.divActive},attrs:{flat:"",disabled:""},on:{click:function(e){return t.changeOper("divActive")}}})],1)])},d=[],v=(n("456d"),n("ac6a"),{data:function(){return{state:{plusActive:!0,minusActive:!1,multyActive:!1,divActive:!1}}},methods:{changeOper:function(t){var e,n=this;switch(Object.keys(this.state).forEach(function(t){n.state[t]=!1}),this.state[t]=!0,t){case"plusActive":e="plus";break;case"minusActive":e="minus";break;case"multyActive":e="multy";break;case"divActive":e="div";break}this.$emit("operchange",e)}}}),g=v,p=(n("f587"),Object(u["a"])(g,m,d,!1,null,"3f67d398",null)),b=p.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.check(e)}}},[n("span",{staticClass:"op"},[n("span",{staticClass:"first"},[t._v(t._s(t.first))]),n("span",{staticClass:"oper"},[t._v(t._s(t.operToDisplay))]),n("span",{staticClass:"second"},[t._v(t._s(t.second))])]),n("span",{staticClass:"eq"},[t._v("=")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticClass:"answer",class:{wrongAnimation:t.wrongAnimation,rightAnimation:t.rightAnimation},attrs:{type:"number"},domProps:{value:t.answer},on:{input:function(e){e.target.composing||(t.answer=e.target.value)}}})])])},C=[],k=(n("4f7f"),n("5df3"),n("f400"),n("d225")),y=n("b0b4");function _(t,e){return JSON.stringify(t)===JSON.stringify(e)}var x=function(){function t(){Object(k["a"])(this,t),this.limitsStore=new Map,this.numbersHash=new Map}return Object(y["a"])(t,[{key:"randInt",value:function(t,e){return Math.floor(Math.random()*(e-t+1))+t}},{key:"limitsChangeCheck",value:function(t,e){return!this.limitsStore.has(e)||!_(this.limitsStore.get(e),t)}},{key:"limitsRanOutCheck",value:function(t,e){var n=t[1]-t[0]-1,i=this.numbersHash.get(e).size;return i>=n}},{key:"createOrClearHash",value:function(t){this.numbersHash.has(t)?this.numbersHash.get(t).clear():this.numbersHash.set(t,new Set)}},{key:"setlimits",value:function(t,e){this.limitsStore.set(t,e)}},{key:"pushInHahs",value:function(t,e){var n=this.numbersHash.get(t);n.add(e),this.numbersHash.set(t,n)}},{key:"randUnique",value:function(t,e){var n=this.randInt(e[0],e[1]);while(this.numbersHash.get(t).has(n))n=this.randInt(e[0],e[1]);return n}},{key:"get",value:function(t,e){var n;return(this.limitsChangeCheck(e,t)||this.limitsRanOutCheck(e,t))&&this.createOrClearHash(t),this.setlimits(t,e),console.log(t,this.limitsRanOutCheck(e,t)),console.log(this.numbersHash),n=this.randUnique(t,e),this.pushInHahs(t,n),n}}]),t}(),A=new x,O={props:{curoper:String,firstmin:Number,firstmax:Number,secondmin:Number,secondmax:Number},data:function(){return{answer:null,first:0,second:0,wrongAnimation:!1,rightAnimation:!1}},created:function(){this.generateRandom()},computed:{operToDisplay:function(){var t;switch(this.curoper){case"plus":t="+";break;case"minus":t="-";break;case"multy":t="×";break;case"div":t="÷";break}return t||""}},methods:{getAnswer:function(){switch(this.curoper){case"plus":return this.first+this.second;case"minus":return this.first-this.second;case"multy":return this.first*this.second;case"div":return this.first/this.second}},check:function(){var t=this;""!==this.answer&&(this.getAnswer()===parseInt(this.answer,10)?(this.generateRandom(),this.rightAnimation=!0,setTimeout(function(){return t.rightAnimation=!1},300),this.$emit("scoresIncrement",!0)):(this.wrongAnimation=!0,setTimeout(function(){return t.wrongAnimation=!1},400),this.$emit("scoresIncrement",!1))),this.answer=""},generateRandom:function(){this.first=A.get(1,[this.firstmin,this.firstmax]),this.second=A.get(2,[this.secondmin,this.secondmax])}},watch:{firstmin:function(){this.generateRandom()},firstmax:function(){this.generateRandom()},secondmin:function(){this.generateRandom()},secondmax:function(){this.generateRandom()}}},N=O,S=(n("40ed"),Object(u["a"])(N,w,C,!1,null,"60065cc6",null)),j=S.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{flat:"",color:"transparent"}},[t.helpInfo?n("span",{staticClass:"title"},[n("v-subheader",[t._v(t._s(t.title))])],1):t._e(),n("v-card-text",[n("v-layout",{attrs:{row:""}},[n("v-flex",{staticStyle:{width:"60px"},attrs:{shrink:""}},[n("v-text-field",{staticClass:"mt-0",attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:t.limits[0],callback:function(e){t.$set(t.limits,0,e)},expression:"limits[0]"}})],1),n("v-flex",{staticClass:"px-3 "},[n("v-range-slider",{attrs:{max:t.limits[1],min:t.limits[0],step:1,"thumb-label":"always",color:t.color,"persistent-hint":""},on:{change:t.rangeChange},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),n("v-flex",{staticStyle:{width:"60px"},attrs:{shrink:"",center:""}},[n("v-text-field",{staticClass:"mt-0",attrs:{"hide-details":"","single-line":"",type:"number"},model:{value:t.limits[1],callback:function(e){t.$set(t.limits,1,e)},expression:"limits[1]"}})],1)],1)],1)],1)},I=[],M={props:{title:String},data:function(){return{value:[0,400],limits:[0,1e3],color:"#53A13C",helpInfo:!0}},methods:{rangeChange:function(){this.helpInfo=!1,this.$emit("changecurlimits",{min:this.value[0],max:this.value[1]})}},watch:{limits:{handler:function(){this.limits[0]=+this.limits[0],this.limits[1]=+this.limits[1],this.limits[0]===this.limits[1]&&(this.limits[1]=+this.limits[0]+1);var t=[this.limits[0],this.limits[1]];this.value[0]=t[0],this.value[1]=t[1],this.rangeChange()},deep:!0}}},$=M,R=(n("8262"),Object(u["a"])($,H,I,!1,null,"1550de6e",null)),P=R.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"window"},[n("v-card-title",{staticClass:"headline",attrs:{dark:""}},[n("v-icon",{staticClass:"mr-3"},[t._v("equalizer")]),t._v("\n    Welcome to Math Trainer\n  ")],1),n("v-card-text",[t._v("\n    Want to train your oral account skills? Well, this app was written\n    specifically for that. Select a range of randomly generated values for\n    both numbers and go!\n  ")]),n("footer",{staticClass:"footer"},[n("v-btn",{staticClass:"cyan darken-4",on:{click:t.closeWindow}},[t._v("Okey")])],1)],1)},T=[],W={data:function(){return{}},methods:{closeWindow:function(){this.$emit("closewindow")}}},q=W,J=(n("ef7c"),Object(u["a"])(q,E,T,!1,null,"17239c30",null)),L=J.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{staticClass:"cyan darken-4",attrs:{fixed:""}},[n("v-toolbar-title",[t._v("Math trainer")]),n("v-spacer"),n("v-toolbar-items",{},[t.isHide?t._e():n("v-btn",{attrs:{icon:"",flat:""},on:{click:t.toggle}},[n("v-icon",[t._v("visibility_off")])],1),t.isHide?n("v-btn",{attrs:{icon:"",flat:""},on:{click:t.toggle}},[n("v-icon",[t._v("visibility")])],1):t._e(),n("v-btn",{attrs:{icon:"",flat:""},on:{click:t.refresh}},[n("v-icon",[t._v("refresh")])],1),n("v-btn",{attrs:{icon:"",href:"https://github.com/Resetand/Resetand.github.io",primary:"",flat:""}},[n("v-icon",[t._v("code")])],1),n("v-btn",{staticClass:"ml-3",attrs:{icon:"",flat:""},on:{click:t.showInfoModal}},[n("v-icon",[t._v("info")])],1)],1)],1)},D=[],F={data:function(){return{isHide:!1,bottomNav:"recent"}},methods:{showInfoModal:function(){this.$emit("openInfoModal")},toggle:function(){this.isHide=!this.isHide,this.$emit("toogleContent")},refresh:function(){this.$emit("refresh")}}},z=F,U=(n("66df"),Object(u["a"])(z,B,D,!1,null,"70f4b0f2",null)),G=U.exports,K={name:"app",components:{ProgressBar:f,OperPick:b,Main:j,RangePick:P,InfoModal:L,Navigation:G},data:function(){return{show:!1,infoShow:!1,oper:"plus",wrongCounter:0,rightCounter:0,firstNumber:{min:0,max:400},secondNumber:{min:0,max:400}}},methods:{test:function(t){console.log(t,"asdasd")},operChange:function(t){this.oper=t},firstNumberChangeLimits:function(t){console.log("first range changed",t),this.firstNumber.min=t.min,this.firstNumber.max=t.max},secondNumberChangeLimits:function(t){console.log("second range changed",t),this.secondNumber.min=t.min,this.secondNumber.max=t.max},progressChange:function(t){t?this.rightCounter++:this.wrongCounter++},refresh:function(){this.wrongCounter=0,this.rightCounter=0}}},Q=K,V=(n("5c0b"),Object(u["a"])(Q,s,r,!1,null,null,null)),X=V.exports,Y=n("9483");Object(Y["a"])("".concat("/math-train/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d1e7");var Z=n("ce5b"),tt=n.n(Z);n("bf40");i["default"].use(tt.a,{iconfont:"md"}),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(X)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("5e27"),s=n.n(i);s.a},"5e27":function(t,e,n){},"66df":function(t,e,n){"use strict";var i=n("e29f"),s=n.n(i);s.a},8262:function(t,e,n){"use strict";var i=n("390e"),s=n.n(i);s.a},a36b:function(t,e,n){},d624:function(t,e,n){"use strict";var i=n("4eee"),s=n.n(i);s.a},e29f:function(t,e,n){},ef7c:function(t,e,n){"use strict";var i=n("1fdc"),s=n.n(i);s.a},f587:function(t,e,n){"use strict";var i=n("a36b"),s=n.n(i);s.a}});
//# sourceMappingURL=app.ab2f4c86.js.map