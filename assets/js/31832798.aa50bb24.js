"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[4293],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2394:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={tags:["adt","polymorphic","complex","composite","user","custom","types","algebraic"]},s="Algebraic data types",c={unversionedId:"recipes/scilla-recipes/adt",id:"recipes/scilla-recipes/adt",isDocsHomePage:!1,title:"Algebraic data types",description:"In functional programming and type theory, an algebraic data type (ADT) is a kind of composite type, formed of two or more other primitive types.",source:"@site/docs/recipes/scilla-recipes/adt.md",sourceDirName:"recipes/scilla-recipes",slug:"/recipes/scilla-recipes/adt",permalink:"/Scilla-Cookbook-1/recipes/scilla-recipes/adt",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/scilla-recipes/adt.md",tags:[{label:"adt",permalink:"/Scilla-Cookbook-1/tags/adt"},{label:"polymorphic",permalink:"/Scilla-Cookbook-1/tags/polymorphic"},{label:"complex",permalink:"/Scilla-Cookbook-1/tags/complex"},{label:"composite",permalink:"/Scilla-Cookbook-1/tags/composite"},{label:"user",permalink:"/Scilla-Cookbook-1/tags/user"},{label:"custom",permalink:"/Scilla-Cookbook-1/tags/custom"},{label:"types",permalink:"/Scilla-Cookbook-1/tags/types"},{label:"algebraic",permalink:"/Scilla-Cookbook-1/tags/algebraic"}],version:"current",frontMatter:{tags:["adt","polymorphic","complex","composite","user","custom","types","algebraic"]},sidebar:"tutorialSidebar",previous:{title:"Addresses",permalink:"/Scilla-Cookbook-1/recipes/scilla-recipes/addresses"},next:{title:"BNum",permalink:"/Scilla-Cookbook-1/recipes/scilla-recipes/bnum"}},p=[{value:"ADT&#39;s in Data Structures",id:"adts-in-data-structures",children:[]},{value:"Bool",id:"bool",children:[]},{value:"Option",id:"option",children:[]},{value:"List",id:"list",children:[]},{value:"Pair",id:"pair",children:[]},{value:"Nat",id:"nat",children:[]},{value:"User-defined",id:"user-defined",children:[]},{value:"ADT example contracts",id:"adt-example-contracts",children:[{value:"Store ADT as List (Pair Parcel Uint32)",id:"store-adt-as-list-pair-parcel-uint32",children:[]},{value:"Store ADT as Map ByStr20 Player",id:"store-adt-as-map-bystr20-player",children:[]}]},{value:"Further reading",id:"further-reading",children:[]}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"algebraic-data-types"},"Algebraic data types"),(0,i.kt)("p",null,"In functional programming and type theory, an algebraic data type (ADT) is a kind of composite type, formed of two or more other primitive types."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"type MyAdt =\n  | MyConstructor1 of Int32 String\n  | MyConstructor2 of ByStr20\n  | MyConstructor3\n")),(0,i.kt)("p",null,"An ADT is defined using one or more constructors (not to be confused with constructors from object-oriented languages). A value of type MyAdt is constructed using exactly one of these constructors. In this example, a ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAdt")," value constructed using ",(0,i.kt)("inlineCode",{parentName:"p"},"MyConstructor1")," will contain a tuple comprised of an Int32 value and a String value. A MyAdt value constructed using MyConstructor3 on the other hand will not contain any further values inside it."),(0,i.kt)("p",null,"The example we saw previously defines an ADT whose composite types are fixed. A polymorphic ADT allows using type variables in place of concrete constituent types, for substitution later. Let's see an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"type 'A MyPAdt =\n  | MyPConstructor1 of 'A String\n  | MyPConstructor2 of ByStr20\n  | MyPConstructor3\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MyPAdt")," is a polymorphic ADT with a type parameter (variable) ",(0,i.kt)("inlineCode",{parentName:"p"},"'A"),". When ",(0,i.kt)("inlineCode",{parentName:"p"},"MyPAdt")," is, for example, instantiated with the type parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"'A")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"Int32"),", then MyPAdt will share the same structure as ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAdt"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),", the Scilla built-in ADT is, for example, a polymorphic ADT. When we write ",(0,i.kt)("inlineCode",{parentName:"p"},"List Int32"),", it means that we have instantiated ",(0,i.kt)("inlineCode",{parentName:"p"},"List")," ADT with ",(0,i.kt)("inlineCode",{parentName:"p"},"Int32"),". This built-in ADT, if it wasn't built-in, would look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"type 'A List =\n  | Cons of 'A ('A List)\n  | Nil\n")),(0,i.kt)("p",null,"At the moment, Scilla does not support user-defined polymorphic ADTs. Only the built-in ADTs ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Pair")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," are polymorphic. Users can only define concrete ADTs such as ",(0,i.kt)("inlineCode",{parentName:"p"},"MyAdt"),"."),(0,i.kt)("h3",{id:"adts-in-data-structures"},"ADT's in Data Structures"),(0,i.kt)("p",null,":::warn\nYou cannot remote state read a data structure which holds an ADT.\n:::"),(0,i.kt)("h3",{id:"bool"},"Bool"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"my_bool = True\n")),(0,i.kt)("h3",{id:"option"},"Option"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"let none_value = None {ByStr20}\n\nfield staging_owner: Option ByStr20 = none_value\n\ntransition Test(optional_staging : Option ByStr20)\n  match new_staging with\n    | Some staging_value =>\n      staging_owner := staging_value\n    | None =>\n  end\nend\n")),(0,i.kt)("h3",{id:"list"},"List"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"field state_list_users : List ByStr20 = Nil {ByStr20}\ntransition Test()\n  current_list <- state_list_users;\n  new_user = Cons {ByStr20} _sender current_list;\n  state_list_users := new_user\nend\n")),(0,i.kt)("h3",{id:"pair"},"Pair"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"field state_user_pairs : Map ByStr20 (Pair ByStr20 Uint128)\n\ntransition Test(delegator: ByStr20, user: ByStr20, amount: Uint128)\n  pair_example = Pair {ByStr20 Uint128} _sender user;\n  state_user_pairs[delegator] : pair_example\nend\n\n")),(0,i.kt)("h3",{id:"nat"},"Nat"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"field state_nat : Nat = Zero\n\ncurrent_nat <- state_nat;\n\nlet x =\n  let nat_plus_one  = Succ current_nat\n\n")),(0,i.kt)("h3",{id:"user-defined"},"User-defined"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"type SwapDirection = | ZilToToken | TokenToZil\n\nprocedure Example(direction: SwapDirection)\n    match direction with\n      | ZilToToken => \n      | TokenToZil => \n    end\nend\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"type Pool = | Pool of Uint128 Uint128 \n\nprocedure Example(pool: Pool)\n  match pool with\n    | Pool x y =>\n  end\nend\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"type Game = | Game of (Option ByStr20) Uint128\n\nprocedure Example(game: Game)\n  match game with\n    | Game maybe_bystr game_int =>\n      (* At this point you have the Optional and the int value*)\n      match maybe_bystr with\n        | Some some_bystr =>\n          (* At this point you have Some bystr20 value and the int value *)\n        | None =>\n          (* At this point you have only the int value*)\n      end\n  end\nend\n")),(0,i.kt)("h2",{id:"adt-example-contracts"},"ADT example contracts"),(0,i.kt)("h3",{id:"store-adt-as-list-pair-parcel-uint32"},"Store ADT as List (Pair Parcel Uint32)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},'scilla_version 0\n(****************************************************************************)\n(*   user defined algebraic data type (ADT) examples:                       *)\n(*   a Parcel with a content consisting of one or two Item(s)               *)\n(*   A single Item can be a Shirt or a Barbell and has a weight             *)\n(*   A Parcel can have one Item or two Items in it and depending on the     *)\n(*   total weight has a cost to ship assigned to it                         *)\n(****************************************************************************)\nlibrary Adt\n\ntype Item = (* constructor argument is the weight of the item *)\n  | Shirt of Uint32\n  | Barbell of Uint32\n\ntype Parcel =\n  | OneContent of Item (* a parcel with a single item as content *)\n  | TwoContents of Item Item (* a parcel can be filled with 2 items *)\n\nlet weight_of_item = fun(i: Item) => (* how much an item weighs *)\n  match i with\n  | Shirt w => w\n  | Barbell w => w\n  end\n\nlet cost_per_weight = Uint32 5\n\nlet cost_of_parcel = fun(p: Parcel) => (* cost to ship the parcel *)\n  let weight =\n    match p with\n    | OneContent c => (* parcel has only one item as content *)\n        weight_of_item c\n    | TwoContents c1 c2 => (* parcel has two items as content *)\n        let w1 = weight_of_item c1 in\n        let w2 = weight_of_item c2 in\n        builtin add w1 w2 (* total weight is sum of the two *)\n    end in\n  builtin mul weight cost_per_weight (* cost is total weight times cost_per_weight *)\n\n\ncontract Adt\n()\n\n(* mutable fields declarations *)\nfield parcels : List (Pair Parcel Uint32) = Nil {(Pair Parcel Uint32)} (* a list of parcels and their cost to ship *)\n\nprocedure ComputeCostAndAdd(p: Parcel)\n  (* compute cost to ship the new parcel *)\n  cost = cost_of_parcel p;\n  (* add it to the list of parcels *)\n  l <- parcels;\n  pair = Pair {Parcel Uint32} p cost;\n  new_list = Cons {(Pair Parcel Uint32)} pair l; (* front insert *)\n  parcels := new_list;\n  ev = {_eventname : "AddToListOfParcelsSuccess"; cost_to_ship: cost; parcels: new_list};\n  event ev\nend\n\n(* add parcels with different items to the list of parcels *)\ntransition AddParcelWithShirt(weight: Uint32)\n  c = Shirt weight;\n  p = OneContent c;\n  ComputeCostAndAdd p\nend\n\ntransition AddParcelWithBarbell(weight: Uint32)\n  c = Barbell weight;\n  p = OneContent c;\n  ComputeCostAndAdd p\nend\n\ntransition AddParcelWithTwoShirts(weight1: Uint32, weight2: Uint32)\n  c1 = Shirt weight1;\n  c2 = Shirt weight2;\n  p = TwoContents c1 c2;\n  ComputeCostAndAdd p\nend\n\ntransition AddParcelWithShirtAndBarbell(weightS: Uint32, weightB: Uint32)\n  c1 = Shirt weightS;\n  c2 = Barbell weightB;\n  p = TwoContents c1 c2;\n  ComputeCostAndAdd p\nend\n')),(0,i.kt)("h3",{id:"store-adt-as-map-bystr20-player"},"Store ADT as Map ByStr20 Player"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ocaml"},"scilla_version 0\n(************************************************************************)\n(* a map of ByStr20 (address) to a user defined algebraic data type     *)\n(*   the ADT is a Player with an age that either plays tennis or runs   *)\n(************************************************************************)\nlibrary ADTMap\n\ntype Sport =\n  | Tennis\n  | Run\n\ntype Player = | Player of Uint32 Sport (* Age and preferred Sport *)\n\n\ncontract ADTMap\n()\n\nfield players : Map ByStr20 Player = Emp ByStr20 Player \n\nprocedure Add(age: Uint32, sport: Sport)\n  player = Player age sport;\n  players[_sender] := player\nend\n\ntransition Remove()\n  delete players[_sender]\nend\n")),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/TheDrBee/oSCILLAtor/blob/079f2400cfa1e6fdc7a7b0449bd65406186a1f3e/contracts/Adt.scilla"},"adt.scilla")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/TheDrBee/oSCILLAtor/blob/079f2400cfa1e6fdc7a7b0449bd65406186a1f3e/contracts/AdtMap.scilla"},"adtmap.scilla")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/TheDrBee/oSCILLAtor/blob/079f2400cfa1e6fdc7a7b0449bd65406186a1f3e/contracts/Interfacing.scilla"},"Interfacing.scilla")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=adt#user-defined-adts"},"Scilla Documentation - User Defined ADT")))}u.isMDXComponent=!0}}]);