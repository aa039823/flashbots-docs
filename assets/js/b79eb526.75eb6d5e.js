"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[674],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,k=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6175:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={},l=void 0,u={unversionedId:"flashbots-mev-boost/getting-started/system-requirements",id:"flashbots-mev-boost/getting-started/system-requirements",isDocsHomePage:!1,title:"system-requirements",description:"System Requirements",source:"@site/docs/flashbots-mev-boost/getting-started/system-requirements.md",sourceDirName:"flashbots-mev-boost/getting-started",slug:"/flashbots-mev-boost/getting-started/system-requirements",permalink:"/flashbots-mev-boost/getting-started/system-requirements",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"relays",permalink:"/flashbots-mev-boost/relays"},next:{title:"Installation",permalink:"/flashbots-mev-boost/getting-started/installation"}},c=[{value:"System Requirements",id:"system-requirements",children:[]},{value:"Consensus client configuration guides",id:"consensus-client-configuration-guides",children:[]}],m={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,o.kt)("p",null,"This guide assumes a pre-installed and hardened Ubuntu installation\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04"},"as well as Docker"),". Excellent introductory resources to start with are:\xa0",(0,o.kt)("a",{parentName:"p",href:"https://eth-docker.net/docs/About/Overview#node-components"},"eth-docker"),",\xa0",(0,o.kt)("a",{parentName:"p",href:"https://www.coincashew.com/coins/overview-eth/guide-or-security-best-practices-for-a-eth2-validator-beaconchain-node"},"Coincashew"),", and\xa0",(0,o.kt)("a",{parentName:"p",href:"https://docs.rocketpool.net/guides/node/securing-your-node.html#securing-your-node"},"Rocketpool's Securing your Node")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Execution + Beacon Requirements")," "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Software"),": Execution client, beacon node client (instructions for clients below),\xa0",(0,o.kt)("a",{parentName:"li",href:"https://curl.se/download.html"},"curl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"OS"),": 64-bit Linux, Mac OS X 10.14+, Windows 10+ 64-bit"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"CPU"),": 4+ cores @ 2.8+ GHz"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Memory"),": 16GB+ RAM"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Storage"),": SSD with at least 2TB free space"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Network:")," 8 MBit/sec broadband")),(0,o.kt)("p",null,"\ud83d\udca1 There are variations in client resource usage. Please review ",(0,o.kt)("a",{parentName:"p",href:"https://eth-docker.net/docs/Usage/ResourceUsage"},"CoinCashew\u2019s Client Usage Guide")," for more details!"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Validator Requirements")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Everything above, plus...")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Software:"),"\xa0Validator client, browser-based crypto wallet (instructions below)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Hardware:"),"\xa0(Recommended) A new machine that has never been connected to the internet that you can use to securely generate your mnemonic phrase and keypair"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"32 ETH"),"\xa0(Mainnet)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"32 testnet ETH"),"\xa0(Testnets)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"MEV-Boost Requirements")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Can run on any beacon-node system, and requires almost no resources.")),(0,o.kt)("h2",{id:"consensus-client-configuration-guides"},"Consensus client configuration guides"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"MEV-Boost Client Guides"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Teku"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hackmd.io/@StefanBratanov/BkMlo1RO9"},"Guide"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Prysm"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://hackmd.io/@prysmaticlabs/BJeinxFsq"},"Guide"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Lighthouse"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://lighthouse-book.sigmaprime.io/builders.html#mev-and-lighthouse"},"Guide"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Lodestar"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/ChainSafe/lodestar/blob/unstable/docs/usage/mev-integration.md"},"Guide"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Nimbus"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://nimbus.guide/external-block-builder.html"},"Guide"))))))}p.isMDXComponent=!0}}]);