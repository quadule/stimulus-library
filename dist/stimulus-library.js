var e=require("stimulus"),t=require("dialog-polyfill"),n=require("lodash/camelCase");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}function i(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}}),t.default=e,t}var s=r(t),o=r(n);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}var p=function(e){function t(t){var n;return n=e.call(this,t)||this,new Proxy(h(n),{get:function(e,t){var r=Reflect.get(e,t),i=h(n);if(function(e){switch(e){case"application":case"element":case"constructor":case"initialize":case"log":case"data":case"valueDescriptorMap":case"identifier":return!1}return!(/^_.*?$/.test(e)||/^.*?Target(s)?$/.test(e)||/^.*?Value$/.test(e)||/^.*?ValueChanged$/.test(e)||/^.*?Class$/.test(e))}(t.toString())){if("function"==typeof r)return new Proxy(r,{apply:function(e,n,r){return i.log(t.toString(),{args:r}),Reflect.apply(e,n,r)}});n.log(t.toString())}return r}})||h(n)}u(t,e);var n=t.prototype;return n.dispatch=function(e,t,n){void 0===n&&(n={bubbles:!0,cancelable:!0,detail:{target:e}});var r=new CustomEvent(t,n);e.dispatchEvent(r)},n.log=function(e,t){if(void 0===t&&(t={}),this.application.debug){var n=console;n.groupCollapsed("%c"+this.identifier+" %c#"+e,"color: #3B82F6","color: unset"),n.log(c({element:this.element},t)),n.groupEnd()}},t}(e.Controller),m=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.initialize=function(){this._handleVisibility=this._handleVisibility.bind(this)},n.connect=function(){window.addEventListener("focus",this._handleVisibility),window.addEventListener("blur",this._handleVisibility),document.addEventListener("visibilitychange",this._handleVisibility),this._handleVisibility()},n.disconnect=function(){window.removeEventListener("focus",this._handleVisibility),window.removeEventListener("blur",this._handleVisibility),document.removeEventListener("visibilitychange",this._handleVisibility)},n.appear=function(){this.dispatch(this.element,"appearance:appear")},n.away=function(){this.dispatch(this.element,"appearance:away")},n._handleVisibility=function(){this._documentIsActive()?this.appear():this.away()},n._documentIsActive=function(){return"visible"==document.visibilityState&&document.hasFocus()},t}(p),v=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){this.loadContent()},n.loadContent=function(){var e=this.hasReplaceTarget?this.replaceTarget:this.element;fetch(this.endpointValue).then(function(e){return e.text()}).then(function(t){var n=document.createElement("div");n.innerHTML=t,e.replaceWith(n);var r=new CustomEvent("ajax:success",{detail:""});e.dispatchEvent(r)}).catch(function(t){e.replaceWith("Sorry, this content failed to load");var n=new CustomEvent("ajax:error",{detail:""});e.dispatchEvent(n)}).finally(function(){var t=new CustomEvent("ajax:complete",{detail:""});e.dispatchEvent(t)})},t}(p);v.targets=["replace"],v.values={endpoint:String};var g=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.handler.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.element.querySelectorAll("input, select, textarea").forEach(function(t){return t.addEventListener("change",e.boundHandler)})},n.disconnect=function(){var e=this;this.element.querySelectorAll("input, select, textarea").forEach(function(t){return t.removeEventListener("change",e.boundHandler)})},n.handler=function(e){this.element.dispatchEvent(new CustomEvent("submit",{bubbles:!0,cancelable:!0}))},t}(p);const b=(e,t)=>{const n=e[t];return"function"==typeof n?n:(...e)=>{}},y=(e,t,n)=>{let r=e;return!0===n?r=`${t.identifier}:${e}`:"string"==typeof n&&(r=`${n}:${e}`),r},E=(e,t,n)=>{const{bubbles:r,cancelable:i,composed:s}=t||{bubbles:!0,cancelable:!0,composed:!0};return t&&Object.assign(n,{originalEvent:t}),new CustomEvent(e,{bubbles:r,cancelable:i,composed:s,detail:n})},w={dispatchEvent:!0,eventPrefix:!0},C=(e,t={})=>{const{dispatchEvent:n,eventPrefix:r}=Object.assign({},w,t),i=(null==t?void 0:t.element)||e.element,s=e.disconnect.bind(e),o=new IntersectionObserver(t=>{const[s]=t;s.isIntersecting?(t=>{if(e.isVisible=!0,b(e,"appear").call(e,t),n){const n=y("appear",e,r),s=E(n,null,{controller:e,entry:t});i.dispatchEvent(s)}})(s):e.isVisible&&(t=>{if(e.isVisible=!1,b(e,"disappear").call(e,t),n){const n=y("disappear",e,r),s=E(n,null,{controller:e,entry:t});i.dispatchEvent(s)}})(s)},t),a=()=>{o.observe(i)},l=()=>{o.unobserve(i)};return Object.assign(e,{isVisible:!1,disconnect(){l(),s()}}),a(),[a,l]},V={events:["click","touchend"],onlyVisible:!0,dispatchEvent:!0,eventPrefix:!0},k={debug:!1,logger:console};class S{constructor(e,t={}){var n,r,i;this.log=(e,t)=>{this.debug&&(this.logger.groupCollapsed(`%c${this.controller.identifier} %c#${e}`,"color: #3B82F6","color: unset"),this.logger.log(Object.assign({controllerId:this.controllerId},t)),this.logger.groupEnd())},this.debug=null!==(r=null!==(n=null==t?void 0:t.debug)&&void 0!==n?n:e.application.stimulusUseDebug)&&void 0!==r?r:k.debug,this.logger=null!==(i=null==t?void 0:t.logger)&&void 0!==i?i:k.logger,this.controller=e,this.controllerId=e.element.id||e.element.dataset.id,this.controllerInitialize=e.initialize.bind(e),this.controllerConnect=e.connect.bind(e),this.controllerDisconnect=e.disconnect.bind(e)}}class T extends S{constructor(e,t={}){super(e,t),this.observe=()=>{this.targetElement.addEventListener("mouseenter",this.onEnter),this.targetElement.addEventListener("mouseleave",this.onLeave)},this.unobserve=()=>{this.targetElement.removeEventListener("mouseenter",this.onEnter),this.targetElement.removeEventListener("mouseleave",this.onLeave)},this.onEnter=()=>{b(this.controller,"mouseEnter").call(this.controller),this.log("mouseEnter",{hover:!0})},this.onLeave=()=>{b(this.controller,"mouseLeave").call(this.controller),this.log("mouseLeave",{hover:!1})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}class L extends S{constructor(e,t={}){super(e,t),this.observe=()=>{try{this.observer.observe(this.targetElement,this.options)}catch(e){this.controller.application.handleError(e,"At a minimum, one of childList, attributes, and/or characterData must be true",{})}},this.unobserve=()=>{this.observer.disconnect()},this.mutation=e=>{b(this.controller,"mutate").call(this.controller,e),this.log("mutate",{entries:e})},this.targetElement=(null==t?void 0:t.element)||e.element,this.controller=e,this.options=t,this.observer=new MutationObserver(this.mutation),this.enhanceController(),this.observe()}enhanceController(){const e=this.controller.disconnect.bind(this.controller);Object.assign(this.controller,{disconnect:()=>{this.unobserve(),e()}})}}const x=e=>{const t=t=>{const{innerWidth:n,innerHeight:r}=window,i={height:r||Infinity,width:n||Infinity,event:t};b(e,"windowResize").call(e,i)},n=e.disconnect.bind(e),r=()=>{window.addEventListener("resize",t),t()},i=()=>{window.removeEventListener("resize",t)};return Object.assign(e,{disconnect(){i(),n()}}),r(),[r,i]},I=(e,t=200)=>{let n=null;return function(){const r=arguments,i=this,s=()=>e.apply(i,r);n&&clearTimeout(n),n=setTimeout(s,t)}};var M=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.handler.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){var e=this.element;e.style.resize="none",e.style.boxSizing="border-box",e.addEventListener("input",this.boundHandler),e.addEventListener("focus",this.boundHandler),x(this),requestAnimationFrame(this.boundHandler)},n.windowResize=function(){this.handler()},n.handler=function(){this.autosize(this.element)},n.autosize=function(e){var t=e.offsetHeight-e.clientHeight;e.style.height="auto",e.style.height=e.scrollHeight+t+"px"},t}(p),O=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.updateCharCount.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){this.updateCharCount(),this.inputTarget.addEventListener("input",this.boundHandler)},n.disconnect=function(){this.inputTarget.removeEventListener("input",this.boundHandler)},n.updateCharCount=function(){var e=this.inputTarget.value.length;this.outputTarget.innerText=e.toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))},n.isValidCount=function(e){var t=0,n=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(n=this.maxValue),e>=t&&e<=n},t}(p);O.targets=["input","output"],O.values={min:Number,max:Number},O.classes=["error"];var _=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.initialize=function(){this.toggle=this.toggle.bind(this),this.refresh=this.refresh.bind(this)},n.connect=function(){var e=this;requestAnimationFrame(function(){e.hasSelectAllTarget&&(e.selectAllTarget.addEventListener("change",e.toggle),e.checkboxTargets.forEach(function(t){return t.addEventListener("change",e.refresh)}),e.refresh())})},n.disconnect=function(){var e=this;this.hasSelectAllTarget&&(this.selectAllTarget.removeEventListener("change",this.toggle),this.checkboxTargets.forEach(function(t){return t.removeEventListener("change",e.refresh)}))},n.toggle=function(e){e.preventDefault();var t=e.target;this.checkboxTargets.forEach(function(e){return e.checked=t.checked})},n.refresh=function(){var e=this.checkboxTargets.length,t=this.checked.length;this.selectAllTarget.checked=t>0,this.selectAllTarget.indeterminate=t>0&&t<e},l(t,[{key:"checked",get:function(){return this.checkboxTargets.filter(function(e){return e.checked})}},{key:"unchecked",get:function(){return this.checkboxTargets.filter(function(e){return!e.checked})}}]),t}(p);_.targets=["selectAll","checkbox"];var H=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).supported=!1,t}u(t,e);var n=t.prototype;return n.connect=function(){this.supported=document.queryCommandSupported("copy"),this.hasRemoveUnusedValue&&this.removeUnusedValue&&(this.supported&&this.hasFallbackTarget?this.fallbackTarget.remove():this.hasCopyTarget&&this.copyTarget.remove())},n.select=function(e){e&&e.preventDefault(),this.sourceTarget.select()},n.copy=function(e){e&&e.preventDefault(),this.sourceTarget.select(),this.supported&&document.execCommand("copy")},t}(p);function A(e){return"A"==e.nodeName}function D(e){return"FORM"==e.nodeName}function j(e){return"INPUT"==e.nodeName}H.targets=["button","copy","fallback"],H.values={removeUnused:Boolean};var P=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.initialize=function(){this.confirm=this.confirm.bind(this)},n.connect=function(){var e=this;requestAnimationFrame(function(){var t=e.element;if(D(t))t.addEventListener("submit",e.confirm);else{if(!A(t))throw new Error("Can't handle confirmation on attached element");t.addEventListener("click",e.confirm)}})},n.confirm=function(e){window.confirm(this.message)||(e.preventDefault(),this.dispatch(this.element,"confirm:cancelled"))},l(t,[{key:"message",get:function(){return this.hasMessageValue?this.messageValue:"Are you sure?"}}]),t}(p);P.values={message:String};var N=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){var e=this,t=this.messageValue;window.onbeforeunload=function(){return null==t||t},window.addEventListener("popstate",this.handlePopstate),window.addEventListener("submit",function(){window.removeEventListener("popstate",e.handlePopstate),window.onbeforeunload=null})},n.handlePopstate=function(e){return!1},t}(p);N.values={message:String};var R=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.connect=function(){console.log("Debug Controller",this,this.testTargets)},t}(p);R.targets=["test"];var z=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).initialValue=null,t.boundHandler=t.handler.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){var e=this.element;this.initialValue=this.isInputElement(e)&&this.isCheckable(e)?e.checked:e.value,e.addEventListener("input",this.boundHandler),e.addEventListener("change",this.boundHandler)},n.disconnect=function(){var e=this.element;e.removeEventListener("input",this.boundHandler),e.removeEventListener("change",this.boundHandler)},n.restore=function(){var e=this.element;this.isInputElement(e)&&this.isCheckable(e)?e.checked=this.initialValue:e.value=this.initialValue},n.handler=function(e){var t=this.element;this.initialValue!==t.value?t.setAttribute("data-dirty","true"):t.removeAttribute("data-dirty")},n.isCheckable=function(e){return"radio"===e.type||"checkbox"===e.type},n.isInputElement=function(e){return"INPUT"===e.tagName},t}(p),F=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){this.toggle()},n.toggle=function(){this.hasDisablerTarget&&this.disablerTarget.checked?this.disableInputs():this.enableInputs()},n.disableInputs=function(){var e=this.hasClearValue&&this.clearValue;this.disableTargets.forEach(function(t,n){e&&(t.value=""),t.disabled=!0})},n.enableInputs=function(){this.disableTargets.forEach(function(e,t){e.disabled=!1})},t}(p);F.targets=["disabler","disable"],F.values={clear:Boolean};var B=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.dismiss=function(){this.element.remove()},t}(p),q=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){((e,t={})=>{new L(this,t)})(0,{element:this.element,childList:!0}),this.checkEmpty()},n.mutate=function(e){this.checkEmpty()},n.checkEmpty=function(){var e,t=this;0===(e=this.hasScopeSelectorValue?this.element.querySelectorAll(this.scopeSelectorValue):this.element.children).length?(this.hasNotEmptyClass&&this.notEmptyClass.split(" ").forEach(function(e){return t.element.classList.remove(e)}),this.hasEmptyClass&&this.emptyClass.split(" ").forEach(function(e){return t.element.classList.add(e)}),this.element.dispatchEvent(new CustomEvent("dom:empty",{bubbles:!0,cancelable:!0}))):(this.hasNotEmptyClass&&this.notEmptyClass.split(" ").forEach(function(e){return t.element.classList.add(e)}),this.hasEmptyClass&&this.emptyClass.split(" ").forEach(function(e){return t.element.classList.remove(e)}),this.element.dispatchEvent(new CustomEvent("dom:not-empty",{bubbles:!0,cancelable:!0,detail:{count:e.length}})))},t}(p);q.classes=["empty","notEmpty"],q.values={scopeSelector:String};var W=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){this.toggle()},n.toggle=function(){this.hasEnablerTarget&&this.enablerTarget.checked?this.enableInputs():this.disableInputs()},n.disableInputs=function(){var e=this.hasClearValue&&this.clearValue;this.enableTargets.forEach(function(t,n){e&&(t.value=""),t.disabled=!0})},n.enableInputs=function(){this.enableTargets.forEach(function(e,t){e.disabled=!1})},t}(p);W.targets=["enabler","enable"],W.values={clear:Boolean};var $=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.connect=function(){var e=this,t=this.element;t.onerror=function(){e.hasPlaceholderValue?t.src=e.placeholderValue:t.style.display="none"}},t}(p);$.values={placeholder:String};var U=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.initialize=function(){this._clear=this._clear.bind(this)},n.connect=function(){var e=this;requestAnimationFrame(function(){if(!D(e.element))throw new Error("Expected controller to be mounted on a form element.");e.restoreOnLoad&&e.restore(),e.clearOnSubmit&&e.element.addEventListener("submit",e._clear)})},n.disconnect=function(){this.clearOnSubmit&&this.element.removeEventListener("submit",this._clear)},n._clear=function(){localStorage.removeItem(this.formIdentifier),this.dispatch(this.element,"form-save:cleared")},n.clear=function(e){e&&e.preventDefault(),this._clear()},n.save=function(e){e.preventDefault(),localStorage.setItem(this.formIdentifier,JSON.stringify(this.formData[this.formIdentifier])),this.dispatch(this.element,"form-save:save:success")},n.restore=function(e){if(e&&e.preventDefault(),localStorage.getItem(this.formIdentifier)){for(var t,n=JSON.parse(localStorage.getItem(this.formIdentifier)),r=f(this.formElements);!(t=r()).done;){var i=t.value;i.name in n&&(j(i)&&"checkbox"==i.type?i.checked=n[i.name]:j(i)&&"radio"==i.type?i.value==n[i.name]&&(i.checked=!0):i.value=n[i.name])}this.dispatch(this.element,"form-save:restore:success")}else this.dispatch(this.element,"form-save:restore:empty")},l(t,[{key:"formID",get:function(){if(this.hasIdValue)return this.idValue;var e=this.element.id;if(""!==e)return e;throw new Error("No ID value to uniquely identify this form. Please either specify data-"+this.identifier+"-id-value or give this form an 'id' attribute. ")}},{key:"formIdentifier",get:function(){return location.href+" "+this.formID}},{key:"formElements",get:function(){return this.element.elements}},{key:"formData",get:function(){for(var e,t,n=((e={})[this.formIdentifier]={},e),r=f(this.formElements);!(t=r()).done;){var i=t.value;i.name.length>0&&(j(i)&&"checkbox"==i.type?n[this.formIdentifier][i.name]=i.checked:j(i)&&"radio"==i.type?i.checked&&(n[this.formIdentifier][i.name]=i.value):n[this.formIdentifier][i.name]=i.value)}return n}},{key:"restoreOnLoad",get:function(){return!this.hasRestoreOnLoadValue||this.restoreOnLoadValue}},{key:"clearOnSubmit",get:function(){return!this.hasClearOnSubmitValue||this.clearOnSubmitValue}}]),t}(p);U.values={id:String,restoreOnLoad:Boolean,clearOnSubmit:Boolean};var J=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){C(this,{threshold:this.threshold,element:this.element})},n.appear=function(e){this.dispatch(this.element,"intersection:appear",{cancelable:!0,bubbles:!0,detail:{element:this.element}})},n.disappear=function(e){this.dispatch(this.element,"intersection:disappear",{cancelable:!0,bubbles:!0,detail:{element:this.element}})},l(t,[{key:"threshold",get:function(){return this.hasThresholdValue?this.thresholdValue.split(",").map(function(e){return Number.parseFloat(e.trim())}).filter(function(e){return e>=0&&e<=1}):[0,1]}}]),t}(p);J.values={threshold:String};var Y,G=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){if(this.options={element:this.element,threshold:.3},"IntersectionObserver"in window){var e=C(this,this.options);this.observe=e[0],this.unobserve=e[1]}else this.loadContent()},n.appear=function(e){var t=this.element;""===t.src&&e.target===t&&e.isIntersecting&&(this.loadContent(),this.unobserve&&this.unobserve())},t}(v),K=function(e,t){var n=void 0===t?{}:t,r=n.behavior,s=void 0===r?"smooth":r,o=n.block,a=void 0===o?"start":o,l=n.inline,c=void 0===l?"nearest":l;try{var u=function(){e.scrollIntoView({behavior:s,block:a,inline:c})},h=function(){if("smooth"==s&&!Q)return Promise.resolve(function(){try{return Promise.resolve(Promise.resolve().then(function(){return i(require("smoothscroll-polyfill"))})).then(function(e){Y||(Y=!0,(0,e.polyfill)())})}catch(e){return Promise.reject(e)}}()).then(function(){})}();return Promise.resolve(h&&h.then?h.then(u):u())}catch(e){return Promise.reject(e)}},Q="scrollBehavior"in document.documentElement.style;function X(e){if(!e)return null;var t=getComputedStyle(e).overflowY;return"visible"!==t&&"hidden"!==t&&e.scrollHeight>=e.clientHeight?e:X(e.parentElement)||document.body}var Z=function(e){function t(){var t;return(t=e.apply(this,arguments)||this)._dialog=null,t}u(t,e);var n=t.prototype;return n.initialize=function(){this.open=this.open.bind(this),this.close=this.close.bind(this)},n.connect=function(){},n.open=function(){var e=this,t=this.element;if(!this._dialog){this._dialog=document.createElement("dialog");var n=document.createElement("img");n.className=this.imageClassName,n.src=this.src,n.srcset=this.srcSet,n.sizes=this.sizes,this._dialog.appendChild(n),t.insertAdjacentElement("afterend",this._dialog),s.default.registerDialog(this._dialog),this._dialog.className=this.modalClassName,this._dialog.showModal(),K(this._dialog,{behavior:"smooth",block:"end"}).catch(function(){return e._dialog.scrollIntoView(!1)}),this._dialog.addEventListener("click",this.close),this._dialog.addEventListener("cancel",this.close),this._dialog.addEventListener("close",this.close)}},n.close=function(){var e=this;this._dialog&&(this._dialog.close(),this._dialog.remove(),this._dialog=null,K(this.element,{behavior:"smooth",block:"end"}).catch(function(){return e.element.scrollIntoView(!1)}))},l(t,[{key:"src",get:function(){return this.hasSrcValue?this.srcValue:this.element.src}},{key:"srcSet",get:function(){return this.hasSrcSetValue?this.srcSetValue:this.element.srcset}},{key:"sizes",get:function(){return this.hasSizesValue?this.sizesValue:this.element.sizes}},{key:"modalClassName",get:function(){return this.hasModalClass?this.modalClass:"image-lightbox-dialog"}},{key:"imageClassName",get:function(){return this.hasImageClass?this.imageClass:"image-lightbox-image"}}]),t}(p);Z.values={src:String,srcSet:String,sizes:String},Z.classes=["modal","image"];var ee=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).maxSelections=0,t.boundHandleInputs=t.handleInputs.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.inputTargets.forEach(function(t){return t.addEventListener("change",e.boundHandleInputs)})},n.disconnect=function(){var e=this;this.inputTargets.forEach(function(t){return t.removeEventListener("change",e.boundHandleInputs)})},n.handleInputs=function(e){var t=this.inputTargets.reduce(function(e,t){return t.checked?e+1:e},0),n=e.target;t>this.maxSelections?(e.preventDefault(),n.checked=!1,n.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!0})),n.dispatchEvent(new CustomEvent("limited-selection:too-many",{bubbles:!0,cancelable:!0,detail:{target:n}})),this.hasErrorTarget&&(this.errorTarget.innerHTML=this.messageValue)):(n.dispatchEvent(new CustomEvent("limited-selection:selection",{bubbles:!0,cancelable:!0,detail:{target:n}})),this.hasErrorTarget&&(this.errorTarget.innerHTML=""))},t}(p);ee.targets=["input","error"],ee.values={max:Number,message:String};var te=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){this.checkStructure()},n.add=function(e){e&&e.preventDefault();var t=this.templateTarget.innerHTML.replace(/NEW_RECORD/g,this.generateID());this.targetTarget.insertAdjacentHTML(this.insertMode,t)},n.remove=function(e){e.preventDefault();var t=e.target.closest("."+this.wrapperClass);if(null==t)throw new Error("#remove was clicked from outside of a child record. Could not find an ancestor with class ."+this.wrapperClass);if("true"===t.dataset.newRecord)t.remove();else{t.style.display="none";var n=t.querySelector("input[name*='_destroy']");if(null==n)throw new Error("Could not find a hidden input with name '_destroy'. NestedForm cannot remove an already persisted record without it.");n.value="1"}},n.generateID=function(){return(new Date).getTime().toString()+Math.random()},n.checkStructure=function(){if(this.templateTarget.innerHTML.indexOf("NEW_RECORD"))throw new Error("Could not find 'NEW_RECORD' in the provided template. Please make sure you've passed `child_index: 'NEW_RECORD'` to `fields_for`")},l(t,[{key:"wrapperClass",get:function(){return this.hasWrapperSelectorValue?this.wrapperClassValue:"nested-fields"}},{key:"insertMode",get:function(){return this.hasInsertModeValue?this.insertModeValue:"beforeend"}}]),t}(p);te.targets=["target","template"],te.values={insertMode:String,wrapperClass:String};var ne=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundCheckPasswordsMatch=t.checkPasswordsMatch.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){var e=this;this.passwordTargets.forEach(function(t){return t.addEventListener("change",e.boundCheckPasswordsMatch)})},n.disconnect=function(){var e=this;this.passwordTargets.forEach(function(t){return t.removeEventListener("change",e.boundCheckPasswordsMatch)})},n.allPasswordsMatch=function(){var e=new Set(this.passwordTargets.map(function(e){return e.value}));return e.has("")||1==e.size},n.checkPasswordsMatch=function(){var e=this;this.allPasswordsMatch()?(this.element.dispatchEvent(new CustomEvent("password-confirm:match")),this.hasErrorClass&&this.passwordTargets.forEach(function(t){return t.classList.remove(e.errorClass)})):(this.element.dispatchEvent(new CustomEvent("password-confirm:no-match")),this.hasErrorClass&&this.passwordTargets.forEach(function(t){return t.classList.add(e.errorClass)}))},t}(p);ne.targets=["password"],ne.classes=["error"];var re=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.peak=function(e){e&&e.preventDefault(),this.passwordTarget.type="text"},n.hide=function(e){e&&e.preventDefault(),this.passwordTarget.type="password"},n.toggle=function(e){e&&e.preventDefault(),"password"===this.passwordTarget.type?this.peak():this.hide()},t}(p);re.targets=["password"];var ie=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundMessageReceived=t.messageReceived.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){window.addEventListener("message",this.boundMessageReceived)},n.disconnect=function(){window.removeEventListener("message",this.boundMessageReceived)},n.messageReceived=function(e){var t=e.data;t.hasOwnProperty("name")&&"iframe-body"===t.name&&t.hasOwnProperty("height")&&this.resize(t.height)},n.resize=function(e){this.element.style.height=e+"px"},t}(p),se=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){var e,t,n;window.self!==window.top&&(x(this),t={},null===(n=(e=this).constructor.debounces)||void 0===n||n.forEach(n=>{if("string"==typeof n&&(e[n]=I(e[n],null==t?void 0:t.wait)),"object"==typeof n){const{name:r,wait:i}=n;if(!r)return;e[r]=I(e[r],i||(null==t?void 0:t.wait))}}),this.postUpdate())},n.windowResize=function(e){this.postUpdate()},n.postUpdate=function(){var e={name:"iframe-body",height:this.getHeight()};window.parent.postMessage(e,"*")},n.getHeight=function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)},t}(p);se.debounces=["postUpdate"];var oe=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.cleanupSelf=function(){this.cleanup(this.element)},n.cleanup=function(e){var t,n,r,i=this;e.dataset.controller=(null==(t=e.dataset.controller)?void 0:t.replaceAll(new RegExp("(s|^)"+this.identifier+"(s|$)","g"),""))||"",""==e.dataset.controller&&delete e.dataset.controller;var s=new RegExp("(s|^)"+this.identifier+"\\..+?(s|$)","g");e.dataset.target=(null==(n=e.dataset.target)?void 0:n.replaceAll(s,""))||"",delete e.dataset[o.default(this.identifier+"-target")],""==e.dataset.target&&delete e.dataset.target,e.dataset.action=(null==(r=e.dataset.target)?void 0:r.replaceAll(s,""))||"",delete e.dataset[o.default(this.identifier+"-action")],""==e.dataset.action&&delete e.dataset.action;var a=this.constructor.values;a&&Object.keys(a).forEach(function(t){return delete e.dataset[o.default(i.identifier+"-"+t+"-value")]});var l=this.constructor.classes;l&&Object.keys(l).forEach(function(t){return delete e.dataset[o.default(i.identifier+"-"+t+"-class")]})},t}(p),ae=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.connect=function(){var e=this;requestAnimationFrame(function(){K(e.element,{behavior:e.hasBehaviorValue?e.behaviorValue:"smooth",block:e.hasBlockValue?e.blockValue:"center",inline:e.hasInlineValue?e.inlineValue:"center"}).catch(function(){return e.element.scrollIntoView()}),e.cleanupSelf()})},t}(oe);ae.values={behavior:String,block:String,inline:String};var le=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.scroll=function(e){var t;e&&e.preventDefault(),null!=(t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:X(this.element))&&K(t,{behavior:"smooth",block:"end"}).catch(function(){return t.scrollIntoView(!1)})},t}(p);le.values={mode:String};var ce=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.scroll=function(){var e=document.querySelector(this.selectorValue);e?K(e,{behavior:this.hasBehaviorValue?this.behaviorValue:"smooth",block:this.hasBlockValue?this.blockValue:"center",inline:this.hasInlineValue?this.inlineValue:"center"}).catch(function(){return e.scrollIntoView()}):console.warn("Could not find target for '"+this.selectorValue+"'")},t}(p);ce.values={selector:String,behavior:String,block:String,inline:String};var ue=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.scroll=function(e){var t;e&&e.preventDefault(),null!=(t="document"==(this.hasModeValue?this.modeValue:"document")?document.body:X(this.element))&&K(t,{behavior:"smooth",block:"start"}).catch(function(){return t.scrollIntoView(!1)})},t}(p);ue.values={mode:String};var he=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).timeout=null,t}u(t,e);var n=t.prototype;return n.connect=function(){var e=this;requestAnimationFrame(function(){e.timeout=setTimeout(function(){return e.element.remove()},1e3*e.secondsValue)})},n.disconnect=function(){this.timeout&&clearTimeout(this.timeout)},t}(p);he.values={seconds:Number};var de=function(e){function t(){var t;return(t=e.apply(this,arguments)||this)._magicElement=null,t}u(t,e);var n=t.prototype;return n.createMagicElement=function(){if(null===this._magicElement)switch(this._magicElement=document.createElement("div"),this._mode){case"top":this.element.insertAdjacentElement("beforebegin",this._magicElement);break;case"bottom":this.element.insertAdjacentElement("afterend",this._magicElement)}},n.connect=function(){var e=this,t=this.element;this.createMagicElement(),new IntersectionObserver(function(n){n.forEach(function(n){n.target===e._magicElement&&(0===n.intersectionRatio?t.classList.add(e.hasStuckClass?e.stuckClass:"stuck"):1===n.intersectionRatio&&t.classList.remove(e.hasStuckClass?e.stuckClass:"stuck"))})},{threshold:[0,1]}).observe(this._magicElement)},l(t,[{key:"_mode",get:function(){return this.hasModeValue?this.modeValue:"top"}}]),t}(p);de.classes=["stuck"],de.values={mode:String};var fe=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){var e=this;if(!this.hasInsertValue)throw new Error("`insert` value was not specified");requestAnimationFrame(function(){e.hasImmediateValue&&e.immediateValue&&e.execute()})},n.execute=function(e){e&&e.preventDefault();var t=document.querySelector(this.targetValue);if(null!=t){var n=this.element.cloneNode(!0);switch(this.cleanup(n),this.insertValue){case"beforebegin":case"beforeend":case"afterend":case"afterbegin":t.insertAdjacentHTML(this.insertValue,n.outerHTML);break;case"replaceOuter":t.outerHTML=n.outerHTML;break;case"replaceInner":t.innerHTML=n.outerHTML;break;case"prepend":t.insertAdjacentHTML("afterbegin",n.outerHTML);break;case"append":t.insertAdjacentHTML("beforeend",n.outerHTML);break;default:throw new Error("`insert` value was not specified")}this.element.remove()}else this.element.dispatchEvent(new CustomEvent("teleport:error",{bubbles:!0,cancelable:!0}))},t}(oe);fe.values={target:String,insert:String,immediate:Boolean};var pe=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.connect=function(){var e=this;if(!this.hasClassValue)throw new Error("data-toggle-class-class-value must not be empty");(this.hasMouseEnterValue||this.hasMouseLeaveValue)&&((e,t={})=>{new T(this,t)})(),this.hasClickAwayValue&&this.clickAwayValue&&((e,t={})=>{const{onlyVisible:n,dispatchEvent:r,events:i,eventPrefix:s}=Object.assign({},V,t),o=i=>{const o=(null==t?void 0:t.element)||e.element;if(!(o.contains(i.target)||!function(e){const t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,r=window.innerWidth||document.documentElement.clientWidth;return t.top<=n&&t.top+t.height>=0&&t.left<=r&&t.left+t.width>=0}(o)&&n)&&(e.clickOutside&&e.clickOutside(i),r)){const t=y("click:outside",e,s),n=E(t,i,{controller:e});o.dispatchEvent(n)}},a=e.disconnect.bind(e);Object.assign(e,{disconnect(){null==i||i.forEach(e=>{window.removeEventListener(e,o,!1)}),a()}}),null==i||i.forEach(e=>{window.addEventListener(e,o,!1)})})(this),requestAnimationFrame(function(){e.hasInitialValue&&e.toggleTargets.forEach("on"===e.initialValue?function(t){return e.elementOn(t)}:function(t){return e.elementOff(t)})})},n.clickOutside=function(){var e=this;this.toggleTargets.forEach(function(t){e.elementWasToggled(t)&&(e.elementToggleStatus(t),e.elementToggle(t))})},n.mouseEnter=function(){if(this.hasMouseEnterValue)switch(this.mouseEnterValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}},n.mouseLeave=function(){if(this.hasMouseLeaveValue)switch(this.mouseLeaveValue){case"on":this.on();break;case"off":this.off();break;case"toggle":this.toggle()}return{}},n.on=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementOn(e)})},n.off=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementOff(e)})},n.toggle=function(e){var t=this;this.toggleTargets.forEach(function(e){t.elementToggleStatus(e),t.elementToggle(e)})},n.elementWasToggled=function(e){return"true"==e.dataset.toggled},n.elementToggleStatus=function(e){this.elementWasToggled(e)?delete e.dataset.toggled:e.dataset.toggled="true"},n.elementToggle=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t)})},n.elementOn=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t,!0)})},n.elementOff=function(e){this.classValue.split(" ").forEach(function(t){return e.classList.toggle(t,!1)})},t}(p);pe.targets=["toggle"],pe.values={class:String,mouseEnter:String,mouseLeave:String,clickAway:Boolean,initial:String};var me=function(e){function t(){return e.apply(this,arguments)||this}u(t,e);var n=t.prototype;return n.toggle=function(e){e&&e.preventDefault();var t=this.getFrame().src;null==t||t!==this.getSrc()?this.setSrc():this.clear()},n.setSrc=function(e){e&&e.preventDefault();var t=this.getFrame();this.hasLoadingMessageValue&&(t.innerHTML=this.loadingMessageValue),t.src=this.getSrc()},n.clear=function(e){e&&e.preventDefault();var t=this.getFrame();t.src="",t.innerHTML=""},n.getFrame=function(){var e=document.getElementById(""+this.frameIdValue);if(null==e)throw new Error("Could not find frame with ID '"+this.frameIdValue+"'");if("TURBO-FRAME"!=e.nodeName)throw new Error("Element targeted by ID '"+this.frameIdValue+"'");return e},n.getSrc=function(){var e=this.element;if(this.hasSrcValue)return this.srcValue;if(A(e))return e.href;throw new Error("No link given to drive frame to")},t}(p);me.values={frameId:String,src:String,loadingMessage:String};var ve=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).boundHandler=t.updateWordCount.bind(h(t)),t}u(t,e);var n=t.prototype;return n.connect=function(){this.updateWordCount(),this.inputTarget.addEventListener("input",this.boundHandler)},n.disconnect=function(){this.inputTarget.removeEventListener("input",this.boundHandler)},n.updateWordCount=function(){var e=0,t=this.inputTarget.value.match(/\S+/g);this.outputTarget.innerText=(e=t&&t.length||0).toString(),this.hasErrorClass&&(this.isValidCount(e)?this.outputTarget.classList.remove(this.errorClass):this.outputTarget.classList.add(this.errorClass))},n.isValidCount=function(e){var t=0,n=99999;return this.hasMinValue&&(t=this.minValue),this.hasMaxValue&&(n=this.maxValue),e>=t&&e<=n},t}(p);ve.targets=["input","output"],ve.values={min:Number,max:Number},ve.classes=["error"],exports.AppearanceController=m,exports.AsyncBlockController=v,exports.AutoSubmitFormController=g,exports.AutosizeController=M,exports.CharCountController=O,exports.CheckboxSelectAllController=_,exports.ClipboardController=H,exports.ConfirmController=P,exports.ConfirmNavigationController=N,exports.DebugController=R,exports.DetectDirtyController=z,exports.DisableInputsController=F,exports.DismissableController=B,exports.EmptyDomController=q,exports.EnableInputsController=W,exports.FallbackImageController=$,exports.FormSaveController=U,exports.IntersectionController=J,exports.LazyBlockController=G,exports.LightboxImageController=Z,exports.LimitedSelectionCheckboxesController=ee,exports.NestedFormController=te,exports.PasswordConfirmController=ne,exports.PasswordPeekController=re,exports.ResponsiveIframeBodyController=se,exports.ResponsiveIframeWrapperController=ie,exports.ScrollIntoFocusController=ae,exports.ScrollToBottomController=le,exports.ScrollToController=ce,exports.ScrollToTopController=ue,exports.SelfDestructController=he,exports.StickyController=de,exports.TeleportController=fe,exports.ToggleClassController=pe,exports.TurboFrameRCController=me,exports.WordCountController=ve;
//# sourceMappingURL=stimulus-library.js.map
