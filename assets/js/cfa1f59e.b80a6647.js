"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[9854],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8958:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={tags:["view","viewer","pattern"]},c="Pattern (Viewer)",u={unversionedId:"recipes/scilla-contract/pattern_view",id:"recipes/scilla-contract/pattern_view",isDocsHomePage:!1,title:"Pattern (Viewer)",description:"The viewer pattern is a standardised way of implementing functions that return a value without using callbacks.",source:"@site/docs/recipes/scilla-contract/pattern_view.md",sourceDirName:"recipes/scilla-contract",slug:"/recipes/scilla-contract/pattern_view",permalink:"/recipes/scilla-contract/pattern_view",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/scilla-contract/pattern_view.md",tags:[{label:"view",permalink:"/tags/view"},{label:"viewer",permalink:"/tags/viewer"},{label:"pattern",permalink:"/tags/pattern"}],version:"current",frontMatter:{tags:["view","viewer","pattern"]},sidebar:"tutorialSidebar",previous:{title:"Pattern (Push vs Pull)",permalink:"/recipes/scilla-contract/pattern_pushvspush"},next:{title:"True Random VS Pseudo-Random",permalink:"/recipes/scilla-contract/random"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pattern-viewer"},"Pattern (Viewer)"),(0,i.kt)("p",null,"The viewer pattern is a standardised way of implementing functions that return a value without using callbacks."),(0,i.kt)("p",null,"In the first contract the transition ",(0,i.kt)("inlineCode",{parentName:"p"},"Function_with_return_value")," is a general function, which might perform state updates as well as returning a value. The transition ",(0,i.kt)("inlineCode",{parentName:"p"},"View_function")," is a view function which returns a value, but which doesn't perform state updates."),(0,i.kt)("p",null,"In the second contract the transition ",(0,i.kt)("inlineCode",{parentName:"p"},"Call_and_read_return_value")," calls the view function (it could have been the non-view function instead - the pattern is the same from the calling contract's perspective), and also calls a transition on itself. The call to self is executed after the view function is called, so the return value is available to be remote read once the call to self is executed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},'scilla_version 0\n\nlibrary Lib\n\nlet compute_the_value =\n  fun (input_1 : ...) =>\n  fun (input_2 : ...) =>\n    ...\n    =>\n    ...\n\ncontract ContractWithReturnValues()\n\nfield state_field_1 : Uint128 = ...\nfield state_field_2 : String = ...\n...\n\nfield return_value_1 : ... = ...\nfield return_value_2 : ... = ...\n\n(* Perform a computation and state updates, and store the result in the field return_value_1 for the caller to read *)\ntransition Function_with_return_value(param1 : ..., param2 : ..., ...)\n  <compute whatever needs to be computed, including state updates>;\n  res = <the result that needs to be returned>;\n  return_value_1 := res\nend\n\n(* Perform a computation without state updates, and store the result in the field return_value_2 for the caller to read *)\ntransition View_function(param1 : ..., param2 : ..., ...)\n  (* A view function always follows this exact pattern *)\n  (* Read the state fields needed to do the computation*)\n  s1 <- state_field_1;\n  s2 <- state_field_2;\n  ...\n  sn <- state_field_n;\n  res = compute_the_value param1 param2 ... s1 s2 ...;\n  return_value_2 := res\nend\n\n(* *********************************************************************************************** *)\n\nscilla_version 0\n\ncontract CallingContract(contract_with_return_values : ByStr20 with contract field return_value_2 : ... end)\n\ntransition Call_and_read_return_value(...)\n  remote <- contract_with_return_values;\n  msg1 = { _recipient : remote; _tag : "View_function"; param1 : ... ; param2 : ...; ...};\n  send msg1;\n  msg2 = { _recipient : _this_address; _tag : "Read_Return_value"; ...};\n  send msg2\nend\n\ntransition Read_Return_value(...)\n  return_value <-& contract_with_return_values.return_value_2;\n  <use the returned value for further computation>\nend\n')))}d.isMDXComponent=!0}}]);