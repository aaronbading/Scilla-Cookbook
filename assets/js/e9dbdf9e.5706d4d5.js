"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[4874],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),k=a,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2743:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={tags:["GO SDK"]},l="Zilliqa-Go SDK",s={unversionedId:"recipes/contract-recipes/zilliqa-go-quickstart",id:"recipes/contract-recipes/zilliqa-go-quickstart",isDocsHomePage:!1,title:"Zilliqa-Go SDK",description:"The gozilliqa-sdk version of zilliqa blockchain library.",source:"@site/docs/recipes/contract-recipes/zilliqa-go-quickstart.md",sourceDirName:"recipes/contract-recipes",slug:"/recipes/contract-recipes/zilliqa-go-quickstart",permalink:"/recipes/contract-recipes/zilliqa-go-quickstart",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/contract-recipes/zilliqa-go-quickstart.md",tags:[{label:"GO SDK",permalink:"/tags/go-sdk"}],version:"current",frontMatter:{tags:["GO SDK"]},sidebar:"tutorialSidebar",previous:{title:"IDE Interaction",permalink:"/recipes/contract-recipes/ide-jsonparameters"},next:{title:"Zilliqa-Swift SDK",permalink:"/recipes/contract-recipes/zilliqa-swift"}},p=[{value:"Generate a large number of private keys",id:"generate-a-large-number-of-private-keys",children:[{value:"Call a contract",id:"call-a-contract",children:[]}]}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"zilliqa-go-sdk"},"Zilliqa-Go SDK"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/gozilliqa-sdk"},"gozilliqa-sdk")," version of zilliqa blockchain library."),(0,i.kt)("p",null,"Supports :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mutisig"),(0,i.kt)("li",{parentName:"ul"},"traversal of blocks"),(0,i.kt)("li",{parentName:"ul"},"create account"),(0,i.kt)("li",{parentName:"ul"},"sign transaction"),(0,i.kt)("li",{parentName:"ul"},"send transaction"),(0,i.kt)("li",{parentName:"ul"},"track transaction"),(0,i.kt)("li",{parentName:"ul"},"deploy contract"),(0,i.kt)("li",{parentName:"ul"},"generate key private keys"),(0,i.kt)("li",{parentName:"ul"},"call json rpc api"),(0,i.kt)("li",{parentName:"ul"},"validation"),(0,i.kt)("li",{parentName:"ul"},"utils")),(0,i.kt)("h2",{id:"generate-a-large-number-of-private-keys"},"Generate a large number of private keys"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func TestGeneratePrivateKey(t *testing.T) {\n for i := 0; i < 100000; i++ {\n  privateKey, err := GeneratePrivateKey()\n  if err != nil {\n   panic("cannot generate private key")\n  }\n\n  prikeys := LaksaGo.EncodeHex(privateKey[:])\n  if len(prikeys) != 64 {\n   panic("generate private key error")\n  }\n  println("private key = " + prikeys)\n  publickKey := GetPublicKeyFromPrivateKey(LaksaGo.DecodeHex(prikeys), true)\n  pubkeys := LaksaGo.EncodeHex(publickKey)\n  if len(pubkeys) != 66 {\n   panic("generate public key error")\n  }\n  println("public key = " + pubkeys)\n\n }\n}\n')),(0,i.kt)("h3",{id:"call-a-contract"},"Call a contract"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func TestContract_Call(t *testing.T) {\n if os.Getenv("CI") != "" {\n  t.Skip("Skipping testing in CI environment")\n }\n host := "https://dev-api.zilliqa.com/"\n privateKey := "e19d05c5452598e24caad4a0d85a49146f7be089515c905ae6a19e8a578a6930"\n chainID := 333\n msgVersion := 1\n\n publickKey := keytools.GetPublicKeyFromPrivateKey(util.DecodeHex(privateKey), true)\n address := keytools.GetAddressFromPublic(publickKey)\n pubkey := util.EncodeHex(publickKey)\n provider := provider2.NewProvider(host)\n\n wallet := account.NewWallet()\n wallet.AddByPrivateKey(privateKey)\n\n contract := Contract{\n  Address:  "bd7198209529dC42320db4bC8508880BcD22a9f2",\n  Signer:   wallet,\n  Provider: provider,\n }\n\n args := []core.ContractValue{\n  {\n   "to",\n   "ByStr20",\n   "0x" + address,\n  },\n  {\n   "tokens",\n   "Uint128",\n   "10",\n  },\n }\n\n balAndNonce, err := provider.GetBalance("9bfec715a6bd658fcb62b0f8cc9bfa2ade71434a")\n assert.Nil(t, err, err)\n n := balAndNonce.Nonce + 1\n gasPrice, _ := provider.GetMinimumGasPrice()\n\n params := CallParams{\n  Nonce:        strconv.FormatInt(n, 10),\n  Version:      strconv.FormatInt(int64(util.Pack(chainID, msgVersion)), 10),\n  GasPrice:     gasPrice,\n  GasLimit:     "1000",\n  SenderPubKey: pubkey,\n  Amount:       "0",\n}\n\n tx, err2 := contract.Call("Transfer", args, params, true)\n assert.Nil(t, err2, err2)\n tx.Confirm(tx.ID, 1000, 3, provider)\n assert.True(t, tx.Status == core.Confirmed)\n}\n\n')))}d.isMDXComponent=!0}}]);