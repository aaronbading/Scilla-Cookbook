"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[8811],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},293:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={tags:["Remote","State","Reads","RSR"]},s="Remote State Reads (RSR)",l={unversionedId:"recipes/scilla-contract/remoteread",id:"recipes/scilla-contract/remoteread",isDocsHomePage:!1,title:"Remote State Reads (RSR)",description:"What is a RSR",source:"@site/docs/recipes/scilla-contract/remoteread.md",sourceDirName:"recipes/scilla-contract",slug:"/recipes/scilla-contract/remoteread",permalink:"/recipes/scilla-contract/remoteread",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/scilla-contract/remoteread.md",tags:[{label:"Remote",permalink:"/tags/remote"},{label:"State",permalink:"/tags/state"},{label:"Reads",permalink:"/tags/reads"},{label:"RSR",permalink:"/tags/rsr"}],version:"current",frontMatter:{tags:["Remote","State","Reads","RSR"]},sidebar:"tutorialSidebar",previous:{title:"True Random VS Pseudo-Random",permalink:"/recipes/scilla-contract/random"},next:{title:"Safe Mutiplication",permalink:"/recipes/scilla-contract/safemutiply"}},d=[{value:"What is a RSR",id:"what-is-a-rsr",children:[]},{value:"Address Subtyping",id:"address-subtyping",children:[]},{value:"Inline fetch",id:"inline-fetch",children:[]},{value:"RSR Example",id:"rsr-example",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"remote-state-reads-rsr"},"Remote State Reads (RSR)"),(0,i.kt)("h2",{id:"what-is-a-rsr"},"What is a RSR"),(0,i.kt)("p",null,"A remote state read is the mechanism to read another contract state from any another contract. These remote fetches can be implemented in a number of ways."),(0,i.kt)("h2",{id:"address-subtyping"},"Address Subtyping"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ByStr20 with end"),": A ByStr20 which, when interpreted as a network address, refers to an address that is in use. An address is in use if it either contains a contract, or if the balance or the nonce of the address is greater than 0. (The balance of an address is the number of Qa held by the address account. The nonce of an address is the number of transactions that have been initiated from that address)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ByStr20 with contract end"),": A ByStr20 which, when interpreted as a network address, refers to the address of a contract."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ByStr20 with contract field f1 : t1, field f2 : t2, ... end"),": A ByStr20 which, when interpreted as a network address, refers to the address of a contract containing the mutable fields f1 of type t1, f2 of type t2, and so on. The contract in question may define more fields than the ones specified in the type, but the fields specified in the type must be defined in the contract."),(0,i.kt)("h2",{id:"inline-fetch"},"Inline fetch"),(0,i.kt)("p",null,"To perform a remote fetch inline, the syntax  ",(0,i.kt)("inlineCode",{parentName:"p"},"x <- & c.f")," is used."),(0,i.kt)("p",null,"The type of c must be some contract address type declaring the field f. For instance, if c has the type ByStr20 with contract field paused : Bool end, then the value of the field paused at address c can be fetched using the statement ",(0,i.kt)("inlineCode",{parentName:"p"},"x <- & c.paused"),"."),(0,i.kt)("h2",{id:"rsr-example"},"RSR Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},'scilla_version 0\n\ncontract RemoteRead\n()\n\n(* read a value from a contract that has a field value of type Uint128  *)\ntransition ReadValueFromSetGet(c: ByStr20 with contract field value: Uint128 end)\n  value <- & c.value;\n  ev = {_eventname : "ReadValueFromSetGet"; value: value};\n  event ev\nend\n\n(* read a value from a contract that has afield value of type Uint128   *)\n(* version #2: do not define the address type as a transition parameter *)\n(*              but only inside the transition: Address type cast       *)\ntransition ReadValueFromSetGet2(addr: ByStr20)\n  contract_opt <- &addr as ByStr20 with contract field value: Uint128 end;\n  match contract_opt with\n  | Some c =>\n    value <- &c.value;\n    ev = {_eventname : "ReadValueFromSetGet2"; value: value};\n    event ev\n  | None => \n    ev = {_eventname : "ReadValueFromSetGet2Failure"};\n    event ev\n  end\nend\n')),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/scilla/pull/1014/files"},"Remote Read Implementation")))}p.isMDXComponent=!0}}]);