(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),l=a.n(b),i=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),o=a("TSYQ"),d=a.n(o),u=a("QH2O"),m=a.n(u),p=a("qKvR");var g=e=>{let{title:t,theme:a,tabs:n=[]}=e;return Object(p.b)("div",{className:d()(m.a.pageHeader,{[m.a.withTabs]:n.length,[m.a.darkMode]:"dark"===a})},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},t)))))},O=a("BAC9");var j=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=Object(i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:b,branch:l}=a||n,c=r+"/edit/"+l+b+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+O.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},N=a("FCXl"),h=a("dI71"),f=a("I8xM");var k=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map(e=>{const t=l()(e,{lower:!0,strict:!0}),r=t===n,b=new RegExp(n+"/?(#.*)?$"),c=a.replace(b,t);return Object(p.b)("li",{key:e,className:d()({[f.selectedItem]:r},f.listItem)},Object(p.b)(i.Link,{className:f.link,to:""+c},e))});return Object(p.b)("div",{className:f.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":e},Object(p.b)("ul",{className:f.list},r))))))},t}(r.a.Component),x=a("MjG9"),w=a("CzIb"),v=a("Asxa"),y=a("OIbQ"),T=a.n(y);var C=e=>{let{date:t}=e;const a=new Date(t);return t?Object(p.b)(v.c,{className:T.a.row},Object(p.b)(v.a,null,Object(p.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=e=>{let{pageContext:t,children:a,location:n,Title:r}=e;const{frontmatter:b={},relativePagePath:o,titleType:d}=t,{tabs:u,title:m,theme:O,description:h,keywords:f,date:v}=b,{interiorTheme:y}=Object(w.a)(),{site:{pathPrefix:T}}=Object(i.useStaticQuery)("2456312558"),P=T?n.pathname.replace(T,""):n.pathname,L=u?P.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",I=O||y;return Object(p.b)(s.a,{tabs:u,homepage:!1,theme:I,pageTitle:m,pageDescription:h,pageKeywords:f,titleType:d},Object(p.b)(g,{title:r?Object(p.b)(r,null):m,label:"label",tabs:u,theme:I}),u&&Object(p.b)(k,{title:m,slug:P,tabs:u,currentTab:L}),Object(p.b)(x.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:o}),Object(p.b)(C,{date:v})),Object(p.b)(N.a,{pageContext:t,location:n,slug:P,tabs:u,currentTab:L}),Object(p.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},TRIy:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a("wx14"),r=a("Ff2n"),b=(a("q1tI"),a("7ljp")),l=a("013z");a("qKvR");const i={},c={_frontmatter:i},s=l.a;function o(e){let{components:t}=e,a=Object(r.a)(e,["components"]);return Object(b.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Kubernetes"),Object(b.b)("p",null,"These activites give you a chance to walkthrough basic kubernetes tasks via Katacoda. Then give them a try yourself by solving some problems from scratch."),Object(b.b)("p",null,"These tasks assume that you have:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Reviewed Kubernetes Concept pages."),Object(b.b)("li",{parentName:"ul"},"Created a Mini-Kube cluster."),Object(b.b)("li",{parentName:"ul"},"Created a Katacoda Account.")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Task"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:"left"},"Link"),Object(b.b)("th",{parentName:"tr",align:null},"Time"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"}," Walkthroughs "))),Object(b.b)("td",{parentName:"tr",align:null}),Object(b.b)("td",{parentName:"tr",align:"left"}),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Creating a Cluster"),Object(b.b)("td",{parentName:"tr",align:null},"Learn how to launch a Single Node Minikube cluster including DNS and Kube UI."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{href:"https://www.katacoda.com/courses/kubernetes/creating-kubernetes-yaml-definitions",target:"_blank"},"Cluster Creation")),Object(b.b)("td",{parentName:"tr",align:null},"30 min")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Deploy Containers Using Kubectl"),Object(b.b)("td",{parentName:"tr",align:null},"Learn how to use Kubectl to create and launch Deployments, Replication Controllers and expose them via Services without writing yaml definitions."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{href:"https://www.katacoda.com/courses/kubernetes/kubectl-run-containers",target:"_blank"},"Using Kubectl")),Object(b.b)("td",{parentName:"tr",align:null},"15 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Deploy Containers Using YAML"),Object(b.b)("td",{parentName:"tr",align:null},"Learn how to use Kubectl to create and launch Deployments, Replication Controllers and expose them via Services by writing yaml definitions."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{href:"https://www.katacoda.com/courses/kubernetes/creating-kubernetes-yaml-definitions",target:"_blank"},"Using YAML")),Object(b.b)("td",{parentName:"tr",align:null},"15 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Intro to Networking"),Object(b.b)("td",{parentName:"tr",align:null},"Learn about core Kubernetes Networking capabilities"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{href:"https://www.katacoda.com/courses/kubernetes/networking-introduction",target:"_blank"},"Networking")),Object(b.b)("td",{parentName:"tr",align:null},"30 mins")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Healthchecks"),Object(b.b)("td",{parentName:"tr",align:null},"Learn how Kubernetes checks containers health using Readiness and Liveness Probes."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{href:"https://www.katacoda.com/courses/kubernetes/liveness-readiness-healthchecks",target:"_blank"},"Liveness and Readiness Probes")),Object(b.b)("td",{parentName:"tr",align:null},"20 min")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("strong",{parentName:"td"},Object(b.b)("em",{parentName:"strong"}," Try It Yourself "))),Object(b.b)("td",{parentName:"tr",align:null}),Object(b.b)("td",{parentName:"tr",align:"left"}),Object(b.b)("td",{parentName:"tr",align:null})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Pod Creation"),Object(b.b)("td",{parentName:"tr",align:null},"Challenge yourself to create a Pod YAML file to meet certain parameters."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/activities/kubernetes/labs/lab1"},"Pod Creation")),Object(b.b)("td",{parentName:"tr",align:null},"30 min")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Pod Configuration"),Object(b.b)("td",{parentName:"tr",align:null},"Configure a pod to meet compute resource requirements."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/activities/kubernetes/labs/lab2"},"Pod Configuration")),Object(b.b)("td",{parentName:"tr",align:null},"30 min")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Multiple Containers"),Object(b.b)("td",{parentName:"tr",align:null},"Build a container using legacy container image."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/activities/kubernetes/labs/lab3"},"Multiple Containers")),Object(b.b)("td",{parentName:"tr",align:null},"30 min")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Probes"),Object(b.b)("td",{parentName:"tr",align:null},"Create some Health & Startup Probes to find what’s causing an issue."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/activities/kubernetes/labs/lab4"},"Probes")),Object(b.b)("td",{parentName:"tr",align:null},"30 min")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Debugging"),Object(b.b)("td",{parentName:"tr",align:null},"Find which service is breaking in your cluster and find out why."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/activities/kubernetes/labs/lab5"},"Debugging")),Object(b.b)("td",{parentName:"tr",align:null},"30 min")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Rolling Updates"),Object(b.b)("td",{parentName:"tr",align:null},"Roll out a new version of a video game."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/activities/kubernetes/labs/lab6"},"Rolling Updates")),Object(b.b)("td",{parentName:"tr",align:null},"30 min")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Cron Jobs"),Object(b.b)("td",{parentName:"tr",align:null},"Create a Cron Job to run some maintenance."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/activities/kubernetes/labs/lab7"},"Cron Jobs")),Object(b.b)("td",{parentName:"tr",align:null},"30 min")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Creating Services"),Object(b.b)("td",{parentName:"tr",align:null},"Create two services with certain requirements."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/activities/kubernetes/labs/lab8"},"Setting up Services")),Object(b.b)("td",{parentName:"tr",align:null},"45 min")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Setting up Persistent Volumes"),Object(b.b)("td",{parentName:"tr",align:null},"Create a Persistent Volume that’s accessible from a SQL Pod."),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/activities/kubernetes/labs/lab10"},"Setting up Persistent Volumes")),Object(b.b)("td",{parentName:"tr",align:null},"1 hr")))),Object(b.b)("p",null,"Once you have completed these tasks, you should have a basic understanding for Kubernetes."))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-kube-overview-activities-labs-index-mdx-a2d88f831fd4cd54c415.js.map