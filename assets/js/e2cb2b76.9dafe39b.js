"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[6569],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),f=i,d=m["".concat(u,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9508:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={tags:["option","optional","some","none","divide","percentage"]},u="Safe multiplication",s={unversionedId:"recipes/scilla-recipes/safemutiply",id:"recipes/scilla-recipes/safemutiply",isDocsHomePage:!1,title:"Safe multiplication",description:"When your are working with numbers in any programming language you are subject to overflows. An overflow happens when the value of number is bigger than the maximum possible value offered by the machine.",source:"@site/docs/recipes/scilla-recipes/safemutiply.md",sourceDirName:"recipes/scilla-recipes",slug:"/recipes/scilla-recipes/safemutiply",permalink:"/recipes/scilla-recipes/safemutiply",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/scilla-recipes/safemutiply.md",tags:[{label:"option",permalink:"/tags/option"},{label:"optional",permalink:"/tags/optional"},{label:"some",permalink:"/tags/some"},{label:"none",permalink:"/tags/none"},{label:"divide",permalink:"/tags/divide"},{label:"percentage",permalink:"/tags/percentage"}],version:"current",frontMatter:{tags:["option","optional","some","none","divide","percentage"]},sidebar:"tutorialSidebar",previous:{title:"Remote state reads",permalink:"/recipes/scilla-recipes/remoteread"},next:{title:"Zilliqa-JS quickstart",permalink:"/recipes/contract-recipes/zilliqa-js-quickstart"}},p=[{value:"Safe percentage",id:"safe-percentage",children:[]},{value:"Further reading",id:"further-reading",children:[]}],c={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"safe-multiplication"},"Safe multiplication"),(0,a.kt)("p",null,"When your are working with numbers in any programming language you are subject to overflows. An overflow happens when the value of number is bigger than the maximum possible value offered by the machine."),(0,a.kt)("p",null,"For example if you\u2019re using an unsigned integer in Scilla. The possible values of your variable ranges from 0 to  2^256 (1.1579209e+77). So it means that if you\u2019re around the maximum value and increment your variable it will error as it overflows the maximum value range."),(0,a.kt)("p",null,"If developers want to multiple two ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint128")," together, they should firstly upcast their current values into ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint256")," so it doesn't overflow, and then perform the multiplication, finally casting the value to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Uint128")," after performing the division."),(0,a.kt)("h2",{id:"safe-percentage"},"Safe percentage"),(0,a.kt)("p",null,"If you are working with trying to find the percentage value of a users share of a pool and then reward them based on that percentage, then consider using safe ",(0,a.kt)("inlineCode",{parentName:"p"},"muldiv"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ocaml"},'let uint128_to_uint256 : Uint128 -> Uint256 =\n  fun (x : Uint128) =>\n    let ox256 = builtin to_uint256 x in\n      match ox256 with\n      | None =>\n        (* this never happens, hence we throw a division by zero exception just in case *)\n        let zero = Uint256 0 in\n        builtin div zero zero\n      | Some x256 => x256\n      end\n    \n\n(* Compute "(x * y) / z" with protection against integer overflows *)\nlet muldiv : Uint128 -> Uint128 -> Uint128 -> Uint128 =\n    fun (x : Uint128) =>\n    fun (y : Uint128) =>\n    fun (z : Uint128) =>\n      let x256 = uint128_to_uint256 x in\n      let y256 = uint128_to_uint256 y in\n      let z256 = uint128_to_uint256 z in\n      let x_mul_y256 = builtin mul x256 y256 in\n      let res256 = builtin div x_mul_y256 z256 in\n      let ores128 = builtin to_uint128 res256 in\n      match ores128 with\n      | None =>\n        (* this must never happen, hence we throw an integer overflow exception *)\n        let max_uint128 = Uint128 340282366920938463463374607431768211455 in\n        let fourtytwo128 = Uint128 42 in\n        builtin mul max_uint128 fourtytwo128\n      | Some res128 =>\n        res128\n      end\n')),(0,a.kt)("p",null,"Lets assume we are A. The pool has the following entries."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A 12"),(0,a.kt)("li",{parentName:"ul"},"B 3"),(0,a.kt)("li",{parentName:"ul"},"C 9"),(0,a.kt)("li",{parentName:"ul"},"D 69")),(0,a.kt)("p",null,"We can deduce and reason the following."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A own's 12"),(0,a.kt)("li",{parentName:"ul"},"The total of all the entries is 93"),(0,a.kt)("li",{parentName:"ul"},"12 is x percentage of 93 = 12.9"),(0,a.kt)("li",{parentName:"ul"},"If the total rewards is 100 Zil or 100000000000000 QA"),(0,a.kt)("li",{parentName:"ul"},"Then A is owed 12.9 Zil or 12.9 Zil QA")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ocaml"},"user_share = 12 \ntotal_amount_rewards = 100000000000000qa\nsum_of_all_shares = 93\n")),(0,a.kt)("p",null,"Usage of ",(0,a.kt)("inlineCode",{parentName:"p"},"muldiv")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ocaml"},"user_share_of_rewards = muldiv user_share total_amount_rewards sum_of_all_shares;\n")),(0,a.kt)("p",null,"Test this out on isolated environment ",(0,a.kt)("inlineCode",{parentName:"p"},"0xd3360fe70a19dc2dd5cb7ad4164db455ddc2a68c")),(0,a.kt)("h2",{id:"further-reading"},"Further reading"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/staking-contract/blob/82fad745a04eedefb1a0cd16e5316626c3736c13/contracts/ssnlist.scilla"},"SSN Staking Contract")))}m.isMDXComponent=!0}}]);