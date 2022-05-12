"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[8308],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,b=f["".concat(c,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},338:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],i={tags:["bool","boolean","true","false","if"]},c="Boolean",s={unversionedId:"recipes/scilla-recipes/bool",id:"recipes/scilla-recipes/bool",isDocsHomePage:!1,title:"Boolean",description:"The boolean (Bool) is a type which can have two values, true and false. A Bool is considered an ADT when performing interactions with contracts.",source:"@site/docs/recipes/scilla-recipes/bool.md",sourceDirName:"recipes/scilla-recipes",slug:"/recipes/scilla-recipes/bool",permalink:"/recipes/scilla-recipes/bool",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/scilla-recipes/bool.md",tags:[{label:"bool",permalink:"/tags/bool"},{label:"boolean",permalink:"/tags/boolean"},{label:"true",permalink:"/tags/true"},{label:"false",permalink:"/tags/false"},{label:"if",permalink:"/tags/if"}],version:"current",frontMatter:{tags:["bool","boolean","true","false","if"]},sidebar:"tutorialSidebar",previous:{title:"BNum",permalink:"/recipes/scilla-recipes/bnum"},next:{title:"Decentralised exchange",permalink:"/recipes/scilla-recipes/dex"}},p=[{value:"Further reading",id:"further-reading",children:[]}],u={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"boolean"},"Boolean"),(0,a.kt)("p",null,"The boolean (Bool) is a type which can have two values, true and false. A Bool is considered an ADT when performing interactions with contracts."),(0,a.kt)("p",null,"Consider the below definition of creating a type similar to Bool."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ocaml"},"type Example = | True | False\n")),(0,a.kt)("p",null,"A Bool value can be returned from functions like ",(0,a.kt)("inlineCode",{parentName:"p"},"builtin eq")," which leverages the two types of Bool to return a value. The value ",(0,a.kt)("inlineCode",{parentName:"p"},"is_equal")," is either true or false."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ocaml"},"is_equal = builtin eq a b\n")),(0,a.kt)("p",null,"Therefore, we can use Bool ADT pattern matching to perform a basic if statement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ocaml"},"match is_equal with\n    | True =>\n    | False =>\nend\n")),(0,a.kt)("h2",{id:"further-reading"},"Further reading"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=bool#boolean"},"Bool")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/stdlib.html?highlight=bool#boolutils"},"BoolUtils")))}f.isMDXComponent=!0}}]);