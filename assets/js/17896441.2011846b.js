"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[7918],{78945:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var s=n(67294),a=n(10833),o=n(902),i=n(85893);const l=s.createContext(null);function r(e){let{children:t,content:n}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(n);return(0,i.jsx)(l.Provider,{value:a,children:t})}function d(){const e=(0,s.useContext)(l);if(null===e)throw new o.i6("DocProvider");return e}function c(){const{metadata:e,frontMatter:t,assets:n}=d();return(0,i.jsx)(a.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n(86010),m=n(87524),h=n(95999),p=n(32244);function v(e){const{previous:t,next:n}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(p.Z,{...t,subLabel:(0,i.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,i.jsx)(p.Z,{...n,subLabel:(0,i.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function x(){const{metadata:e}=d();return(0,i.jsx)(v,{previous:e.previous,next:e.next})}var f=n(52263),b=n(39960),g=n(80143),j=n(35281),L=n(60373),N=n(74477);const C={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,i.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,i.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function _(e){const t=C[e.versionMetadata.banner];return(0,i.jsx)(t,{...e})}function k(e){let{versionLabel:t,to:n,onClick:s}=e;return(0,i.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,i.jsx)("b",{children:(0,i.jsx)(b.Z,{to:n,onClick:s,children:(0,i.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function w(e){let{className:t,versionMetadata:n}=e;const{siteConfig:{title:s}}=(0,f.Z)(),{pluginId:a}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,L.J)(a),{latestDocSuggestion:l,latestVersionSuggestion:r}=(0,g.Jo)(a),d=l??(c=r).docs.find((e=>e.id===c.mainDocId));var c;return(0,i.jsxs)("div",{className:(0,u.Z)(t,j.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,i.jsx)("div",{children:(0,i.jsx)(_,{siteTitle:s,versionMetadata:n})}),(0,i.jsx)("div",{className:"margin-top--md",children:(0,i.jsx)(k,{versionLabel:r.label,to:d.path,onClick:()=>o(r.name)})})]})}function Z(e){let{className:t}=e;const n=(0,N.E)();return n.banner?(0,i.jsx)(w,{className:t,versionMetadata:n}):null}function y(e){let{className:t}=e;const n=(0,N.E)();return n.badge?(0,i.jsx)("span",{className:(0,u.Z)(t,j.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,i.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}function T(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n}=e;return(0,i.jsx)(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,i.jsx)("b",{children:(0,i.jsx)("time",{dateTime:new Date(1e3*t).toISOString(),children:n})})},children:" on {date}"})}function U(e){let{lastUpdatedBy:t}=e;return(0,i.jsx)(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,i.jsx)("b",{children:t})},children:" by {user}"})}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:n,lastUpdatedBy:s}=e;return(0,i.jsxs)("span",{className:j.k.common.lastUpdated,children:[(0,i.jsx)(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&n?(0,i.jsx)(T,{lastUpdatedAt:t,formattedLastUpdatedAt:n}):"",byUser:s?(0,i.jsx)(U,{lastUpdatedBy:s}):""},children:"Last updated{atDate}{byUser}"}),!1]})}var H=n(84881),I=n(71526);const M="lastUpdated_vwxv";function E(e){return(0,i.jsx)("div",{className:(0,u.Z)(j.k.docs.docFooterTagsRow,"row margin-bottom--sm"),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(I.Z,{...e})})})}function O(e){let{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:s,formattedLastUpdatedAt:a}=e;return(0,i.jsxs)("div",{className:(0,u.Z)(j.k.docs.docFooterEditMetaRow,"row"),children:[(0,i.jsx)("div",{className:"col",children:t&&(0,i.jsx)(H.Z,{editUrl:t})}),(0,i.jsx)("div",{className:(0,u.Z)("col",M),children:(n||s)&&(0,i.jsx)(A,{lastUpdatedAt:n,formattedLastUpdatedAt:a,lastUpdatedBy:s})})]})}function S(){const{metadata:e}=d(),{editUrl:t,lastUpdatedAt:n,formattedLastUpdatedAt:s,lastUpdatedBy:a,tags:o}=e,l=o.length>0,r=!!(t||n||a);return l||r?(0,i.jsxs)("footer",{className:(0,u.Z)(j.k.docs.docFooter,"docusaurus-mt-lg"),children:[l&&(0,i.jsx)(E,{tags:o}),r&&(0,i.jsx)(O,{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:a,formattedLastUpdatedAt:s})]}):null}var B=n(86043),P=n(93743);const V="tocCollapsibleButton_TO0P",R="tocCollapsibleButtonExpanded_MG3E";function W(e){let{collapsed:t,...n}=e;return(0,i.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",V,!t&&R,n.className),children:(0,i.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const D="tocCollapsible_ETCw",F="tocCollapsibleContent_vkbj",z="tocCollapsibleExpanded_sAul";function $(e){let{toc:t,className:n,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:o,toggleCollapsed:l}=(0,B.u)({initialState:!0});return(0,i.jsxs)("div",{className:(0,u.Z)(D,!o&&z,n),children:[(0,i.jsx)(W,{collapsed:o,onClick:l}),(0,i.jsx)(B.z,{lazy:!0,className:F,collapsed:o,children:(0,i.jsx)(P.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:a})})]})}const X="tocMobile_ITEo";function q(){const{toc:e,frontMatter:t}=d();return(0,i.jsx)($,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(j.k.docs.docTocMobile,X)})}var Y=n(39407);function G(){const{toc:e,frontMatter:t}=d();return(0,i.jsx)(Y.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.k.docs.docTocDesktop})}var J=n(92503),Q=n(83140);function K(e){let{children:t}=e;const n=function(){const{metadata:e,frontMatter:t,contentTitle:n}=d();return t.hide_title||void 0!==n?null:e.title}();return(0,i.jsxs)("div",{className:(0,u.Z)(j.k.docs.docMarkdown,"markdown"),children:[n&&(0,i.jsx)("header",{children:(0,i.jsx)(J.Z,{as:"h1",children:n})}),(0,i.jsx)(Q.Z,{children:t})]})}var ee=n(52802),te=n(48596),ne=n(44996);function se(e){return(0,i.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,i.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const ae="breadcrumbHomeIcon_YNFT";function oe(){const e=(0,ne.Z)("/");return(0,i.jsx)("li",{className:"breadcrumbs__item",children:(0,i.jsx)(b.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,i.jsx)(se,{className:ae})})})}const ie="breadcrumbsContainer_Z_bl";function le(e){let{children:t,href:n,isLast:s}=e;const a="breadcrumbs__link";return s?(0,i.jsx)("span",{className:a,itemProp:"name",children:t}):n?(0,i.jsx)(b.Z,{className:a,href:n,itemProp:"item",children:(0,i.jsx)("span",{itemProp:"name",children:t})}):(0,i.jsx)("span",{className:a,children:t})}function re(e){let{children:t,active:n,index:s,addMicrodata:a}=e;return(0,i.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,i.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function de(){const e=(0,ee.s1)(),t=(0,te.Ns)();return e?(0,i.jsx)("nav",{className:(0,u.Z)(j.k.docs.docBreadcrumbs,ie),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,i.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,i.jsx)(oe,{}),e.map(((t,n)=>{const s=n===e.length-1;return(0,i.jsx)(re,{active:s,index:n,addMicrodata:!!t.href,children:(0,i.jsx)(le,{href:t.href,isLast:s,children:t.label})},n)}))]})}):null}const ce="docItemContainer_Djhp",ue="docItemCol_VOVn";function me(e){let{children:t}=e;const n=function(){const{frontMatter:e,toc:t}=d(),n=(0,m.i)(),s=e.hide_table_of_contents,a=!s&&t.length>0;return{hidden:s,mobile:a?(0,i.jsx)(q,{}):void 0,desktop:!a||"desktop"!==n&&"ssr"!==n?void 0:(0,i.jsx)(G,{})}}();return(0,i.jsxs)("div",{className:"row",children:[(0,i.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&ue),children:[(0,i.jsx)(Z,{}),(0,i.jsxs)("div",{className:ce,children:[(0,i.jsxs)("article",{children:[(0,i.jsx)(de,{}),(0,i.jsx)(y,{}),n.mobile,(0,i.jsx)(K,{children:t}),(0,i.jsx)(S,{})]}),(0,i.jsx)(x,{})]})]}),n.desktop&&(0,i.jsx)("div",{className:"col col--3",children:n.desktop})]})}function he(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,n=e.content;return(0,i.jsx)(r,{content:e.content,children:(0,i.jsxs)(a.FG,{className:t,children:[(0,i.jsx)(c,{}),(0,i.jsx)(me,{children:(0,i.jsx)(n,{})})]})})}},39407:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var s=n(86010),a=n(93743);const o="tableOfContents_bqdL";var i=n(85893);function l(e){let{className:t,...n}=e;return(0,i.jsx)("div",{className:(0,s.Z)(o,"thin-scrollbar",t),children:(0,i.jsx)(a.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},93743:(e,t,n)=>{n.d(t,{Z:()=>p});var s=n(67294),a=n(86668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t}));const s=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):s.push(a)})),s}function i(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:n,maxHeadingLevel:s});return function(e){return e.level>=n&&e.level<=s}(e)?[{...e,children:t}]:t}))}function l(e){const t=e.getBoundingClientRect();return t.top===t.bottom?l(e.parentNode):t}function r(e,t){let{anchorTopOffset:n}=t;const s=e.find((e=>l(e).top>=n));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function d(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.L)();return(0,s.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function c(e){const t=(0,s.useRef)(void 0),n=d();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:i}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),l=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const s=[];for(let a=t;a<=n;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),d=r(l,{anchorTopOffset:n.current}),c=e.find((e=>d&&d.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}var u=n(85893);function m(e){let{toc:t,className:n,linkClassName:s,isChild:a}=e;return t.length?(0,u.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)("a",{href:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(m,{isChild:!0,toc:e.children,className:n,linkClassName:s})]},e.id)))}):null}const h=s.memo(m);function p(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:d,maxHeadingLevel:m,...p}=e;const v=(0,a.L)(),x=d??v.tableOfContents.minHeadingLevel,f=m??v.tableOfContents.maxHeadingLevel,b=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>i({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:x,maxHeadingLevel:f});return c((0,s.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:x,maxHeadingLevel:f}}),[l,r,x,f])),(0,u.jsx)(h,{toc:b,className:n,linkClassName:l,...p})}},74477:(e,t,n)=>{n.d(t,{E:()=>r,q:()=>l});var s=n(67294),a=n(902),o=n(85893);const i=s.createContext(null);function l(e){let{children:t,version:n}=e;return(0,o.jsx)(i.Provider,{value:n,children:t})}function r(){const e=(0,s.useContext)(i);if(null===e)throw new a.i6("DocsVersionProvider");return e}},25784:(e,t,n)=>{n.d(t,{Z:()=>m});var s=n(92949),a=n(67294),o=n(52695),i=n(19604);const l={spWrapper:"spWrapper_XZV1",spLayout:"spLayout_lAOU",editorWrapper:"editorWrapper_YBAz",previewWrapper:"previewWrapper_AZey",sandpackLoadingOverlay:"sandpackLoadingOverlay_nYYO",loadingPulse:"loadingPulse_IxQv",tutorial:"tutorial_bUbR",showOutput:"showOutput_G2Cm",fullscreen:"fullscreen_QlZ5",example:"example_nyOC"};var r=n(52263),d=n(85893);function c(){const e=(0,a.useRef)(null),{code:t,updateCode:n}=(0,o.m4)(),{sandpack:r}=(0,o.X3)();(0,a.useEffect)((()=>{const t=()=>{null!=e.current&&e.current.layout({})};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}}),[]);const{colorMode:c}=(0,s.I)();return(0,d.jsx)("div",{className:l.editorWrapper,children:(0,d.jsx)(i.ZP,{defaultLanguage:"javascript",value:t,defaultValue:t,defaultPath:"inmemory://model//src/index.ts",onChange:e=>{n(e??"")},options:{lineNumbers:"off",padding:{top:24},minimap:{enabled:!1},fontSize:14,scrollBeyondLastLine:!1,scrollbar:{alwaysConsumeMouseWheel:!1}},onMount:t=>{e.current=t},theme:"dark"===c?"vs-dark":"light"},r.activeFile)})}function u(e){const{code:t}=(0,o.m4)(),{sandpack:n}=(0,o.X3)(),[s,i]=(0,a.useState)(!1);(0,a.useEffect)((()=>{if(null!=e.onCodeChanged)return e.onCodeChanged(t),()=>{null!=e.onCodeChanged&&e.onCodeChanged(void 0)}}));return(0,d.jsxs)(o.sp,{className:`${l[e.mode]} ${s?l.showOutput:""}`,children:[(0,d.jsx)(c,{}),(0,d.jsxs)("div",{className:l.previewWrapper,children:[(0,d.jsx)(o.Gj,{showOpenInCodeSandbox:!0,className:l.sandpackPreview}),null==n.bundlerState&&(0,d.jsx)("div",{className:l.sandpackLoadingOverlay})]}),(0,d.jsx)("button",{onClick:()=>{i(!s)},children:s?"Show Code":"Show Output"})]})}function m(e){const t=e.mode??"example";(0,a.useEffect)((()=>{const e=document.querySelector("main .container");if("example"===t&&null!=e)return e.style.maxWidth="100%",()=>{e.style.maxWidth=""}}));const{siteConfig:n}=(0,r.Z)(),{colorMode:i}=(0,s.I)();return(0,d.jsx)(o.oT,{template:"vanilla-ts",theme:i,files:{"/src/index.ts":e.code},customSetup:{},options:{classes:{"sp-wrapper":l.spWrapper,"sp-layout":l.spLayout},externalResources:["https://beta.pixijs.com/playground.css",`https://pixijs.download/${n.customFields?.PIXI_VERSION}/pixi.min.js`,`https://pixijs.download/${n.customFields?.PIXI_VERSION}/packages/graphics-extras.js`,`https://pixijs.download/${n.customFields?.PIXI_VERSION}/packages/math-extras.js`,`https://pixijs.download/${n.customFields?.PIXI_VERSION}/packages/webworker.js`]},children:(0,d.jsx)(u,{mode:t,onCodeChanged:e.onCodeChanged})})}},25889:(e,t,n)=>{n.d(t,{Z:()=>r});var s=n(90814),a=n(25784);const o="playgroundCodeBlock_UB3Y";var i=n(72389),l=n(85893);function r(e){const t=(0,i.Z)();return e.playground&&t?(0,l.jsx)("div",{className:o,children:(0,l.jsx)(a.Z,{code:e.children})}):(0,l.jsx)(s.Z,{...e})}}}]);