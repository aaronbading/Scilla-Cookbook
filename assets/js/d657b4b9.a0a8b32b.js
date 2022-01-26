"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[1321],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4884:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s=["components"],o={sidebar_position:1,tags:["zilliqa-js","interaction","state","deploy","event","listener","query","transaction","batch","sign"]},l="Zilliqa-JS Quickstart",c={unversionedId:"recipes/contract-recipes/zilliqa-js-quickstart",id:"recipes/contract-recipes/zilliqa-js-quickstart",isDocsHomePage:!1,title:"Zilliqa-JS Quickstart",description:"Getting started",source:"@site/docs/recipes/contract-recipes/zilliqa-js-quickstart.md",sourceDirName:"recipes/contract-recipes",slug:"/recipes/contract-recipes/zilliqa-js-quickstart",permalink:"/recipes/contract-recipes/zilliqa-js-quickstart",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/recipes/contract-recipes/zilliqa-js-quickstart.md",tags:[{label:"zilliqa-js",permalink:"/tags/zilliqa-js"},{label:"interaction",permalink:"/tags/interaction"},{label:"state",permalink:"/tags/state"},{label:"deploy",permalink:"/tags/deploy"},{label:"event",permalink:"/tags/event"},{label:"listener",permalink:"/tags/listener"},{label:"query",permalink:"/tags/query"},{label:"transaction",permalink:"/tags/transaction"},{label:"batch",permalink:"/tags/batch"},{label:"sign",permalink:"/tags/sign"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["zilliqa-js","interaction","state","deploy","event","listener","query","transaction","batch","sign"]},sidebar:"tutorialSidebar",previous:{title:"U/int",permalink:"/recipes/scilla-recipes/uint"},next:{title:"Full-Stack Examples",permalink:"/recipes/contract-recipes/fullstack-examples"}},d=[{value:"Getting started",id:"getting-started",children:[]},{value:"HelloWorld Interaction Example",id:"helloworld-interaction-example",children:[]},{value:"Address Interaction",id:"address-interaction",children:[]},{value:"Example Interaction Scripts",id:"example-interaction-scripts",children:[]},{value:"Zilliqa-JS Interaction Examples",id:"zilliqa-js-interaction-examples",children:[{value:"Zilliqa-JS Examples",id:"zilliqa-js-examples",children:[]},{value:"TheDrBee Contract Interactions",id:"thedrbee-contract-interactions",children:[]},{value:"Zilpay Repositories",id:"zilpay-repositories",children:[]}]}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"zilliqa-js-quickstart"},"Zilliqa-JS Quickstart"),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"You will need Node and NPM installed on your machine for this guide."),(0,r.kt)("p",null,"Read the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library"},"repo readme")," to get started with ",(0,r.kt)("inlineCode",{parentName:"p"},"npm installing")," zilliqa-js to your local repo."),(0,r.kt)("p",null,"Create a burner testing wallet and fund it with tokens from the ",(0,r.kt)("a",{parentName:"p",href:"https://dev-wallet.zilliqa.com/faucet?network=testnet"},"faucet"),"."),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Do not publish your private key as a git artifact, the wallet is at risk."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Use a .env file and add it to your .gitignore"))),(0,r.kt)("h2",{id:"helloworld-interaction-example"},"HelloWorld Interaction Example"),(0,r.kt)("p",null,"Review the documentation from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library-Examples"},"examples repo for zilliqa-js")),(0,r.kt)("p",null,"Call a specific example by installing the dependencies and invoking the example command."),(0,r.kt)("p",null,"In this example we are calling the transition ",(0,r.kt)("inlineCode",{parentName:"p"},"setHello")," with on the ",(0,r.kt)("inlineCode",{parentName:"p"},"HelloWorld")," contract with one vname called ",(0,r.kt)("inlineCode",{parentName:"p"},"msg")," which has the value ",(0,r.kt)("inlineCode",{parentName:"p"},"newMsg")," the contract is at address ",(0,r.kt)("inlineCode",{parentName:"p"},"zil1v6tjt9s0nua80tvvays5m2g763npxgkez0gnnq")," on the ",(0,r.kt)("inlineCode",{parentName:"p"},"dev-api testnet"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ocaml"},"transition setHello (msg : String)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone Zilliqa/Zilliqa-JavaScript-Library-Examples .\ncd Zilliqa-JavaScript-Library-Examples\ncd node\nnpm i\nnode helloWorld.js\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Import Zilliqa-JS\nconst { BN, Long, bytes, units } = require('@zilliqa-js/util');\nconst { Zilliqa } = require('@zilliqa-js/zilliqa');\nconst {\n  toBech32Address,\n  getAddressFromPrivateKey,\n} = require('@zilliqa-js/crypto');\n\n// What network to connect on\nconst zilliqa = new Zilliqa('https://dev-api.zilliqa.com');\n\n// These are set by the core protocol, and may vary per-chain and network.\n// For more information: https://apidocs.zilliqa.com/?shell#getnetworkid\nconst chainId = 333; // chainId of the developer testnet\nconst msgVersion = 1; // current msgVersion\nconst VERSION = bytes.pack(chainId, msgVersion);\n\n// Populate the wallet with an account\nconst privateKey =\n  'deb5c896228f8515146aa16f94a558ba14e52d8496b4b267b2d59cd9036f39a6';\n\nzilliqa.wallet.addByPrivateKey(privateKey);\n\nconst address = getAddressFromPrivateKey(privateKey);\nconsole.log(`My account address is: ${address}`);\nconsole.log(`My account bech32 address is: ${toBech32Address(address)}`);\n\nasync function testBlockchain() {\n  try {\n    // Get Balance\n    const balance = await zilliqa.blockchain.getBalance(address);\n    // Get Minimum Gas Price from blockchain\n    const minGasPrice = await zilliqa.blockchain.getMinimumGasPrice();\n\n    console.log(`Your account balance is:`);\n    console.log(balance.result);\n    console.log(`Current Minimum Gas Price: ${minGasPrice.result}`);\n    const myGasPrice = units.toQa('2000', units.Units.Li); // Gas Price that will be used by all transactions\n    console.log(`My Gas Price ${myGasPrice.toString()}`);\n    const isGasSufficient = myGasPrice.gte(new BN(minGasPrice.result)); // Checks if your gas price is less than the minimum gas price\n    console.log(`Is the gas price sufficient? ${isGasSufficient}`);\n\n    const deployedContract = zilliqa.contracts.at(\n      'zil1v6tjt9s0nua80tvvays5m2g763npxgkez0gnnq',\n    );\n\n    // Create a new timebased message and call setHello\n    // Also notice here we have a default function parameter named toDs as mentioned above.\n    // For calling a smart contract, any transaction can be processed in the DS but not every transaction can be processed in the shards.\n    // For those transactions are involved in chain call, the value of toDs should always be true.\n    // If a transaction of contract invocation is sent to a shard and if the shard is not allowed to process it, then the transaction will be dropped.\n    const newMsg = 'Hello, the time is ' + Date.now();\n    console.log('Calling setHello transition with msg: ' + newMsg);\n    const callTx = await deployedContract.callWithoutConfirm(\n      'setHello',\n      [\n        {\n          vname: 'msg',\n          type: 'String',\n          value: newMsg,\n        },\n      ],\n      {\n        // amount, gasPrice and gasLimit must be explicitly provided\n        version: VERSION,\n        amount: new BN(0),\n        gasPrice: myGasPrice,\n        gasLimit: Long.fromNumber(8000),\n      },\n      false,\n    );\n\n    console.log(callTx.bytes);\n\n    // process confirm\n    console.log(`The transaction id is:`, callTx.id);\n    console.log(`Waiting transaction be confirmed`);\n    const confirmedTxn = await callTx.confirm(callTx.id);\n\n    console.log(`The transaction status is:`);\n    console.log(confirmedTxn.receipt);\n    if (confirmedTxn.receipt.success === true) {\n      console.log(`Contract address is: ${deployedContract.address}`);\n    }\n  } catch (err) {\n    console.log(err);\n  }\n}\n\ntestBlockchain();\n")),(0,r.kt)("p",null,"To which, the console will respond with."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'My account address is: 0x8254b2C9aCdf181d5d6796d63320fBb20D4Edd12\nMy account bech32 address is: zil1sf2t9jdvmuvp6ht8jmtrxg8mkgx5ahgj6h833r\n\nYour account balance is:\n{ balance: \'10722145999990000\', nonce: 1468 }\n\nCurrent Minimum Gas Price: 2000000000\nMy Gas Price 2000000000\nIs the gas price sufficient? true\n\nSending a payment transaction to the network...\n\nThe transaction id is: 035a2ae08d0b4d12f31ee6c0315d91b4bb9150c1f078fc88e0ee3b5640f2d318\n\nThe transaction status is:\n{ cumulative_gas: 50, epoch_num: \'3129050\', success: true }\n\nDeploying a new contract....\nDeployment Transaction ID: 6a67c5d1fb65f7fae9c02ee81b37fb5855bbfd3d17d163a908bb5f667419d1df\n\nDeployment Transaction Receipt:\n{ cumulative_gas: 482, epoch_num: \'3129052\', success: true }\nThe contract address is:\n0xD1F5c962F1c6A77253BFD799B3472D05de414ae2\n\nCalling setHello transition with msg: Hello, the time is 1629086853792\n{\n    "accepted": false,\n    "cumulative_gas": 357,\n    "epoch_num": "3129054",\n    "event_logs": [\n        {\n            "_eventname": "setHello()",\n            "address": "0xd1f5c962f1c6a77253bfd799b3472d05de414ae2",\n            "params": [\n                {\n                    "type": "Int32",\n                    "value": "2",\n                    "vname": "code"\n                }\n            ]\n        }\n    ],\n    "success": true\n}\n\nGetting contract state...\nThe state of the contract is:\n{\n    "_balance": "0",\n    "welcome_msg": "Hello, the time is 1629086853792"\n}\n')),(0,r.kt)("h2",{id:"address-interaction"},"Address Interaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { toBech32Address, toChecksumAddress } = require('@zilliqa-js/crypto');\n\n// not checksummed address (will not be accepted by blockchain)\nconst address = '573EC96638C8BB1C386394602E1460634F02ADDA';\n\n// checksummed ByStr20\nconst checksummedAddresses = toChecksumAddress(address);\n// returns '0x573EC96638C8bB1c386394602E1460634F02aDdA'\n\nconst bech32_address = toBech32Address(address);\n// returns zil12ulvje3ceza3cwrrj3szu9rqvd8s9tw69c978p\n")),(0,r.kt)("h2",{id:"example-interaction-scripts"},"Example Interaction Scripts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//shows the javascript required to call a specific transition\nnode callContract.js\n\n// shows the javascript required to create a list of signed batch transactions\nnode createBatchTransaction.js\n\n//shows the javascript required to create a list of batch transactions with correct nonce\nnode createBatchTransactionWithoutConfirm.js\n\n//shows the javascript required to post a raw transaction\ncreateTransactionRaw.js\n\n//shows the javascript required to deploy a contract\ndeployContract.js\n\n//shows the javascript required to return all the particular transactions that happened for a particular block\ngetTxnBodiesForTxBlock.js\n\n//shows the javascript required to interact with the helloWorld tutorial scilla\nhelloWorld.js\n\n//shows the javascript required to listen for events\nnewEventLogSubscriptions.js\n\n//shows the javascript required to listen for new block events\nnewTxBlockSubscriptions.js\n\n//shows the javascript required to query init params, or state params including maps\nqueryState.js\n\n//get a particular transaction from a given transaction hash\nqueryTransaction.js\n\n//get the status of a particular transaction from a given transaction hash\nqueryTransactionStatus.js\n\n//shows the javascript required to sign a unsigned batch transaction\nsignBatchTransaction.js\n\n//shows examples of offline and online signs\nwalletSign.js\n")),(0,r.kt)("h2",{id:"zilliqa-js-interaction-examples"},"Zilliqa-JS Interaction Examples"),(0,r.kt)("h3",{id:"zilliqa-js-examples"},"Zilliqa-JS Examples"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library-Examples/tree/master/node"},"Zilliqa-JS Example Interaction")),(0,r.kt)("h3",{id:"thedrbee-contract-interactions"},"TheDrBee Contract Interactions"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/TheDrBee/oSCILLAtor/tree/main/js"},"Zilliqa-JS Contract Interaction")),(0,r.kt)("h3",{id:"zilpay-repositories"},"Zilpay Repositories"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/zilpay/zil-pay"},"Zilpay Browser Extension")))}u.isMDXComponent=!0}}]);