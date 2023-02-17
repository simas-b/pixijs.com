"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[9792],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>h});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},k="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=u(a),s=l,h=k["".concat(p,".").concat(s)]||k[s]||d[s]||r;return a?n.createElement(h,i(i({ref:e},m),{},{components:a})):n.createElement(h,i({ref:e},m))}));function h(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[k]="string"==typeof t?t:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},27036:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const r={id:"PIXI.Point.pixi_math",title:"Class: PIXI.Point",sidebar_label:"PIXI.Point",custom_edit_url:null},i=void 0,o={unversionedId:"api/classes/PIXI.Point.pixi_math",id:"api/classes/PIXI.Point.pixi_math",title:"Class: PIXI.Point",description:"@pixi/math.Point",source:"@site/docs/api/classes/PIXI.Point.pixi_math.mdx",sourceDirName:"api/classes",slug:"/api/classes/PIXI.Point.pixi_math",permalink:"/api/classes/PIXI.Point.pixi_math",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"PIXI.Point.pixi_math",title:"Class: PIXI.Point",sidebar_label:"PIXI.Point",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"PIXI.PluginSystem",permalink:"/api/classes/PIXI.PluginSystem.pixi_core"},next:{title:"PIXI.Polygon",permalink:"/api/classes/PIXI.Polygon.pixi_math"}},p={},u=[{value:"Constructor:",id:"constructor",level:3},{value:"Parameters:",id:"parameters",level:4},{value:"Members",id:"members",level:2},{value:"x",id:"x",level:3},{value:"y",id:"y",level:3},{value:"Methods",id:"methods",level:2},{value:"add",id:"add",level:3},{value:"Parameters:",id:"parameters-1",level:4},{value:"Returns:",id:"returns",level:4},{value:"clone",id:"clone",level:3},{value:"Returns:",id:"returns-1",level:4},{value:"copyFrom",id:"copyfrom",level:3},{value:"Parameters:",id:"parameters-2",level:4},{value:"Returns:",id:"returns-2",level:4},{value:"copyTo",id:"copyto",level:3},{value:"Parameters:",id:"parameters-3",level:4},{value:"Returns:",id:"returns-3",level:4},{value:"cross",id:"cross",level:3},{value:"Parameters:",id:"parameters-4",level:4},{value:"Returns:",id:"returns-4",level:4},{value:"dot",id:"dot",level:3},{value:"Parameters:",id:"parameters-5",level:4},{value:"Returns:",id:"returns-5",level:4},{value:"equals",id:"equals",level:3},{value:"Parameters:",id:"parameters-6",level:4},{value:"Returns:",id:"returns-6",level:4},{value:"magnitude",id:"magnitude",level:3},{value:"Returns:",id:"returns-7",level:4},{value:"magnitudeSquared",id:"magnitudesquared",level:3},{value:"Returns:",id:"returns-8",level:4},{value:"multiply",id:"multiply",level:3},{value:"Parameters:",id:"parameters-7",level:4},{value:"Returns:",id:"returns-9",level:4},{value:"multiplyScalar",id:"multiplyscalar",level:3},{value:"Parameters:",id:"parameters-8",level:4},{value:"Returns:",id:"returns-10",level:4},{value:"normalize",id:"normalize",level:3},{value:"Parameters:",id:"parameters-9",level:4},{value:"Returns:",id:"returns-11",level:4},{value:"project",id:"project",level:3},{value:"Parameters:",id:"parameters-10",level:4},{value:"Returns:",id:"returns-12",level:4},{value:"reflect",id:"reflect",level:3},{value:"Parameters:",id:"parameters-11",level:4},{value:"Returns:",id:"returns-13",level:4},{value:"set",id:"set",level:3},{value:"Parameters:",id:"parameters-12",level:4},{value:"Returns:",id:"returns-14",level:4},{value:"subtract",id:"subtract",level:3},{value:"Parameters:",id:"parameters-13",level:4},{value:"Returns:",id:"returns-15",level:4}],m={toc:u};function k(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{class:"package-name"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../modules/pixi_math"},"@pixi/math"),".Point")),(0,l.kt)("p",null,"The Point object represents a location in a two-dimensional coordinate system, where ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," represents the position on the horizontal axis and ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," represents the position on the vertical axis"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"constructor"},"Constructor:"),(0,l.kt)("h4",null,(0,l.kt)("code",null,"new PIXI.Point(x: number, y: number) ")),"Creates a new `Point`",(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{parentName:"tr",align:null},"position of the point on the x axis")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"0")),(0,l.kt)("td",{parentName:"tr",align:null},"position of the point on the y axis"))))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"members"},"Members"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"x"},"x"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"0")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Position of the point on the x axis")),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"y"},"y"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Default Value"),": ",(0,l.kt)("code",null,"0")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Position of the point on the y axis")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"add"},"add"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(other",":"," IPointData, outPoint",":"," IPointData) -",">"," IPointData")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Adds ",(0,l.kt)("inlineCode",{parentName:"p"},"other")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," point and outputs into ",(0,l.kt)("inlineCode",{parentName:"p"},"outPoint")," or a new Point.\n",(0,l.kt)("em",{parentName:"p"},"Note",":"," Only available with ",(0,l.kt)("strong",{parentName:"em"},"@","pixi/math-extras"),".")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"other"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The point to add to ",(0,l.kt)("inlineCode",{parentName:"td"},"this"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outPoint"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"A Point-like object in which to store the value, optional (otherwise will create a new Point).")))),(0,l.kt)("h4",{id:"returns"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"outPoint")," reference or a new Point, with the result of the addition."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"clone"},"clone"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"() -",">"," Point")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Creates a clone of this point"),(0,l.kt)("h4",{id:"returns-1"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"Point")),(0,l.kt)("td",{parentName:"tr",align:null},"A clone of this point"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"copyfrom"},"copyFrom"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(p",":"," IPointData) -",">"," this")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Copies ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," from the given point into this point"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"p"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The point to copy from")))),(0,l.kt)("h4",{id:"returns-2"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"this")),(0,l.kt)("td",{parentName:"tr",align:null},"The point instance itself"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"copyto"},"copyTo"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(p",":"," T) -",">"," T")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Copies this point's x and y into the given point (",(0,l.kt)("inlineCode",{parentName:"p"},"p"),")."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"p"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"T")),(0,l.kt)("td",{parentName:"tr",align:null},"The point to copy to. Can be any of type that is or extends ",(0,l.kt)("inlineCode",{parentName:"td"},"IPointData"))))),(0,l.kt)("h4",{id:"returns-3"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"T")),(0,l.kt)("td",{parentName:"tr",align:null},"The point (",(0,l.kt)("inlineCode",{parentName:"td"},"p"),") with values updated"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"cross"},"cross"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(other",":"," IPointData) -",">"," number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Computes the cross product of ",(0,l.kt)("inlineCode",{parentName:"p"},"other")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"this"),' point. Given two linearly independent R3 vectors a and b, the cross product, a \xd7 b (read "a cross b"), is a vector that is perpendicular to both a and b, and thus normal to the plane containing them. While cross product only exists on 3D space, we can assume the z component of 2D to be zero and the result becomes a vector that will only have magnitude on the z axis.'),(0,l.kt)("p",null,"This function returns the z component of the cross product of the two points."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note",":"," Only available with ",(0,l.kt)("strong",{parentName:"em"},"@","pixi/math-extras"),".")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"other"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The other point to calculate the cross product with ",(0,l.kt)("inlineCode",{parentName:"td"},"this"),".")))),(0,l.kt)("h4",{id:"returns-4"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The z component of the result of the cross product."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"dot"},"dot"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(other",":"," IPointData) -",">"," number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Computes the dot product of ",(0,l.kt)("inlineCode",{parentName:"p"},"other")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," point. The dot product is the sum of the products of the corresponding components of two vectors."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note",":"," Only available with ",(0,l.kt)("strong",{parentName:"em"},"@","pixi/math-extras"),".")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"other"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The other point to calculate the dot product with ",(0,l.kt)("inlineCode",{parentName:"td"},"this"),".")))),(0,l.kt)("h4",{id:"returns-5"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The result of the dot product. This is an scalar value."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"equals"},"equals"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(p",":"," IPointData) -",">"," boolean")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Accepts another point (",(0,l.kt)("inlineCode",{parentName:"p"},"p"),") and returns ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," if the given point is equal to this point"),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"p"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The point to check")))),(0,l.kt)("h4",{id:"returns-6"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Returns ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," if both ",(0,l.kt)("inlineCode",{parentName:"td"},"x")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"y")," are equal"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"magnitude"},"magnitude"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"() -",">"," number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Computes the magnitude of this point (Euclidean distance from 0, 0).\nDefined as the square root of the sum of the squares of each component."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note",":"," Only available with ",(0,l.kt)("strong",{parentName:"em"},"@","pixi/math-extras"),".")),(0,l.kt)("h4",{id:"returns-7"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The magnitude (length) of the vector."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"magnitudesquared"},"magnitudeSquared"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"() -",">"," number")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Computes the square magnitude of this point. If you are comparing the lengths of vectors, you should compare the length squared instead as it is slightly more efficient to calculate."),(0,l.kt)("p",null,"Defined as the sum of the squares of each component."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note",":"," Only available with ",(0,l.kt)("strong",{parentName:"em"},"@","pixi/math-extras"),".")),(0,l.kt)("h4",{id:"returns-8"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The magnitude squared (length squared) of the vector."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"multiply"},"multiply"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(other",":"," IPointData, outPoint",":"," IPointData) -",">"," IPointData")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Multiplies component-wise ",(0,l.kt)("inlineCode",{parentName:"p"},"other")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," points and outputs into ",(0,l.kt)("inlineCode",{parentName:"p"},"outPoint")," or a new Point.\n",(0,l.kt)("em",{parentName:"p"},"Note",":"," Only available with ",(0,l.kt)("strong",{parentName:"em"},"@","pixi/math-extras"),".")),(0,l.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"other"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The point to multiply with ",(0,l.kt)("inlineCode",{parentName:"td"},"this"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outPoint"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"A Point-like object in which to store the value, optional (otherwise will create a new Point).")))),(0,l.kt)("h4",{id:"returns-9"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"outPoint")," reference or a new Point, with the component-wise multiplication."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"multiplyscalar"},"multiplyScalar"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(scalar",":"," number, outPoint",":"," IPointData) -",">"," IPointData")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Multiplies each component of ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," point with the number ",(0,l.kt)("inlineCode",{parentName:"p"},"scalar")," and outputs into ",(0,l.kt)("inlineCode",{parentName:"p"},"outPoint")," or a new Point.\n",(0,l.kt)("em",{parentName:"p"},"Note",":"," Only available with ",(0,l.kt)("strong",{parentName:"em"},"@","pixi/math-extras"),".")),(0,l.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scalar"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The number to multiply both components of ",(0,l.kt)("inlineCode",{parentName:"td"},"this"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outPoint"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"A Point-like object in which to store the value, optional (otherwise will create a new Point).")))),(0,l.kt)("h4",{id:"returns-10"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"outPoint")," reference or a new Point, with the multiplication."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"normalize"},"normalize"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(outPoint",":"," IPointData) -",">"," IPointData")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Computes a normalized version of ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," point.\nA normalized vector is a vector of magnitude (length) 1"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note",":"," Only available with ",(0,l.kt)("strong",{parentName:"em"},"@","pixi/math-extras"),".")),(0,l.kt)("h4",{id:"parameters-9"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outPoint"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"A Point-like object in which to store the value, optional (otherwise will create a new Point).")))),(0,l.kt)("h4",{id:"returns-11"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The normalized point."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"project"},"project"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(onto",":"," IPointData, outPoint",":"," IPointData) -",">"," IPointData")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Computes vector projection of ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," on ",(0,l.kt)("inlineCode",{parentName:"p"},"onto"),".\nImagine a light source, parallel to ",(0,l.kt)("inlineCode",{parentName:"p"},"onto"),", above ",(0,l.kt)("inlineCode",{parentName:"p"},"this"),". The light would cast rays perpendicular to ",(0,l.kt)("inlineCode",{parentName:"p"},"onto"),".",(0,l.kt)("inlineCode",{parentName:"p"},"this.project(onto)")," is the shadow cast by ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," on the line defined by ",(0,l.kt)("inlineCode",{parentName:"p"},"onto")," ."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note",":"," Only available with ",(0,l.kt)("strong",{parentName:"em"},"@","pixi/math-extras"),".")),(0,l.kt)("h4",{id:"parameters-10"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"onto"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"A non zero vector describing a line on which to project ",(0,l.kt)("inlineCode",{parentName:"td"},"this"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outPoint"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"A Point-like object in which to store the value, optional (otherwise will create a new Point).")))),(0,l.kt)("h4",{id:"returns-12"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"this")," on ",(0,l.kt)("inlineCode",{parentName:"td"},"onto")," projection."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"reflect"},"reflect"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(normal",":"," IPointData, outPoint",":"," IPointData) -",">"," IPointData")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Reflects ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," vector off of a plane orthogonal to ",(0,l.kt)("inlineCode",{parentName:"p"},"normal"),".",(0,l.kt)("inlineCode",{parentName:"p"},"normal")," is not normalized during this process. Consider normalizing your ",(0,l.kt)("inlineCode",{parentName:"p"},"normal")," before use."),(0,l.kt)("p",null,"Imagine a light source bouncing onto a mirror.",(0,l.kt)("inlineCode",{parentName:"p"},"this")," vector is the light and ",(0,l.kt)("inlineCode",{parentName:"p"},"normal")," is a vector perpendicular to the mirror.",(0,l.kt)("inlineCode",{parentName:"p"},"this.reflect(normal)")," is the reflection of ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," on that mirror."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Note",":"," Only available with ",(0,l.kt)("strong",{parentName:"em"},"@","pixi/math-extras"),".")),(0,l.kt)("h4",{id:"parameters-11"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"normal"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The normal vector of your reflecting plane.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outPoint"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"A Point-like object in which to store the value, optional (otherwise will create a new Point).")))),(0,l.kt)("h4",{id:"returns-13"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The reflection of ",(0,l.kt)("inlineCode",{parentName:"td"},"this")," on your reflecting plane."))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"set"},"set"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(x",":"," number, y",":"," number) -",">"," this")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Sets the point to a new ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," position. If ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," is omitted, both ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"y")," will be set to ",(0,l.kt)("inlineCode",{parentName:"p"},"x"),"."),(0,l.kt)("h4",{id:"parameters-12"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"position of the point on the ",(0,l.kt)("inlineCode",{parentName:"td"},"x")," axis")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"position of the point on the ",(0,l.kt)("inlineCode",{parentName:"td"},"y")," axis")))),(0,l.kt)("h4",{id:"returns-14"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"this")),(0,l.kt)("td",{parentName:"tr",align:null},"The point instance itself"))))),(0,l.kt)("hr",null),(0,l.kt)("article",null,(0,l.kt)("h3",{id:"subtract"},"subtract"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type:")," ",(0,l.kt)("code",null,"(other",":"," IPointData, outPoint",":"," IPointData) -",">"," IPointData")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Description:")," Subtracts ",(0,l.kt)("inlineCode",{parentName:"p"},"other")," from ",(0,l.kt)("inlineCode",{parentName:"p"},"this")," point and outputs into ",(0,l.kt)("inlineCode",{parentName:"p"},"outPoint")," or a new Point.\n",(0,l.kt)("em",{parentName:"p"},"Note",":"," Only available with ",(0,l.kt)("strong",{parentName:"em"},"@","pixi/math-extras"),".")),(0,l.kt)("h4",{id:"parameters-13"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"other"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The point to subtract to ",(0,l.kt)("inlineCode",{parentName:"td"},"this"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outPoint"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"A Point-like object in which to store the value, optional (otherwise will create a new Point).")))),(0,l.kt)("h4",{id:"returns-15"},"Returns:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"IPointData")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"outPoint")," reference or a new Point, with the result of the subtraction."))))),(0,l.kt)("hr",null))}k.isMDXComponent=!0}}]);