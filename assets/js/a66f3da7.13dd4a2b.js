"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[714],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||c;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,i=new Array(c);i[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<c;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8379:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u}});var r=t(7462),o=t(3366),c=(t(7294),t(3905)),i=["components"],a={title:"Dependency Injection"},l=void 0,s={unversionedId:"dependency-injection",id:"dependency-injection",title:"Dependency Injection",description:"Dependency Injection",source:"@site/docs/dependency-injection.md",sourceDirName:".",slug:"/dependency-injection",permalink:"/dotnet-workshop/docs/dependency-injection",editUrl:"https://github.com/stackworx/dotnet-workshop/edit/master/docs/docs/dependency-injection.md",tags:[],version:"current",frontMatter:{title:"Dependency Injection"},sidebar:"someSidebar",previous:{title:"Service",permalink:"/dotnet-workshop/docs/service"},next:{title:"Entity Framework",permalink:"/dotnet-workshop/docs/entity-framework"}},p={},u=[{value:"Dependency Injection",id:"dependency-injection",level:2},{value:"Adding an Interface",id:"adding-an-interface",level:2},{value:"References",id:"references",level:3}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"dependency-injection"},"Dependency Injection"),(0,c.kt)("p",null,"Creating an instance of clock in the constructor works but it can become cumbersome when your controller uses many services.\nTo solve this problem we use dependency injection or inversion of control."),(0,c.kt)("p",null,"We will register the Clock service as a singleton in ",(0,c.kt)("inlineCode",{parentName:"p"},"Startup.cs"),". In the ConfigureServices Method add the following code"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-csharp"},"services.AddSingleton<Clock, Clock>();\n")),(0,c.kt)("p",null,"You may have to add the import"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-csharp"},"using Stackworx.Workshop.Services;\n")),(0,c.kt)("p",null,"Now we can change our constructor too"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-csharp"},"public ClockController(Clock clock)\n{\n    this.clock = clock;\n}\n")),(0,c.kt)("p",null,"Restart the application and everything should continue to work as expected"),(0,c.kt)("h2",{id:"adding-an-interface"},"Adding an Interface"),(0,c.kt)("p",null,"This is not very useful on its own. More often we generate interfaces for our services so that we can hide the implementation details."),(0,c.kt)("p",null,"Right click on the project and add an new item. This time select Interface. Name it ",(0,c.kt)("inlineCode",{parentName:"p"},"IClock.cs"),".\nChange our clock to implement this interface and give it a single interface method"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-csharp"},"class Clock : IClock\n\npublic interface IClock\n{\n    DateTime Now(bool utc);\n}\n")),(0,c.kt)("p",null,"You will have to mark the ",(0,c.kt)("inlineCode",{parentName:"p"},"Now()")," method as virtual"),(0,c.kt)("p",null,"And finally change all references to ",(0,c.kt)("inlineCode",{parentName:"p"},"Clock")," to ",(0,c.kt)("inlineCode",{parentName:"p"},"IClock")," and update the service registration"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-csharp"},"services.AddSingleton<IClock, Clock>();\n")),(0,c.kt)("p",null,"Restart the application and confirm everything works"),(0,c.kt)("h3",{id:"references"},"References"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-3.1"},"Dependency Injection")),(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-3.1#service-lifetimes"},"Service Lifetimes"))))}m.isMDXComponent=!0}}]);