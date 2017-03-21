!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueSelect=e():t.VueSelect=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="/",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.mixins=e.VueSelect=void 0;var i=n(61),r=o(i),s=n(31),a=o(s);e.default=r.default,e.VueSelect=r.default,e.mixins=a.default},function(t,e,n){var o=n(25)("wks"),i=n(29),r=n(2).Symbol,s="function"==typeof r,a=t.exports=function(t){return o[t]||(o[t]=s&&r[t]||(s?r:i)("Symbol."+t))};a.store=o},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var o=n(10);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){t.exports=!n(23)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(7),i=n(12);t.exports=n(4)?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var o=n(3),i=n(39),r=n(55),s=Object.defineProperty;e.f=n(4)?Object.defineProperty:function(t,e,n){if(o(t),e=r(e,!0),o(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var o=n(25)("keys"),i=n(29);t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e){"use strict";t.exports={props:{loading:{type:Boolean,default:!1},onSearch:{type:Function,default:function(t,e){}},debounce:{type:Number,default:0}},watch:{search:function(){this.refreshOptions()}},methods:{toggleLoading:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return null==t?this.mutableLoading=!this.mutableLoading:this.mutableLoading=t},refreshOptions:function(){this.open&&this.onSearch&&this.onSearch(this.search,this.toggleLoading)}}}},function(t,e){"use strict";t.exports={watch:{typeAheadPointer:function(){this.open&&this.$refs.dropdownMenu&&this.maybeAdjustScroll()}},methods:{maybeAdjustScroll:function(){var t=this.pixelsToPointerTop(),e=this.pixelsToPointerBottom();return t<=this.viewport().top?this.scrollTo(t):e>=this.viewport().bottom?this.scrollTo(this.viewport().top+this.pointerHeight()):void 0},pixelsToPointerTop:function t(){var t=0;this.typeAheadPointer>=this.$refs.dropdownMenu.children.length&&(this.typeAheadPointer=-1);for(var e=0;e<this.typeAheadPointer;e++)t+=this.$refs.dropdownMenu.children[e].offsetHeight;return t},pixelsToPointerBottom:function(){return this.pixelsToPointerTop()+this.pointerHeight()},pointerHeight:function(){var t=this.$refs.dropdownMenu.children[this.typeAheadPointer];return t?t.offsetHeight:0},viewport:function(){return{top:this.$refs.dropdownMenu.scrollTop,bottom:this.$refs.dropdownMenu.offsetHeight+this.$refs.dropdownMenu.scrollTop}},scrollTo:function(t){return this.$refs.dropdownMenu.scrollTop=t}}}},function(t,e){"use strict";t.exports={data:function(){return{typeAheadPointer:-1}},watch:{filteredOptions:function(t,e){var n=this;this.typeAheadPointer>0?this.typeAheadPointer=t.findIndex(function(t){return t[n.valueField]===e[n.typeAheadPointer][n.valueField]}):this.typeAheadPointer=0}},methods:{typeAheadUp:function(t){if((!t||this.open)&&(t&&t.stopPropagation(),!this.disabled)){var e=this.filteredOptions.map(function(t,e){return{vselectOptionType:t.vselectOptionType,index:e}}).filter(function(t){return!t.vselectOptionType}).map(function(t){return t.index}),n=e.indexOf(this.typeAheadPointer);n>0?this.typeAheadPointer=e[n-1]:this.onScrollEnd()}},typeAheadDown:function(t){if((!t||this.open)&&(t&&t.stopPropagation(),this.open=!0,!this.disabled)){var e=this.filteredOptions.map(function(t,e){return{vselectOptionType:t.vselectOptionType,index:e}}).filter(function(t){return!t.vselectOptionType}).map(function(t){return t.index}),n=e.indexOf(this.typeAheadPointer);n<e.length-1?this.typeAheadPointer=e[n+1]:this.onScrollEnd()}},typeAheadSelect:function(){this.disabled||(this.open?this.filteredOptions[this.typeAheadPointer]?this.select(this.filteredOptions[this.typeAheadPointer]):this.taggable&&this.search.length&&this.select(this.search):this.open=!0)}}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(34);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var o=n(10),i=n(2).document,r=o(i)&&o(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(2),i=n(8),r=n(19),s=n(6),a="prototype",l=function(t,e,n){var u,c,p,f=t&l.F,d=t&l.G,h=t&l.S,v=t&l.P,m=t&l.B,g=t&l.W,b=d?i:i[e]||(i[e]={}),y=b[a],x=d?o:h?o[e]:(o[e]||{})[a];d&&(n=e);for(u in n)c=!f&&x&&void 0!==x[u],c&&u in b||(p=c?x[u]:n[u],b[u]=d&&"function"!=typeof x[u]?n[u]:m&&c?r(p,o):g&&x[u]==p?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e[a]=t[a],e}(p):v&&"function"==typeof p?r(Function.call,p):p,v&&((b.virtual||(b.virtual={}))[u]=p,t&l.R&&y&&!y[u]&&s(y,u,p)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var o=n(7).f,i=n(5),r=n(1)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,r)&&o(t,r,{configurable:!0,value:e})}},function(t,e,n){var o=n(2),i="__core-js_shared__",r=o[i]||(o[i]={});t.exports=function(t){return r[t]||(r[t]={})}},function(t,e,n){var o=n(40),i=n(9);t.exports=function(t){return o(i(t))}},function(t,e,n){var o=n(14),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},function(t,e,n){var o=n(9);t.exports=function(t){return Object(o(t))}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(32),r=o(i),s=n(16),a=o(s),l=n(17),u=o(l),c=n(15),p=o(c);e.default={mixins:[a.default,u.default,p.default],props:{disabled:{type:Boolean,default:!1},showSelectedOnTop:{type:Boolean,default:!0},name:{type:String,default:""},translations:{type:Object,default:function(){return{}}},allowClear:{type:Boolean,default:!0},values:{default:function(){return[]}},valueField:{default:"value"},filterField:{default:"value"},maxlength:{default:255},options:{type:Array,default:function(){return[]}},maxHeight:{type:String,default:"400px"},minWidth:{type:String,default:"0"},onScrollEnd:{type:Function,default:function(){this.onSearch&&this.onSearch(this.search,this.toggleLoading,this.typeAheadPointer)}},onCloseDropdown:{type:Function,default:function(){}},searchable:{type:Boolean,default:!0},buildPlaceholder:{type:Function,default:function(t){var e=this;return Array.isArray(t)?t.length>0?t.map(function(t){return t[e.valueField]}).join(", "):"":t?""+t[this.valueField]:""}},multiple:{type:Boolean,default:!1},transition:{type:String,default:"expand"},clearSearchOnSelect:{type:Boolean,default:!0},onChange:{type:Function,default:function(t){this.$emit("input",t)}},taggable:{type:Boolean,default:!1},pushTags:{type:Boolean,default:!1},resetOnOptionsChange:{type:Boolean,default:!1}},data:function(){return{search:"",focused:!1,open:!1,optionsOnTop:[],mutableValues:[],mutableOptions:[],mutableLoading:!1}},watch:{values:function(t){this.mutableValues=t},search:function(t){t&&(this.open=!0)},mutableValues:function(t,e){this.multiple?this.onChange?this.onChange(t):null:this.onChange&&t!==e?this.onChange(t):null},options:function(t){this.mutableOptions=t},mutableOptions:function(){!this.taggable&&this.resetOnOptionsChange&&(this.mutableValues=[])},multiple:function(t){this.mutableValues=[]},open:function(t,e){t!=e&&(this.open?(this.focus(),this.onSearch&&this.onSearch(this.search,this.toggleLoading)):(this.search="",this.updateOptionsOnTop(),this.onCloseDropdown()))}},created:function(){this.mutableValues=this.mutableValues,this.mutableOptions=this.options.slice(0),this.mutableLoading=this.loading},methods:{updateOptionsOnTop:function(){this.optionsOnTop=(0,r.default)(this.mutableValues)},onMouseOver:function(t,e){e.vselectOptionType||(this.typeAheadPointer=t)},translate:function(t){return this.translations[t]||t},isOptionVisibleByFilter:function(t){return!("string"==typeof t[this.filterField]&&(!this.onSearch||this.mutableLoading))||t[this.filterField].toLowerCase().indexOf(this.search)>-1},onFocus:function(){this.focused=!0},selectFiltered:function(){this.select(this.filteredOptions)},deselectFiltered:function(){this.deselect(this.filteredOptions)},onBlur:function(){this.focused=!1,this.open=!1},focus:function(){this.disabled||document.activeElement===this.$refs.search||this.$refs.search.focus()},toggle:function(t){this.isOptionSelected(t)?this.deselect(t):this.select(t)},clear:function(){this.mutableValues=[]},select:function(t){var e=this,n=[].concat(t).filter(function(t){return!t.vselectOptionType&&!e.isOptionSelected(t)});this.mutableValues=this.multiple?this.mutableValues.concat(n):n,this.clearSearchOnSelect&&!this.multiple&&(this.search=""),this.multiple||(this.open=!1)},deselect:function(t){var e=this;if(this.multiple){[].concat(t).forEach(function(t){var n=-1;e.mutableValues.forEach(function(o){o[e.valueField]===t[e.valueField]&&(n=o)});var o=e.mutableValues.indexOf(n);e.mutableValues.splice(o,1)})}else this.allowClear&&(this.mutableValues=[])},scroll:function(t){var e=t.currentTarget;this.checkIfScrolledToEnd(e)},handleMouseWheel:function(t){var e=t.currentTarget,n=Math.max(-1,Math.min(1,t.wheelDelta||-t.detail));n<0&&this.checkIfScrolledToEnd(e)},checkIfScrolledToEnd:function(t){t.scrollHeight!=this.prevScrollHeight&&t.scrollHeight-t.scrollTop<=t.offsetHeight&&(this.prevScrollHeight=t.scrollHeight,this.onScrollEnd())},toggleDropdown:function(t){this.open||this.disabled?this.open=!1:this.open=!0},isOptionSelected:function(t){var e=this;if(null!==this.mutableValues&&void 0!==this.mutableValues){var n=!1;return this.mutableValues.forEach(function(o){o[e.valueField]===t[e.valueField]&&(n=!0)}),n}return!1},isOptionOnTop:function(t){var e=this;if(null!==this.optionsOnTop&&void 0!==this.optionsOnTop){var n=!1;return this.optionsOnTop.forEach(function(o){o[e.valueField]===t[e.valueField]&&(n=!0)}),n}return!1},maybeDeleteValue:function(){this.allowClear&&0===this.$refs.search.value.length&&this.mutableValues.length>0&&this.deselect(this.mutableValues[this.mutableValues.length-1])},optionExists:function(t){var e=this;return this.mutableOptions.filter(function(n){return n[e.valueField]===t.valueField}).length>0}},computed:{preparedValues:function(){return this.multiple?this.mutableValues:this.mutableValues.length>0?this.mutableValues[0]:void 0},placeholder:function(){return this.buildPlaceholder(this.mutableValues)},selectedTagClasses:function(){return{"selected-tag":!0,single:!0}},spinnerClasses:function(){return{spinner:!0,"shifted-left":!this.isValueEmpty&&this.allowClear,single:!this.multiple}},dropdownClasses:function(){return{open:this.open,searchable:this.searchable,loading:this.mutableLoading}},dropdownMenuClasses:function(){return{"dropdown-menu-simple":"0"==this.minWidth,"dropdown-menu":!0}},filteredOptions:function(){var t=this,e=this.search.toLowerCase(),n=[];this.multiple&&this.showSelectedOnTop&&(n=n.concat(this.optionsOnTop));var o=this.mutableOptions;return this.multiple&&this.showSelectedOnTop&&(o=this.mutableOptions.filter(function(e){return!t.isOptionOnTop(e)})),n.length>0&&o.length>0&&(n=n.concat({vselectOptionType:"divider",vselectClientOnly:!0})),n=n.concat(o),this.taggable&&e.length&&!this.optionExists(e)&&n.unshift(e),n.filter(this.isOptionVisibleByFilter,this)},selectedOptions:function(){return this.mutableOptions.filter(this.isOptionSelected,this)},isValueEmpty:function(){var t=this;return 0===this.mutableValues.length||0===this.mutableValues.filter(function(e){return void 0!==e[t.valueField]}).length}}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(15),r=o(i),s=n(17),a=o(s),l=n(16),u=o(l);e.default={ajax:r.default,pointer:a.default,pointerScroll:u.default}},function(t,e,n){t.exports={default:n(33),__esModule:!0}},function(t,e,n){n(58),n(57),t.exports=n(8).Array.from},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var o=n(26),i=n(27),r=n(54);t.exports=function(t){return function(e,n,s){var a,l=o(e),u=i(l.length),c=r(s,u);if(t&&n!=n){for(;u>c;)if(a=l[c++],a!=a)return!0}else for(;u>c;c++)if((t||c in l)&&l[c]===n)return t||c||0;return!t&&-1}}},function(t,e,n){var o=n(18),i=n(1)("toStringTag"),r="Arguments"==o(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,n,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),i))?n:r?o(e):"Object"==(a=o(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,n){"use strict";var o=n(7),i=n(12);t.exports=function(t,e,n){e in t?o.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){t.exports=n(2).document&&document.documentElement},function(t,e,n){t.exports=!n(4)&&!n(23)(function(){return 7!=Object.defineProperty(n(20)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var o=n(18);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e,n){var o=n(11),i=n(1)("iterator"),r=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||r[i]===t)}},function(t,e,n){var o=n(3);t.exports=function(t,e,n,i){try{return i?e(o(n)[0],n[1]):e(n)}catch(e){var r=t.return;throw void 0!==r&&o(r.call(t)),e}}},function(t,e,n){"use strict";var o=n(47),i=n(12),r=n(24),s={};n(6)(s,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(s,{next:i(1,n)}),r(t,e+" Iterator")}},function(t,e,n){"use strict";var o=n(46),i=n(22),r=n(52),s=n(6),a=n(5),l=n(11),u=n(43),c=n(24),p=n(49),f=n(1)("iterator"),d=!([].keys&&"next"in[].keys()),h="@@iterator",v="keys",m="values",g=function(){return this};t.exports=function(t,e,n,b,y,x,w){u(n,e,b);var O,_,S,T=function(t){if(!d&&t in V)return V[t];switch(t){case v:return function(){return new n(this,t)};case m:return function(){return new n(this,t)}}return function(){return new n(this,t)}},C=e+" Iterator",P=y==m,A=!1,V=t.prototype,k=V[f]||V[h]||y&&V[y],F=k||T(y),M=y?P?T("entries"):F:void 0,j="Array"==e?V.entries||k:k;if(j&&(S=p(j.call(new t)),S!==Object.prototype&&(c(S,C,!0),o||a(S,f)||s(S,f,g))),P&&k&&k.name!==m&&(A=!0,F=function(){return k.call(this)}),o&&!w||!d&&!A&&V[f]||s(V,f,F),l[e]=F,l[C]=g,y)if(O={values:P?F:T(m),keys:x?F:T(v),entries:M},w)for(_ in O)_ in V||r(V,_,O[_]);else i(i.P+i.F*(d||A),e,O);return O}},function(t,e,n){var o=n(1)("iterator"),i=!1;try{var r=[7][o]();r.return=function(){i=!0},Array.from(r,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var r=[7],s=r[o]();s.next=function(){return{done:n=!0}},r[o]=function(){return s},t(r)}catch(t){}return n}},function(t,e){t.exports=!0},function(t,e,n){var o=n(3),i=n(48),r=n(21),s=n(13)("IE_PROTO"),a=function(){},l="prototype",u=function(){var t,e=n(20)("iframe"),o=r.length,i="<",s=">";for(e.style.display="none",n(38).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+s+"document.F=Object"+i+"/script"+s),t.close(),u=t.F;o--;)delete u[l][r[o]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[l]=o(t),n=new a,a[l]=null,n[s]=t):n=u(),void 0===e?n:i(n,e)}},function(t,e,n){var o=n(7),i=n(3),r=n(51);t.exports=n(4)?Object.defineProperties:function(t,e){i(t);for(var n,s=r(e),a=s.length,l=0;a>l;)o.f(t,n=s[l++],e[n]);return t}},function(t,e,n){var o=n(5),i=n(28),r=n(13)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),o(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var o=n(5),i=n(26),r=n(35)(!1),s=n(13)("IE_PROTO");t.exports=function(t,e){var n,a=i(t),l=0,u=[];for(n in a)n!=s&&o(a,n)&&u.push(n);for(;e.length>l;)o(a,n=e[l++])&&(~r(u,n)||u.push(n));return u}},function(t,e,n){var o=n(50),i=n(21);t.exports=Object.keys||function(t){return o(t,i)}},function(t,e,n){t.exports=n(6)},function(t,e,n){var o=n(14),i=n(9);t.exports=function(t){return function(e,n){var r,s,a=String(i(e)),l=o(n),u=a.length;return l<0||l>=u?t?"":void 0:(r=a.charCodeAt(l),r<55296||r>56319||l+1===u||(s=a.charCodeAt(l+1))<56320||s>57343?t?a.charAt(l):r:t?a.slice(l,l+2):(r-55296<<10)+(s-56320)+65536)}}},function(t,e,n){var o=n(14),i=Math.max,r=Math.min;t.exports=function(t,e){return t=o(t),t<0?i(t+e,0):r(t,e)}},function(t,e,n){var o=n(10);t.exports=function(t,e){if(!o(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!o(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var o=n(36),i=n(1)("iterator"),r=n(11);t.exports=n(8).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||r[o(t)]}},function(t,e,n){"use strict";var o=n(19),i=n(22),r=n(28),s=n(42),a=n(41),l=n(27),u=n(37),c=n(56);i(i.S+i.F*!n(45)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,p,f=r(t),d="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,m=void 0!==v,g=0,b=c(f);if(m&&(v=o(v,h>2?arguments[2]:void 0,2)),void 0==b||d==Array&&a(b))for(e=l(f.length),n=new d(e);e>g;g++)u(n,g,m?v(f[g],g):f[g]);else for(p=b.call(f),n=new d;!(i=p.next()).done;g++)u(n,g,m?s(p,v,[i.value,g],!0):i.value);return n.length=g,n}})},function(t,e,n){"use strict";var o=n(53)(!0);n(44)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){e=t.exports=n(60)(),e.push([t.id,'.v-select{position:relative;display:table;table-layout:fixed;width:100%}.v-select .disabled{cursor:not-allowed!important;background-color:#f8f8f8!important}.v-select .clear>span{height:26px;position:absolute;top:6px;right:14px;width:20px}.v-select .open-indicator{position:absolute;bottom:6px;right:10px;display:inline-block;cursor:pointer;pointer-events:all;transition:all .15s cubic-bezier(1,-.115,.975,.855);transition-timing-function:cubic-bezier(1,-.115,.975,.855);opacity:1;transition:opacity .1s}.v-select.loading .open-indicator{opacity:0}.v-select .open-indicator:before{border-color:rgba(60,60,60,.5);border-style:solid;border-width:.25em .25em 0 0;content:"";display:inline-block;height:10px;width:10px;vertical-align:top;transform:rotate(133deg);transition:all .15s cubic-bezier(1,-.115,.975,.855);transition-timing-function:cubic-bezier(1,-.115,.975,.855)}.v-select.open .open-indicator{bottom:1px}.v-select.open .open-indicator:before{transform:rotate(315deg)}.v-select .dropdown-toggle{display:block;padding:0;background-color:#fff;border:1px solid rgba(60,60,60,.26);border-radius:4px;white-space:nowrap;overflow:hidden}.v-select.searchable .dropdown-toggle{cursor:text}.v-select.open .dropdown-toggle{border-bottom:none;border-bottom-left-radius:0;border-bottom-right-radius:0}.v-select>.dropdown-menu{margin:0;width:100%;overflow-y:auto;border-top-left-radius:0}.v-select>.dropdown-menu>.dropdown-buttons{padding:5px}.v-select>.dropdown-menu>.dropdown-buttons>button:not(:first-child){margin-left:5px}.v-select>.dropdown-menu-simple{margin:0;width:100%;overflow-y:auto;border-top:none;border-top-left-radius:0;border-top-right-radius:0}.v-select .selected-tag{color:#333;margin:3px 1px 0 3px;padding:0 .25em;float:left;line-height:1.7em;overflow:hidden;text-overflow:ellipsis}.v-select .selected-tag.single{max-width:calc(100% - 20px - 2em);text-align:left}.v-select .selected-tag-content{display:block;text-overflow:ellipsis;overflow:hidden}.v-select .selected-tag.multiple{background-color:#f0f0f0;border:1px solid #ccc;border-radius:4px}.v-select .selected-tag .close{float:none;margin-right:0}.v-select input[type=search],.v-select input[type=search]:focus{display:inline-block;border:none;outline:none;margin:0;padding:0 .5em;width:10em;max-width:100%;background:none;position:relative;box-shadow:none;float:left;clear:none}.v-select input[type=search]:disabled{cursor:pointer}.v-select li a{cursor:pointer;display:flex;align-items:center}.v-select .active a{background:rgba(50,50,50,.1);color:#333}.v-select .highlight a,.v-select li:hover>a{background:#f0f0f0;color:#333}.v-select li a>input[type=checkbox]{flex-shrink:0;flex-grow:0;margin:0 4px 2px 0}.v-select .spinner{position:absolute;top:1em;right:4em;font-size:5px;text-indent:-9999em;overflow:hidden;border-top:.9em solid hsla(0,0%,39%,.1);border-right:.9em solid hsla(0,0%,39%,.1);border-bottom:.9em solid hsla(0,0%,39%,.1);border-left:.9em solid rgba(60,60,60,.45);transform:translateZ(0);animation:vSelectSpinner 1.1s infinite linear;transition:opacity .1s}.v-select .spinner.shifted-left{right:7em}.v-select .spinner,.v-select .spinner:after{border-radius:50%;width:4em;height:4em}@-webkit-keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes vSelectSpinner{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(t,e,n){var o,i;n(64),o=n(30);var r=n(62);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=o},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown v-select",class:t.dropdownClasses},[n("div",{ref:"toggle",class:["dropdown-toggle","clearfix",{disabled:t.disabled}],attrs:{type:"button"},on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggleDropdown(e)}}},[t.focused||t.isValueEmpty?t._e():n("div",{class:t.selectedTagClasses},[n("div",{staticClass:"selected-tag-content"},[t._t("selected",[t._v("\n\t\t\t\t\t\t\t"+t._s(t.placeholder)+"\n\t\t\t\t\t\t")],{data:t.mutableValues[0],values:t.mutableValues})],2)]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],ref:"search",class:[{disabled:t.disabled},"form-control"],style:{width:t.isValueEmpty||t.focused?"calc(100% - 20px - 2em)":"2em"},attrs:{debounce:t.debounce,type:"search",name:t.name,disabled:t.disabled,maxlength:t.maxlength,placeholder:t.focused?t.placeholder:"",readonly:!t.searchable},domProps:{value:t._s(t.search)},on:{keydown:[function(e){t._k(e.keyCode,"delete",[8,46])||t.maybeDeleteValue(e)},function(e){t._k(e.keyCode,"up",38)||(e.preventDefault(),t.typeAheadUp(e))},function(e){t._k(e.keyCode,"down",40)||(e.preventDefault(),t.typeAheadDown(e))},function(e){t._k(e.keyCode,"enter",13)||(e.preventDefault(),e.stopPropagation())}],keyup:function(e){t._k(e.keyCode,"enter",13)||(e.preventDefault(),e.stopPropagation(),t.typeAheadSelect(e))},blur:t.onBlur,focus:t.onFocus,mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.toggleDropdown(e)},input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:!t.isValueEmpty&&t.allowClear,expression:"!isValueEmpty && allowClear"}],staticClass:"close clear",attrs:{tabIndex:"-1",type:"button"},on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.clear(e)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),n("div",{ref:"openIndicator",class:[{disabled:t.disabled},"open-indicator-container"]},[t._t("open-indicator",[n("i",{staticClass:"open-indicator",attrs:{role:"presentation"}})])],2),t._v(" "),t._t("spinner",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.mutableLoading,expression:"mutableLoading"}],class:t.spinnerClasses},[t._v("Loading...")])])],2),t._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open&&!t.disabled,expression:"open && !disabled"}],ref:"dropdownMenu",class:t.dropdownMenuClasses,style:{"max-height":t.maxHeight,"min-width":t.minWidth},attrs:{transition:t.transition},on:{mousewheel:t.scroll,scroll:t.scroll}},[t.multiple&&t.filteredOptions.length>0?n("li",{staticClass:"dropdown-buttons"},[n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.selectFiltered(e)}}},[t._v(t._s(t.translate("Select all")))]),t._v(" "),n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{mousedown:function(e){e.preventDefault(),e.stopPropagation(),t.deselectFiltered(e)}}},[t._v(t._s(t.translate("Clear")))])]):t._e(),t._v(" "),t._l(t.filteredOptions,function(e,o){return n("li",{key:o,class:{active:!t.multiple&&t.isOptionSelected(e),highlight:o===t.typeAheadPointer,divider:"divider"===e.vselectOptionType},on:{mouseover:function(n){t.onMouseOver(o,e)}}},[e.vselectOptionType?t._e():n("a",{on:{click:function(n){n.preventDefault(),n.stopPropagation(),t.toggle(e)},mousedown:function(t){t.preventDefault(),t.stopPropagation()}}},[t.multiple?n("input",{attrs:{type:"checkbox"},domProps:{checked:t.isOptionSelected(e)}}):t._e(),t._v(" "),n("span",{staticClass:"item-container"},[t._t("item",[t._v("\n\t\t\t\t\t\t\t"+t._s(e[t.valueField])+"\n\t\t\t\t\t\t")],{data:e})],2)])])}),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.filteredOptions.length||"0"!=t.minWidth?t._e():n("li",{staticClass:"divider"})]),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.filteredOptions.length?t._e():n("li",{staticClass:"text-center no-data"},[t._t("no-options",[t._v(t._s(t.translate("No data")))])],2)])],2)])},staticRenderFns:[]}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=p[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(l(o.parts[r],e))}else{for(var s=[],r=0;r<o.parts.length;r++)s.push(l(o.parts[r],e));p[o.id]={id:o.id,refs:1,parts:s}}}}function i(t){for(var e=[],n={},o=0;o<t.length;o++){var i=t[o],r=i[0],s=i[1],a=i[2],l=i[3],u={css:s,media:a,sourceMap:l};n[r]?n[r].parts.push(u):e.push(n[r]={id:r,parts:[u]})}return e}function r(t,e){var n=h(),o=g[g.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function l(t,e){var n,o,i;if(e.singleton){var r=m++;n=v||(v=a(e)),o=u.bind(null,n,r,!1),i=u.bind(null,n,r,!0)}else n=a(e),o=c.bind(null,n),i=function(){s(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}function u(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=b(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function c(t,e){var n=e.css,o=e.media,i=e.sourceMap;if(o&&t.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var p={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,m=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=i(t);return o(n,e),function(t){for(var r=[],s=0;s<n.length;s++){var a=n[s],l=p[a.id];l.refs--,r.push(l)}if(t){var u=i(t);o(u,e)}for(var s=0;s<r.length;s++){var l=r[s];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete p[l.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var o=n(59);"string"==typeof o&&(o=[[t.id,o,""]]);n(63)(o,{});o.locals&&(t.exports=o.locals)}])});
//# sourceMappingURL=vue-select.js.map