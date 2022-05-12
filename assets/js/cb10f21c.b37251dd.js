"use strict";(self.webpackChunkdocu_scilla=self.webpackChunkdocu_scilla||[]).push([[630],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4888:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},s="Deploy ZRC-6",c={unversionedId:"tutorials/scilla-tutorials/nft-collection/deploy-contract",id:"tutorials/scilla-tutorials/nft-collection/deploy-contract",isDocsHomePage:!1,title:"Deploy ZRC-6",description:"Firstly, we'll need to fund our account through the testnet faucet.",source:"@site/docs/tutorials/scilla-tutorials/nft-collection/deploy-contract.md",sourceDirName:"tutorials/scilla-tutorials/nft-collection",slug:"/tutorials/scilla-tutorials/nft-collection/deploy-contract",permalink:"/Scilla-Cookbook-1/tutorials/scilla-tutorials/nft-collection/deploy-contract",editUrl:"https://github.com/Zilliqa/Scilla-Cookbook/tree/master/docs/tutorials/scilla-tutorials/nft-collection/deploy-contract.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/Scilla-Cookbook-1/tutorials/scilla-tutorials/nft-collection/introduction"},next:{title:"Making resources public",permalink:"/Scilla-Cookbook-1/tutorials/scilla-tutorials/nft-collection/public-resources"}},p=[],u={toc:p};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-zrc-6"},"Deploy ZRC-6"),(0,o.kt)("p",null,"Firstly, we'll need to fund our account through the testnet ",(0,o.kt)("a",{parentName:"p",href:"https://dev-wallet.zilliqa.com/faucet?network=testnet"},"faucet"),"."),(0,o.kt)("p",null,"Copy the contract from the ZRC standard for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Zilliqa/ZRC/blob/master/zrcs/zrc-6.md"},"ZRC-6")," - create a new blank Scilla file - paste in the copied contract and rename the IDE file to ZRC-6."),(0,o.kt)("p",null,"Press deploy and the deployment initialization window will appear. Change Gas price to ",(0,o.kt)("inlineCode",{parentName:"p"},"2000000000")," and gas limit to ",(0,o.kt)("inlineCode",{parentName:"p"},"30000"),". The default amount is too small for the amount of bytes we are trying to deploy."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus",src:n(8032).Z})),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"initial_contract_owner")," This is an address you control that's considered the lead administrator of the contract. This address can later give other addresses permission to have ",(0,o.kt)("inlineCode",{parentName:"p"},"Mint")," permissions or ",(0,o.kt)("inlineCode",{parentName:"p"},"Operator")," permissions."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"initial_base_uri")," This is an optional way of providing metadata/images for your tokens by using an API."),(0,o.kt)("p",null,"An example is when ",(0,o.kt)("inlineCode",{parentName:"p"},"initial_base_uri")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"www.api.example.com/")," and token_id ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," is queried, ecosystem partners will look at ",(0,o.kt)("inlineCode",{parentName:"p"},"www.api.example.com/1"),"."),(0,o.kt)("p",null,"We'll come back to this later in detail. Set this as an empty string for now."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"name")," The name of your NFT contract. (MyNFTProject)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"symbol")," The ticker symbol of your NFT contract. (MNP)"),(0,o.kt)("p",null,"With our immutable variables filled out, we can deploy our contract to the network."),(0,o.kt)("p",null,"Once the contract has been deployed, you'll see a success message and the contract will appear in the bottom right. If you click on the contract, you can see all the transitions you can call."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docusaurus",src:n(2641).Z})),(0,o.kt)("p",null,"The contract needs to split responsibilities so that different actors can interact with the NFT contract. "),(0,o.kt)("p",null,"The owner has permissions to set new Minters and Operators as well as the permission to mint new tokens to this contract. They can set and configure the contract using the transitions below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Owners transitions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Pause / Unpause"),(0,o.kt)("li",{parentName:"ul"},"SetRoyaltyRecipient / SetRoyaltyFeeBPS"),(0,o.kt)("li",{parentName:"ul"},"SetBaseURI"),(0,o.kt)("li",{parentName:"ul"},"AddMinter / RemoveMinter"),(0,o.kt)("li",{parentName:"ul"},"AddOperator / RemoveOperator"),(0,o.kt)("li",{parentName:"ul"},"SetContractOwnershipRecipient"),(0,o.kt)("li",{parentName:"ul"},"Mint / BatchMint")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Minters")," are privileged addresses that are allowed to Mint NFTs unconditionally, the contract owner can add other minting addresses they would like to control. This functionality is useful for when we want to delegate a proxy address to be responsible for minting. Owners can also revoke the Mint permission."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minters transitions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Mint / BatchMint")))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Operators")," are privileged addresses that have the ability to move tokens to and from addresses. Similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"ApproveAllowance"),", a token owner has to explicitly set an address for this functionality to be operable. This functionality is useful when you want to move NFT's to/from in the future, in the case where the user moves an NFT away from their address the ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer")," transition will fail."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Operators transitions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"BurnToken"),(0,o.kt)("li",{parentName:"ul"},"SetSpender"),(0,o.kt)("li",{parentName:"ul"},"TransferToken")))),(0,o.kt)("p",null,"If you own token_id 1, you have the ability to Transfer, Burn or give another contract the ability to spend this token on your behalf."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Token owner transitions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"TransferFrom"),(0,o.kt)("li",{parentName:"ul"},"SetSpender / RemoveSpender"),(0,o.kt)("li",{parentName:"ul"},"BurnToken")))))}d.isMDXComponent=!0},8032:function(e,t,n){t.Z=n.p+"assets/images/zrc6-params-0444b1ab682a43b8bf478cad61ed3b33.png"},2641:function(e,t,n){t.Z=n.p+"assets/images/zrc6-transitions-0d7b0c3d2a345c08c6a55d5c8cff4f45.png"}}]);