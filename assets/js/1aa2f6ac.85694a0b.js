"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[3282],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),p=r,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5632:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],s={tags:["funds","accept","zil","token"]},c="Funds",l={unversionedId:"recipes/scilla-contract/funds",id:"recipes/scilla-contract/funds",isDocsHomePage:!1,title:"Funds",description:"ZIL",source:"@site/docs/recipes/scilla-contract/funds.md",sourceDirName:"recipes/scilla-contract",slug:"/recipes/scilla-contract/funds",permalink:"/recipes/scilla-contract/funds",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/scilla-contract/funds.md",tags:[{label:"funds",permalink:"/tags/funds"},{label:"accept",permalink:"/tags/accept"},{label:"zil",permalink:"/tags/zil"},{label:"token",permalink:"/tags/token"}],version:"current",frontMatter:{tags:["funds","accept","zil","token"]},sidebar:"tutorialSidebar",previous:{title:"Functions",permalink:"/recipes/scilla-contract/functions"},next:{title:"Fungible Token",permalink:"/recipes/scilla-contract/fungible"}},u=[{value:"ZIL",id:"zil",children:[]},{value:"Accept ZIL Contract",id:"accept-zil-contract",children:[]},{value:"Refund Mechanism",id:"refund-mechanism",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],d={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"funds"},"Funds"),(0,i.kt)("h2",{id:"zil"},"ZIL"),(0,i.kt)("p",null,"One unit of ZIL as a native token is equal to 1000000000000 QA. (1 ZIL = 10^12 QA)."),(0,i.kt)("p",null,"When we deal with ZIL as a unit in scilla, it is represented as an ",(0,i.kt)("inlineCode",{parentName:"p"},"Uint128"),"."),(0,i.kt)("p",null,"The below example shows how to accept/send funds to/from a smart contract."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The example does not implement ownership logic, therefore anyone can withdraw funds."))),(0,i.kt)("h2",{id:"accept-zil-contract"},"Accept ZIL Contract"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},'scilla_version 0\n(*********************************************************************************)\n(* Receive, store and send funds [QA = 10^{-12} ZIL, LI = 10^{-6} ZIL = 10^6 QA] *)\n(* in a smart contract                                                           *)\n(*********************************************************************************)\nimport IntUtils\n\nlibrary Funds\n\nlet one_msg = (* Wrap single message into singleton list *)\n  fun (msg : Message) =>\n    let nil_msg = Nil {Message} in\n    Cons {Message} msg nil_msg\n\nlet msg_as_list_wo_tag = (* Create transaction message as singleton list without a tag *)\n  fun (recipient : ByStr20) =>\n  fun (amount : Uint128) =>\n    let msg = {_tag : ""; _recipient : recipient; _amount : amount } in\n    one_msg msg\n\nlet is_positive = (* check if a uint is > 0 *)\n  fun (n : Uint128) =>\n    let zero = Uint128 0 in\n    uint128_gt n zero\n\ncontract Funds\n()\n\nprocedure TransferTo(to : ByStr20, amount : Uint128)\n  msgs = msg_as_list_wo_tag to amount;\n  send msgs\nend\n\ntransition Deposit() (* send QA to contract to receive and store it in contract *)\n  received = is_positive _amount;\n  match received with\n  |True  =>\n    accept;\n    b <- _balance;\n    ev = {_eventname: "DepositSuccess"; amount_received: _amount; new_balance: b};\n    event ev\n  |False =>\n  end\nend\n\ntransition Withdraw(amount : Uint128) (* withdraw an amount from the contract *)\n  b <- _balance;\n  is_more_than_balance = uint128_gt amount b;\n  match is_more_than_balance with\n  |True => (* requested more than the balance, do not fullfil request *)\n    ev = {_eventname: "WithdrawFailue"; amount_requested: amount; new_balance: b};\n    event ev\n  |False =>\n    new_b = builtin sub b amount;\n    TransferTo _sender amount;\n    ev = {_eventname: "WithdrawSuccess"; amount_withdrawn: amount; new_balance: new_b};\n    event ev\n  end\nend\n\ntransition Empty() (* withdraw everything *)\n  b <- _balance;\n  zero = Uint128 0;\n  TransferTo _sender b;\n  new_b <- _balance;\n  ev = {_eventname: "EmptySuccess"; amount_withdrawn: b; new_balance: new_b};\n  event ev\nend\n')),(0,i.kt)("h2",{id:"refund-mechanism"},"Refund Mechanism"),(0,i.kt)("p",null,"This function checks the ",(0,i.kt)("inlineCode",{parentName:"p"},"_amount")," against a passed parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"cap"),". If the amount sent is less than cap, the procedure does nothing, but in the case where you send more than ",(0,i.kt)("inlineCode",{parentName:"p"},"cap"),", it can calculate the difference equal to where you send exactly the right amount and returns the excess amount to the user."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},'procedure AcceptWithCap (cap : Uint128)\n  sent_more_than_necessary = builtin lt cap _amount;\n  match sent_more_than_necessary with\n  | True =>\n      amount_to_refund = builtin sub _amount cap;\n      accept;\n      msg = { _tag : ""; _recipient: _sender; _amount: amount_to_refund };\n      msgs = one_msg msg;\n      send msgs\n  | False =>\n  end\nend\n')),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-tips-and-tricks.html?highlight=funds#money-idioms"},"readthedocs - Money Idioms")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=funds#mutable-fields"},"readthedocs - Units")))}m.isMDXComponent=!0}}]);