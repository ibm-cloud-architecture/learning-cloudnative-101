(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("NmYn"),o=a.n(l),i=a("Wbzz"),b=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),g=a("QH2O"),p=a.n(g),u=a("qKvR");var m=e=>{let{title:t,theme:a,tabs:n=[]}=e;return Object(u.b)("div",{className:d()(p.a.pageHeader,{[p.a.withTabs]:n.length,[p.a.darkMode]:"dark"===a})},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:p.a.text},t)))))},O=a("BAC9");var j=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=Object(i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:l,branch:o}=a||n,b=r+"/edit/"+o+l+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:b},"Edit this page on GitHub"))):null},N=a("FCXl"),h=a("dI71"),f=a("I8xM");var x=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map(e=>{const t=o()(e,{lower:!0,strict:!0}),r=t===n,l=new RegExp(n+"/?(#.*)?$"),b=a.replace(l,t);return Object(u.b)("li",{key:e,className:d()({[f.selectedItem]:r},f.listItem)},Object(u.b)(i.Link,{className:f.link,to:""+b},e))});return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":e},Object(u.b)("ul",{className:f.list},r))))))},t}(r.a.Component),w=a("MjG9"),y=a("CzIb"),v=a("Asxa"),L=a("OIbQ"),D=a.n(L);var A=e=>{let{date:t}=e;const a=new Date(t);return t?Object(u.b)(v.c,{className:D.a.row},Object(u.b)(v.a,null,Object(u.b)("div",{className:D.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=e=>{let{pageContext:t,children:a,location:n,Title:r}=e;const{frontmatter:l={},relativePagePath:s,titleType:d}=t,{tabs:g,title:p,theme:O,description:h,keywords:f,date:v}=l,{interiorTheme:L}=Object(y.a)(),{site:{pathPrefix:D}}=Object(i.useStaticQuery)("2456312558"),T=D?n.pathname.replace(D,""):n.pathname,C=g?T.split("/").filter(Boolean).slice(-1)[0]||o()(g[0],{lower:!0}):"",I=O||L;return Object(u.b)(c.a,{tabs:g,homepage:!1,theme:I,pageTitle:p,pageDescription:h,pageKeywords:f,titleType:d},Object(u.b)(m,{title:r?Object(u.b)(r,null):p,label:"label",tabs:g,theme:I}),g&&Object(u.b)(x,{title:p,slug:T,tabs:g,currentTab:C}),Object(u.b)(w.a,{padded:!0},a,Object(u.b)(j,{relativePagePath:s}),Object(u.b)(A,{date:v})),Object(u.b)(N.a,{pageContext:t,location:n,slug:T,tabs:g,currentTab:C}),Object(u.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},qVNu:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a("wx14"),r=a("Ff2n"),l=(a("q1tI"),a("7ljp")),o=a("013z");a("qKvR");const i={},b=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",t)},c=b("CardGroup"),s=b("MiniCard"),d={_frontmatter:i},g=o.a;function p(e){let{components:t}=e,a=Object(r.a)(e,["components"]);return Object(l.b)(g,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",null,"LogDNA"),Object(l.b)("p",null,"IBM Log Analysis with LogDNA offers administrators, DevOps teams, and developers advanced features to filter, search, and tail log data, define alerts, and design custom views to monitor application and system logs."),Object(l.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(l.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/Npj1qqngX9E",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(l.b)("h2",null,"Features"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Troubleshoot logs in real time to diagnose issues and identify problems.")),Object(l.b)("p",null,"By using the ",Object(l.b)("em",{parentName:"p"},"live streaming tail")," feature, developers and DevOps teams can diagnose issues, analyze stack traces and exceptions, identify the source of errors, and monitor different log sources through a single view. "),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Issue alerts to be notified of important actions.")),Object(l.b)("p",null," \nTo act promptly on application and services events that you identify as critical or warning, DevOps teams can configure alert notification integrations to the following systems: email, Slack, webHook, and PagerDuty."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Export logs to a local file for analysis or to an archive service to meet auditing requirements.")),Object(l.b)("p",null,"Export specific log lines to a local copy or archive logs from LogDNA to IBM Cloud Object Storage.\nLog lines are exported in JSON line format. Logs are archived in JSON format and preserve the metadata that is associated with each line. "),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Control logging infrastructure costs by customizing what logs to manage through LogDNA.")),Object(l.b)("p",null,"Control the cost of your logging infrastructure in the IBM Cloud by configuring the log sources for which you want to collect and manage logs. "),Object(l.b)("h2",null,"Resources"),Object(l.b)(c,{mdxType:"CardGroup"},Object(l.b)(s,{title:"IBM Cloud Logging with Sysdig PDF",href:"/slides/09-IBM-Cloud-Logging-with-LogDNA.pdf",mdxType:"MiniCard"}),Object(l.b)(s,{title:"IBM Cloud Logging with Sysdig",href:"https://www.ibm.com/cloud/log-analysis",mdxType:"MiniCard"}),Object(l.b)(s,{title:"Observability in IBM Cloud",href:"https://cloud.ibm.com/observe",mdxType:"MiniCard"}),Object(l.b)(s,{title:"IBM Cloud Logging with LogDNA",href:"https://cloud.ibm.com/docs/Log-Analysis-with-LogDNA",mdxType:"MiniCard"})),Object(l.b)("h2",null,"Topics Covered"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Topics"),Object(l.b)("th",{parentName:"tr",align:null},"Link"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"LogDNA Highlights"),Object(l.b)("td",{parentName:"tr",align:null},"See ",Object(l.b)("a",{parentName:"td",href:"/slides/09-IBM-Cloud-Logging-with-LogDNA.pdf"},"Presentation"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Provision Instance"),Object(l.b)("td",{parentName:"tr",align:null},"See ",Object(l.b)("a",{parentName:"td",href:"/slides/09-IBM-Cloud-Logging-with-LogDNA.pdf"},"Presentation"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Configure Collection"),Object(l.b)("td",{parentName:"tr",align:null},"See ",Object(l.b)("a",{parentName:"td",href:"/slides/09-IBM-Cloud-Logging-with-LogDNA.pdf"},"Presentation"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Cluster level logging"),Object(l.b)("td",{parentName:"tr",align:null},"See ",Object(l.b)("a",{parentName:"td",href:"/slides/09-IBM-Cloud-Logging-with-LogDNA.pdf"},"Presentation"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Controlling log ingestion"),Object(l.b)("td",{parentName:"tr",align:null},"See ",Object(l.b)("a",{parentName:"td",href:"/slides/09-IBM-Cloud-Logging-with-LogDNA.pdf"},"Presentation"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Dashboards and Live View"),Object(l.b)("td",{parentName:"tr",align:null},"See ",Object(l.b)("a",{parentName:"td",href:"/slides/09-IBM-Cloud-Logging-with-LogDNA.pdf"},"Presentation"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Archiving Data"),Object(l.b)("td",{parentName:"tr",align:null},"See ",Object(l.b)("a",{parentName:"td",href:"/slides/09-IBM-Cloud-Logging-with-LogDNA.pdf"},"Presentation"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Alerts"),Object(l.b)("td",{parentName:"tr",align:null},"See ",Object(l.b)("a",{parentName:"td",href:"/slides/09-IBM-Cloud-Logging-with-LogDNA.pdf"},"Presentation"))))),Object(l.b)("h2",null,"Activities"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Activity"),Object(l.b)("th",{parentName:"tr",align:null},"Link"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Install LogDNA agent on IBM Kubernetes Service (IKS)"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"../logdna/activities/iks/"},"LogDNA with IKS"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Install LogDNA agent on RedHat OpenShift"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"https://cloud.ibm.com/docs/Log-Analysis-with-LogDNA?topic=Log-Analysis-with-LogDNA-config_agent_os_cluster"},"LogDNA with OpenShift"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Install LogDNA agent on minikube"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"../logdna/activities/minikube/"},"LogDNA with minikube"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Using LogDNA Dashboard"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"../logdna/activities/dashboards/"},"LogDNA Dashboards"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"Alerts with LogDNA"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"../logdna/activities/alerts/"},"Alerts with LogDNA"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"JSON logs with LogDNA"),Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("a",{parentName:"td",href:"../logdna/activities/logger/nodejs"},"JSON logs with LogDNA "))))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-logging-logdna-index-mdx-4487bf106513e4c5fe97.js.map