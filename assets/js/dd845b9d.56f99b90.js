"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[525],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),h=o,f=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},149:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={tags:["error","transaction"]},l="Transaction Errors and Troubleshooting",c={unversionedId:"side-dishes/troubleshooting",id:"side-dishes/troubleshooting",isDocsHomePage:!1,title:"Transaction Errors and Troubleshooting",description:"Why does my transaction error?",source:"@site/docs/side-dishes/troubleshooting.md",sourceDirName:"side-dishes",slug:"/side-dishes/troubleshooting",permalink:"/side-dishes/troubleshooting",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/side-dishes/troubleshooting.md",tags:[{label:"error",permalink:"/tags/error"},{label:"transaction",permalink:"/tags/transaction"}],version:"current",frontMatter:{tags:["error","transaction"]},sidebar:"tutorialSidebar",previous:{title:"Scilla Test Suite",permalink:"/side-dishes/scilla-test-suite"},next:{title:"Vanity Addresses",permalink:"/side-dishes/vanity"}},u=[{value:"Why does my transaction error?",id:"why-does-my-transaction-error",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],d={toc:u};function p(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transaction-errors-and-troubleshooting"},"Transaction Errors and Troubleshooting"),(0,i.kt)("h2",{id:"why-does-my-transaction-error"},"Why does my transaction error?"),(0,i.kt)("p",null,"This could be for a number of issues. Firstly, read and understand the error."),(0,i.kt)("p",null,"Lets take the below example where a user is trying to interface with Zilswap Dex."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Docusaurus",src:r(5671).Z})),(0,i.kt)("p",null,"Firstly, we can see the transition with the passed variables variables, and below that we can see the exception stack trace."),(0,i.kt)("p",null,"The error thrown reads ",(0,i.kt)("inlineCode",{parentName:"p"},'Exception thrown: (Message [(_exception : (String "RequestedRatesCannotBeFulfilled"))]) :1')),(0,i.kt)("p",null,"If errors are well defined, it may be easy to spot what the problem is, in our case we do not know what ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestedRatesCannotBeFulfilled")," means."),(0,i.kt)("p",null,"This is a contract specific error and we will need to look at the Zilswap Dex contract to learn more."),(0,i.kt)("p",null,"Once we've searched the Zilswap Dex contract for the phrase ",(0,i.kt)("inlineCode",{parentName:"p"},"RequestedRatesCannotBeFulfilled")," we find it posted in three places."),(0,i.kt)("p",null,"The first two do not concern us, as these are around ",(0,i.kt)("inlineCode",{parentName:"p"},"AddLiquidity")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RemoveLiquidity"),"."),(0,i.kt)("p",null,"The third and final place its mentioned is in the library function ",(0,i.kt)("inlineCode",{parentName:"p"},"resultFor"),"."),(0,i.kt)("p",null,"We can find ",(0,i.kt)("inlineCode",{parentName:"p"},"resultFor")," used in most of the swap transitions including our transition call ",(0,i.kt)("inlineCode",{parentName:"p"},"SwapExactTokensForZIL"),"."),(0,i.kt)("p",null,"We have traced the error back to this particular logical block."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},'  let within_limits = withinLimits amount maybe_limit_amount exact_side in\n  match within_limits with\n  | False =>\n     let e = "RequestedRatesCannotBeFulfilled" in Error e\n  | True =>\n     Result pool amount\n  end \n')),(0,i.kt)("p",null,"We can further extrapolate on the intermeditely proceding code that this logical block is dealing with swapping user tokens against the liquidity pool - this error is returned when either the price moves and the amount of slippage determines that the trade calculation would not have enough tokens to procede and therefore throws this error."),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"))}p.isMDXComponent=!0},5671:function(e,t,r){t.Z=r.p+"assets/images/troubleshooting-1-305c3ff4f478193d30cf53d5e2b68f64.png"}}]);