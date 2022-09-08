"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[7151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(n),k=r,c=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7738:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Expressions follow the syntax of ",(0,r.kt)("inlineCode",{parentName:"p"},"[operator][value]")," e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"<3")," or ",(0,r.kt)("inlineCode",{parentName:"p"},">=3")," and can be combined with ",(0,r.kt)("inlineCode",{parentName:"p"},"&&")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"||")," operators."),(0,r.kt)("p",null,"Example expressions that can be used:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Expression"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default")),(0,r.kt)("td",{parentName:"tr",align:null},"will be shown when the value is empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">0")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},">= 50 && <100")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"=red")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"!=black and yellow")),(0,r.kt)("td",{parentName:"tr",align:null},"Everything that is not an operator is treated as a value. This is evaluated as ",(0,r.kt)("inlineCode",{parentName:"td"},'inputValue != "black and yellow"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"=23 ","|","|"," =25")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,"Supported operators:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"default")," ",(0,r.kt)("br",null),"evaluates to true when value is empty, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},'""'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"="))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"&","&"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"|","|"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,">"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,">","="))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"<"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"<","="))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note")),": Only ",(0,r.kt)("em",{parentName:"p"},"simple")," expressions are supported.\nLogical groupings e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"(a || b) && c")," are not supported. ",(0,r.kt)("br",null),"\nVariable bindings e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"<=a")," are not supported. ",(0,r.kt)("br",null),"\nYou can only use only one type of logical concatenation at a time. i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},">3 && =5 && <10"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},">3 || =5 || <10"),". Expressions that mix the two, i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},">3 || =2 && <10")," are not supported."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Security Note")),": This controller is designed to be ",(0,r.kt)("em",{parentName:"p"},"safe"),". It does not violate any strong CSP policies, and it does ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"NOT"))," use ",(0,r.kt)("inlineCode",{parentName:"p"},"eval()"),".\nThe expressions are parsed as strings and predicate functions are created based on the presence or absence of recognised operators in the string, and the values that the SignalInputController broadcasts from the user are tested against the expression using\nbuilt-in JavaScript operators for each math operation."))}o.isMDXComponent=!0},8387:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Action"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))))}o.isMDXComponent=!0},8915:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))))}o.isMDXComponent=!0},2167:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"None"))}o.isMDXComponent=!0},3334:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={toc:[]};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Target"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-")),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))))}o.isMDXComponent=!0},5044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>m,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(3334),o=n(8387),i=n(2167),p=n(7738),s=n(8915);const d={id:"SignalActionController",title:"SignalActionController"},u=void 0,m={unversionedId:"controllers/signal/SignalActionController",id:"controllers/signal/SignalActionController",title:"SignalActionController",description:"Purpose",source:"@site/docs/controllers/signal/signal_action_controller.mdx",sourceDirName:"controllers/signal",slug:"/controllers/signal/SignalActionController",permalink:"/stimulus-library/docs/controllers/signal/SignalActionController",draft:!1,tags:[],version:"current",frontMatter:{id:"SignalActionController",title:"SignalActionController"},sidebar:"DocsSidebar",previous:{title:"ScrollToTopController",permalink:"/stimulus-library/docs/controllers/scroll/ScrollToTopController"},next:{title:"SignalDOMChildrenController",permalink:"/stimulus-library/docs/controllers/signal/SignalDOMChildrenController"}},k={},c=[{value:"Purpose",id:"purpose",level:2},{value:"Actions",id:"actions",level:2},{value:"Targets",id:"targets",level:2},{value:"Classes",id:"classes",level:2},{value:"Values",id:"values",level:2},{value:"Events",id:"events",level:2},{value:"Side Effects",id:"side-effects",level:2},{value:"How to Use",id:"how-to-use",level:2}],N={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"purpose"},"Purpose"),(0,r.kt)("p",null,"A controller that responds to SignalInputController notifications. This controller trigger actions on other stimulus controllers\nbased on the expression given in ",(0,r.kt)("inlineCode",{parentName:"p"},"whenValue"),", which it will use to evaluate the value of the input.\nbased on changes to inputs and their values."),(0,r.kt)("p",null,"This controller can be anywhere in the DOM tree and it will receive notifications from any SignalInputController with\nthe same ",(0,r.kt)("inlineCode",{parentName:"p"},"nameValue")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"nameValue")," of this controller."),(0,r.kt)("h2",{id:"actions"},(0,r.kt)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/actions"},"Actions")),(0,r.kt)(o.ZP,{mdxType:"NoActions"}),(0,r.kt)("h2",{id:"targets"},(0,r.kt)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/targets"},"Targets")),(0,r.kt)(l.ZP,{mdxType:"NoTargets"}),(0,r.kt)("h2",{id:"classes"},(0,r.kt)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/classes"},"Classes")),(0,r.kt)(s.ZP,{mdxType:"NoClasses"}),(0,r.kt)("h2",{id:"values"},(0,r.kt)("a",{parentName:"h2",href:"https://stimulus.hotwire.dev/reference/values"},"Values")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the input value whose value to react to. This name should be the same as the ",(0,r.kt)("inlineCode",{parentName:"td"},"nameValue")," of the SignalInputController you want to sync with."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"when")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"A simple ",(0,r.kt)("em",{parentName:"td"},"expression")," which will be evaluated against the value received from SignalInputController. If the expression evaluates to true, the controller will emit a ",(0,r.kt)("inlineCode",{parentName:"td"},"match")," event. If the expression evaluates to false, the controller will emit a ",(0,r.kt)("inlineCode",{parentName:"td"},"no-match")," event."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-"))))),(0,r.kt)(p.ZP,{mdxType:"Expressions"}),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"When"),(0,r.kt)("th",{parentName:"tr",align:null},"Dispatched on"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"event.detail")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"signal:match:${nameValue}")),(0,r.kt)("td",{parentName:"tr",align:null},"When value of the input for ",(0,r.kt)("inlineCode",{parentName:"td"},"nameValue")," changes, and the expression in ",(0,r.kt)("inlineCode",{parentName:"td"},"showValue")," evaluates to ",(0,r.kt)("em",{parentName:"td"},"true")," against the new updated value"),(0,r.kt)("td",{parentName:"tr",align:null},"The controller root element"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"element"),": the controller root element,",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),": the changed value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"signal:no-match:${nameValue}")),(0,r.kt)("td",{parentName:"tr",align:null},"When value of the input for ",(0,r.kt)("inlineCode",{parentName:"td"},"nameValue")," changes, and the expression in ",(0,r.kt)("inlineCode",{parentName:"td"},"showValue")," evaluates to ",(0,r.kt)("em",{parentName:"td"},"false")," against the new updated value"),(0,r.kt)("td",{parentName:"tr",align:null},"The controller root element"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"element"),": the controller root element,",(0,r.kt)("br",null),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),": the changed value")))),(0,r.kt)("h2",{id:"side-effects"},"Side Effects"),(0,r.kt)(i.ZP,{mdxType:"NoSideEffects"}),(0,r.kt)("h2",{id:"how-to-use"},"How to Use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\n<input type="number" name="foo" data-controller="signal-input">\n\n<div\n  data-controller="signal-action bar"\n  data-signal-action-name-value="foo"\n  data-signal-action-when-value="=3 || =5"\n  data-action="signal:match:foo->bar#fizzBuzz"\n>\n  \x3c!-- bar controller\'s `fizzBuzz` action is called when the value of input[name="foo"] is 3 or 5 --\x3e\n</div>\n\n')))}h.isMDXComponent=!0}}]);