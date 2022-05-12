"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[3269],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,k=m["".concat(s,".").concat(u)]||m[u]||p[u]||o;return t?a.createElement(k,i(i({ref:n},d),{},{components:t})):a.createElement(k,i({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6651:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),i=["components"],l={tags:["fungible","token","reference","contract","zrc-2"]},s="Fungible token",c={unversionedId:"recipes/scilla-recipes/fungible",id:"recipes/scilla-recipes/fungible",isDocsHomePage:!1,title:"Fungible token",description:"Fungible tokens are an open standard for creating currencies. Fungibility is the property of goods or commodities whose individual units are essentially interchangeable, and each of its parts is indistinguishable from another part. An example is 1 ZIL can be traded for an equal value of 1 ZIL.",source:"@site/docs/recipes/scilla-recipes/fungible.md",sourceDirName:"recipes/scilla-recipes",slug:"/recipes/scilla-recipes/fungible",permalink:"/Scilla-Cookbook-1/recipes/scilla-recipes/fungible",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/scilla-recipes/fungible.md",tags:[{label:"fungible",permalink:"/Scilla-Cookbook-1/tags/fungible"},{label:"token",permalink:"/Scilla-Cookbook-1/tags/token"},{label:"reference",permalink:"/Scilla-Cookbook-1/tags/reference"},{label:"contract",permalink:"/Scilla-Cookbook-1/tags/contract"},{label:"zrc-2",permalink:"/Scilla-Cookbook-1/tags/zrc-2"}],version:"current",frontMatter:{tags:["fungible","token","reference","contract","zrc-2"]},sidebar:"tutorialSidebar",previous:{title:"Funds",permalink:"/Scilla-Cookbook-1/recipes/scilla-recipes/funds"},next:{title:"Imports",permalink:"/Scilla-Cookbook-1/recipes/scilla-recipes/imports"}},d=[{value:"How does it work?",id:"how-does-it-work",children:[]},{value:"Types of fungible contracts",id:"types-of-fungible-contracts",children:[{value:"Non-mintable",id:"non-mintable",children:[]},{value:"Mintable",id:"mintable",children:[]},{value:"Operatable",id:"operatable",children:[]},{value:"Transferring Fungible Tokens",id:"transferring-fungible-tokens",children:[]}]},{value:"Decimal Example",id:"decimal-example",children:[]},{value:"Further reading",id:"further-reading",children:[]}],p={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fungible-token"},"Fungible token"),(0,o.kt)("p",null,"Fungible tokens are an open standard for creating currencies. Fungibility is the property of goods or commodities whose individual units are essentially interchangeable, and each of its parts is indistinguishable from another part. An example is 1 ZIL can be traded for an equal value of 1 ZIL."),(0,o.kt)("p",null,"ZRC-2 defines a minimum interface that a smart contract must implement to allow fungible tokens to be managed, tracked, owned, and traded peer-to-peer via wallets or exchanges."),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"The fungible contract has a state map called ",(0,o.kt)("inlineCode",{parentName:"p"},"balances")," where it maps addresses (ByStr20) to a value of tokens represented by a Uint128. The amount of tokens that a user can be influenced by logic the fungible contract has. When a user wants to use these transactions in a sale, the contract spending the amount will check the fungible balance state to check if you have funds available to deduct."),(0,o.kt)("p",null,"The fungible contract gives a token holder the ability to set an ",(0,o.kt)("inlineCode",{parentName:"p"},"allowance")," for any address. This allowance address will have a spend limit it is allowed to spend on behalf of the token holder."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You cannot arbitrarily move fungible tokens without you being either the owner or by giving an address some allowance."))),(0,o.kt)("p",null,"The fungible contract comes in different flavours depending on what the user needs to leverage. The contracts have the following public transitions :"),(0,o.kt)("h2",{id:"types-of-fungible-contracts"},"Types of fungible contracts"),(0,o.kt)("h3",{id:"non-mintable"},"Non-mintable"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The 'non-mintable' fungible contract defines the most basic interface a ZRC-2 token can have. It is considered the safest fungible contract as there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"Mint")," transition to be abused."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The fungible contracts have been audited by PwC"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"(* @dev: Increase the allowance of an approved_spender over the caller tokens. Only token_owner allowed to invoke.   *)\n(* param spender:      Address of the designated approved_spender.                                                   *)\n(* param amount:       Number of tokens to be increased as allowance for the approved_spender.                       *)\ntransition IncreaseAllowance(spender: ByStr20, amount: Uint128)\n\n(* @dev: Decrease the allowance of an approved_spender over the caller tokens. Only token_owner allowed to invoke. *)\n(* param spender:      Address of the designated approved_spender.                                                 *)\n(* param amount:       Number of tokens to be decreased as allowance for the approved_spender.                     *)\ntransition DecreaseAllowance(spender: ByStr20, amount: Uint128)\n\n(* @dev: Moves an amount tokens from _sender to the recipient. Used by token_owner. *)\n(* @dev: Balance of recipient will increase. Balance of _sender will decrease.      *)\n(* @param to:  Address of the recipient whose balance is increased.                 *)\n(* @param amount:     Amount of tokens to be sent.                                  *)\ntransition Transfer(to: ByStr20, amount: Uint128)\n\n(* @dev: Move a given amount of tokens from one address to another using the allowance mechanism. The caller must be an approved_spender. *)\n(* @dev: Balance of recipient will increase. Balance of token_owner will decrease.                                                        *)\n(* @param from:    Address of the token_owner whose balance is decreased.                                                                 *)\n(* @param to:      Address of the recipient whose balance is increased.                                                                   *)\n(* @param amount:  Amount of tokens to be transferred.                                                                                    *)\ntransition TransferFrom(from: ByStr20, to: ByStr20, amount: Uint128)\n")),(0,o.kt)("h3",{id:"mintable"},"Mintable"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The 'mintable' fungible contract should be viewed sceptically as the ",(0,o.kt)("inlineCode",{parentName:"p"},"contract_owner")," can arbitrarily ",(0,o.kt)("inlineCode",{parentName:"p"},"Mint")," new tokens."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"...\n(* @dev: Mint new tokens. Only contract_owner can mint.                      *)\n(* @param recipient: Address of the recipient whose balance is to increase.  *)\n(* @param amount:    Number of tokens to be minted.                          *)\ntransition Mint(recipient: ByStr20, amount: Uint128)\n\n(* @dev: Burn existing tokens. Only contract_owner can burn.                      *)\n(* @param burn_account: Address of the token_owner whose balance is to decrease.  *)\n(* @param amount:       Number of tokens to be burned.                            *)\ntransition Burn(burn_account: ByStr20, amount: Uint128)\n")),(0,o.kt)("h3",{id:"operatable"},"Operatable"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The 'operatable' fungible contract should be viewed sceptically as an ",(0,o.kt)("inlineCode",{parentName:"p"},"operator")," can arbitrarily move tokens."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"(* @dev: Moves amount tokens from token_owner to recipient. _sender must be an operator of token_owner. *)\n(* @dev: Balance of recipient will increase. Balance of token_owner will decrease.                      *)\n(* @param from:        Address of the token_owner whose balance is decreased.                           *)\n(* @param to:          Address of the recipient whose balance is increased.                             *)\n(* @param amount:      Amount of tokens to be sent.                                                     *)\ntransition OperatorSend(from: ByStr20, to: ByStr20, amount: Uint128)\n")),(0,o.kt)("h3",{id:"transferring-fungible-tokens"},"Transferring Fungible Tokens"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},'procedure TransferFundsFromXToY(x: ByStr20, fungible_contract: ByStr20, y: ByStr20, funds: Uint128)\n    send_funds = {\n      _tag: "TransferFrom";\n      _recipient: fungible_contract;\n      _amount: uint128_zero;\n      from: x;\n      to: y;\n      amount: funds\n      };\n    msgs = one_msg send_funds;\n    send msgs;\nend\n')),(0,o.kt)("h2",{id:"decimal-example"},"Decimal Example"),(0,o.kt)("p",null,"Lets say we make a token with 2 decimals with a total supply of 1000. There are 100 sub-units (max of two decimals) to 1 full token. The total sub-unit supply of would be 1000*100=100000."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Amount to send"),(0,o.kt)("th",{parentName:"tr",align:null},"Fungible value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.01"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.1"),(0,o.kt)("td",{parentName:"tr",align:null},"10")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"100")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"10"),(0,o.kt)("td",{parentName:"tr",align:null},"1000")))),(0,o.kt)("p",null,"Lets take an example where we have 12 decimals with a supply of 1000. there are 1000000000000 sub-units (max of 12 decimals) to 1 full token. the total sub-unit supply would be 1000*1000000000000=100000000000000"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Amount to send"),(0,o.kt)("th",{parentName:"tr",align:null},"Fungible value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.000000000001"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.000000001"),(0,o.kt)("td",{parentName:"tr",align:null},"1000")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.000001"),(0,o.kt)("td",{parentName:"tr",align:null},"1000000")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"1000000000000")))),(0,o.kt)("h2",{id:"further-reading"},"Further reading"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-by-example.html?highlight=fungible#fungible-tokens"},"Scilla Documentation - Fungible Tokens")))}m.isMDXComponent=!0}}]);