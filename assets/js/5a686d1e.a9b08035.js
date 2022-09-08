"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[1203],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(k,o(o({ref:e},u),{},{components:n})):a.createElement(k,o({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8387:(t,e,n)=>{n.d(e,{ZP:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={toc:[]};function o(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))))}o.isMDXComponent=!0},8755:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),l=n(8387);const o={id:"CountdownController",title:"CountdownController"},i=void 0,d={unversionedId:"controllers/visual/CountdownController",id:"controllers/visual/CountdownController",title:"CountdownController",description:"Purpose",source:"@site/docs/controllers/visual/countdown_controller.mdx",sourceDirName:"controllers/visual",slug:"/controllers/visual/CountdownController",permalink:"/stimulus-library/docs/controllers/visual/CountdownController",draft:!1,tags:[],version:"current",frontMatter:{id:"CountdownController",title:"CountdownController"},sidebar:"DocsSidebar",previous:{title:"ClockController",permalink:"/stimulus-library/docs/controllers/visual/ClockController"},next:{title:"DurationController",permalink:"/stimulus-library/docs/controllers/visual/DurationController"}},p={},u=[{value:"Purpose",id:"purpose",level:2},{value:"Actions",id:"actions",level:2},{value:"Targets",id:"targets",level:2},{value:"Classes",id:"classes",level:2},{value:"Values",id:"values",level:2},{value:"Events",id:"events",level:2},{value:"Side Effects",id:"side-effects",level:2},{value:"How to Use",id:"how-to-use",level:2}],s={toc:u};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"A controller that displays a countdown clock to a specified date/time."),(0,r.kt)("h2",{id:"actions"},(0,r.kt)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),(0,r.kt)(l.ZP,{mdxType:"NoActions"}),(0,r.kt)("h2",{id:"targets"},(0,r.kt)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Target"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"years")," (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The target to display the number of years left in the countdown"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"months")," (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The target to display the number of months left in the countdown"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"days")," (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The target to display the number of days left in the countdown"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hours")," (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The target to display the number of hours left in the countdown"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"minutes")," (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The target to display the number of minutes left in the countdown"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"seconds")," (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The target to display the number of seconds left in the countdown"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"classes"},(0,r.kt)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"countingDown")," (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The class to apply while the countdown is running"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ended")," (Optional)"),(0,r.kt)("td",{parentName:"tr",align:null},"The class to apply when the countdown has ended"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"values"},(0,r.kt)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"deadline")),(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"The date/time to count down to"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"removeUnused")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to remove unused targets. i.e. if there are no years in the countdown"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"When"),(0,r.kt)("th",{parentName:"tr",align:null},"Dispatched on"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"event.detail")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"countdown:ended")),(0,r.kt)("td",{parentName:"tr",align:null},"When the countdown ends"),(0,r.kt)("td",{parentName:"tr",align:null},"The controller root element"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"side-effects"},"Side Effects"),(0,r.kt)("p",null,"The controller will set an interval using ",(0,r.kt)("inlineCode",{parentName:"p"},"setInterval"),". Cleans up on disconnect and countdown end."),(0,r.kt)("h2",{id:"how-to-use"},"How to Use"),(0,r.kt)("iframe",{src:"https:///stimulus-library.netlify.app/controllers/countdown_controller.html",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"deadline")," date can be changed at any point, during ticking or after a countdown has expired and the clock will restart with the new value."))}m.isMDXComponent=!0}}]);