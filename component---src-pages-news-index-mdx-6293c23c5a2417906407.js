(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),A=a.n(r),n=a("NmYn"),b=a.n(n),l=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),d=a("TSYQ"),o=a.n(d),s=a("QH2O"),m=a.n(s),p=a("qKvR");var u=e=>{let{title:t,theme:a,tabs:r=[]}=e;return Object(p.b)("div",{className:o()(m.a.pageHeader,{[m.a.withTabs]:r.length,[m.a.darkMode]:"dark"===a})},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},t)))))},j=a("BAC9");var g=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=Object(l.useStaticQuery)("1364590287"),{baseUrl:A,subDirectory:n,branch:b}=a||r,i=A+"/edit/"+b+n+"/src/pages"+t;return A?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},O=a("FCXl"),N=a("dI71"),x=a("I8xM");var h=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],A=t.map(e=>{const t=b()(e,{lower:!0,strict:!0}),A=t===r,n=new RegExp(r+"/?(#.*)?$"),i=a.replace(n,t);return Object(p.b)("li",{key:e,className:o()({[x.selectedItem]:A},x.listItem)},Object(p.b)(l.Link,{className:x.link,to:""+i},e))});return Object(p.b)("div",{className:x.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":e},Object(p.b)("ul",{className:x.list},A))))))},t}(A.a.Component),f=a("MjG9"),v=a("CzIb"),E=a("Asxa"),w=a("OIbQ"),B=a.n(w);var T=e=>{let{date:t}=e;const a=new Date(t);return t?Object(p.b)(E.c,{className:B.a.row},Object(p.b)(E.a,null,Object(p.b)("div",{className:B.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=e=>{let{pageContext:t,children:a,location:r,Title:A}=e;const{frontmatter:n={},relativePagePath:d,titleType:o}=t,{tabs:s,title:m,theme:j,description:N,keywords:x,date:E}=n,{interiorTheme:w}=Object(v.a)(),{site:{pathPrefix:B}}=Object(l.useStaticQuery)("2456312558"),y=B?r.pathname.replace(B,""):r.pathname,Q=s?y.split("/").filter(Boolean).slice(-1)[0]||b()(s[0],{lower:!0}):"",D=j||w;return Object(p.b)(c.a,{tabs:s,homepage:!1,theme:D,pageTitle:m,pageDescription:N,pageKeywords:x,titleType:o},Object(p.b)(u,{title:A?Object(p.b)(A,null):m,label:"label",tabs:s,theme:D}),s&&Object(p.b)(h,{title:m,slug:y,tabs:s,currentTab:Q}),Object(p.b)(f.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:d}),Object(p.b)(T,{date:E})),Object(p.b)(O.a,{pageContext:t,location:r,slug:y,tabs:s,currentTab:Q}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},tpJo:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return s}));var r=a("wx14"),A=a("Ff2n"),n=(a("q1tI"),a("7ljp")),b=a("013z");a("qKvR");const l={},i=(c="PageDescription",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)});var c;const d={_frontmatter:l},o=b.a;function s(e){let{components:t}=e,a=Object(A.a)(e,["components"]);return Object(n.b)(o,Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(i,{mdxType:"PageDescription"},Object(n.b)("p",null,"The latest updates to site are below.")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"150px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"74%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEAf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGCZ0swA//EABkQAAIDAQAAAAAAAAAAAAAAAAACARESBP/aAAgBAQABBQKeZlSjJuSzR//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABcQAAMBAAAAAAAAAAAAAAAAAAISIDH/2gAIAQEABj8Ccsr/xAAbEAADAAIDAAAAAAAAAAAAAAAAAREQITFBYf/aAAgBAQABPyHQheXSSDc3eXWuh4v/2gAMAwEAAgADAAAAEDfv/8QAFhEAAwAAAAAAAAAAAAAAAAAAARBh/9oACAEDAQE/EDF//8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8QJ//EABoQAQEBAQADAAAAAAAAAAAAAAERAEEhMXH/2gAIAQEAAT8QL1iTyGl56yioAcNTmWEgkOvmBVCXmg3/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"bullhorn thumbnail",title:"bullhorn thumbnail",src:"/static/144809790db3ac9749be4674d8408544/2d0a6/bullhorn-thumbnail.jpg",srcSet:["/static/144809790db3ac9749be4674d8408544/2d0a6/bullhorn-thumbnail.jpg 150w"],sizes:"(max-width: 150px) 100vw, 150px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:"left"},"Latest Updates"),Object(n.b)("th",{parentName:"tr",align:"left"},"Date"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"Update Kubernetes Basic Slides ",Object(n.b)("a",{parentName:"td",href:"../lectures/kube-overview"},"Kubernetes Overview")),Object(n.b)("td",{parentName:"tr",align:"left"},"2020-08-18")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"Added Elective ",Object(n.b)("a",{parentName:"td",href:"../electives/dist-trace"},"Distributed Tracing")),Object(n.b)("td",{parentName:"tr",align:"left"},"2020-08-03")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"Added Project ",Object(n.b)("a",{parentName:"td",href:"../projects/project-cn-starter"},"Cloud Native Starter")),Object(n.b)("td",{parentName:"tr",align:"left"},"2020-06-12")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"Added Elective ",Object(n.b)("a",{parentName:"td",href:"../electives/data-services"},"Data Services")),Object(n.b)("td",{parentName:"tr",align:"left"},"2020-06-11")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"Added Elective ",Object(n.b)("a",{parentName:"td",href:"../electives/logging"},"Logging with LogDNA")),Object(n.b)("td",{parentName:"tr",align:"left"},"2020-06-08")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"Added ",Object(n.b)("a",{parentName:"td",href:"../course-overview/#test-your-knowledge"},"Cloud Native BootCamp Badge")," Quizz"),Object(n.b)("td",{parentName:"tr",align:"left"},"2020-06-05")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"Added Elective ",Object(n.b)("a",{parentName:"td",href:"../electives/monitoring"},"Monitoring with Sysdig")),Object(n.b)("td",{parentName:"tr",align:"left"},"2020-06-01")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"Added Elective ",Object(n.b)("a",{parentName:"td",href:"../electives/api-connect"},"API Management with API Connect")),Object(n.b)("td",{parentName:"tr",align:"left"},"2020-06-01")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"Update ",Object(n.b)("a",{parentName:"td",href:"../projects/continuous-deployment/activities"}," ArgoCD Lab")," to use Operator"),Object(n.b)("td",{parentName:"tr",align:"left"},"2020-05-14")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"Added ",Object(n.b)("a",{parentName:"td",href:"../prerequisites/#cloud-native-vm"},"CloudNative VM")),Object(n.b)("td",{parentName:"tr",align:"left"},"2020-05-06")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:"left"},"Added Elective ",Object(n.b)("a",{parentName:"td",href:"../electives/eda"},"Event Driven Architecture - Kafka")),Object(n.b)("td",{parentName:"tr",align:"left"},"2020-04-29")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-news-index-mdx-6293c23c5a2417906407.js.map