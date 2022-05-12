"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[6262],{3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s=r.createContext({}),l=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},u=function(n){var e=l(n.components);return r.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,s=n.parentName,u=a(n,["components","mdxType","originalType","parentName"]),d=l(t),m=o,y=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(y,c(c({ref:e},u),{},{components:t})):r.createElement(y,c({ref:e},u))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,c=new Array(i);c[0]=d;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=n,a.mdxType="string"==typeof n?n:o,c[1]=a;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8426:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],a={sidebar_position:2},s="Deploy Contract",l={unversionedId:"tutorials/interaction-tutorials/incrementing-button-interaction/deploy-contract",id:"tutorials/interaction-tutorials/incrementing-button-interaction/deploy-contract",isDocsHomePage:!1,title:"Deploy Contract",description:"Review the Javascript that defines deployContract.js",source:"@site/docs/tutorials/interaction-tutorials/incrementing-button-interaction/deploy-contract.md",sourceDirName:"tutorials/interaction-tutorials/incrementing-button-interaction",slug:"/tutorials/interaction-tutorials/incrementing-button-interaction/deploy-contract",permalink:"/tutorials/interaction-tutorials/incrementing-button-interaction/deploy-contract",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/tutorials/interaction-tutorials/incrementing-button-interaction/deploy-contract.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/tutorials/interaction-tutorials/incrementing-button-interaction/introduction"},next:{title:"Calling a Contracts Transition",permalink:"/tutorials/interaction-tutorials/incrementing-button-interaction/call-contract"}},u=[{value:"Deploy button Contract",id:"deploy-button-contract",children:[]},{value:"Setup Program Starting Point",id:"setup-program-starting-point",children:[]}],p={toc:u};function d(n){var e=n.components,t=(0,o.Z)(n,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"deploy-contract"},"Deploy Contract"),(0,i.kt)("p",null,"Review the Javascript that defines ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/Zilliqa-JavaScript-Library-Examples/blob/master/node/deployContract.js"},"deployContract.js")),(0,i.kt)("h2",{id:"deploy-button-contract"},"Deploy button Contract"),(0,i.kt)("p",null,"Using the deployContract.js file defined in zilliqa-js we have the ability to deploy a contract to a network. We provide a private key of the address which is deploying, the previous network configuration to establish a connection, in our case this is testnet, but could be mainnet or isolated environment."),(0,i.kt)("p",null,"We refactor the ",(0,i.kt)("inlineCode",{parentName:"p"},"deployContract.js")," method to fit our usecase."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Deploys a contract using a private key, returns the deployed_contract_base_16 of the contract deployed\nasync function DeployButtonContract() {\n    try {\n      // Get Balance\n      const balance = await zilliqa.blockchain.getBalance(address_from_pk);\n      // Get Minimum Gas Price from blockchain\n      const minGasPrice = await zilliqa.blockchain.getMinimumGasPrice();\n  \n      // Account balance (See note 1)\n      console.log(`Your account balance is:`);\n      console.log(balance.result);\n      console.log(`Current Minimum Gas Price: ${minGasPrice.result}`);\n      const myGasPrice = units.toQa('2000', units.Units.Li); // Gas Price that will be used by all transactions\n      console.log(`My Gas Price ${myGasPrice.toString()}`);\n      const isGasSufficient = myGasPrice.gte(new BN(minGasPrice.result)); // Checks if your gas price is less than the minimum gas price\n      console.log(`Is the gas price sufficient? ${isGasSufficient}`);\n  \n      // Deploy a contract\n      console.log(`Deploying a new contract....`);\n      const code = `\n        scilla_version 0\n        library MyFirstButton\n\n        let uint128_zero = Uint128 0\n        let uint128_one  = Uint128 1\n        let empty_bystr = 0x1111111111111111111111111111111111111111\n\n        (* Error exception *)\n        type Error =\n        | NotContractOwner\n        | NotUniqueClicker\n\n        let make_error =\n        fun (result : Error) =>\n            let result_code = \n            match result with\n            | NotContractOwner             => Int32 -1\n            | NotUniqueClicker             => Int32 -2\n            end\n            in\n            { _exception : \"Error\"; code : result_code }  \n            \n        (*\n        * Create a scilla contract which models a button that can be pressed by anyone. \n        * If you are the recent button presser you may not press the button again.\n        * When the button is pressed: Increment a counter and set the caller of the button press to be the most recent address.  \n        * The owner of the button has the ability to reset the counter to zero \n        *)\n        contract MyFirstButton\n        (\n        contract_owner: ByStr20\n        )\n\n        field current_clicker    : ByStr20 = empty_bystr\n        field total_count_clicks : Uint128 = uint128_zero\n\n        (* \n        @Dev: Emit Errors \n        *)\n        procedure ThrowError(err : Error)\n        e = make_error err;\n        throw e\n        end\n\n        (*\n        @Dev : Throws an error if '_sender' is not 'contract_owner'\n        *)\n        procedure IsContractOwner()\n        is_contract_owner = builtin eq contract_owner _sender;\n        match is_contract_owner with\n        | True => \n            (* No Operation - Continue contract execution *)\n        | False =>\n            err = NotContractOwner;\n            ThrowError err\n        end\n        end\n\n        (*  \n        Dev: Increments 'current_clicker' by 'uint128_one'\n        *)\n        procedure IncrementCounter()\n        previous_click_count <- total_count_clicks;\n        new_click_count = builtin add previous_click_count uint128_one;\n        total_count_clicks := new_click_count;\n\n        e = {_eventname : \"IncrementCounterSuccess\"; pcc:previous_click_count; ncc: new_click_count  };\n        event e\n        end \n\n\n        (*  \n        Dev: Throws an error if the current '_sender' is the previous 'current_clicker'\n        *)\n        procedure IsPreviousClicker(new_clicker: ByStr20)\n        previous_clicker <- current_clicker;\n        is_previous_clicker = builtin eq previous_clicker _sender;\n        match is_previous_clicker with\n        | True => \n            err = NotUniqueClicker;\n            ThrowError err\n        | False =>\n            (* No Operation - Continue contract execution *)\n        end\n        end\n\n        (*  \n        Dev: Sets 'new_clicker' as 'current_clicker'\n        *)\n        procedure SetNewClicker(new_clicker: ByStr20)\n        current_clicker := new_clicker;\n\n        e = {_eventname : \"NewClickerState\"; nc:new_clicker};\n        event e\n        end\n\n        (*  \n        Dev: Resets 'current_clicker' to 'uint128_zero'\n        *)\n        procedure ContractOwnerResetButton()\n        total_count_clicks  := uint128_zero\n        end\n\n        (*  \n        Dev: Sets 'new_clicker' as current_clicker\n        *)\n        transition PressTheButton()\n        IsPreviousClicker _sender;\n        SetNewClicker _sender;\n        IncrementCounter;\n\n        e = {_eventname : \"PressTheButtonSuccess\"; button_presser : _sender };\n        event e\n        end\n        \n        const init = [\n            // this parameter is mandatory for all init arrays\n            {\n            vname: '_scilla_version',\n            type: 'Uint32',\n            value: '0',\n            },\n            {\n            vname: 'contract_owner',\n            type: 'ByStr20',\n            value: `${address_from_pk}`,\n            },\n        ];\n    \n        const contract = zilliqa.contracts.new(code, init);\n    \n        // Deploy the contract.\n        // Also notice here we have a default function parameter named toDs as mentioned above.\n        // A contract can be deployed at either the shard or at the DS. Always set this value to false.\n        const [deployTx, deployedContract] = await contract.deployWithoutConfirm(\n            {\n            version: VERSION,\n            gasPrice: myGasPrice,\n            gasLimit: Long.fromNumber(10000),\n            },\n            false,\n        );\n    \n        // process confirm\n        console.log(`The transaction id is:`, deployTx.id);\n        console.log(`Waiting transaction be confirmed`);\n        const confirmedTxn = await deployTx.confirm(deployTx.id);\n    \n        console.log(`The transaction status is:`);\n        console.log(confirmedTxn.receipt);\n        if (confirmedTxn.receipt.success === true) {\n            console.log(`Contract address is: 0x${deployedContract.address}`);\n            return \"0x\" + deployedContract.address;\n        }\n        } catch (err) {\n        console.log(err);\n        }\n    }\n")),(0,i.kt)("h2",{id:"setup-program-starting-point"},"Setup Program Starting Point"),(0,i.kt)("p",null,"With our objectives defined we can begin to write how our program will achieve the functionality required. We have the first part complete, so let's write where our program will enter from and begin to test the deployment of DeployButtonContract contract to testnet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Application Definition\n// DEPLOY a contract\n// SEND a transaction\n// LISTEN to events emitted\n// MONITOR mutable state\nasync function DeploySendListenMonitor()\n{\n    deployed_contract_base_16 = await DeployButtonContract();\n    bech_32_bystr = toBech32Address(deployed_contract_base_16);\n    console.log(`got ${bech_32_bystr} from ${deployed_contract_base_16}`)\n}\n\n// Start\nDeploySendListenMonitor();\n")),(0,i.kt)("p",null,"Using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"node index.js")," we can run the Javascript in the console and get the output."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"our account balance is:\n{ balance: '1996734999999850', nonce: 299 }\nCurrent Minimum Gas Price: 2000000000\nMy Gas Price 2000000000\nIs the gas price sufficient? true\nDeploying a new contract....\nThe transaction id is: 2e253603e77bfd104ffefa5015267f158f967a29f733803aec69d0f23ce290de\nWaiting transaction be confirmed\nThe transaction status is:\n{ cumulative_gas: 401, epoch_num: '3726609', success: true }\nContract address is: 0x8074237359dddba429ff1d02633a5d01e637ed91\ngot zil1sp6zxu6emhd6g20lr5pxxwjaq8nr0mv38w8msm from 0x8074237359dddba429ff1d02633a5d01e637ed91\n")))}d.isMDXComponent=!0}}]);