(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),l=a.n(b),i=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR");var O=e=>{let{title:t,theme:a,tabs:n=[]}=e;return Object(p.b)("div",{className:d()(m.a.pageHeader,{[m.a.withTabs]:n.length,[m.a.darkMode]:"dark"===a})},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},t)))))},j=a("BAC9");var x=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=Object(i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:b,branch:l}=a||n,c=r+"/edit/"+l+b+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),h=a("dI71"),N=a("I8xM");var f=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map(e=>{const t=l()(e,{lower:!0,strict:!0}),r=t===n,b=new RegExp(n+"/?(#.*)?$"),c=a.replace(b,t);return Object(p.b)("li",{key:e,className:d()({[N.selectedItem]:r},N.listItem)},Object(p.b)(i.Link,{className:N.link,to:""+c},e))});return Object(p.b)("div",{className:N.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":e},Object(p.b)("ul",{className:N.list},r))))))},t}(r.a.Component),T=a("MjG9"),v=a("CzIb"),w=a("Asxa"),k=a("OIbQ"),P=a.n(k);var y=e=>{let{date:t}=e;const a=new Date(t);return t?Object(p.b)(w.c,{className:P.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=e=>{let{pageContext:t,children:a,location:n,Title:r}=e;const{frontmatter:b={},relativePagePath:s,titleType:d}=t,{tabs:u,title:m,theme:j,description:h,keywords:N,date:w}=b,{interiorTheme:k}=Object(v.a)(),{site:{pathPrefix:P}}=Object(i.useStaticQuery)("2456312558"),C=P?n.pathname.replace(P,""):n.pathname,D=u?C.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",I=j||k;return Object(p.b)(o.a,{tabs:u,homepage:!1,theme:I,pageTitle:m,pageDescription:h,pageKeywords:N,titleType:d},Object(p.b)(O,{title:r?Object(p.b)(r,null):m,label:"label",tabs:u,theme:I}),u&&Object(p.b)(f,{title:m,slug:C,tabs:u,currentTab:D}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(x,{relativePagePath:s}),Object(p.b)(y,{date:w})),Object(p.b)(g.a,{pageContext:t,location:n,slug:C,tabs:u,currentTab:D}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Mu7n:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("Ff2n"),b=(a("q1tI"),a("7ljp")),l=a("013z");a("qKvR");const i={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(b.b)("div",t)},o=c("CardGroup"),s=c("MiniCard"),d={_frontmatter:i},u=l.a;function m(e){let{components:t}=e,a=Object(r.a)(e,["components"]);return Object(b.b)(u,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Resources"),Object(b.b)(o,{mdxType:"CardGroup"},Object(b.b)(s,{title:"Cloud Data Services PDF",href:"/slides/08-Cloud-Data-Services.pdf",mdxType:"MiniCard"})),Object(b.b)("h2",null,"Topics Covered"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Topics"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:"left"},"Link"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Choosing the Right Databases for Microservices"),Object(b.b)("td",{parentName:"tr",align:null},"Database Considerations for Databases"),Object(b.b)("td",{parentName:"tr",align:"left"},"See ",Object(b.b)("a",{parentName:"td",href:"https://medium.com/ibm-garage/database-considerations-for-microservices-f575d5448203"},"Article"))))),Object(b.b)("h1",null,"Activities"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Topics"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:"left"},"Link"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Cloud Data"),Object(b.b)("td",{parentName:"tr",align:null},"Getting Started with Cloud Data Services (postgres)"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"../data-services/activities/labs/lab1/"},"Cloud Data Lab"))))))}m.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-electives-data-services-index-mdx-fb25ef71f7986446446c.js.map