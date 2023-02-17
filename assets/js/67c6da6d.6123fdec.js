"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9857],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(a),h=n,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||s;return a?r.createElement(m,l(l({ref:t},p),{},{components:a})):r.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var o=2;o<s;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},46176:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const s={id:"CacheParser.pixi_assets",title:"Interface: CacheParser",sidebar_label:"CacheParser",custom_edit_url:null},l=void 0,i={unversionedId:"api/interfaces/CacheParser.pixi_assets",id:"api/interfaces/CacheParser.pixi_assets",title:"Interface: CacheParser",description:"@pixi/assets.CacheParser",source:"@site/docs/api/interfaces/CacheParser.pixi_assets.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/CacheParser.pixi_assets",permalink:"/api/interfaces/CacheParser.pixi_assets",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"CacheParser.pixi_assets",title:"Interface: CacheParser",sidebar_label:"CacheParser",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.WRAP_MODES",permalink:"/api/enums/PIXI.WRAP_MODES.pixi_constants"},next:{title:"CrossPlatformCanvasRenderingContext2D",permalink:"/api/interfaces/CrossPlatformCanvasRenderingContext2D.pixi_canvas_renderer"}},c={},o=[{value:"Summary",id:"summary",level:2},{value:"Members",id:"members",level:2},{value:"config: <span><code>Record&lt;string, any&gt;</code></span>",id:"config-recordstring-any",level:3},{value:"getCacheableAssets: <span><code>(keys: string[], asset: T) =&gt; Record&lt;string, any&gt;</code></span>",id:"getcacheableassets-keys-string-asset-t--recordstring-any",level:3},{value:"test: <span><code>(asset: T) =&gt; boolean</code></span>",id:"test-asset-t--boolean",level:3}],p={toc:o};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../modules/pixi_assets"},"@pixi/assets"),".CacheParser"),(0,n.kt)("p",null,"For every asset that is cached, it will call the parsers test function the flow is as follows",":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"cacheParser.test()"),":"," Test the asset."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"cacheParser.getCacheableAssets()"),":"," If the test passes call the getCacheableAssets function with the asset")),(0,n.kt)("p",null,"Useful if you want to add more than just a raw asset to the cache (for example a spritesheet will want to make all its sub textures easily accessible in the cache)"),(0,n.kt)("p",null,"// TODO: @see"),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Properties"),(0,n.kt)("p",null,(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"config"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"Record","<","string, any",">")),(0,n.kt)("td",{parentName:"tr",align:null},"A config to adjust the parser")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"getCacheableAssets"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"(keys",":"," string[], asset",":"," T) =",">"," Record","<","string, any",">")),(0,n.kt)("td",{parentName:"tr",align:null},"If the test passes, this function is called to get the cacheable assets an example may be that a spritesheet object will return all the sub textures it has so they can be cached.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"test"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"(asset",":"," T) =",">"," boolean")),(0,n.kt)("td",{parentName:"tr",align:null},"Gets called by the cache when a dev caches an asset")))))),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"config-recordstring-any"},"config: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"Record","<","string, any",">"))),(0,n.kt)("p",null,"A config to adjust the parser")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"getcacheableassets-keys-string-asset-t--recordstring-any"},"getCacheableAssets: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(keys",":"," string[], asset",":"," T) =",">"," Record","<","string, any",">"))),(0,n.kt)("p",null,"If the test passes, this function is called to get the cacheable assets an example may be that a spritesheet object will return all the sub textures it has so they can be cached.")),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"test-asset-t--boolean"},"test: ",(0,n.kt)("span",null,(0,n.kt)("code",null,"(asset",":"," T) =",">"," boolean"))),(0,n.kt)("p",null,"Gets called by the cache when a dev caches an asset")),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);