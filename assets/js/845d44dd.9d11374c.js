"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[4320],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4167:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:4},s="Fetching ZRC-6 state",l={unversionedId:"tutorials/interaction-tutorials/nft-collection/readstate",id:"tutorials/interaction-tutorials/nft-collection/readstate",isDocsHomePage:!1,title:"Fetching ZRC-6 state",description:"Taking the example for fetchState.js script we can extend this to fetch the state of our NFT contract to perform particular bits of logic relating to the NFT contract.",source:"@site/docs/tutorials/interaction-tutorials/nft-collection/readstate.md",sourceDirName:"tutorials/interaction-tutorials/nft-collection",slug:"/tutorials/interaction-tutorials/nft-collection/readstate",permalink:"/tutorials/interaction-tutorials/nft-collection/readstate",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/tutorials/interaction-tutorials/nft-collection/readstate.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Batch minting ZRC-6",permalink:"/tutorials/interaction-tutorials/nft-collection/batchmint"}},u=[{value:"Amendments made",id:"amendments-made",children:[]}],p={toc:u};function f(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fetching-zrc-6-state"},"Fetching ZRC-6 state"),(0,o.kt)("p",null,"Taking the example for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library-Examples/blob/master/node/fetchState.js"},"fetchState.js script")," we can extend this to fetch the state of our NFT contract to perform particular bits of logic relating to the NFT contract."),(0,o.kt)("p",null,"Firstly, we will need some data in the contract state to be able to read anything from it."),(0,o.kt)("h2",{id:"amendments-made"},"Amendments made"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getStaticValue")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getValueFromMapKey")," are two simple functions that return the result of a ",(0,o.kt)("inlineCode",{parentName:"p"},"zilliqa.blockchain.getSmartContractSubState")," call. ",(0,o.kt)("inlineCode",{parentName:"p"},"getStaticValue")," is concerned of state fields when there is only one value, like a ",(0,o.kt)("inlineCode",{parentName:"p"},"Uint256")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"ByStr20"),", whereas ",(0,o.kt)("inlineCode",{parentName:"p"},"getValueFromMapKey")," needs the key to lookup in the map to return the value result."),(0,o.kt)("p",null,"By checking the contract state, we can determine if a particular token is using token_uri or base_uri, both, or none."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const axios = require("axios");\n\nconst { Zilliqa } = require("@zilliqa-js/zilliqa");\nconst zilliqa = new Zilliqa("https://dev-api.zilliqa.com");\n\n// Standard fungible token deployed on devnet\nconst nftContract = "0x18d1f737c1a1102cca966bf82dfe459e35fbd524";\nconst userAddress = "0xcb47d4ebc3bb5adae03b7a9c17e45a718909ce78";\n\nasync function getNFTContractState(nft_contract, token_id) {\n  const balance_row = await getValueFromMapKey(nftContract, "balances", userAddress);\n  const token_owner_row = await getValueFromMapKey(nftContract, "token_owners", token_id);\n  const base_uri = await getStaticValue(nftContract, "base_uri");\n  const turi_tokenuri_set = await getValueFromMapKey(\n    nftContract,\n    "token_uris",\n    String(token_id)\n  );\n  const turi_baseuri_set = await getValueFromMapKey(\n    nftContract,\n    "token_uris",\n    String(token_id)\n  );\n\n//is token_uri set?\n  // False =>\n    // is base_uri set?\n      // True =>\n        // use base_uri\n      // False =>\n        // neither are set\n  // True =>\n    // use token_uri\n\n  // is token_uri set for token 2?\n  turi_tokenuri_set !== undefined || turi_tokenuri_set !== null\n    ? console.log(`token ${token_id} has a token_uri, and a base API is set`)\n    : process.abort(`token ${token_id} exception`);\n\n  // is base_uri set for token 12?\n  turi_baseuri_set === undefined || turi_baseuri_set === null\n    ? process.abort(`token ${token_id} exception`)\n    : console.log(`token ${token_id} has no token_uri, as it uses a base API`);\n\n  // is token_uri && base_uri both not set?\n  turi_tokenuri_set !== undefined ||\n  (turi_tokenuri_set !== null && turi_baseuri_set === undefined) ||\n  turi_baseuri_set === null\n    ? console.error(`token ${token_id} is valid`)\n    : console.error(\n        `token ${token_id} has neither a base_uri or token_URI set`\n      );\n}\nasync function getStaticValue(nftContract, contract_state_field) {\n  const chainResponse = await zilliqa.blockchain.getSmartContractSubState(\n    nftContract,\n    contract_state_field\n  );\n  console.log(\n    `for call ${contract_state_field} : chain response, ${JSON.stringify(\n      chainResponse.result\n    )}`\n  );\n  return JSON.stringify(chainResponse.result);\n}\n\nasync function getValueFromMapKey(nftContract, contract_state_field, map_key) {\n  const chainResponse = await zilliqa.blockchain.getSmartContractSubState(\n    nftContract,\n    contract_state_field,\n    [map_key]\n  );\n  console.log(\n    `for call ${contract_state_field} : chain response, ${JSON.stringify(\n      chainResponse.result\n    )}`\n  );\n  return JSON.stringify(chainResponse.result);\n}\n\ngetNFTContractState(nftContract, 2);\ngetNFTContractState(nftContract, 12);\n')))}f.isMDXComponent=!0}}]);