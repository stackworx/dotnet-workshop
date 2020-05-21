(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{143:function(t,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return a})),r.d(e,"metadata",(function(){return u})),r.d(e,"rightToc",(function(){return s})),r.d(e,"default",(function(){return p}));var n=r(1),o=r(9),i=(r(0),r(152)),c=r(153),a={title:"Requirements"},u={id:"requirements",title:"Requirements",description:"Tools",source:"@site/docs/requirements.mdx",permalink:"/dotnet-workshop/docs/requirements",editUrl:"https://github.com/stackworx/dotnet-workshop/edit/master/docs/docs/requirements.mdx",sidebar:"someSidebar",next:{title:"Getting Started",permalink:"/dotnet-workshop/docs/getting-started"}},s=[{value:"Tools",id:"tools",children:[]},{value:"Visual Studio",id:"visual-studio",children:[]}],l={rightToc:s};function p(t){var e=t.components,r=Object(o.a)(t,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"tools"},"Tools"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://visualstudio.microsoft.com/downloads/"}),"Visual Studio")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.docker.com/docker-for-windows/install/"}),"docker for mac/windows"))),Object(i.b)("h3",{id:"visual-studio"},"Visual Studio"),Object(i.b)("p",null,"During the installer when you are present with this screen"),Object(i.b)("img",{src:Object(c.a)("img/visualstudio-requirements1.png")}),";",Object(i.b)("p",null,"Only this component is required"),Object(i.b)("img",{src:Object(c.a)("img/visualstudio-requirements2.png")}),";")}p.isMDXComponent=!0},151:function(t,e,r){"use strict";var n=r(0),o=r(51);e.a=function(){return Object(n.useContext)(o.a)}},152:function(t,e,r){"use strict";r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=o.a.createContext({}),l=function(t){var e=o.a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):a({},e,{},t)),r},p=function(t){var e=l(t.components);return o.a.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},f=Object(n.forwardRef)((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=l(r),f=n,b=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?o.a.createElement(b,a({ref:e},s,{components:r})):o.a.createElement(b,a({ref:e},s))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:n,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},153:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(155);var n=r(151);function o(t){var e=(Object(n.a)().siteConfig||{}).baseUrl,r=void 0===e?"/":e;if(!t)return t;return/^(https?:|\/\/)/.test(t)?t:t.startsWith("/")?r+t.slice(1):r+t}},155:function(t,e,r){"use strict";var n=r(17),o=r(35),i=r(158),c="".startsWith;n(n.P+n.F*r(159)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return c?c.call(e,n,r):e.slice(r,r+n.length)===n}})},158:function(t,e,r){var n=r(70),o=r(24);t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(t))}},159:function(t,e,r){var n=r(2)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(o){}}return!0}}}]);