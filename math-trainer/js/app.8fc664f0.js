(function(t){function n(n){for(var i,a,o=n[0],c=n[1],u=n[2],m=0,h=[];m<o.length;m++)a=o[m],s[a]&&h.push(s[a][0]),s[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(n);while(h.length)h.shift()();return r.push.apply(r,u||[]),e()}function e(){for(var t,n=0;n<r.length;n++){for(var e=r[n],i=!0,o=1;o<e.length;o++){var c=e[o];0!==s[c]&&(i=!1)}i&&(r.splice(n--,1),t=a(a.s=e[0]))}return t}var i={},s={app:0},r=[];function a(n){if(i[n])return i[n].exports;var e=i[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=i,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)a.d(e,i,function(n){return t[n]}.bind(null,i));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=n,o=o.slice();for(var u=0;u<o.length;u++)n(o[u]);var l=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"1c77":function(t,n,e){},"22dd":function(t,n,e){"use strict";var i=e("65c3"),s=e.n(i);s.a},2829:function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.infoShow,expression:"infoShow"}],staticClass:"overlay"}),e("div",{staticClass:"side-menu"},[e("button",{staticClass:"side-btn hide-elements",class:{btnHide:t.show},on:{click:function(n){t.show=!t.show}}}),e("a",{staticClass:"github-link side-btn",class:{btnHide:t.show},attrs:{href:"https://github.com/Resetand",target:"_blank"}}),e("button",{staticClass:"info side-btn",class:{btnHide:t.show},attrs:{target:"_blank"},on:{click:function(n){t.infoShow=!t.infoShow}}})]),e("div",{staticClass:"progress-wrap"},[e("ProgressBar",{attrs:{wrong:t.wrongCounter,right:t.rightCounter}})],1),e("div",{staticClass:"oper-wrap",class:{show:t.show}},[e("OperPick",{on:{operchange:t.operChange}})],1),e("div",{staticClass:"mian-wrap"},[e("Main",{attrs:{curoper:t.oper,firstmin:t.firstNumber.min,firstmax:t.firstNumber.max,secondmin:t.secondNumber.min,secondmax:t.secondNumber.max},on:{scoresIncrement:t.progressChange}})],1),e("div",{staticClass:"range-wrap",class:{show:t.show}},[e("div",{staticClass:"range-title"},[t._v("First number range pick")]),e("RangePick",{on:{changecurlimits:t.firstNumberChangeLimits}})],1),e("div",{staticClass:"range-wrap",class:{show:t.show}},[e("div",{staticClass:"range-title"},[t._v("Second number range pick")]),e("RangePick",{on:{changecurlimits:t.secondNumberChangeLimits}})],1),e("transition",{attrs:{name:"slide-fade"}},[e("InfoModal",{directives:[{name:"show",rawName:"v-show",value:t.infoShow,expression:"infoShow"}],on:{closewindow:function(n){t.infoShow=!1}}})],1)],1)},r=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"hello"},[e("h1"),e("div",{staticClass:"line"},[e("span",{staticClass:"right",class:{rightAnim:t.rightAnim}},[t._v("Right "),e("span",{staticClass:"dig"},[t._v(t._s(t.right))])]),e("span",{staticClass:"wrong",class:{wrongAnim:t.wrongAnim}},[e("span",{staticClass:"dig"},[t._v(t._s(t.wrong))]),t._v(" Wrong")]),e("div",{staticClass:"wrong-line",style:{left:t.left}})])])},o=[],c=(e("c5f6"),{props:{right:Number,wrong:Number},data:function(){return{wrongAnim:!1,rightAnim:!1}},computed:{left:function(){var t=this.right+this.wrong;return 100-100*+this.wrong/t+"%"}},watch:{right:function(t,n){var e=this;this.rightAnim=!0,setTimeout(function(){return e.rightAnim=!1},500)},wrong:function(t,n){var e=this;this.wrongAnim=!0,setTimeout(function(){return e.wrongAnim=!1},500)}}}),u=c,l=(e("8427"),e("2877")),m=Object(l["a"])(u,a,o,!1,null,"47abf82e",null),h=m.exports,f=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("div",{staticClass:"choice-btns"},[e("button",{staticClass:"btn-oper plus",class:{"btn-oper_active":t.state.plusActive},on:{click:function(n){return t.changeOper("plusActive")}}}),e("button",{staticClass:"btn-oper minus",class:{"btn-oper_active":t.state.minusActive},on:{click:function(n){return t.changeOper("minusActive")}}}),e("button",{staticClass:"btn-oper multy",class:{"btn-oper_active":t.state.multyActive},on:{click:function(n){return t.changeOper("multyActive")}}}),e("button",{staticClass:"disabled btn-oper div",class:{"btn-oper_active":t.state.divActive},attrs:{disabled:""},on:{click:function(n){return t.changeOper("divActive")}}})])])},d=[],g=(e("456d"),e("ac6a"),{data:function(){return{state:{plusActive:!0,minusActive:!1,multyActive:!1,divActive:!1}}},methods:{changeOper:function(t){var n,e=this;switch(Object.keys(this.state).forEach(function(t){e.state[t]=!1}),this.state[t]=!0,t){case"plusActive":n="plus";break;case"minusActive":n="minus";break;case"multyActive":n="multy";break;case"divActive":n="div";break}this.$emit("operchange",n)}}}),p=g,v=(e("73a3"),Object(l["a"])(p,f,d,!1,null,"5b9aae2d",null)),w=v.exports,b=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"main"},[e("form",{on:{submit:function(n){return n.preventDefault(),t.check(n)}}},[e("span",{staticClass:"first"},[t._v(t._s(t.first))]),e("span",{staticClass:"oper"},[t._v(t._s(t.operToDisplay))]),e("span",{staticClass:"second"},[t._v(t._s(t.second))]),e("span",{staticClass:"eq"},[t._v("=")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],staticClass:"answer",class:{wrongAnimation:t.wrongAnimation,rightAnimation:t.rightAnimation},attrs:{type:"text"},domProps:{value:t.answer},on:{keydown:function(n){return n.preventDefault(),t.checkVal(n)},input:function(n){n.target.composing||(t.answer=n.target.value)}}})])])},x=[];e("5df3"),e("4f7f");function C(t,n){return Math.floor(t+Math.random()*(n+1-t))}var A={props:{curoper:String,firstmin:Number,firstmax:Number,secondmin:Number,secondmax:Number},data:function(){return{answer:null,first:0,second:0,wrongAnimation:!1,rightAnimation:!1}},created:function(){this.generateRandom()},computed:{operToDisplay:function(){switch(this.curoper){case"plus":return"+";case"minus":return"−";case"multy":return"×";case"div":return"÷"}}},methods:{checkVal:function(t){var n=new Set(["ArrowLeft","ArrowRight","ArrowDown","ArrowUp","Enter","Backspace","-","+"]);console.log(t.key);var e=/^\d+$/;e.test(t.key)||n.has(t.key)?t.returnValue=!0:t.returnValue=!1},getAnswer:function(){switch(this.curoper){case"plus":return this.first+this.second;case"minus":return this.first-this.second;case"multy":return this.first*this.second;case"div":return this.first/this.second}},check:function(){var t=this;""!==this.answer&&(this.getAnswer()===parseInt(this.answer,10)?(this.generateRandom(),this.rightAnimation=!0,setTimeout(function(){return t.rightAnimation=!1},300),this.$emit("scoresIncrement",!0)):(this.wrongAnimation=!0,setTimeout(function(){return t.wrongAnimation=!1},400),this.$emit("scoresIncrement",!1))),this.answer=""},generateRandom:function(){this.second=C(this.secondmin,this.secondmax),this.first=C(this.firstmin,this.firstmax)}},watch:{firstmin:function(){this.generateRandom()},firstmax:function(){this.generateRandom()},secondmin:function(){this.generateRandom()},secondmax:function(){this.generateRandom()}}},k=A,_=(e("22dd"),Object(l["a"])(k,b,x,!1,null,"f0553e76",null)),y=_.exports,M=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"wrap"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.minLimit,expression:"minLimit"}],staticClass:"range-lims range-max",domProps:{value:t.minLimit},on:{input:function(n){n.target.composing||(t.minLimit=n.target.value)}}}),e("div",{staticClass:"range-line"},[e("span",{staticClass:"interactiveLine",on:{mousedown:function(n){return n.preventDefault(),t.mouseHold(n)},mousemove:function(n){return n.preventDefault(),t.mouseMove(n)},mouseup:function(n){return n.preventDefault(),t.mouseUnHold(n)},mouseleave:t.mouseUnHold}}),e("div",{staticClass:"cur-range",style:{left:t.left,right:t.rigth}},[e("span",{staticClass:"left"},[e("span",{staticClass:"range-value"},[t._v(t._s(t.minValue))])]),e("span",{staticClass:"right"},[e("span",{staticClass:"range-value"},[t._v(t._s(t.maxValue))])])])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.maxLimit,expression:"maxLimit"}],staticClass:"range-lims range-min",domProps:{value:t.maxLimit},on:{keydown:t.checkVal,input:function(n){n.target.composing||(t.maxLimit=n.target.value)}}})])},N=[],L={data:function(){return{minLimit:0,maxLimit:400,min:5,max:95,holding:!1,lineX:null,lineWidht:null}},computed:{minValue:function(){var t=+this.minLimit,n=+this.maxLimit,e=n-t;return this.min>.5?Math.floor(e*this.min/100)+t:t},maxValue:function(){var t=+this.minLimit,n=+this.maxLimit,e=n-t;return this.max<99?Math.floor(e*this.max/100)+t:n},left:function(){return this.min+"%"},rigth:function(){return 100-this.max+"%"}},methods:{getMinVal:function(){var t=+this.minLimit,n=+this.maxLimit,e=n-t;return this.min>.5?Math.floor(e*this.min/100)+t:t},getMaxVal:function(){var t=+this.minLimit,n=+this.maxLimit,e=n-t;return this.max<99?Math.floor(e*this.max/100)+t:n},mouseHold:function(t){this.holding=!0,this.lineX=t.target.getBoundingClientRect().x,this.lineWidht=t.target.getBoundingClientRect().width},mouseMove:function(t){if(this.holding){var n=t.offsetX,e=100*n/(this.lineWidht-2),i=Math.abs(e-this.min),s=Math.abs(e-this.max);if(i<s){if(!(e<this.max))return void this.mouseUnHold();this.min=e,e<0&&(this.min=0)}else{if(!(this.min<e))return void this.mouseUnHold();this.max=e,e>100&&(this.max=100)}}},mouseUnHold:function(t){this.mouseMove(t),this.holding&&(this.holding=!1),this.$emit("changecurlimits",{min:this.getMinVal(),max:this.getMaxVal()})},checkVal:function(t){var n=new Set(["ArrowLeft","ArrowRight","ArrowDown","ArrowUp","Enter","Backspace"]);console.log(t.key);var e=/^\d+$/;e.test(t.key)||n.has(t.key)?t.returnValue=!0:t.returnValue=!1}},watch:{minLimit:function(){this.$emit("changecurlimits",{min:this.getMinVal(),max:this.getMaxVal()})},maxLimit:function(){this.$emit("changecurlimits",{min:this.getMinVal(),max:this.getMaxVal()})}}},O=L,V=(e("d639"),Object(l["a"])(O,M,N,!1,null,"7e5ee43e",null)),S=V.exports,j=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"window"},[e("h1",{staticClass:"title"},[t._v("Welcome to Math Trainer")]),e("p",{staticClass:"text"},[t._v("Want to train your oral account skills? Well, this app was written specifically for that. Select a range of randomly generated values for both numbers and go!")]),e("footer",{staticClass:"footer"},[e("button",{staticClass:"btn btn-close",on:{click:t.closeWindow}},[t._v("Оkey")])])])},P=[],R={data:function(){return{}},methods:{closeWindow:function(){this.$emit("closewindow")}}},$=R,E=(e("8903"),Object(l["a"])($,j,P,!1,null,"b821ef70",null)),H=E.exports,T={name:"app",components:{ProgressBar:h,OperPick:w,Main:y,RangePick:S,InfoModal:H},data:function(){return{show:!1,infoShow:!1,oper:"plus",wrongCounter:0,rightCounter:0,firstNumber:{min:0,max:400},secondNumber:{min:0,max:400}}},methods:{operChange:function(t){this.oper=t},firstNumberChangeLimits:function(t){this.firstNumber.min=t.min,this.firstNumber.max=t.max},secondNumberChangeLimits:function(t){this.secondNumber.min=t.min,this.secondNumber.max=t.max},progressChange:function(t){t?this.rightCounter++:this.wrongCounter++}}},D=T,W=(e("5c0b"),Object(l["a"])(D,s,r,!1,null,null,null)),B=W.exports,U=e("9483");Object(U["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(B)}}).$mount("#app")},"5c0b":function(t,n,e){"use strict";var i=e("5e27"),s=e.n(i);s.a},"5e27":function(t,n,e){},"65c3":function(t,n,e){},"73a3":function(t,n,e){"use strict";var i=e("f7ce"),s=e.n(i);s.a},"7c7c":function(t,n,e){},8427:function(t,n,e){"use strict";var i=e("1c77"),s=e.n(i);s.a},8903:function(t,n,e){"use strict";var i=e("2829"),s=e.n(i);s.a},d639:function(t,n,e){"use strict";var i=e("7c7c"),s=e.n(i);s.a},f7ce:function(t,n,e){}});
//# sourceMappingURL=app.8fc664f0.js.map