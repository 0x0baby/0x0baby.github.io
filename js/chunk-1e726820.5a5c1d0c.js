(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e726820"],{"00b4":function(t,e,n){"use strict";n("ac1f");var r=n("23e7"),o=n("da84"),i=n("c65b"),a=n("e330"),c=n("1626"),s=n("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),l=o.Error,f=a(/./.test);r({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!c(e))return f(this,t);var n=i(e,this,t);if(null!==n&&!s(n))throw new l("RegExp exec method returned something other than an Object or null");return!!n}})},"3a19":function(t,e,n){"use strict";n("79d9")},"4df4":function(t,e,n){"use strict";var r=n("da84"),o=n("0366"),i=n("c65b"),a=n("7b0b"),c=n("9bdd"),s=n("e95a"),u=n("68ee"),l=n("07fa"),f=n("8418"),d=n("9a1f"),p=n("35a1"),h=r.Array;t.exports=function(t){var e=a(t),n=u(this),r=arguments.length,y=r>1?arguments[1]:void 0,v=void 0!==y;v&&(y=o(y,r>2?arguments[2]:void 0));var m,g,b,k,w,x,S=p(e),T=0;if(!S||this==h&&s(S))for(m=l(e),g=n?new this(m):h(m);m>T;T++)x=v?y(e[T],T):e[T],f(g,T,x);else for(k=d(e,S),w=k.next,g=n?new this:[];!(b=i(w,k)).done;T++)x=v?c(k,y,[b.value,T],!0):b.value,f(g,T,x);return g.length=T,g}},7841:function(t,e,n){},"79d9":function(t,e,n){},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("d039"),a=n("e8b5"),c=n("861d"),s=n("7b0b"),u=n("07fa"),l=n("8418"),f=n("65f0"),d=n("1dde"),p=n("b622"),h=n("2d00"),y=p("isConcatSpreadable"),v=9007199254740991,m="Maximum allowed index exceeded",g=o.TypeError,b=h>=51||!i((function(){var t=[];return t[y]=!1,t.concat()[0]!==t})),k=d("concat"),w=function(t){if(!c(t))return!1;var e=t[y];return void 0!==e?!!e:a(t)},x=!b||!k;r({target:"Array",proto:!0,forced:x},{concat:function(t){var e,n,r,o,i,a=s(this),c=f(a,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?a:arguments[e],w(i)){if(o=u(i),d+o>v)throw g(m);for(n=0;n<o;n++,d++)n in i&&l(c,d,i[n])}else{if(d>=v)throw g(m);l(c,d++,i)}return c.length=d,c}})},"9bdd":function(t,e,n){var r=n("825a"),o=n("2a62");t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(a){o(t,"throw",a)}}},a630:function(t,e,n){var r=n("23e7"),o=n("4df4"),i=n("1c7e"),a=!i((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:a},{from:o})},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.8
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(){var t={134:function(t,e,n){"use strict";n.d(e,{default:function(){return _}});var r=n(279),o=n.n(r),i=n(370),a=n.n(i),c=n(817),s=n.n(c);function u(t){return u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),t}var p=function(){function t(e){l(this,t),this.resolveOptions(e),this.initSelection()}return d(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"createFakeElement",value:function(){var t="rtl"===document.documentElement.getAttribute("dir");this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var e=window.pageYOffset||document.documentElement.scrollTop;return this.fakeElem.style.top="".concat(e,"px"),this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.fakeElem}},{key:"selectFake",value:function(){var t=this,e=this.createFakeElement();this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.container.appendChild(e),this.selectedText=s()(e),this.copyText(),this.removeFake()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=s()(this.target),this.copyText()}},{key:"copyText",value:function(){var t;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==u(t)||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),h=p;function y(t){return y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function g(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),t}function b(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}function k(t,e){return k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},k(t,e)}function w(t){var e=T();return function(){var n,r=E(t);if(e){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(t,e){return!e||"object"!==y(e)&&"function"!==typeof e?S(t):e}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function T(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function R(t,e){var n="data-clipboard-".concat(t);if(e.hasAttribute(n))return e.getAttribute(n)}var A=function(t){b(n,t);var e=w(n);function n(t,r){var o;return v(this,n),o=e.call(this),o.resolveOptions(r),o.listenClick(t),o}return g(n,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===y(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=a()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new h({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return R("action",t)}},{key:"defaultTarget",value:function(t){var e=R("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return R("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),n}(o()),_=A},828:function(t){var e=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}function r(t,n){while(t&&t.nodeType!==e){if("function"===typeof t.matches&&t.matches(n))return t;t=t.parentNode}}t.exports=r},438:function(t,e,n){var r=n(828);function o(t,e,n,r,o){var i=a.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}function i(t,e,n,r,i){return"function"===typeof t.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}function a(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=i},879:function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},370:function(t,e,n){var r=n(879),o=n(438);function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return a(t,e,n);if(r.nodeList(t))return c(t,e,n);if(r.string(t))return s(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function c(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function s(t,e,n){return o(document.body,t,e,n)}t.exports=i},817:function(t){function e(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}t.exports=e},279:function(t){function e(){}e.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=e,t.exports.TinyEmitter=e}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}return function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),n(134)}().default}))},ccb6:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("base-layout",[n("h2",{staticClass:"text-center my-30px"},[t._v(" 总收益: "),n("strong",[t._v(" "+t._s(t.formattedTotal)+" milk（约等于 "+t._s(t.totalUsd)+" usd） ")]),n("br")]),n("br"),n("a-row",{attrs:{gutter:[16,16]}},[n("a-col",{attrs:{md:12,sm:24}},[n("a-alert",{staticClass:"h-284px wallet-card",attrs:{type:"info",message:"钱包地址"},scopedSlots:t._u([{key:"description",fn:function(){return[t.account?[n("span",{staticStyle:{cursor:"pointer","margin-right":"5px"},attrs:{id:"account","data-clipboard-text":t.account}},[t._v(" "+t._s(t.account)+" ")]),t.copyStatus?n("span",{staticStyle:{color:"#19be6b"}},[n("a-icon",{attrs:{type:"check-circle"}}),t._v(" 复制成功 ")],1):n("a-tooltip",{attrs:{content:"点击复制",placement:"right"}},[n("a-icon",{staticStyle:{color:"#1890ff",cursor:"pointer"},attrs:{id:"copy-btn",type:"copy","data-clipboard-text":t.account,size:"20"}})],1)]:n("span",[t._v("暂无地址信息")])]},proxy:!0}])})],1),n("a-col",{attrs:{md:12,sm:24}},[n("a-alert",{attrs:{type:"warning",message:"收菜说明"},scopedSlots:t._u([{key:"description",fn:function(){return[n("div",{staticStyle:{"word-break":"break-all"}},[n("p",[t._v("1. 收菜服务直接与官方合约交互，无安全风险，认准官方收菜合约")])]),n("p",[t._v(" 2. 本服务每十张卡需要支付 0.001 bnb (0.5u 左右)，不足十张按十张计算 ")]),n("p",[t._v(" 3. 选中卡进行收菜， "),n("strong",[t._v(" 收菜时会先向本服务转服务费，成功之后会批量弹出收菜交易 ")])])]},proxy:!0}])})],1)],1),n("br"),n("a-row",[n("a-col",[n("PropsTable",{attrs:{"data-source":t.propsDataSource,loading:t.loading},on:{fire:t.getAward,harvestAll:t.getAllAward},model:{value:t.selectedTokens,callback:function(e){t.selectedTokens=e},expression:"selectedTokens"}})],1)],1)],1)},o=[];n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("fb6a"),n("b0c0"),n("a630"),n("ac1f"),n("00b4");function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}function c(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=a(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,i=t},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(s)throw i}}}}var s=n("1da1"),u=(n("96cf"),n("b680"),n("25f0"),n("9c9e")),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"text-center m-0"},[n("a-space",{staticClass:"flex-wrap"},[n("a-button",{staticClass:"mb-16px",attrs:{type:"primary"},on:{click:function(e){return t.$emit("fire")}}},[t._v(" 选中收菜 ")]),n("a-button",{staticClass:"mb-16px",attrs:{disabled:!t.groupRecords.gt2kRecords.length,type:"primary"},on:{click:t.exec2k}},[t._v(" 收2000 ")]),n("a-button",{staticClass:"mb-16px",attrs:{type:"primary"},on:{click:t.execAll}},[t._v(" 全收 ")])],1)],1),n("a-table",{attrs:{bordered:"",loading:t.loading,columns:t.tableColumns,"data-source":t.dataSourceWithKey,scroll:{x:!0},pagination:!1,"row-selection":{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange}},scopedSlots:t._u([{key:"tokenId",fn:function(e,r){return[n("div",{staticClass:"flex-center"},[n("span",{attrs:{title:r.tokenId}},[t._v(t._s(t.displayOptimize(r.tokenId)))]),n("a-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"small",id:"btn-"+r.key,"data-clipboard-text":r.tokenId},on:{click:function(e){return t.copyAddr(r.key)}}},[t._v(" 复制 ")])],1)]}},{key:"workType",fn:function(e,r){return[1===r.workType?n("a-tag",{attrs:{color:"#1890ff"}},[t._v("全职")]):2===r.workType?n("a-tag",{attrs:{color:"#faad14"}},[t._v("兼职")]):t._e()]}}])})],1)},f=[],d=n("5530"),p=(n("d81d"),n("99af"),n("b311")),h=n.n(p),y=n("ed08"),v={props:{dataSource:{type:Array,required:!0},loading:{type:Boolean,default:!0},value:{type:Array,required:!0}},data:function(){return{selectedRowKeys:[]}},computed:{tableColumns:function(){return[{title:"token id",width:100,scopedSlots:{customRender:"tokenId"}},{title:"工作",slot:"workType",width:90,scopedSlots:{customRender:"workType"}},{title:"力量",width:90,dataIndex:"strength",sorter:function(t,e){return t.strength-e.strength},sortDirections:["ascend","descend"]},{title:"敏捷",width:90,dataIndex:"agility",sorter:function(t,e){return t.agility-e.agility},sortDirections:["ascend","descend"]},{title:"体质",width:90,dataIndex:"physique",sorter:function(t,e){return t.physique-e.physique},sortDirections:["ascend","descend"]},{title:"意志",width:90,dataIndex:"volition",sorter:function(t,e){return t.volition-e.volition},sortDirections:["ascend","descend"]},{title:"智力",width:90,dataIndex:"brains",sorter:function(t,e){return t.brains-e.brains},sortDirections:["ascend","descend"]},{title:"精神",width:90,dataIndex:"charm",sorter:function(t,e){return t.charm-e.charm},sortDirections:["ascend","descend"]},{title:"收益",width:100,dataIndex:"gold",sorter:function(t,e){return t.gold-e.gold},sortDirections:["ascend","descend"]}]},dataSourceWithKey:function(){return this.dataSource.map((function(t){return Object(d["a"])(Object(d["a"])({},t),{},{key:Object(y["a"])(),gold:t.gold})}))},groupRecords:function(){var t,e=[],n=[],r=[],o=c(this.dataSourceWithKey);try{for(o.s();!(t=o.n()).done;){var i=t.value;1===i.workType?e.push(i):n.push(i),i.gold>=2e3&&r.push(i)}}catch(a){o.e(a)}finally{o.f()}return{fullTimeRecords:e,partTimeRecords:n,gt2kRecords:r}}},methods:{onSelectChange:function(t,e){this.selectedRowKeys=t,this.selectedRows=e,this.$emit("input",e)},displayOptimize:function(t){var e=/(\w{4}).+(\w{4})/.exec(t);return"".concat(e[1],"....").concat(e[2])},copyAddr:function(t){var e=this,n=new h.a("#btn-".concat(t));n.on("success",(function(){e.$message.success("复制成功"),n.destroy()}))},execFullTime:function(){this.selectedRowKeys=this.groupRecords.fullTimeRecords.map((function(t){return t.key})),this.fireWithRecords(this.groupRecords.fullTimeRecords)},execPartTime:function(){this.selectedRowKeys=this.groupRecords.partTimeRecords.map((function(t){return t.key})),this.fireWithRecords(this.groupRecords.partTimeRecords)},exec2k:function(){this.selectedRowKeys=this.groupRecords.gt2kRecords.map((function(t){return t.key})),this.fireWithRecords(this.groupRecords.gt2kRecords)},execAll:function(){this.selectedRowKeys=this.dataSourceWithKey.map((function(t){return t.key})),this.$emit("input",this.dataSourceWithKey),this.$emit("harvestAll")},fireWithRecords:function(t){console.log("records:",t),this.$emit("input",t),this.$emit("fire")}}},m=v,g=(n("3a19"),n("2877")),b=Object(g["a"])(m,l,f,!1,null,"56539590",null),k=b.exports,w={fullTime:1,partTime:2},x={name:"Harvest",mixins:[u["a"]],components:{PropsTable:k},data:function(){return{rate:0,total:0,tokens:[],selectedTokens:[],loading:!0,feeRate:10,baseFee:.001,propsDataSource:[],copyStatus:0,goldPrice:0,work:null,partTimeWork:null,playContract:null,feeContract:null}},computed:{formattedTotal:function(){var t=+this.total;return t?t.toFixed(2):t},totalUsd:function(){var t=+this.total;return t?(t*this.goldPrice).toFixed(2):0}},created:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.initWeb3Account();case 2:if(t.account){e.next=4;break}return e.abrupt("return");case 4:return t.initContract(),e.next=7,t.getGoldInfo();case 7:case"end":return e.stop()}}),e)})))()},mounted:function(){var t=this;window.getProperty=this.getProperty;var e=new h.a("#account"),n=new h.a("#copy-btn"),r=function(){t.copyStatus=!0,setTimeout((function(){t.copyStatus=!1}),3e3)};n.on("success",r),e.on("success",r)},methods:{getGoldInfo:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r,o,i,a,s,u,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.web3.utils.toBN(0),r=[],e.next=4,t.getWorkingTokenIds(t.account);case 4:o=e.sent,i=c(o),e.prev=6,i.s();case 8:if((a=i.n()).done){e.next=23;break}return s=a.value,e.next=12,t.getProperty(s);case 12:return u=e.sent,e.next=15,t.getNftAward(s);case 15:l=e.sent,l=t.web3.utils.toBN(l),t.tokens.push({token_id:s,gold:t.web3.utils.fromWei(l)}),u.gold=t.web3.utils.fromWei(l),u.workType=w.partTime,r.push(u);case 21:e.next=8;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e["catch"](6),i.e(e.t0);case 28:return e.prev=28,i.f(),e.finish(28);case 31:t.propsDataSource=r,t.loading=!1,t.total=t.web3.utils.fromWei(n.toString(),"ether");case 34:case"end":return e.stop()}}),e,null,[[6,25,28,31]])})))()},calculateFee:function(t){return"".concat(Math.ceil(t.length/this.feeRate)*this.baseFee)},getAllAward:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.selectedTokens,t.payFee(n,(function(e){void 0==e?t.harvestAll():console.log("error: ",e)})).catch((function(){t.$message.error("支付失败")}));case 2:case"end":return e.stop()}}),e)})))()},getAward:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.selectedTokens,n.length){e.next=4;break}return t.$message.error("至少选择一项后操作"),e.abrupt("return");case 4:t.payFee(n,(function(e){if(void 0==e){var r,o=c(n);try{for(o.s();!(r=o.n()).done;){var i=r.value;t.harvest(i.tokenId)}}catch(a){o.e(a)}finally{o.f()}}else console.log("error: ",e)})).catch((function(){t.$message.error("支付失败")}));case 5:case"end":return e.stop()}}),e)})))()},payFee:function(t,e){var n=this.calculateFee(t);return this.web3.eth.sendTransaction({from:this.account,to:"0x4d09c2578690c7D4285D616f3eB1F53128148738",value:this.web3.utils.toWei(n)},e)}}},S=x,T=(n("edf8"),Object(g["a"])(S,r,o,!1,null,"26ab7f5c",null));e["default"]=T.exports},d28b:function(t,e,n){var r=n("746f");r("iterator")},e01a:function(t,e,n){"use strict";var r=n("23e7"),o=n("83ab"),i=n("da84"),a=n("e330"),c=n("1a2d"),s=n("1626"),u=n("3a9b"),l=n("577e"),f=n("9bf2").f,d=n("e893"),p=i.Symbol,h=p&&p.prototype;if(o&&s(p)&&(!("description"in h)||void 0!==p().description)){var y={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:l(arguments[0]),e=u(h,this)?new p(t):void 0===t?p():p(t);return""===t&&(y[e]=!0),e};d(v,p),v.prototype=h,h.constructor=v;var m="Symbol(test)"==String(p("test")),g=a(h.toString),b=a(h.valueOf),k=/^Symbol\((.*)\)[^)]+$/,w=a("".replace),x=a("".slice);f(h,"description",{configurable:!0,get:function(){var t=b(this),e=g(t);if(c(y,t))return"";var n=m?x(e,7,-1):w(e,k,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:v})}},edf8:function(t,e,n){"use strict";n("7841")},fb6a:function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),i=n("e8b5"),a=n("68ee"),c=n("861d"),s=n("23cb"),u=n("07fa"),l=n("fc6a"),f=n("8418"),d=n("b622"),p=n("1dde"),h=n("f36a"),y=p("slice"),v=d("species"),m=o.Array,g=Math.max;r({target:"Array",proto:!0,forced:!y},{slice:function(t,e){var n,r,o,d=l(this),p=u(d),y=s(t,p),b=s(void 0===e?p:e,p);if(i(d)&&(n=d.constructor,a(n)&&(n===m||i(n.prototype))?n=void 0:c(n)&&(n=n[v],null===n&&(n=void 0)),n===m||void 0===n))return h(d,y,b);for(r=new(void 0===n?m:n)(g(b-y,0)),o=0;y<b;y++,o++)y in d&&f(r,o,d[y]);return r.length=o,r}})}}]);
//# sourceMappingURL=chunk-1e726820.5a5c1d0c.js.map