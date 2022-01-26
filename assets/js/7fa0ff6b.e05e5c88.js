"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[341],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return p}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),p=a,h=d["".concat(l,".").concat(p)]||d[p]||m[p]||o;return r?t.createElement(h,i(i({ref:n},u),{},{components:r})):t.createElement(h,i({ref:n},u))}));function p(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3709:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={tags:["random","randomisation"]},l="True Random VS Pseudo-Random",c={unversionedId:"recipes/scilla-recipes/random",id:"recipes/scilla-recipes/random",isDocsHomePage:!1,title:"True Random VS Pseudo-Random",description:"The difference between true random number generators(TRNGs) and pseudo-random number generators(PRNGs) is that TRNGs use an unpredictable physical means to generate numbers (like atmospheric noise), and pseudo-random numbers are sets of algorithms that utilize mathematical formulas to produce a certain sequence of numbers that will appear random, or at least will have the effect of randomness.",source:"@site/docs/recipes/scilla-recipes/random.md",sourceDirName:"recipes/scilla-recipes",slug:"/recipes/scilla-recipes/random",permalink:"/recipes/scilla-recipes/random",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/scilla-recipes/random.md",tags:[{label:"random",permalink:"/tags/random"},{label:"randomisation",permalink:"/tags/randomisation"}],version:"current",frontMatter:{tags:["random","randomisation"]},sidebar:"tutorialSidebar",previous:{title:"Pattern (Viewer)",permalink:"/recipes/scilla-recipes/pattern_view"},next:{title:"Remote State Reads",permalink:"/recipes/scilla-recipes/remoteread"}},u=[],m={toc:u};function d(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"true-random-vs-pseudo-random"},"True Random VS Pseudo-Random"),(0,o.kt)("p",null,"The difference between true random number generators(TRNGs) and pseudo-random number generators(PRNGs) is that TRNGs use an unpredictable physical means to generate numbers (like atmospheric noise), and pseudo-random numbers are sets of algorithms that utilize mathematical formulas to produce a certain sequence of numbers that will appear random, or at least will have the effect of randomness."),(0,o.kt)("p",null,"If you listed down the results of pseudo-randomness mimicking dice rolls the numbers will really appear as if they are random. But statistical analysis will prove that the numbers produced by a pseudo-random algorithm is not really random but is rather predetermined. Thus its results can effectively calculated and guessed."),(0,o.kt)("h1",{id:"basic-implementation-of-pseudo-random"},"Basic implementation of pseudo random"),(0,o.kt)("p",null,"The below function is an example of how pseudo-random can be implemented using keccakhash. The result of which could be predetermined and guessed ahead of time."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ocaml"},"let random =\n  fun (entropy: Uint256) =>\n  fun (block_number: BNum) =>\n  fun (addr: ByStr20) =>\n    let addr_hash = builtin keccak256hash addr in\n    let entropy_hash = builtin keccak256hash entropy in\n    let blockhash = builtin keccak256hash block_number in\n    let ehash = builtin concat entropy_hash blockhash in\n    let ahash = builtin concat ehash addr_hash in\n    let last_hash = builtin concat ehash ahash in\n    let hash = builtin keccak256hash last_hash in\n      builtin to_uint256 hash\n")))}d.isMDXComponent=!0}}]);