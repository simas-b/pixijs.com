"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[2766],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return r?a.createElement(h,i(i({ref:t},s),{},{components:r})):a.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94916:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={id:"PIXI.BatchShaderGenerator.pixi_core",title:"Class: PIXI.BatchShaderGenerator",sidebar_label:"PIXI.BatchShaderGenerator",custom_edit_url:null},i=void 0,o={unversionedId:"api/classes/PIXI.BatchShaderGenerator.pixi_core",id:"api/classes/PIXI.BatchShaderGenerator.pixi_core",title:"Class: PIXI.BatchShaderGenerator",description:"@pixi/core.BatchShaderGenerator",source:"@site/docs/api/classes/PIXI.BatchShaderGenerator.pixi_core.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.BatchShaderGenerator.pixi_core",permalink:"/api/classes/PIXI.BatchShaderGenerator.pixi_core",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.BatchShaderGenerator.pixi_core",title:"Class: PIXI.BatchShaderGenerator",sidebar_label:"PIXI.BatchShaderGenerator",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.BatchRenderer",permalink:"/api/classes/PIXI.BatchRenderer.pixi_core"},next:{title:"PIXI.BatchSystem",permalink:"/api/classes/PIXI.BatchSystem.pixi_core"}},c={},p=[{value:"Constructor:",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"fragTemplate",id:"fragtemplate",level:3},{value:"vertexSrc",id:"vertexsrc",level:3}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{class:"package-name"},(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../modules/pixi_core"},"@pixi/core"),".BatchShaderGenerator")),(0,n.kt)("p",null,"Helper that generates batching multi-texture shader. Use it with your new BatchRenderer"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"constructor"},"Constructor:"),(0,n.kt)("h4",null,(0,n.kt)("code",null,"new PIXI.BatchShaderGenerator(vertexSrc: string, fragTemplate: string) ")),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"vertexSrc"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null)),(0,n.kt)("td",{parentName:"tr",align:null},"Vertex shader")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"fragTemplate"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null,"string")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("code",null)),(0,n.kt)("td",{parentName:"tr",align:null},"Fragment shader template"))))),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"members"},"Members"),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"fragtemplate"},"fragTemplate"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"string")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:"),' Reference to the fragment shader template. Must contain "%count%" and "%forloop%".')),(0,n.kt)("hr",null),(0,n.kt)("article",null,(0,n.kt)("h3",{id:"vertexsrc"},"vertexSrc"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Type:")," ",(0,n.kt)("code",null,"string")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description:")," Reference to the vertex shader source.")),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);