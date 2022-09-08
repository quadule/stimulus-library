"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[6079],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=d(n),k=l,N=u["".concat(p,".").concat(k)]||u[k]||m[k]||r;return n?a.createElement(N,i(i({ref:e},s),{},{components:n})):a.createElement(N,i({ref:e},s))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7738:(t,e,n)=>{n.d(e,{ZP:()=>i});var a=n(7462),l=(n(7294),n(3905));const r={toc:[]};function i(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},r,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Expressions follow the syntax of ",(0,l.kt)("inlineCode",{parentName:"p"},"[operator][value]")," e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"<3")," or ",(0,l.kt)("inlineCode",{parentName:"p"},">=3")," and can be combined with ",(0,l.kt)("inlineCode",{parentName:"p"},"&&")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"||")," operators."),(0,l.kt)("p",null,"Example expressions that can be used:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Expression"),(0,l.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default")),(0,l.kt)("td",{parentName:"tr",align:null},"will be shown when the value is empty")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">0")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">= 50 && <100")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"=red")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"!=black and yellow")),(0,l.kt)("td",{parentName:"tr",align:null},"Everything that is not an operator is treated as a value. This is evaluated as ",(0,l.kt)("inlineCode",{parentName:"td"},'inputValue != "black and yellow"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"=23 ","|","|"," =25")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"Supported operators:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"default")," ",(0,l.kt)("br",null),"evaluates to true when value is empty, e.g. ",(0,l.kt)("inlineCode",{parentName:"td"},'""'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"="))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"&","&"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"|","|"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,">"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,">","="))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"<"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"<","="))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Note")),": Only ",(0,l.kt)("em",{parentName:"p"},"simple")," expressions are supported.\nLogical groupings e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"(a || b) && c")," are not supported. ",(0,l.kt)("br",null),"\nVariable bindings e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"<=a")," are not supported. ",(0,l.kt)("br",null),"\nYou can only use only one type of logical concatenation at a time. i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},">3 && =5 && <10"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},">3 || =5 || <10"),". Expressions that mix the two, i.e. ",(0,l.kt)("inlineCode",{parentName:"p"},">3 || =2 && <10")," are not supported."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Security Note")),": This controller is designed to be ",(0,l.kt)("em",{parentName:"p"},"safe"),". It does not violate any strong CSP policies, and it does ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"NOT"))," use ",(0,l.kt)("inlineCode",{parentName:"p"},"eval()"),".\nThe expressions are parsed as strings and predicate functions are created based on the presence or absence of recognised operators in the string, and the values that the SignalInputController broadcasts from the user are tested against the expression using\nbuilt-in JavaScript operators for each math operation."))}i.isMDXComponent=!0},8387:(t,e,n)=>{n.d(e,{ZP:()=>i});var a=n(7462),l=(n(7294),n(3905));const r={toc:[]};function i(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},r,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Action"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-")),(0,l.kt)("td",{parentName:"tr",align:null},"-")))))}i.isMDXComponent=!0},4889:(t,e,n)=>{n.d(e,{ZP:()=>i});var a=n(7462),l=(n(7294),n(3905));const r={toc:[]};function i(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},r,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"When"),(0,l.kt)("th",{parentName:"tr",align:null},"Dispatched on"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"event.detail")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-")),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))))}i.isMDXComponent=!0},2167:(t,e,n)=>{n.d(e,{ZP:()=>i});var a=n(7462),l=(n(7294),n(3905));const r={toc:[]};function i(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},r,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"None"))}i.isMDXComponent=!0},3334:(t,e,n)=>{n.d(e,{ZP:()=>i});var a=n(7462),l=(n(7294),n(3905));const r={toc:[]};function i(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},r,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Target"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-")),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))))}i.isMDXComponent=!0},2818:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>m,toc:()=>k});var a=n(7462),l=(n(7294),n(3905)),r=n(3334),i=(n(4889),n(8387)),o=n(2167),p=n(7738);const d={id:"SignalVisibilityController",title:"SignalVisibilityController"},s=void 0,m={unversionedId:"controllers/signal/SignalVisibilityController",id:"controllers/signal/SignalVisibilityController",title:"SignalVisibilityController",description:"Purpose",source:"@site/docs/controllers/signal/signal_visibility_controller.mdx",sourceDirName:"controllers/signal",slug:"/controllers/signal/SignalVisibilityController",permalink:"/stimulus-library/docs/controllers/signal/SignalVisibilityController",draft:!1,tags:[],version:"current",frontMatter:{id:"SignalVisibilityController",title:"SignalVisibilityController"},sidebar:"DocsSidebar",previous:{title:"SignalInputController",permalink:"/stimulus-library/docs/controllers/signal/SignalInputController"},next:{title:"TableSortController",permalink:"/stimulus-library/docs/controllers/table/TableSortController"}},u={},k=[{value:"Purpose",id:"purpose",level:2},{value:"Actions",id:"actions",level:2},{value:"Targets",id:"targets",level:2},{value:"Classes",id:"classes",level:2},{value:"Values",id:"values",level:2},{value:"Events",id:"events",level:2},{value:"Side Effects",id:"side-effects",level:2},{value:"How to Use",id:"how-to-use",level:2}],N={toc:k};function c(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},N,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"purpose"},"Purpose"),(0,l.kt)("p",null,"A controller that responds to SignalInputController notifications. This controller can hide or show its content\nbased on the expression given in ",(0,l.kt)("inlineCode",{parentName:"p"},"showValue"),", which it will use to evaluate the value of the input.\nbased on changes to inputs and their values."),(0,l.kt)("p",null,"This controller can be anywhere in the DOM tree and it will receive notifications from any SignalInputController with\nthe same ",(0,l.kt)("inlineCode",{parentName:"p"},"nameValue")," as the ",(0,l.kt)("inlineCode",{parentName:"p"},"nameValue")," of this controller."),(0,l.kt)("h2",{id:"actions"},(0,l.kt)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),(0,l.kt)(i.ZP,{mdxType:"NoActions"}),(0,l.kt)("h2",{id:"targets"},(0,l.kt)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),(0,l.kt)(r.ZP,{mdxType:"NoTargets"}),(0,l.kt)("h2",{id:"classes"},(0,l.kt)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Class"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hide")),(0,l.kt)("td",{parentName:"tr",align:null},"The class used to hide the content of the element when the ",(0,l.kt)("inlineCode",{parentName:"td"},"showValue")," expression evaluates to false"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"hide"))))),(0,l.kt)("h2",{id:"values"},(0,l.kt)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"name")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the input value whose value to react to. This name should be the same as the ",(0,l.kt)("inlineCode",{parentName:"td"},"nameValue")," of the SignalInputController you want to sync with."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"show")),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"A simple ",(0,l.kt)("em",{parentName:"td"},"expression")," which will be evaluated against the value received from SignalInputController. If the expression evaluates to true, the ",(0,l.kt)("inlineCode",{parentName:"td"},"hideClass")," is removed from the element. If the expression evaluates to false, the ",(0,l.kt)("inlineCode",{parentName:"td"},"hideClass")," is added to the element."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))))),(0,l.kt)(p.ZP,{mdxType:"Expressions"}),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:null},"When"),(0,l.kt)("th",{parentName:"tr",align:null},"Dispatched on"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"event.detail")),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"signal:visibility:${nameValue}:show")),(0,l.kt)("td",{parentName:"tr",align:null},"When a signalled value matches the predicate expression and this element is shown"),(0,l.kt)("td",{parentName:"tr",align:null},"The controller root element"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element")),(0,l.kt)("td",{parentName:"tr",align:null},"the controller root element")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"predicate")),(0,l.kt)("td",{parentName:"tr",align:null},"the expression the controller used to try and match the value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},"the value that was received")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"signal:visibility:${nameValue}:hide")),(0,l.kt)("td",{parentName:"tr",align:null},"When a signalled value fails the predicate expression and this element is hidden"),(0,l.kt)("td",{parentName:"tr",align:null},"The controller root element"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"element")),(0,l.kt)("td",{parentName:"tr",align:null},"the controller root element")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"predicate")),(0,l.kt)("td",{parentName:"tr",align:null},"the expression the controller used to try and match the value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},"the value that was received")))),(0,l.kt)("h2",{id:"side-effects"},"Side Effects"),(0,l.kt)(o.ZP,{mdxType:"NoSideEffects"}),(0,l.kt)("h2",{id:"how-to-use"},"How to Use"),(0,l.kt)("iframe",{src:"https://stimulus-library.netlify.app/controllers/signal_input_controller.html",style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}c.isMDXComponent=!0}}]);