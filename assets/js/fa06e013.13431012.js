"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[2633],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,v=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?i.createElement(v,a(a({ref:t},u),{},{components:n})):i.createElement(v,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},775:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:8},s="Events",l={unversionedId:"tutorials/scilla-tutorials/incrementing-button/events",id:"tutorials/scilla-tutorials/incrementing-button/events",isDocsHomePage:!1,title:"Events",description:"An event is a piece of data that gets stored on the blockchain and emitted to any consuming client application listening. It is stored in the transaction history on the block the transaction was processed at.",source:"@site/docs/tutorials/scilla-tutorials/incrementing-button/events.md",sourceDirName:"tutorials/scilla-tutorials/incrementing-button",slug:"/tutorials/scilla-tutorials/incrementing-button/events",permalink:"/Scilla-Cookbook-1/tutorials/scilla-tutorials/incrementing-button/events",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/tutorials/scilla-tutorials/incrementing-button/events.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Transitions",permalink:"/Scilla-Cookbook-1/tutorials/scilla-tutorials/incrementing-button/transition"},next:{title:"Testing the button",permalink:"/Scilla-Cookbook-1/tutorials/scilla-tutorials/incrementing-button/local-testing"}},u=[{value:"IncrementingButton",id:"incrementingbutton",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"events"},"Events"),(0,o.kt)("p",null,"An event is a piece of data that gets stored on the blockchain and emitted to any consuming client application listening. It is stored in the transaction history on the block the transaction was processed at."),(0,o.kt)("p",null,"An event is comprised of a number of parameters in the pattern of ",(0,o.kt)("inlineCode",{parentName:"p"},"vname : value")," pairs delimited by ",(0,o.kt)("inlineCode",{parentName:"p"},";"),". An event must contain the compulsory field _eventname, and may contain other fields such as the code field in the example above."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},'e = {_eventname : "EventNameString"; vname : value };\nevent e\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Event calls can be useful for debugging by emitting function parameters and other relevant data"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It's good convention to emit an event on success or failure with the relevant parameters."))),(0,o.kt)("h2",{id:"incrementingbutton"},"IncrementingButton"),(0,o.kt)("p",null,"Lets continue to improve IncrementingButton by defining some events to be emitted on successfully pressing the button."),(0,o.kt)("p",null,"Let's muse on the design of the contract if we defined a singular event within the public transition like the below example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},'...\n\ntransition PressTheButton()\n  IsPreviousClicker _sender;\n  SetNewClicker _sender;\n  IncrementCounter\n  \n  e = {_eventname : "PressedTheButtonSuccess"; button_presser : _sender };\n  event e\nend\n')),(0,o.kt)("p",null,"Now all calls to the transition ",(0,o.kt)("inlineCode",{parentName:"p"},"PressTheButton")," that do not throw an error by calling the procedures will emit the event ",(0,o.kt)("inlineCode",{parentName:"p"},"PressedTheButtonSuccess")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"_senders")," address. This event is now able to be listened for and consumed by client applications or audited from."),(0,o.kt)("p",null,'We might also want to emit events within procedures especially if these are able to be called cross-contract.  We identify that the procedure "setters" should have events and implement them as so.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},'...\n\nprocedure IncrementCounter()\n  previous_click_count <- total_count_clicks;\n  new_click_count = builtin add previous_click_count uint128_one;\n  total_count_clicks := new_click_count;\n  \n  e = {_eventname : "IncrementCounterSuccess"; pcc:previous_click_count; ncc: new_click_count  };\n  event e\nend \n\nprocedure SetNewClicker(new_clicker: ByStr20)\n  current_clicker := new_clicker;\n  \n  e = {_eventname : "NewClickerState"; nc:new_clicker};\n  event e\nend\n...\n')))}m.isMDXComponent=!0}}]);