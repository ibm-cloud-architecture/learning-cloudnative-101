(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),c=a("Wbzz"),l=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),d=a.n(b),A=a("QH2O"),p=a.n(A),m=a("qKvR");var u=e=>{let{title:t,theme:a,tabs:n=[]}=e;return Object(m.b)("div",{className:d()(p.a.pageHeader,{[p.a.withTabs]:n.length,[p.a.darkMode]:"dark"===a})},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},t)))))},g=a("BAC9");var h=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:i,branch:o}=a||n,l=r+"/edit/"+o+i+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),f=a("I8xM");var P=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map(e=>{const t=o()(e,{lower:!0,strict:!0}),r=t===n,i=new RegExp(n+"/?(#.*)?$"),l=a.replace(i,t);return Object(m.b)("li",{key:e,className:d()({[f.selectedItem]:r},f.listItem)},Object(m.b)(c.Link,{className:f.link,to:""+l},e))});return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":e},Object(m.b)("ul",{className:f.list},r))))))},t}(r.a.Component),N=a("MjG9"),I=a("CzIb"),v=a("Asxa"),w=a("OIbQ"),x=a.n(w);var y=e=>{let{date:t}=e;const a=new Date(t);return t?Object(m.b)(v.c,{className:x.a.row},Object(m.b)(v.a,null,Object(m.b)("div",{className:x.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=e=>{let{pageContext:t,children:a,location:n,Title:r}=e;const{frontmatter:i={},relativePagePath:b,titleType:d}=t,{tabs:A,title:p,theme:g,description:O,keywords:f,date:v}=i,{interiorTheme:w}=Object(I.a)(),{site:{pathPrefix:x}}=Object(c.useStaticQuery)("2456312558"),C=x?n.pathname.replace(x,""):n.pathname,T=A?C.split("/").filter(Boolean).slice(-1)[0]||o()(A[0],{lower:!0}):"",D=g||w;return Object(m.b)(s.a,{tabs:A,homepage:!1,theme:D,pageTitle:p,pageDescription:O,pageKeywords:f,titleType:d},Object(m.b)(u,{title:r?Object(m.b)(r,null):p,label:"label",tabs:A,theme:D}),A&&Object(m.b)(P,{title:p,slug:C,tabs:A,currentTab:T}),Object(m.b)(N.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:b}),Object(m.b)(y,{date:v})),Object(m.b)(j.a,{pageContext:t,location:n,slug:C,tabs:A,currentTab:T}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ig30:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a("wx14"),r=a("Ff2n"),i=(a("q1tI"),a("7ljp")),o=a("013z");a("qKvR");const c={},l=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)},s=l("CardGroup"),b=l("MiniCard"),d={_frontmatter:c},A=o.a;function p(e){let{components:t}=e,a=Object(r.a)(e,["components"]);return Object(i.b)(A,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"API Connect"),Object(i.b)("p",null,"API Connect is a way to quickly create API’s and microservices using Node.js and Java runtimes. API Connect allows you to easily create, run, manage and secure API’s in one offering.  "),Object(i.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(i.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/fh3VaXLzH5Y",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(i.b)("h2",null,"Architecture"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAdxILD//xAAXEAEBAQEAAAAAAAAAAAAAAAAAAUER/9oACAEBAAEFAtjqsf/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABYQAAMAAAAAAAAAAAAAAAAAABAgMf/aAAgBAQAGPwIRP//EABkQAAIDAQAAAAAAAAAAAAAAAAABEDFxUf/aAAgBAQABPyF9GmaRqP8A/9oADAMBAAIAAwAAABCTz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EAB0QAQADAAEFAAAAAAAAAAAAAAEAESExQVFxgZH/2gAIAQEAAT8QAGzxu4ygNJvVv1C5nxgsdSqqotCdiBnmf//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"api connect components",title:"api connect components",src:"/static/c3d2babf42907f5d86eb3bdb41631d37/2e753/api-connect-components.jpg",srcSet:["/static/c3d2babf42907f5d86eb3bdb41631d37/69549/api-connect-components.jpg 288w","/static/c3d2babf42907f5d86eb3bdb41631d37/473e3/api-connect-components.jpg 576w","/static/c3d2babf42907f5d86eb3bdb41631d37/2e753/api-connect-components.jpg 1152w","/static/c3d2babf42907f5d86eb3bdb41631d37/385b3/api-connect-components.jpg 1574w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("h2",null,"Components"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Cloud Manager")),Object(i.b)("p",null,"The Cloud Manager is used for on-premise API Connect instances.  The Cloud Administrator will use the Cloud Manager UI for the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Define the Cluster of Management Servers, Gateways, and Containers."),Object(i.b)("li",{parentName:"ul"},"Manage the topology of the servers and containers."),Object(i.b)("li",{parentName:"ul"},"Manage the servers in the cloud."),Object(i.b)("li",{parentName:"ul"},"Monitor Cloud Health."),Object(i.b)("li",{parentName:"ul"},"Manager User Access Controls."),Object(i.b)("li",{parentName:"ul"},"Adding user registries for authenticating users and securing APIs, and configure the secure transmission of data.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The Developer Toolkit")),Object(i.b)("p",null,"The developer toolkit provides the tools for modeling, developing, and testing APIs and LoopBack® applications. The developer toolkit includes a command line interface (CLI). It also incorporates LoopBack, an open source Node.js framework."),Object(i.b)("p",null,"API developers use the API management functions in the API Manager or the CLI to create draft API definitions for REST and SOAP APIs, or for OAuth provider endpoints that are used for OAuth 2.0 authentication. The API definitions can be configured to add the API to a Product, add a policy assembly flow (to manipulate requests/responses), and to define security options and other settings. APIs can then be tested locally prior to publishing, to ensure they are defined and implemented correctly."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"API Manager")),Object(i.b)("p",null,"The API Manager provides a user interface that facilitates promotion and tracking of APIs that are packaged within Products and Plans. API providers can move the Products through their lifecycle, and manage the availability and visibility of APIs and Plans."),Object(i.b)("p",null,"Catalogs and Spaces are created in the API Manager to act as staging targets through which APIs, Plans, and Products are published to consumer organizations. API providers can stage their Products to Catalogs or Spaces, and then publish them to make the APIs in those Products visible on a Developer Portal for external discovery."),Object(i.b)("p",null,"To control access to the available API management functions, users in the provider organization can be set up in the API Manager UI with assigned roles and permissions. API providers can also use the UI to manage the consumer organizations that sign up to access their APIs and Plans. Developer communities can additionally be created as a way of grouping together a collection of consumer organizations to whom a particular set of Products and Plans can be made available."),Object(i.b)("p",null,"The API Manager UI also includes functions to manage the security of the API environment, and provides access to analytics information about API invocation metrics within customizable dashboard views."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"API Gateways")),Object(i.b)("p",null,"Gateways enforce runtime policies to secure and control API traffic, provide the endpoints that expose APIs to the calling applications, and provide assembly functions that enable APIs to integrate with various endpoints. They also log and report all API interactions to the API Connect analytics engine, for real-time and historical analytics and reporting"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Developer Portal")),Object(i.b)("p",null,"The Developer Portal provides a customizable self-service web-based portal to application developers to explore, discover, and subscribe to APIs."),Object(i.b)("p",null,"When API providers publish APIs in the API Manager, those APIs are exposed in the Developer Portal for discovery and usage by application developers in consumer organizations. Application developers can access the Developer Portal UI to register their applications, discover APIs, use the required APIs in their applications (with access approval where necessary), and subsequently deploy those applications."),Object(i.b)("h2",null,"API Use Cases"),Object(i.b)("p",null,"Read about the use cases for APIs which cover Mobile, Social, Data, IoT, and more: ",Object(i.b)("a",{parentName:"p",href:"https://developer.ibm.com/apiconnect/2017/07/20/api-economy-4-business-drivers-7-use-case-categories-series-overview/"},"Use Case Scenarios")),Object(i.b)("h2",null,"Presentations"),Object(i.b)(s,{mdxType:"CardGroup"},Object(i.b)(b,{title:"API Connect Overview 101 PDF",href:"/slides/11-101-API-Connect.pdf",mdxType:"MiniCard"}),Object(i.b)(b,{title:"API Connect Product Details PDF",href:"/slides/11-201-API-Connect.pdf",mdxType:"MiniCard"}),Object(i.b)(b,{title:"API Connect Deep Dive PDF",href:"/slides/11-301-API-Connect.pdf",mdxType:"MiniCard"}),Object(i.b)(b,{title:"API Connect and Istio",href:"/slides/11-401-API-Connect-Istio.pdf",mdxType:"MiniCard"})),Object(i.b)("h2",null,"Documentation"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Topics"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"},"Link"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"API Management"),Object(i.b)("td",{parentName:"tr",align:null},"Articles on developer.ibm.com on API Management"),Object(i.b)("td",{parentName:"tr",align:"left"},"See ",Object(i.b)("a",{parentName:"td",href:"https://developer.ibm.com/articles/category/api/page/2/?fa=date%3ADESC&fb"},"Article"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Installation"),Object(i.b)("td",{parentName:"tr",align:null},"Installing API Connect"),Object(i.b)("td",{parentName:"tr",align:"left"},"See ",Object(i.b)("a",{parentName:"td",href:"https://www.ibm.com/support/knowledgecenter/SSMNED_5.0.0/com.ibm.apic.install.doc/overview_installing_apimgmt.html"},"Docs"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Working with the API Connect Toolkit"),Object(i.b)("td",{parentName:"tr",align:null},"Covers the differences between traditional messaging architectures and event-driven architectures."),Object(i.b)("td",{parentName:"tr",align:"left"},"See ",Object(i.b)("a",{parentName:"td",href:"https://www.ibm.com/support/knowledgecenter/SSMNED_5.0.0/com.ibm.apic.toolkit.doc/capim_cli_working_with.html"},"Docs"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Working with Catalogs"),Object(i.b)("td",{parentName:"tr",align:null},"Details about working with Catalogs in API Connect."),Object(i.b)("td",{parentName:"tr",align:"left"},"See ",Object(i.b)("a",{parentName:"td",href:"https://www.ibm.com/support/knowledgecenter/SSMNED_5.0.0/com.ibm.apic.apionprem.doc/conref_working_with_env.html"},"Docs"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Creating APIs"),Object(i.b)("td",{parentName:"tr",align:null},"Covers a deep-dive of Apache Kafka and IBM Event Streams, IBM’s Enterprise-grade event-streaming platform."),Object(i.b)("td",{parentName:"tr",align:"left"},"See ",Object(i.b)("a",{parentName:"td",href:"https://www.ibm.com/support/knowledgecenter/SSMNED_5.0.0/com.ibm.apic.apionprem.doc/task_apionprem_creating_apis_apimgr.html"},"Docs"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Managing APIs"),Object(i.b)("td",{parentName:"tr",align:null},"Covers managing API’s in API Connect."),Object(i.b)("td",{parentName:"tr",align:"left"},"See ",Object(i.b)("a",{parentName:"td",href:"https://www.ibm.com/support/knowledgecenter/SSMNED_5.0.0/com.ibm.apic.apionprem.doc/APIonPrem_gettingstarted.html"},"Docs"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"API Analytics"),Object(i.b)("td",{parentName:"tr",align:null},"Covers getting the analytics for your API’s."),Object(i.b)("td",{parentName:"tr",align:"left"},"See ",Object(i.b)("a",{parentName:"td",href:"https://www.ibm.com/support/knowledgecenter/SSMNED_5.0.0/com.ibm.apic.apionprem.doc/capim_analytics_apianalytics.html"},"Docs"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"API Testing and Monitoring"),Object(i.b)("td",{parentName:"tr",align:null},"Setting up testing and monitoring for API’s"),Object(i.b)("td",{parentName:"tr",align:"left"},"See ",Object(i.b)("a",{parentName:"td",href:"https://ibm-apiconnect.github.io/test-and-monitor/"},"Docs"))))),Object(i.b)("h2",null,"Activities"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Topics"),Object(i.b)("th",{parentName:"tr",align:null},"Description"),Object(i.b)("th",{parentName:"tr",align:"left"},"Link"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Accessing API Connect"),Object(i.b)("td",{parentName:"tr",align:null},"Creating and accessing an API Connect Instance."),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"./activities/accessAPI"},"Access API Connect"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Creating APIs"),Object(i.b)("td",{parentName:"tr",align:null},"Creating REST APIs using API Connect."),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"./activities/creatingAPIs"},"Creating APIs"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Importing an API"),Object(i.b)("td",{parentName:"tr",align:null},"Import an existing OpenAPI 2.0 definition."),Object(i.b)("td",{parentName:"tr",align:"left"},Object(i.b)("a",{parentName:"td",href:"./activities/importingAPIs"},"Importing APIs"))))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-api-connect-index-mdx-f7e9b86ee6355f7ecd67.js.map