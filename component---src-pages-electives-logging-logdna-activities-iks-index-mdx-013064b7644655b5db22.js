(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),i=a("NmYn"),l=a.n(i),o=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),r=a("TSYQ"),d=a.n(r),g=a("QH2O"),m=a.n(g),p=a("qKvR");var u=e=>{let{title:t,theme:a,tabs:n=[]}=e;return Object(p.b)("div",{className:d()(m.a.pageHeader,{[m.a.withTabs]:n.length,[m.a.darkMode]:"dark"===a})},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},t)))))},A=a("BAC9");var f=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=Object(o.useStaticQuery)("1364590287"),{baseUrl:c,subDirectory:i,branch:l}=a||n,s=c+"/edit/"+l+i+"/src/pages"+t;return c?Object(p.b)("div",{className:"bx--row "+A.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:A.link,href:s},"Edit this page on GitHub"))):null},x=a("FCXl"),N=a("dI71"),w=a("I8xM");var O=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],c=t.map(e=>{const t=l()(e,{lower:!0,strict:!0}),c=t===n,i=new RegExp(n+"/?(#.*)?$"),s=a.replace(i,t);return Object(p.b)("li",{key:e,className:d()({[w.selectedItem]:c},w.listItem)},Object(p.b)(o.Link,{className:w.link,to:""+s},e))});return Object(p.b)("div",{className:w.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":e},Object(p.b)("ul",{className:w.list},c))))))},t}(c.a.Component),h=a("MjG9"),j=a("CzIb"),k=a("Asxa"),y=a("OIbQ"),v=a.n(y);var T=e=>{let{date:t}=e;const a=new Date(t);return t?Object(p.b)(k.c,{className:v.a.row},Object(p.b)(k.a,null,Object(p.b)("div",{className:v.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=e=>{let{pageContext:t,children:a,location:n,Title:c}=e;const{frontmatter:i={},relativePagePath:r,titleType:d}=t,{tabs:g,title:m,theme:A,description:N,keywords:w,date:k}=i,{interiorTheme:y}=Object(j.a)(),{site:{pathPrefix:v}}=Object(o.useStaticQuery)("2456312558"),B=v?n.pathname.replace(v,""):n.pathname,I=g?B.split("/").filter(Boolean).slice(-1)[0]||l()(g[0],{lower:!0}):"",L=A||y;return Object(p.b)(b.a,{tabs:g,homepage:!1,theme:L,pageTitle:m,pageDescription:N,pageKeywords:w,titleType:d},Object(p.b)(u,{title:c?Object(p.b)(c,null):m,label:"label",tabs:g,theme:L}),g&&Object(p.b)(O,{title:m,slug:B,tabs:g,currentTab:I}),Object(p.b)(h.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:r}),Object(p.b)(T,{date:k})),Object(p.b)(x.a,{pageContext:t,location:n,slug:B,tabs:g,currentTab:I}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},sXl4:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return r}));var n=a("wx14"),c=a("Ff2n"),i=(a("q1tI"),a("7ljp")),l=a("013z");a("qKvR");const o={},s={_frontmatter:o},b=l.a;function r(e){let{components:t}=e,a=Object(c.a)(e,["components"]);return Object(i.b)(b,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",null,"Prerequisite"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create an IBM Kubernetes Cluster, it can be a Cluster using the Free plan")),Object(i.b)("h3",null,"Connecting a LogDNA agent to a standard Kubernetes cluster"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open you Kubernetes Cluster Overview, in the Summary find _Loggin__ row and click ",Object(i.b)("strong",{parentName:"li"},"Connect"),Object(i.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB6klEQVQoz42Ry27UMBSG80Iwk86UsuggIXXBW7GBFe/BotAd70ArhLpDoGmSaTu3OLFjx3Z8jc3JBIRGQohflm/Hn/+jc5Lz88Wzs7PJ00GTyWScZwelaXpyMjudzy4WJxeL9NXL0xfPn8whMJ/N03Q6nSZfbr+t8iy7z9fbzWa9AVW/hVBFcJU/VG8v2ZtL+vo9fXdFi3X1uKk2u6pEVVJhzBhrBVdKdV0npXQHee+tc713lNuP1+7qOnz4HD997YVySjtteqVMsloVdV2jEjVNI4QghIQQ+r631sIcY7TWRC/adinVXQwGbvrQG2vAKVkVRUMImANJKYVswRNSgdgIO+sRvydqSzXa8wwupZGY4QHe1TWTgyBtICllAOwRlp1yIcC+lQTJnDWc4nbPl8YKrwQjaIDzut5z3gkBfAv+jMXed7yFYbYPgRJtTMmXDUeU1zu+dM54pRkmA6ykBJILAbUi2RLld57UTUn49x/m9ia01BnbmbbkWdlmQlPve3iKRxiwUeDMUUl32yBFgxVGQjQiaKW1hqiSWnV6NAKNSDIucIafMGke12vIs5GBqWCHekWAD8+HIY51BEPPoGYAQPmMdTH+gcXfdAQDmWUZNNb4aH6x/w1jjIuiMEZzFVkXrINWhX/APwGk5LJkGmLuSQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"iks cluster overview",title:"iks cluster overview",src:"/static/5f9b27a1bf38bd3614e69fe6fbe9784a/3cbba/iks-connect-logdna.png",srcSet:["/static/5f9b27a1bf38bd3614e69fe6fbe9784a/7fc1e/iks-connect-logdna.png 288w","/static/5f9b27a1bf38bd3614e69fe6fbe9784a/a5df1/iks-connect-logdna.png 576w","/static/5f9b27a1bf38bd3614e69fe6fbe9784a/3cbba/iks-connect-logdna.png 1152w","/static/5f9b27a1bf38bd3614e69fe6fbe9784a/0b124/iks-connect-logdna.png 1728w","/static/5f9b27a1bf38bd3614e69fe6fbe9784a/4ea69/iks-connect-logdna.png 2304w","/static/5f9b27a1bf38bd3614e69fe6fbe9784a/61aca/iks-connect-logdna.png 2496w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("li",{parentName:"ol"},"Click ",Object(i.b)("strong",{parentName:"li"},"Create and connect"),Object(i.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.40277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAABYlAAAWJQFJUiTwAAABIUlEQVQoz52Qy06DQBiF5x1MXBuxXbow0UVLE1sSti58B02sly58AuM7egkgLLhVbg4gt4HxZGhNcemXP39ODszJmSFRFMVxHASB67rYvu9/boHjeR6E8NcgTWlZlkVRZFmWZpR8CDRNQwqlFEFJkqQCnKGCPM+/BIwxLugEBH+HYYj4XIDUbwGyoeFAYyMLu6oqvgPpG6Kt4zi2baMnhC9AbcuyTNOExifENU0zONy2LSwmQHBd1+0vXcdYCx8NoTeFd4b0F+D/ghiGoeu6sQWPt1G6plnrF5u/2l0/b85g3p2OqKoqy/LkD9PZ9Oz45OJZeuTSqpVW/OCe710NZv+aE0VRFkPOwXwxn51OLp/GD8XoNhzfxaNldHgzmKNl9AOmjrs4KK763wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"create and connect",title:"create and connect",src:"/static/13c06a8a3402dbfe1ea87460ea9348ea/3cbba/create-connect.png",srcSet:["/static/13c06a8a3402dbfe1ea87460ea9348ea/7fc1e/create-connect.png 288w","/static/13c06a8a3402dbfe1ea87460ea9348ea/a5df1/create-connect.png 576w","/static/13c06a8a3402dbfe1ea87460ea9348ea/3cbba/create-connect.png 1152w","/static/13c06a8a3402dbfe1ea87460ea9348ea/41fed/create-connect.png 1528w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(i.b)("li",{parentName:"ol"},"Select a LogDNA plan such as ",Object(i.b)("strong",{parentName:"li"},"Free")," and click ",Object(i.b)("strong",{parentName:"li"},"Create")),Object(i.b)("li",{parentName:"ol"},"Verify Cluster is connected to logDNA service instance by clicking the button ",Object(i.b)("strong",{parentName:"li"},"Launch")," next to ",Object(i.b)("strong",{parentName:"li"},"Logging"),Object(i.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB1UlEQVQoz22R247TMBCG81ztqmm1kXZXHB4IJN6BdwBxiwTcc4tYEBeVUJfdpO1WaZ34ENtjO3FOjFMJuODLKHEy888pUZJcXl/fJEkyn88v5hdnZrMZvsZxvFqtFovFk6vls+v4+c3y6dUiuVzFy3i5CETf1tnXHz/Th/tsv8vJMZ/gnLNAeJaUv/6gXr6FV+/0izf6+0acCnYsOCl5hD5KWSWEVBIM6Im6rpsJPDhXf17X77/Un267j7ddThvnGuu8sS76lT5us7QoS0IIZxwAKKVt23rv8T6O4zAMY980lpVibdwBv/RD33hM4aITKXbbLXYppTTGlGUphGi7XimF+rPY1i7Xd8bLArbC5V3fccUwOMKGT4xVJmCtrURl8eAaANNNlREBRQEZJUIpWZi0qUGLwgBEqqoySo9aWwAUU8YrKbEmZcy2HV7jMIKTR7WpFGeQl2Y7+F4zHsQ4pMNSEFblrC0e9+yw79HDaJvd+YdNJytfN8rRk7onOm07j4tkmOcs1pMhuGy5S3V+6JWucg7rtSHMc4HLsji3CYbTYZkpfBL/ITikrDhzriWil/WAKx/7zoDR2Nlk/8b/FYe2nSOkwH/WdiPUYxPmDfvGpPA/fgNrWUGFL+HxXAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"launch",title:"launch",src:"/static/fd245a2d38981a8de4020f53082e5c62/3cbba/connected-logdna.png",srcSet:["/static/fd245a2d38981a8de4020f53082e5c62/7fc1e/connected-logdna.png 288w","/static/fd245a2d38981a8de4020f53082e5c62/a5df1/connected-logdna.png 576w","/static/fd245a2d38981a8de4020f53082e5c62/3cbba/connected-logdna.png 1152w","/static/fd245a2d38981a8de4020f53082e5c62/0b124/connected-logdna.png 1728w","/static/fd245a2d38981a8de4020f53082e5c62/4ea69/connected-logdna.png 2304w","/static/fd245a2d38981a8de4020f53082e5c62/0b97a/connected-logdna.png 2406w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To manually install logging in your cluster, follow the guides below:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/Log-Analysis-with-LogDNA?topic=Log-Analysis-with-LogDNA-config_agent_kube_cluster"},"Connecting a LogDNA agent to a standard Kubernetes cluster")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/Log-Analysis-with-LogDNA?topic=Log-Analysis-with-LogDNA-config_agent_os_cluster"},"Connecting a LogDNA agent to an OpenShift Kubernetes cluster"))))))}r.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-logging-logdna-activities-iks-index-mdx-013064b7644655b5db22.js.map