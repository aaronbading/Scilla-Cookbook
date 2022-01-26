"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[2625],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return u}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},w={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(r),u=o,d=h["".concat(p,".").concat(u)]||h[u]||w[u]||i;return r?t.createElement(d,a(a({ref:n},c),{},{components:r})):t.createElement(d,a({ref:n},c))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8800:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return h}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={tags:["ownership"]},p="Pattern (Ownership)",l={unversionedId:"recipes/scilla-recipes/pattern_ownership",id:"recipes/scilla-recipes/pattern_ownership",isDocsHomePage:!1,title:"Pattern (Ownership)",description:"If your contract has an owner it typically means that address has admin powers meaning they have the privilage to adding/remove critical data or pause/unpause the contract.",source:"@site/docs/recipes/scilla-recipes/pattern_ownership.md",sourceDirName:"recipes/scilla-recipes",slug:"/recipes/scilla-recipes/pattern_ownership",permalink:"/recipes/scilla-recipes/pattern_ownership",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/scilla-recipes/pattern_ownership.md",tags:[{label:"ownership",permalink:"/tags/ownership"}],version:"current",frontMatter:{tags:["ownership"]},sidebar:"tutorialSidebar",previous:{title:"Pair",permalink:"/recipes/scilla-recipes/pair"},next:{title:"Pattern (Proxy)",permalink:"/recipes/scilla-recipes/pattern_proxy"}},c=[{value:"Transfering Ownership",id:"transfering-ownership",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],w={toc:c};function h(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},w,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pattern-ownership"},"Pattern (Ownership)"),(0,i.kt)("p",null,"If your contract has an owner it typically means that address has admin powers meaning they have the privilage to adding/remove critical data or pause/unpause the contract."),(0,i.kt)("p",null,"It's important to keep your address keys safe, but if for any reason a ",(0,i.kt)("inlineCode",{parentName:"p"},"contract_owner")," needs changing, there needs to be transitions pre-baked into your contract to handle this case."),(0,i.kt)("h2",{id:"transfering-ownership"},"Transfering Ownership"),(0,i.kt)("p",null,"Note the below example. The ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," field is initally set to ",(0,i.kt)("inlineCode",{parentName:"p"},"owner_at_deployment"),", but can then be changed at a later date. You should consider an ownership pattern when writing contracts."),(0,i.kt)("p",null,"It shows three ways of how to change the owner of the contract:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"transition ChangeOwner(new_owner : ByStr20)")),(0,i.kt)("p",null,"ChangeOwner allows anybody to change contract_owner to any address, which is dangerous"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"transition ChangeOwnerByOwnerOnly(new_owner : ByStr20)")),(0,i.kt)("p",null,"Here only the owner can change the ownership. This is better, yet still problematic as the new_owner might be wrong (a typo is enough), and thus the contract will have either a wrong owner, or even worse a non-existing owner."),(0,i.kt)("p",null,"The suggested way of transfering ownership, see Scilla Documentation -- use this in practice.\nThe current owner proposes (stages) a new owner"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"transition RequestOwnershipTransfer(new_owner : ByStr20)")),(0,i.kt)("p",null,"The proposed new owner accepts the ownership"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"transition ConfirmOwnershipTransfer()")),(0,i.kt)("p",null,"This allows a recall of ownership in the case the address was mistyped."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},'scilla_version 0\n\ncontract Ownership\n(owner_at_deployment: ByStr20) (* immutable *)\n\n(* mutable fields declarations *)\nfield owner : ByStr20 = owner_at_deployment (* the current owner *)\nfield pending_owner: Option ByStr20 = None {ByStr20} (* a new owner has been proposed *)\n\n(* emit an event showing both the sender and the owner, and a bool if they equal *)\ntransition IsOwnerCalling()\n  o <- owner;\n  is_owner = builtin eq _origin o;\n  ev = {_eventname: "Foo"; origin: _origin; owner: o; called_by_owner: is_owner};\n  event ev\nend\n\n(* change ownership: everyone can do this, not just the actual owner:\n    Should not be done in practice, we just show how to simply update a field *)\ntransition ChangeOwner(new_owner : ByStr20)\n  old <- owner;\n  owner := new_owner;\n  ev = {_eventname: "ChangeOwner"; _origin: _origin; old_owner: old; new_owner: new_owner};\n  event ev\nend\n\n(* change ownership: only owner can do this: Still not optimal as a wrong\n    parameter will lock out the intended new_owner, and give away owner_ship *)\ntransition ChangeOwnerByOwnerOnly(new_owner : ByStr20)\n  old <- owner;\n  is_owner = builtin eq _origin old;\n  match is_owner with\n  | False => (* do not change the owner as _origin is not current owner *)\n    ev = {_eventname: "ChangeOwnerByOwnerOnlyFailure"};\n    event ev\n  | True =>\n    owner := new_owner;\n    ev = {_eventname: "ChangeOwnerByOwnerOnlySuccess"};\n    event ev\n  end\nend\n\n(* the safe way of tranfering owner ship: current owner proposes a new owner    *)\n(* and the new onwer collects/accpets the owner ship                            *)\ntransition RequestOwnershipTransfer(new_owner : ByStr20)\n  current <- owner;\n  is_owner = builtin eq _origin current;\n  match is_owner with\n  | False => (* do not accept proposal as _origin is not current owner *)\n    ev = {_eventname: "RequestOwnershipTransferFailureSameOwner"};\n    event ev\n  | True =>\n    proposed = Some {ByStr20} new_owner;\n    pending_owner := proposed;\n    ev = {_eventname: "RequestOwnershipTransferSuccess"};\n    event ev\n  end\nend\n\ntransition ConfirmOwnershipTransfer()\n  proposed_option <- pending_owner;\n  match proposed_option with\n  | None => (* ownership transfer is not in-progress, do nothing *)\n    ev = {_eventname: "ConfirmOwnershipTransferFailureNoProposedNewOwner"};\n    event ev\n  | Some proposed_owner =>\n    caller_is_new_owner = builtin eq _origin proposed_owner;\n    match caller_is_new_owner with\n    | False => (* the caller is not the new owner, do nothing *)\n      ev = {_eventname: "ConfirmOwnershipTransferFailureNotCalledByProposedNewOwner"};\n      event ev\n    | True => (* transfer ownership *)\n      owner := proposed_owner;\n      none = None {ByStr20};\n      pending_owner := none;\n      ev = {_eventname: "ConfirmOwnershipTransferSuccess"};\n      event ev\n    end\n  end\nend\n\n')),(0,i.kt)("h2",{id:"further-reading"},"Further Reading"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-tips-and-tricks.html?highlight=ownership#transfer-contract-ownership-1"},"readthedocs - Ownership")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/TheDrBee/oSCILLAtor/blob/079f2400cfa1e6fdc7a7b0449bd65406186a1f3e/contracts/Ownership.scilla"},"Ownership.Scilla")))}h.isMDXComponent=!0}}]);