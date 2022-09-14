"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[2856],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=l,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2492:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var n=r(7462),l=r(3366),o=(r(7294),r(3905)),a=["components"],i={id:"EphemeralController",title:"EphemeralController"},u=void 0,s={unversionedId:"controllers/extendable/EphemeralController",id:"controllers/extendable/EphemeralController",title:"EphemeralController",description:"Purpose",source:"@site/docs/controllers/extendable/ephemeral_controller.mdx",sourceDirName:"controllers/extendable",slug:"/controllers/extendable/EphemeralController",permalink:"/stimulus-library/docs/controllers/extendable/EphemeralController",draft:!1,tags:[],version:"current",frontMatter:{id:"EphemeralController",title:"EphemeralController"},sidebar:"DocsSidebar",previous:{title:"BaseController",permalink:"/stimulus-library/docs/controllers/extendable/BaseController"},next:{title:"AutoSubmitFormController",permalink:"/stimulus-library/docs/controllers/form/AutoSubmitFormController"}},p={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Methods",id:"methods",level:2},{value:"How to Use",id:"how-to-use",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"purpose"},"Purpose"),(0,o.kt)("p",null,"Provide a set of controller behaviours that allow a Stimulus controller to remove its own controllerisms (controllers, targets, actions, classes, values) from an element cleanly."),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("p",null,"This controller provides the following methods to controllers that extend it."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cleanup")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Remove all identifiers related to this controller from an element."),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"element")),(0,o.kt)("td",{parentName:"tr",align:null},"The element to cleanup"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h2",{id:"how-to-use"},"How to Use"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import {EphemeralController} from "stimulus-library";\n\nexport default class extends EphemeralController {\n  static targets = ["temp"];\n\n removeTempTarget() {\n   if (this.hasTempTarget){\n    this.cleanup(this.tempTarget);\n   }\n }\n\n uninstallController() {\n    this.cleanup(this.el);\n }\n\n}\n')))}d.isMDXComponent=!0}}]);