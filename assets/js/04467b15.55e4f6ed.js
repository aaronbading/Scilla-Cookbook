"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[2789],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),o=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var o=2;o<i;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1702:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],c={tags:["contract","call","another","callback","msgs"]},l="Messages, Callbacks & Contract-to-Contract Interaction",o={unversionedId:"recipes/scilla-recipes/messages",id:"recipes/scilla-recipes/messages",isDocsHomePage:!1,title:"Messages, Callbacks & Contract-to-Contract Interaction",description:"Developers may wish to call another contract to perform a specific action.",source:"@site/docs/recipes/scilla-recipes/messages.md",sourceDirName:"recipes/scilla-recipes",slug:"/recipes/scilla-recipes/messages",permalink:"/recipes/scilla-recipes/messages",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/scilla-recipes/messages.md",tags:[{label:"contract",permalink:"/tags/contract"},{label:"call",permalink:"/tags/call"},{label:"another",permalink:"/tags/another"},{label:"callback",permalink:"/tags/callback"},{label:"msgs",permalink:"/tags/msgs"}],version:"current",frontMatter:{tags:["contract","call","another","callback","msgs"]},sidebar:"tutorialSidebar",previous:{title:"Maps",permalink:"/recipes/scilla-recipes/map"},next:{title:"Metatransactions",permalink:"/recipes/scilla-recipes/metatransactions"}},p=[{value:"Crosschain calling example using Messages",id:"crosschain-calling-example-using-messages",children:[{value:"Messages",id:"messages",children:[]},{value:"Calling a contract with parameters",id:"calling-a-contract-with-parameters",children:[]},{value:"Calling mutiple contracts with one call",id:"calling-mutiple-contracts-with-one-call",children:[]}]},{value:"Callbacks",id:"callbacks",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],m={toc:p};function d(e){var t=e.components,c=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"messages-callbacks--contract-to-contract-interaction"},"Messages, Callbacks & Contract-to-Contract Interaction"),(0,i.kt)("p",null,"Developers may wish to call another contract to perform a specific action."),(0,i.kt)("h2",{id:"crosschain-calling-example-using-messages"},"Crosschain calling example using Messages"),(0,i.kt)("p",null,"Let's assume we have a button contract. The button contract allows addresses to interact and press the button. In this example we write a contract that interacts with the button contract called ",(0,i.kt)("inlineCode",{parentName:"p"},"CallerContract")),(0,i.kt)("p",null,"Firstly, we need the name of the transition and shape of the parameters we are trying to call. In our case the transition name is ",(0,i.kt)("inlineCode",{parentName:"p"},"PressTheButton")," with no arguments."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"contract Example()\n\ntransition PressTheButton()\nend\n\n")),(0,i.kt)("h3",{id:"messages"},"Messages"),(0,i.kt)("p",null,"Our contract so far defines a transition called ProxyPressButton, that takes a ByStr20 as an argument. When this transition is called, a Message call object is created called ",(0,i.kt)("inlineCode",{parentName:"p"},"button_contract_call"),". A call object takes three manditory arguments called ",(0,i.kt)("inlineCode",{parentName:"p"},"_tag"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_recipient")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"_amount"),". These relate to the transition name, contract address and ZIL amount in QA respectively."),(0,i.kt)("p",null,"In our case the _tag will be ",(0,i.kt)("inlineCode",{parentName:"p"},"PressTheButton"),", the_recipient will be the variable we pass ",(0,i.kt)("inlineCode",{parentName:"p"},"button_contract_address")," and the _amount we are sending is ",(0,i.kt)("inlineCode",{parentName:"p"},"Uint128 0"),"."),(0,i.kt)("p",null,"When the button contract recieves the transition call from the proxy it can inspect the address using",(0,i.kt)("inlineCode",{parentName:"p"},"_sender"),", this will be populated with the proxys address. The contract also has access to the caller who initited the chain from the proxy using ",(0,i.kt)("inlineCode",{parentName:"p"},"_origin"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml",metastring:"{12,13,14}","{12,13,14}":!0},'contract Proxy()\n\nlet one_msg = \n  fun (msg : Message) => \n  let nil_msg = Nil {Message} in\n    Cons {Message} msg nil_msg\n...\ncontract CallerContract()\n...\ntransition ProxyPressButton(button_contract_address: ByStr20)\n    button_contract_call = {\n        _tag: "PressTheButton";\n        _recipient: button_contract_address;\n        _amount: Uint128 0;\n    };\n    msgs = one_msg button_contract_call;\n    send msgs\nend\n')),(0,i.kt)("h3",{id:"calling-a-contract-with-parameters"},"Calling a contract with parameters"),(0,i.kt)("p",null,"In the case where we are calling a contract with some parameters, have extra values on the call object that relate to the vname of the transition"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml",metastring:"{3}","{3}":!0},"contract Example()\n\ntransition ExampleWithParams(int_value: Uint256, bystr_value: ByStr20)\nend\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml",metastring:"{10,11}","{10,11}":!0},'contract Proxy()\n\ntransition ProxyPressButton(example_contract_address: ByStr20)\n    i_value = Uint256 44;\n    b_value = example_contract_address\n    example_contract_call = {\n        _tag: "ExampleWithParams";\n        _recipient: example_contract_address;\n        _amount: Uint128 0;\n        int_value: i_value;\n        bystr_value: b_value;\n    };\n    msgs = one_msg example_contract_call;\n    send msgs\nend\n')),(0,i.kt)("h3",{id:"calling-mutiple-contracts-with-one-call"},"Calling mutiple contracts with one call"),(0,i.kt)("p",null,"We can send mutiple contract calls by chaining mutiple Message types together, creating a Constructor for the Message type and rolling the values ",(0,i.kt)("inlineCode",{parentName:"p"},"msg1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"msg2")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"two_msgs"),"."),(0,i.kt)("p",null,"In the below example, the Mint transition is calling ",(0,i.kt)("inlineCode",{parentName:"p"},"RecipientAcceptMint")," on the recipient address and it is calling back to the sender of the transaction with a callback ",(0,i.kt)("inlineCode",{parentName:"p"},"MintSuccessCallBack"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Proxy contracts need to implement the callback for functions to callback to."),(0,i.kt)("p",{parentName:"div"},"This will error on transaction processing if it's not defined."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},'contract Proxy()\n\nlet two_msgs =\nfun (msg1 : Message) =>\nfun (msg2 : Message) =>\n  let msgs_tmp = one_msg msg2 in\n  Cons {Message} msg1 msgs_tmp\n...\ncontract CallerContract()\n...\ntransition Mint(recipient: ByStr20, amount: Uint128)\n  ...\n  msg_to_recipient = {_tag : "RecipientAcceptMint"; _recipient : recipient; _amount : uint128_zero; \n                      minter : _sender; recipient : recipient; amount : amount};\n  msg_to_sender = {_tag : "MintSuccessCallBack"; _recipient : _sender; _amount : uint128_zero; \n                      minter : _sender; recipient : recipient; amount : amount};\n  msgs = two_msgs msg_to_recipient msg_to_sender;\n  send msgs\nend\n')),(0,i.kt)("h2",{id:"callbacks"},"Callbacks"),(0,i.kt)("p",null,"It's typical to provide Callbacks when transitions execute successfully so the proxy callers can update their interactive contracts if possible."),(0,i.kt)("p",null,"Take the below example where ",(0,i.kt)("inlineCode",{parentName:"p"},"Mint")," creates two messages ",(0,i.kt)("inlineCode",{parentName:"p"},"msg_to_recipient")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"msg_to_sender"),". The manditory tags ",(0,i.kt)("inlineCode",{parentName:"p"},"_tag"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_recipient")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"_amount")," are aligned seperately for easier reading."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"msg_to_recipient")," calls the transition ",(0,i.kt)("inlineCode",{parentName:"p"},"RecipientAcceptMint")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"recipient")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"uint128_zero")," QA."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"msg_to_sender")," calls the transition ",(0,i.kt)("inlineCode",{parentName:"p"},"MintSuccessCallBack")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"_sender")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"uint128_zero")," QA."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},'  msg_to_recipient = {_tag : "RecipientAcceptMint"; _recipient : recipient; _amount : uint128_zero; \n                      minter : _sender; recipient : recipient; amount : amount};\n  msg_to_sender = {_tag : "MintSuccessCallBack"; _recipient : _sender; _amount : uint128_zero; \n                      minter : _sender; recipient : recipient; amount : amount};\n')),(0,i.kt)("p",null,"Take the below diagram of the way these messages could be sent."),(0,i.kt)("p",null,"Note that there are many ways to call this function and depending on what your chain of execution looks like, you may need to implement one or both messages in your contract."),(0,i.kt)("p",null,"User wallets do not need to implement any messages, but any contracts where the ",(0,i.kt)("inlineCode",{parentName:"p"},"_recipient")," is the address do."),(0,i.kt)("p",null,"The second example shows the typical proxy interface where a user calls a proxy, which then calls some logical contract to do some work. When the example calls back to it's ",(0,i.kt)("inlineCode",{parentName:"p"},"_recipient")," it's looking at ",(0,i.kt)("inlineCode",{parentName:"p"},"_sender")," not ",(0,i.kt)("inlineCode",{parentName:"p"},"_origin")," therefore the proxy will need to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"MintSuccessCallback")," stub since it's the sender."),(0,i.kt)("p",null,"The third example shows the case where a contract is the recipient of a Mint. The consuming contract will have to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"RecipientAcceptMint")," stub"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You will recieve a transaction error if your contract does not implement a callback stub as the chain of execution fails to find the _tag name on your contract."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example banner",src:n(5978).Z})),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/TheDrBee/oSCILLAtor/blob/079f2400cfa1e6fdc7a7b0449bd65406186a1f3e/contracts/Callee.scilla"},"Callee.scilla")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/TheDrBee/oSCILLAtor/blob/079f2400cfa1e6fdc7a7b0449bd65406186a1f3e/contracts/Caller.scilla"},"Caller.scilla")))}d.isMDXComponent=!0},5978:function(e,t,n){t.Z=n.p+"assets/images/flow-diagram-df67a83b6f047816e6c8301f0ad6b435.png"}}]);