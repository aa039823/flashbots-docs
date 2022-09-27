"use strict";(self.webpackChunkflashbot_docs=self.webpackChunkflashbot_docs||[]).push([[1373],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),f=r,b=d["".concat(i,".").concat(f)]||d[f]||u[f]||o;return a?n.createElement(b,s(s({ref:t},p),{},{components:a})):n.createElement(b,s({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4401:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],l={},i="Usage",c={unversionedId:"flashbots-mev-boost/getting-started/usage",id:"flashbots-mev-boost/getting-started/usage",isDocsHomePage:!1,title:"Usage",description:"To connect to various networks, use the appropriate network flag for the specific network and relay URL, e.g. -kiln, -ropsten, -sepolia,  -goerli or -mainnet. You can add multiple relays comma-separated to the -relays flag, like this//relay1,https://relay2",source:"@site/docs/flashbots-mev-boost/getting-started/usage.md",sourceDirName:"flashbots-mev-boost/getting-started",slug:"/flashbots-mev-boost/getting-started/usage",permalink:"/flashbots-mev-boost/getting-started/usage",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Installation",permalink:"/flashbots-mev-boost/getting-started/installation"},next:{title:"troubleshooting",permalink:"/flashbots-mev-boost/troubleshooting"}},p=[{value:"<strong>Mainnet Relay</strong>",id:"mainnet-relay",children:[]},{value:"<strong>Goerli testnet</strong>",id:"goerli-testnet",children:[]},{value:"<strong>Sepolia testnet</strong>",id:"sepolia-testnet",children:[]},{value:"mev-boost cli arguments",id:"mev-boost-cli-arguments",children:[]},{value:"Checking if everything works",id:"checking-if-everything-works",children:[]}],u={toc:p};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("p",null,"To connect to various networks, use the appropriate network flag for the specific network and relay URL, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"-kiln"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-ropsten"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-sepolia"),",  ",(0,o.kt)("inlineCode",{parentName:"p"},"-goerli")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"-mainnet"),". You can add multiple relays comma-separated to the ",(0,o.kt)("inlineCode",{parentName:"p"},"-relays")," flag, like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"-relays https://relay1,https://relay2")),(0,o.kt)("p",null,"You can find a comprehensive list of relays at ",(0,o.kt)("a",{parentName:"p",href:"https://boost.flashbots.net"},"https://boost.flashbots.net")),(0,o.kt)("h3",{id:"mainnet-relay"},(0,o.kt)("strong",{parentName:"h3"},"Mainnet Relay")),(0,o.kt)("p",null,"Run mev-boost pointed at our\xa0",(0,o.kt)("a",{parentName:"p",href:"https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net/"},"Mainnet Relay:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./mev-boost -mainnet -relay-check -relays https://0xac6e77dfe25ecd6110b8e780608cce0dab71fdd5ebea22a16c0205200f2f8e2e3ad3b71d3499c54ad14d6c21b41a37ae@boost-relay.flashbots.net\n")),(0,o.kt)("h3",{id:"goerli-testnet"},(0,o.kt)("strong",{parentName:"h3"},"Goerli testnet")),(0,o.kt)("p",null,"Run mev-boost pointed at our\xa0",(0,o.kt)("a",{parentName:"p",href:"https://builder-relay-goerli.flashbots.net/"},"Goerli Relay"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./mev-boost -goerli -relay-check -relays https://0xafa4c6985aa049fb79dd37010438cfebeb0f2bd42b115b89dd678dab0670c1de38da0c4e9138c9290a398ecd9a0b3110@builder-relay-goerli.flashbots.net\n")),(0,o.kt)("h3",{id:"sepolia-testnet"},(0,o.kt)("strong",{parentName:"h3"},"Sepolia testnet")),(0,o.kt)("p",null,"Run mev-boost pointed at our\xa0",(0,o.kt)("a",{parentName:"p",href:"https://builder-relay-sepolia.flashbots.net/"},"Sepolia Relay"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./mev-boost -sepolia -relay-check -relays https://0x845bd072b7cd566f02faeb0a4033ce9399e42839ced64e8b2adcfc859ed1e8e1a5a293336a49feac6d9a5edb779be53a@builder-relay-sepolia.flashbots.net\n")),(0,o.kt)("h2",{id:"mev-boost-cli-arguments"},"mev-boost cli arguments"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ ./mev-boost -help\nUsage of ./mev-boost:\n  -addr string\n        listen-address for mev-boost server (default "localhost:18550")\n  -debug\n        shorthand for \'-loglevel debug\'\n  -genesis-fork-version string\n        use a custom genesis fork version\n  -goerli\n        use Goerli\n  -json\n        log in JSON format instead of text\n  -loglevel string\n        minimum loglevel: trace, debug, info, warn/warning, error, fatal, panic (default "info")\n  -mainnet\n        use Mainnet\n  -relay-check\n        check relay status on startup and on the status API call\n  -relay-monitors string\n        relay monitor urls - single entry or comma-separated list (scheme://host)\n  -relays string\n        relay urls - single entry or comma-separated list (scheme://pubkey@host)\n  -request-timeout-getheader int\n        timeout for getHeader requests to the relay [ms] (default 950)\n  -request-timeout-getpayload int\n        timeout for getPayload requests to the relay [ms] (default 4000)\n  -request-timeout-regval int\n        timeout for registerValidator requests [ms] (default 3000)\n  -sepolia\n        use Sepolia\n  -version\n        only print version\n')),(0,o.kt)("h2",{id:"checking-if-everything-works"},"Checking if everything works"),(0,o.kt)("p",null,"You can check if you setup works by looking up the validator registration of your proposer using the ",(0,o.kt)("a",{parentName:"p",href:"https://flashbots.notion.site/Relay-API-Spec-5fb0819366954962bc02e81cb33840f5#308368dd0b9d4eccaa1ffad1c9e68906"},"Relay Data API"),"."),(0,o.kt)("p",null,"Example API URL: ",(0,o.kt)("a",{parentName:"p",href:"https://boost-relay.flashbots.net/relay/v1/data/validator_registration?pubkey=0xb606e206c2bf3b78f53ebff8be8e8d4af2f0da68646b5642c4d511b15ab5ddb122ae57b48eab614f8ca5bafbe75a5999"},"https://boost-relay.flashbots.net/relay/v1/data/validator_registration?pubkey=0xb606e206c2bf3b78f53ebff8be8e8d4af2f0da68646b5642c4d511b15ab5ddb122ae57b48eab614f8ca5bafbe75a5999")))}d.isMDXComponent=!0}}]);