(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),l=a.n(o),c=a("Wbzz"),b=a("Xrax"),i=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),x=a("qKvR");var p=e=>{let{title:t,theme:a,tabs:n=[]}=e;return Object(x.b)("div",{className:d()(m.a.pageHeader,{[m.a.withTabs]:n.length,[m.a.darkMode]:"dark"===a})},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12"},Object(x.b)("h1",{id:"page-title",className:m.a.text},t)))))},g=a("BAC9");var j=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:o,branch:l}=a||n,b=r+"/edit/"+l+o+"/src/pages"+t;return r?Object(x.b)("div",{className:"bx--row "+g.row},Object(x.b)("div",{className:"bx--col"},Object(x.b)("a",{className:g.link,href:b},"Edit this page on GitHub"))):null},O=a("FCXl"),T=a("dI71"),f=a("I8xM");var h=function(e){function t(){return e.apply(this,arguments)||this}return Object(T.a)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map(e=>{const t=l()(e,{lower:!0,strict:!0}),r=t===n,o=new RegExp(n+"/?(#.*)?$"),b=a.replace(o,t);return Object(x.b)("li",{key:e,className:d()({[f.selectedItem]:r},f.listItem)},Object(x.b)(c.Link,{className:f.link,to:""+b},e))});return Object(x.b)("div",{className:f.tabsContainer},Object(x.b)("div",{className:"bx--grid"},Object(x.b)("div",{className:"bx--row"},Object(x.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(x.b)("nav",{"aria-label":e},Object(x.b)("ul",{className:f.list},r))))))},t}(r.a.Component),w=a("MjG9"),v=a("CzIb"),k=a("Asxa"),P=a("OIbQ"),N=a.n(P);var y=e=>{let{date:t}=e;const a=new Date(t);return t?Object(x.b)(k.c,{className:N.a.row},Object(x.b)(k.a,null,Object(x.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=e=>{let{pageContext:t,children:a,location:n,Title:r}=e;const{frontmatter:o={},relativePagePath:s,titleType:d}=t,{tabs:u,title:m,theme:g,description:T,keywords:f,date:k}=o,{interiorTheme:P}=Object(v.a)(),{site:{pathPrefix:N}}=Object(c.useStaticQuery)("2456312558"),I=N?n.pathname.replace(N,""):n.pathname,E=u?I.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",H=g||P;return Object(x.b)(i.a,{tabs:u,homepage:!1,theme:H,pageTitle:m,pageDescription:T,pageKeywords:f,titleType:d},Object(x.b)(p,{title:r?Object(x.b)(r,null):m,label:"label",tabs:u,theme:H}),u&&Object(x.b)(h,{title:m,slug:I,tabs:u,currentTab:E}),Object(x.b)(w.a,{padded:!0},a,Object(x.b)(j,{relativePagePath:s}),Object(x.b)(y,{date:k})),Object(x.b)(O.a,{pageContext:t,location:n,slug:I,tabs:u,currentTab:E}),Object(x.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},kfjV:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("Ff2n"),o=(a("q1tI"),a("7ljp")),l=a("013z");a("qKvR");const c={},b={_frontmatter:c},i=l.a;function s(e){let{components:t}=e,a=Object(r.a)(e,["components"]);return Object(o.b)(i,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",null,"Solution"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx\n  namespace: web\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    command: ["nginx"]\n    args: ["-g", "daemon off;", "-q"]\n    ports:\n    - containerPort: 80\n')))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-lab-1-solution-mdx-300812d03c0a3c90956a.js.map