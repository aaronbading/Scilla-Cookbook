"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[2969],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var i=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=i.createContext({}),c=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(o.Provider,{value:n},e.children)},_={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=c(t),m=l,h=f["".concat(o,".").concat(m)]||f[m]||_[m]||s;return t?i.createElement(h,r(r({ref:n},u),{},{components:t})):i.createElement(h,r({ref:n},u))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var s=t.length,r=new Array(s);r[0]=f;var a={};for(var o in n)hasOwnProperty.call(n,o)&&(a[o]=n[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var c=2;c<s;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5850:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var i=t(7462),l=t(3366),s=(t(7294),t(3905)),r=["components"],a={tags:["List"]},o="List",c={unversionedId:"recipes/scilla-contract/list",id:"recipes/scilla-contract/list",isDocsHomePage:!1,title:"List",description:"A list is a data type which can hold several instances of a singular type.",source:"@site/docs/recipes/scilla-contract/list.md",sourceDirName:"recipes/scilla-contract",slug:"/recipes/scilla-contract/list",permalink:"/recipes/scilla-contract/list",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/scilla-contract/list.md",tags:[{label:"List",permalink:"/tags/list"}],version:"current",frontMatter:{tags:["List"]},sidebar:"tutorialSidebar",previous:{title:"Glossary of Keywords & Conventions",permalink:"/recipes/scilla-contract/keywords"},next:{title:"Maps",permalink:"/recipes/scilla-contract/map"}},u=[{value:"Example List Contract",id:"example-list-contract",children:[]},{value:"User Defined List Functions",id:"user-defined-list-functions",children:[{value:"listByStr20Contains",id:"listbystr20contains",children:[]},{value:"listByStr20Excludes",id:"listbystr20excludes",children:[]},{value:"listByStr20FilterOut",id:"listbystr20filterout",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],_={toc:u};function f(e){var n=e.components,t=(0,l.Z)(e,r);return(0,s.kt)("wrapper",(0,i.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"list"},"List"),(0,s.kt)("p",null,"A list is a data type which can hold several instances of a singular type."),(0,s.kt)("p",null,"Consider the below definition of creating a List of ByStr20."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ocaml"},"field state_list_users : List ByStr20 = Nil {ByStr20} (* an empty List of ByStr20's*)\n\ntransition Test()\n  current_list <- state_list_users; (* read the list *)\n  new_user = Cons {ByStr20} _sender current_list; (* Create a new list element and append to the current list *)\n  state_list_users := new_user (* set the appended list into state *)\nend\n")),(0,s.kt)("h2",{id:"example-list-contract"},"Example List Contract"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ocaml"},'scilla_version 0\n(***************************************************)\n(* List operations                                 *)\n(***************************************************)\nimport ListUtils BoolUtils\n\nlibrary List\n\nlet empty_list = Nil {Uint32}\n\nlet one   = Uint32 1 (* numbers 1, 2, 3 and 4 to use below *)\nlet two   = Uint32 2\nlet three = Uint32 3\nlet four = Uint32 4\n\nlet create_3el_list = (* utility to create a list with 3 elements *)\n  fun (e1 : Uint32) =>\n  fun (e2 : Uint32) =>\n  fun (e3 : Uint32) =>\n  let nil = empty_list in\n      let le3 = Cons {Uint32} e3 empty_list in (* insert in front *)\n      let le2e3 = Cons {Uint32} e2 le3 in\n      Cons {Uint32} e1 le2e3 (* [e1, e2, e3] *)\n\nlet equal = fun (a: Uint32) => fun(b: Uint32) =>\n  builtin eq a b\n\nlet not_equal = fun (a: Uint32) => fun(b: Uint32) =>\n  let equal = builtin eq a b in\n  negb equal (* from BoolUtils *)\n\n(* utility to remove all elements that equal a value from a lit *)\nlet remove_elements_from_list = fun(value: Uint32) => fun(l: List Uint32) =>\n  let f = not_equal value in\n  let filterUint32 = @list_filter Uint32 in (* from ListUtils *)\n  filterUint32 f l\n\n(* check if two list l1 and l2 have no common elements:         *)\n(* for each element in the first list, we check if it exists    *)\n(* in the second list. If any such element exists, we return    *)\n(* False (not disjunct) otherwise we return True                *)\n\n(* return true if l[i] != value for all elements l[i] in the list l *)\nlet all_elements_different_from_value =\n  fun(l: List Uint32) =>\n  fun(value: Uint32) =>\n    let f = not_equal value in\n    let for_allUint32 = @list_forall Uint32 in (* from ListUtiles *)\n    for_allUint32 f l (* checks if all elements are NOT equal to value *)\n\n(* return true if no element in l1 is also in l2, or, put differently,  *)\n(* check for each element in l1 if all elements in l2 are different     *)\nlet are_lists_disjunct =\n  fun(l1: List Uint32) =>\n  fun(l2: List Uint32) =>\n    let f = all_elements_different_from_value l2 in (* apply above expression to l2 *)\n    let for_allUint32 = @list_forall Uint32 in\n    for_allUint32 f l1 (* apply now this f to l1 *)\n\n\n(* count the number of occurences of a value in a list *)\nlet count_in_list =\n  fun(l: List Uint32) =>\n  fun(value: Uint32) =>\n    let f = (* increase accumulator if element equals value *)\n      fun(acc: Uint32) => fun(element: Uint32) =>\n      let equal = builtin eq value element in\n      match equal with\n      | False => acc\n      | True => builtin add acc one\n      end in\n    let init = Uint32 0 in (* initial value of accumulator *)\n    let folder = @list_foldl Uint32 Uint32 in\n    folder f init l\n\n(* check if all elements in a list are unique                               *)\n(* we apply above counter to each element and check if it is exactly 1      *)\n(* if it is bigger than 1 for an element we are done and the result is fale *)\nlet is_unique =\n  fun(l: List Uint32) =>\n    let f = fun(value: Uint32) =>\n      let num = count_in_list l value in\n      builtin eq num one in\n    let for_allUint32 = @list_forall Uint32 in\n    for_allUint32 f l (* apply now this f to l1 *)\n\n\ncontract List()\n\nfield list : List Uint32 = empty_list\nfield doubles : Map Uint32 Uint32 = Emp Uint32 Uint32 (* doubles[l[i]]=2*l[i] *)\n\n(* create lists [1,2,3] or [1,2,1] and store in field list *)\ntransition Create123()\n  l = create_3el_list one two three; (* [1, 2, 3] *)\n  list := l\nend\n\ntransition Create121()\n  l = create_3el_list one two one; (* [1, 2, 1] *)\n  list := l\nend\n\n(* access n-th element of a list using list_nth, and emit it *)\ntransition ElementAtPosition(n: Uint32)\n  l <- list;\n  el_opt =\n    let nth = @list_nth Uint32 in (* from ListUtils *)\n    nth n l; (* note that indexing starts at 0 *)\n  match el_opt with (* Option is None if no element with index i in list *)\n  | None => (* index is out of bounds: no such element *)\n    ev = {_eventname: "ElementAtPositionFailure"};\n    event ev\n  | Some el => (* list[i] = el *)\n    ev = {_eventname: "ElementAtPositionSuccess"; index: n; element: el};\n    event ev\n  end\nend\n\n(* remove elements from list that equal to value *)\ntransition RemoveIfEqualtTo(value: Uint32)\n  l <- list;\n  list_without_values = remove_elements_from_list value l;\n  list := list_without_values\nend\n\n(* compare the lists [1,2,3] and [3 2 1] *)\ntransition Compare123To321()\n  l123 = create_3el_list one two three; (* [1, 2, 3] *)\n  l321 = create_3el_list three two one; (* [3, 2, 1] *)\n  list_zip_eq_with = @list_zip_with Uint32 Uint32 Bool; (* from ListUtils *)\n  r = list_zip_eq_with equal l123 l321;\n  ev = {_eventname : "Compare123To321"; result: r};\n  event ev\nend\n\n(* compute the element wise difference of 2 lists *)\ntransition Difference321Minus111()\n    l321 = create_3el_list three two one; (* [3, 2, 1] *)\n    l111 = create_3el_list one one one; (* [1, 1, 1] *)\n    list_zip_diff = @list_zip_with Uint32 Uint32 Uint32; (* from ListUtils *)\n    r = let diff = fun (a: Uint32) => fun(b: Uint32) => builtin sub a b in (* diff = a - b *)\n      list_zip_diff diff l321 l111;\n    ev = {_eventname: "Difference321Minus111"; result: r};\n    event ev\nend\n\n(* compute 2*l[i] and store in doubles[l[i]] *)\nprocedure Twice(v: Uint32)\n  res =\n    let two = Uint32 2 in (* res = 2 * v *)\n    builtin mul v two;\n  doubles[v] := res (* store in map *)\nend\ntransition ComputeDoubles()\n  l <- list;\n  forall l Twice (* apply Twice(.) to each element *)\nend\n\n(* sum the elements of a list using a left fold: res = 1 + 1 + 2 = 4 *)\ntransition SumElements112()\n  l = create_3el_list one one two; (* [1, 1, 2] *)\n  folder = @list_foldl Uint32 Uint32; (* accumulator and list elements are of type Uint32 *)\n  sum_of_elements =\n    let init = Uint32 0 in (* initialize the accumulator at 0 *)\n    let addition = (* add elements to accumulator: a + b *)\n      fun(a: Uint32) => fun(b: Uint32) =>\n        builtin add a b in\n    folder addition init l;\n  ev = {_eventname: "SumElements112"; sum: sum_of_elements};\n  event ev\nend\n\n(* check if two lists l1 and l2 have at least one common element  *)\n(* if they have, they are not disjunct                            *)\ntransition AreListsDisjunct()\n  (* create a few lists for testing *)\n  l1 = Cons {Uint32} one empty_list;      (* [1] *)\n  l2 = Cons {Uint32} two empty_list;      (* [2] *)\n  l32 = Cons {Uint32} three l2;           (* [3,2] *)\n  l41 = Cons {Uint32} four l1;            (* [4,1] *)\n  l111 = create_3el_list one one one;     (* [1,1,1] *)\n  l131 = create_3el_list one three one;   (* [1,3,1] *)\n  l243 = create_3el_list two four three;  (* [2,4,3] *)\n  (* apply are_lists_disjunct to some pair of the lists *)\n  check_1_2       = are_lists_disjunct l1 l2;         (* True *)\n  check_1_32      = are_lists_disjunct l1 l32;       (* True *)\n  check_2_32      = are_lists_disjunct l2 l32;       (* False *)\n  check_32_41     = are_lists_disjunct l32 l41;     (* True *)\n  check_1_111     = are_lists_disjunct l1 l111;     (* False *)\n  check_111_2     = are_lists_disjunct l111 l2;     (* True *)\n  check_32_111    = are_lists_disjunct l32 l111;   (* True *)\n  check_111_131   = are_lists_disjunct l111 l131; (* False *)\n  check_111_243   = are_lists_disjunct l111 l243; (* True *)\n  (* emit results *)\n  ev = {_eventname: "AreListsDisjunct";\n        check_1_2: check_1_2;\n        check_1_32: check_1_32;\n        check_2_32: check_2_32;\n        check_32_41: check_32_41;\n        check_1_111: check_1_111;\n        check_111_2: check_111_2;\n        check_32_111: check_32_111;\n        check_111_131: check_111_131;\n        check_111_243: check_111_243\n  };\n  event ev\nend\n\n(* count the number of occurences of a value in a list *)\ntransition Count()\n  (* create a few lists for testing *)\n  l111 = create_3el_list one one one;     (* [1,1,1] *)\n  l131 = create_3el_list one three one;   (* [1,3,1] *)\n  l243 = create_3el_list two four three;  (* [2,4,3] *)\n  (* apply count_in_list to some value and the test lists *)\n  check_1_in_empty= count_in_list empty_list one; (* 0 *)\n  check_1_in_243  = count_in_list l243 one; (* 0 *)\n  check_1_in_131  = count_in_list l131 one; (* 2 *)\n  check_1_in_111  = count_in_list l111 one; (* 3 *)\n  (* emit results *)\n  ev = {_eventname: "Count";\n        check_1_in_empty: check_1_in_empty;\n        check_1_in_243: check_1_in_243;\n        check_1_in_131: check_1_in_131;\n        check_1_in_111: check_1_in_111\n  };\n  event ev\nend\n\ntransition CheckUniqueness()\n  (* create a few lists for testing *)\n  l1 = Cons {Uint32} one empty_list;      (* [1] *)\n  l123 = create_3el_list one two three;   (* [1,2,3] *)\n  l131 = create_3el_list one three one;   (* [1,3,1] *)\n  l311 = create_3el_list three one one;   (* [3,1,1] *)\n  (* apply is_uniqe to some lists *)\n  chk_empty = is_unique empty_list; (* true *)\n  chk_1     = is_unique l1;         (* true *)\n  chk_123   = is_unique l123;       (* true *)\n  chk_131   = is_unique l131;       (* false *)\n  chk_311   = is_unique l311;       (* false *)\n  (* emit results *)\n  ev = {_eventname: "CheckUniqueness";\n        chk_empty: chk_empty;\n        chk_1: chk_1;\n        chk_123: chk_123;\n        chk_131: chk_131;\n        chk_311: chk_311\n  };\n  event ev\nend\n')),(0,s.kt)("h2",{id:"user-defined-list-functions"},"User Defined List Functions"),(0,s.kt)("p",null,"The below snippets are user defined library snippets which involve the List type."),(0,s.kt)("h3",{id:"listbystr20contains"},"listByStr20Contains"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ocaml"},"let listByStr20Contains =\n  fun(list: List ByStr20) =>\n  fun(bs: ByStr20) =>\n    let listMemByStr20 = @list_mem ByStr20 in\n      listMemByStr20 eqByStr20 bs list\n")),(0,s.kt)("h3",{id:"listbystr20excludes"},"listByStr20Excludes"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ocaml"},"let listByStr20Excludes =\n  fun(list: List ByStr20) =>\n  fun(bs: ByStr20) =>\n    let b = listByStr20Contains list bs in negb b\n")),(0,s.kt)("h3",{id:"listbystr20filterout"},"listByStr20FilterOut"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ocaml"},"let listByStr20FilterOut =\n  fun(list: List ByStr20) =>\n  fun(bs: ByStr20) =>\n    let listByStr20Filter = @list_filter ByStr20 in\n    let fn = fun(v: ByStr20) =>\n      let b = builtin eq v bs in\n       negb b in\n      listByStr20Filter fn list\n")),(0,s.kt)("h2",{id:"further-reading"},"Further Reading"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/TheDrBee/oSCILLAtor/blob/24e03d7f14802f84a1db4c183031d1f916eeac88/contracts/List.scilla"},"TheDrBee - List.Scilla"),"\n",(0,s.kt)("a",{parentName:"p",href:"https://scilla.readthedocs.io/en/latest/scilla-in-depth.html?highlight=list#list"},"readthedocs - List")))}f.isMDXComponent=!0}}]);