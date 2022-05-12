"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[4307],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return u}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return n?o.createElement(f,r(r({ref:t},h),{},{components:n})):o.createElement(f,r({ref:t},h))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2359:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return p}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={tags:["block","production","finality","blocks per day"]},c="Block production",l={unversionedId:"side-knowledge/blocks",id:"side-knowledge/blocks",isDocsHomePage:!1,title:"Block production",description:"When a transaction occurs, the data is submitted onchain, and the user pays some gas for the privilege to submit and have the chain respect the data they have posted. When it's posted to the network, it is bundled with other transactions that happened in the same period of time and is appended to the head of the blockchain.",source:"@site/docs/side-knowledge/blocks.md",sourceDirName:"side-knowledge",slug:"/side-knowledge/blocks",permalink:"/side-knowledge/blocks",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/side-knowledge/blocks.md",tags:[{label:"block",permalink:"/tags/block"},{label:"production",permalink:"/tags/production"},{label:"finality",permalink:"/tags/finality"},{label:"blocks per day",permalink:"/tags/blocks-per-day"}],version:"current",frontMatter:{tags:["block","production","finality","blocks per day"]},sidebar:"tutorialSidebar",previous:{title:"Zilliqa-Swift SDK",permalink:"/recipes/contract-recipes/zilliqa-swift"},next:{title:"FAQ",permalink:"/side-knowledge/faq"}},h=[{value:"What is sharding",id:"what-is-sharding",children:[]},{value:"What is finality",id:"what-is-finality",children:[]},{value:"How many blocks are there per day",id:"how-many-blocks-are-there-per-day",children:[]}],d={toc:h};function p(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"block-production"},"Block production"),(0,i.kt)("p",null,"When a transaction occurs, the data is submitted onchain, and the user pays some gas for the privilege to submit and have the chain respect the data they have posted. When it's posted to the network, it is bundled with other transactions that happened in the same period of time and is appended to the head of the blockchain."),(0,i.kt)("h2",{id:"what-is-sharding"},"What is sharding"),(0,i.kt)("p",null,"Sharding is a process of splitting up blockchain nodes into different groups. Each group has roughly the same number of nodes as each other, so if one shard can do ten transactions per second, all shards together can process 100 transactions per second."),(0,i.kt)("p",null,"Zilliqa\u2019s consensus mechanism begins in a Proof of Work phase. During this phase, miners must confirm the blockchain by completing an individual hash. This process has finality, meaning that most nodes must agree on a mini-block before it is finalized."),(0,i.kt)("h2",{id:"what-is-finality"},"What is finality"),(0,i.kt)("p",null,"There is a key difference between Zilliqa and blockchains like Bitcoin and Ethereum and that is finality to transactions."),(0,i.kt)("p",null,"Because of the fact that Bitcoin/Ethereum use PoW for consensus, every block that is mined has probabilistic finality, i.e., the probability that a block will indeed be a part of the canonical chain increases with the number of blocks that get added on top of it."),(0,i.kt)("p",null,"Zilliqa on the other hand uses PBFT for consensus which means that once a block is mined, it is final. Therefore you don't need to wait for any confirmation at all."),(0,i.kt)("p",null,"In Ethereum for instance, exchanges often wait for 30 confirmations as a newly mined block may not end up being in the canonical chain."),(0,i.kt)("p",null,"Also, though they are somewhat correlated, there is a difference between confirmation latency and general throughput."),(0,i.kt)("h2",{id:"how-many-blocks-are-there-per-day"},"How many blocks are there per day"),(0,i.kt)("p",null,"The blocks per day can very depending on network sharding, take note of the ",(0,i.kt)("a",{parentName:"p",href:"https://viewblock.io/zilliqa/stat/blockCountHistory"},"statistics of the network")," to determine this in your calculations. Divide the average blocks per day by 24 to get the hourly rate."))}p.isMDXComponent=!0}}]);