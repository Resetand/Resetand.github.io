(function(t){function e(e){for(var i,o,n=e[0],l=e[1],c=e[2],m=0,f=[];m<n.length;m++)o=n[m],a[o]&&f.push(a[o][0]),a[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],i=!0,n=1;n<s.length;n++){var l=s[n];0!==a[l]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},a={app:0},r=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("27fb"),a=s.n(i);a.a},"27fb":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-wrap",attrs:{id:"app"}},[s("transition",{attrs:{name:"slide-fade"}},[s("time-edit",{directives:[{name:"show",rawName:"v-show",value:t.editIsOpen,expression:"editIsOpen"}],attrs:{"time-default":t.timeDefault},on:{save:t.changeDefaultTimeValues,close:function(e){t.editIsOpen=!t.editIsOpen}}})],1),s("progress-bar",{attrs:{state:t.currentState(),"time-default":t.timeDefault,"current-time":t.current,colors:t.colors}}),s("div",{class:{stateDisable:!t.isWorking},style:{color:t.colors[t.currentState()]},attrs:{id:"state"}},[t._v(t._s(t.stateContent))]),s("div",{staticClass:"timer"},[s("button",{staticClass:"edit",attrs:{id:"edit",title:"Change settings"},on:{click:function(e){t.editIsOpen=!t.editIsOpen}}}),s("span",{staticClass:"timer-main",attrs:{id:"time"}},[t._v(t._s(t.toDisplay)+" ")]),s("div",{staticClass:"timer-btns"},[s("button",{staticClass:"btn",class:[t.isWorking?"pause-btn":"start-btn"],on:{click:t.toggleTimer}})]),s("div",{staticClass:"states"},[s("button",{staticClass:"btn state-btn state-btn_work",attrs:{title:"Work state"},on:{click:function(e){return t.setState("work")}}},[t._v("Code !")]),s("button",{staticClass:"btn state-btn state-btn_coffee",attrs:{title:"Long Rest"},on:{click:function(e){return t.setState("coffee")}}},[t._v("Coffee Brake?")]),s("button",{staticClass:"btn state-btn state-btn_rest",attrs:{title:"Short Rest"},on:{click:function(e){return t.setState("rest")}}},[t._v("Brake?")])])]),s("a",{staticClass:"about-pomodoro",attrs:{href:"https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4_%D0%BF%D0%BE%D0%BC%D0%B8%D0%B4%D0%BE%D1%80%D0%B0"}},[s("svg",{staticClass:"info-svg",staticStyle:{"enable-background":"new 0 0 401.998 401.998"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"512",height:"512",viewBox:"0 0 401.998 401.998","xml:space":"preserve"}},[s("g",[s("path",{staticClass:"active-path",staticStyle:{fill:"#0F0E0E"},attrs:{d:"M164.454,91.363h73.098c4.945,0,9.226-1.807,12.847-5.424c3.61-3.614,5.421-7.898,5.421-12.847V18.274    c0-4.948-1.811-9.229-5.428-12.85C246.777,1.812,242.49,0,237.544,0h-73.091c-4.946,0-9.229,1.812-12.847,5.424    c-3.615,3.617-5.424,7.902-5.424,12.85v54.818c0,4.949,1.809,9.233,5.424,12.847C155.224,89.556,159.507,91.363,164.454,91.363z","data-original":"#000000","data-old_color":"#111111"}}),s("path",{staticClass:"active-path",staticStyle:{fill:"#0F0E0E"},attrs:{d:"M286.936,334.331c-3.613-3.617-7.897-5.427-12.847-5.427h-18.274V164.452c0-4.947-1.807-9.229-5.421-12.845    c-3.62-3.617-7.904-5.426-12.847-5.426H127.912c-4.949,0-9.231,1.809-12.847,5.426c-3.618,3.616-5.424,7.898-5.424,12.845v36.547    c0,4.946,1.807,9.231,5.424,12.845c3.615,3.621,7.898,5.428,12.847,5.428h18.274v109.633h-18.274    c-4.949,0-9.231,1.81-12.847,5.427c-3.618,3.614-5.424,7.898-5.424,12.847v36.546c0,4.948,1.807,9.232,5.424,12.854    c3.615,3.61,7.898,5.421,12.847,5.421h146.177c4.949,0,9.233-1.811,12.847-5.421c3.614-3.621,5.421-7.905,5.421-12.854v-36.546    C292.357,342.229,290.56,337.945,286.936,334.331z","data-original":"#000000","data-old_color":"#111111"}})])]),t._v("\n    What is pomodoro ?")])],1)},r=[],o=s("7016"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"progress"},[s("span",{staticClass:"progress-bar",style:t.width,attrs:{id:"progressBar"}})])},l=[],c={props:{currentTime:null,state:null,timeDefault:null,colors:null},computed:{width(){let t=this.timeDefault[this.state];return{backgroundColor:this.colors[this.state],width:100-this.currentTime/t*100+"%"}}},methods:{}},u=c,m=s("2877"),f=Object(m["a"])(u,n,l,!1,null,"0c207f15",null),h=f.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"edit-modal",attrs:{id:"editModal"}},[s("button",{staticClass:"btn  btn-close",attrs:{id:"close"},on:{click:t.closeModal}},[t._v("×")]),t._l(t.TempTimeDefault,function(e,i){return s("div",{key:i},[s("h2",{staticClass:"edit-block__title"},[t._v(t._s(i[0].toUpperCase()+i.slice(1))+" Time")]),s("div",{staticClass:"edit-block"},[s("button",{staticClass:"edit-block__btn plus",on:{click:function(e){return t.plus(i)}}},[t._v("+")]),s("input",{staticClass:"edit-block__time min",attrs:{maxlength:"2"},domProps:{value:e.m<10?"0"+e.m:e.m},on:{blur:function(e){return t.checkValue(e,i,"m")},focus:function(e){return t.resetValue(e,i,"m")}}}),s("span",{staticClass:"sep"},[t._v(":")]),s("input",{staticClass:"edit-block__time sec",attrs:{maxlength:"2"},domProps:{value:e.s<10?"0"+e.s:e.s},on:{blur:function(e){return t.checkValue(e,i,"s")},focus:function(e){return t.resetValue(e,i,"s")}}}),s("button",{staticClass:"edit-block__btn minus",on:{click:function(e){return t.minus(i)}}},[t._v("-")])])])}),s("button",{staticClass:"btn btn-save",attrs:{id:"saveData"},on:{click:t.save}},[t._v("Save")])],2)},d=[];var v={props:{timeDefault:null},data(){return{TempTimeDefault:{work:{m:Math.floor(this.timeDefault.work/60),s:Math.floor(this.timeDefault.work%60)},rest:{m:Math.floor(this.timeDefault.rest/60),s:Math.floor(this.timeDefault.rest%60)},coffee:{m:Math.floor(this.timeDefault.coffee/60),s:Math.floor(this.timeDefault.coffee%60)}}}},methods:{plus(t){this.TempTimeDefault[t].m<99&&this.TempTimeDefault[t].m++},minus(t){this.TempTimeDefault[t].m>0&&this.TempTimeDefault[t].m--},resetValue(t,e,s){setTimeout(()=>{t.target.value=""},1)},checkValue(t,e,s){console.log(s);let i=t.target.value;""!==i?(i=parseInt(i),isNaN(i)?(setTimeout(()=>{t.target.value="00"},1),this.TempTimeDefault[e][s]=0):i<10?(setTimeout(()=>{t.target.value="0"+i},1),this.TempTimeDefault[e][s]=i):"s"===s?i<60?(this.TempTimeDefault[e][s]=i,setTimeout(()=>{t.target.value=i},1)):(this.TempTimeDefault[e][s]=59,setTimeout(()=>{t.target.value=59},1)):"m"===s?i<100?(this.TempTimeDefault[e][s]=i,setTimeout(()=>{t.target.value=i},1)):(this.TempTimeDefault[e][s]=99,setTimeout(()=>{t.target.value=99},1)):(setTimeout(()=>{t.target.value="00"},1),this.TempTimeDefault[e][s]=0)):setTimeout(()=>{i=this.TempTimeDefault[e][s],t.target.value=i<10?"0"+i:i},1)},closeModal(){this.$emit("close")},save(){this.$emit("save",{work:60*this.TempTimeDefault.work.m+this.TempTimeDefault.work.s,rest:60*this.TempTimeDefault.rest.m+this.TempTimeDefault.rest.s,coffee:60*this.TempTimeDefault.coffee.m+this.TempTimeDefault.coffee.s})}}},g=v,b=Object(m["a"])(g,p,d,!1,null,"f191d3ea",null),k=b.exports;function T(t){var e=document.createElement("link"),s=document.getElementById("dynamic-favicon");e.id="dynamic-favicon",e.rel="shortcut icon",e.href=t,s&&document.head.removeChild(s),document.head.appendChild(e)}i["a"].component("progress-bar",h),i["a"].component("time-edit",k);class D{constructor(t){this._storageKey=t}load(){const t=localStorage.getItem(this._storageKey),e=JSON.parse(t);return e||!1}save(t){const e=JSON.stringify(t);localStorage.setItem(this._storageKey,e)}}const w=new D("vue-pomodoro-timer"),C=w.load()?w.load():{work:1500,rest:300,coffee:900};var _={name:"app",data(){return{timeDefault:C,states:{work:!1,rest:!1,coffee:!1},colors:{work:"rgb(210, 73, 74)",rest:"rgb(70, 161, 47)",coffee:"rgb(17, 177, 206)"},stateContent:"",timerId:null,pomodoroCounter:0,current:0,isWorking:!1,editIsOpen:!1}},created:function(){this.setState("work")},computed:{toDisplay(){let t=Math.floor(this.current/60),e=Math.floor(this.current%60),s=`${t<10?"0"+t:t} : ${e<10?"0"+e:e}`;return s}},methods:{tick(){this.current--},working(){this.current>0&&this.current--;const t=o["b"](()=>{this.current>0?this.tick():this.nextState()},1e3);return t},nextState(){"work"===this.currentState()?0!==this.pomodoroCounter&&this.pomodoroCounter%4===0?this.setState("coffee"):this.setState("rest"):(this.setState("work"),this.pomodoroCounter++)},setState(t){Object.keys(this.states).forEach(t=>{this.states[t]=!1}),this.states[t]=!0},currentState(){let t=!1;return Object.keys(this.states).forEach(e=>{this.states[e]&&(t=e)}),t},toggleTimer(){this.isWorking?(this.isWorking=!1,o["a"](this.timerId)):(this.isWorking=!0,this.timerId=this.working())},changeStateContent(){switch(this.currentState()){case"work":this.stateContent="Code time !";break;case"rest":this.stateContent="Time to rest";break;case"coffee":this.stateContent="Coffee time";break}},changeIcon(t){T("work"===t?"/src/assets/img/work.ico":"/src/assets/img/rest.ico")},changeDefaultTimeValues(t){this.editIsOpen=!this.editIsOpen,this.timeDefault=t,this.setState(this.currentState()),w.save({work:this.timeDefault.work,rest:this.timeDefault.rest,coffee:this.timeDefault.coffee})}},watch:{states:{handler:function(){this.current=this.timeDefault[this.currentState()],this.changeStateContent(),this.changeIcon(this.currentState())},deep:!0},current:function(){this.isWorking?document.title=this.toDisplay:document.title="Pomodoro Timer"}}},S=_,y=(s("034f"),Object(m["a"])(S,a,r,!1,null,null,null)),O=y.exports;i["a"].config.productionTip=!1,new i["a"]({render:t=>t(O)}).$mount("#app")}});
//# sourceMappingURL=app.3ab9c597.js.map