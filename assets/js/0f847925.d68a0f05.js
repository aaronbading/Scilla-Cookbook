"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[2390],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var o=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var l=o.createContext({}),s=function(t){var e=o.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},u=function(t){var e=s(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),h=s(r),d=n,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return r?o.createElement(f,a(a({ref:e},u),{},{components:r})):o.createElement(f,a({ref:e},u))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,a=new Array(i);a[0]=h;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6917:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return h}});var o=r(7462),n=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:6},l="Interactivity with other contracts",s={unversionedId:"tutorials/scilla-tutorials/nft-collection/other-contracts",id:"tutorials/scilla-tutorials/nft-collection/other-contracts",isDocsHomePage:!1,title:"Interactivity with other contracts",description:"The ZRC-6 NFT contract is scoped to only do so much, other functionality and interactivity can be easily achieved with other Scilla contracts. As discussed previously, it's important to not pollute the NFT contract with project specific information and have other contracts which can interact with the NFT to then include your project specific information.",source:"@site/docs/tutorials/scilla-tutorials/nft-collection/other-contracts.md",sourceDirName:"tutorials/scilla-tutorials/nft-collection",slug:"/tutorials/scilla-tutorials/nft-collection/other-contracts",permalink:"/Scilla-Cookbook-1/tutorials/scilla-tutorials/nft-collection/other-contracts",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/tutorials/scilla-tutorials/nft-collection/other-contracts.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Minting a token",permalink:"/Scilla-Cookbook-1/tutorials/scilla-tutorials/nft-collection/minting-token"},next:{title:"Introduction",permalink:"/Scilla-Cookbook-1/tutorials/interaction-tutorials/incrementing-button-interaction/introduction"}},u=[{value:"Proxy contracts",id:"proxy-contracts",children:[]},{value:"Migration contracts",id:"migration-contracts",children:[]},{value:"Exclusive contracts",id:"exclusive-contracts",children:[]}],p={toc:u};function h(t){var e=t.components,r=(0,n.Z)(t,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interactivity-with-other-contracts"},"Interactivity with other contracts"),(0,i.kt)("p",null,"The ZRC-6 NFT contract is scoped to only do so much, other functionality and interactivity can be easily achieved with other Scilla contracts. As discussed previously, it's important to not pollute the NFT contract with project specific information and have other contracts which can interact with the NFT to then include your project specific information."),(0,i.kt)("h2",{id:"proxy-contracts"},"Proxy contracts"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/Scilla-Cookbook-1/recipes/scilla-recipes/pattern_proxy"},"Proxy contracts")," are an easy way to delegate primary sales through. Firstly create a proxy contract which takes an exact payment of ZIL or tokens. Bestow the proxy with the minting ability and then ask it to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mint")," transition. To the public, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mint")," transition will error because they are not minters, but the call can be routed through the proxy for the NFT contract to then send the token to the user calling of the proxy."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://viewblock.io/zilliqa/tx/0xadb58296ede89e5386239c8e6a5175d64dedf038a1336c9f42e5f1d0316e4765"},"Beanterra Proxy")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://viewblock.io/zilliqa/address/zil1vgz4y34ykxc9arjh0ezkacqv3xxtywlcvv0hx0"},"Duck Proxy")),(0,i.kt)("h2",{id:"migration-contracts"},"Migration contracts"),(0,i.kt)("p",null,"A migration contract is typically used to upgrade an existing NFT collection. Developers may think of many different ways to perform this action. The easiest method to preserve ",(0,i.kt)("inlineCode",{parentName:"p"},"token_id")," association with a user address is to directly Mint all of the tokens to a migration contract. When interacted with, burns a token_id from the old ZRC-1 or ZRC-6 contract, if this operation is successful, then the contract then moves the same token_id from the new nft contract to the user calling the migrator."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://viewblock.io/zilliqa/address/zil1m2hhu9reau5t57qckj9w2ejttxmn3hyhy77hr4"},"Duck Migrator")),(0,i.kt)("h2",{id:"exclusive-contracts"},"Exclusive contracts"),(0,i.kt)("p",null,"An exclusive contract is a contract which only allows operations to be performed by particular users. The list of addresses that are allowed to call the function can easily be transposed by remote reading the NFT contract balances map at the position _sender to check if they hold 1 or more NFTs."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://viewblock.io/zilliqa/address/zil1xhh2qwaca8w8u8ezcykg5yq8a2tguk7c298wjq"},"Duck Ownership")))}h.isMDXComponent=!0}}]);