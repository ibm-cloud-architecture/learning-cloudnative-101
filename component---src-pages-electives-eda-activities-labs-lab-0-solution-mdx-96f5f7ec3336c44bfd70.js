(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("NmYn"),o=a.n(r),b=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),i=a("TSYQ"),m=a.n(i),p=a("QH2O"),d=a.n(p),u=a("qKvR");var j=e=>{let{title:t,theme:a,tabs:n=[]}=e;return Object(u.b)("div",{className:m()(d.a.pageHeader,{[d.a.withTabs]:n.length,[d.a.darkMode]:"dark"===a})},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},t)))))},O=a("BAC9");var g=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=Object(b.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:r,branch:o}=a||n,s=l+"/edit/"+o+r+"/src/pages"+t;return l?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},f=a("FCXl"),N=a("dI71"),h=a("I8xM");var x=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map(e=>{const t=o()(e,{lower:!0,strict:!0}),l=t===n,r=new RegExp(n+"/?(#.*)?$"),s=a.replace(r,t);return Object(u.b)("li",{key:e,className:m()({[h.selectedItem]:l},h.listItem)},Object(u.b)(b.Link,{className:h.link,to:""+s},e))});return Object(u.b)("div",{className:h.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":e},Object(u.b)("ul",{className:h.list},l))))))},t}(l.a.Component),k=a("MjG9"),v=a("CzIb"),y=a("Asxa"),T=a("OIbQ"),w=a.n(T);var C=e=>{let{date:t}=e;const a=new Date(t);return t?Object(u.b)(y.c,{className:w.a.row},Object(u.b)(y.a,null,Object(u.b)("div",{className:w.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=e=>{let{pageContext:t,children:a,location:n,Title:l}=e;const{frontmatter:r={},relativePagePath:i,titleType:m}=t,{tabs:p,title:d,theme:O,description:N,keywords:h,date:y}=r,{interiorTheme:T}=Object(v.a)(),{site:{pathPrefix:w}}=Object(b.useStaticQuery)("2456312558"),P=w?n.pathname.replace(w,""):n.pathname,I=p?P.split("/").filter(Boolean).slice(-1)[0]||o()(p[0],{lower:!0}):"",S=O||T;return Object(u.b)(c.a,{tabs:p,homepage:!1,theme:S,pageTitle:d,pageDescription:N,pageKeywords:h,titleType:m},Object(u.b)(j,{title:l?Object(u.b)(l,null):d,label:"label",tabs:p,theme:S}),p&&Object(u.b)(x,{title:d,slug:P,tabs:p,currentTab:I}),Object(u.b)(k.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:i}),Object(u.b)(C,{date:y})),Object(u.b)(f.a,{pageContext:t,location:n,slug:P,tabs:p,currentTab:I}),Object(u.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},eYEy:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return i}));var n=a("wx14"),l=a("Ff2n"),r=(a("q1tI"),a("7ljp")),o=a("013z");a("qKvR");const b={},s={_frontmatter:b},c=o.a;function i(e){let{components:t}=e,a=Object(l.a)(e,["components"]);return Object(r.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Solution - NodeJS"),Object(r.b)("p",null,"Utilize ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ibm-messaging/event-streams-samples/blob/master/kafka-nodejs-console-sample/docs/Kubernetes_Service.md"},"https://github.com/ibm-messaging/event-streams-samples/blob/master/kafka-nodejs-console-sample/docs/Kubernetes_Service.md")," as needed for pointers."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Clone the git repository",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"git clone https://github.com/ibm-messaging/event-streams-samples.git\n"))),Object(r.b)("li",{parentName:"ol"},"Change directory",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"cd event-streams-samples/kafka-nodejs-console-sample\n"))),Object(r.b)("li",{parentName:"ol"},"Acquire the Service Credentials from the ",Object(r.b)("strong",{parentName:"li"},"Service Credentials")," tab of your IBM Event Streams on Cloud instance and save it to a file ",Object(r.b)("inlineCode",{parentName:"li"},"credentials.json")),Object(r.b)("li",{parentName:"ol"},"Create kubernetes secret ",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"kubectl create secret generic eventstreams-binding --from-file=binding=credentials.json\n"))),Object(r.b)("li",{parentName:"ol"},"Deploy the App",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"kubectl apply -f kafka-nodejs-console-sample.yaml\n"))),Object(r.b)("li",{parentName:"ol"},"Wait and get the logs",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"kubectl wait pod kafka-nodejs-console-sample --for=condition=Ready\nkubectl logs kafka-nodejs-console-sample --follow\n"))),Object(r.b)("li",{parentName:"ol"},"Delete the pod",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"kubectl delete pod kafka-nodejs-console-sample\n"))),Object(r.b)("li",{parentName:"ol"},"Delete the topic if you are using the the free plan (free plan only allows one topic/partition)")),Object(r.b)("h2",null,"Solution - Java"),Object(r.b)("p",null,"Utilize ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ibm-messaging/event-streams-samples/blob/master/kafka-java-console-sample/docs/Kubernetes_Service.md"},"https://github.com/ibm-messaging/event-streams-samples/blob/master/kafka-java-console-sample/docs/Kubernetes_Service.md")," as needed for pointers."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Clone the git repository",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"git clone https://github.com/ibm-messaging/event-streams-samples.git\n"))),Object(r.b)("li",{parentName:"ol"},"Change directory",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"cd event-streams-samples/kafka-java-console-sample\n"))),Object(r.b)("li",{parentName:"ol"},"Acquire the Service Credentials from the ",Object(r.b)("strong",{parentName:"li"},"Service Credentials")," tab of your IBM Event Streams on Cloud instance and save it to a file ",Object(r.b)("inlineCode",{parentName:"li"},"credentials.json")),Object(r.b)("li",{parentName:"ol"},"Create kubernetes secret ",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"kubectl create secret generic eventstreams-binding --from-file=binding=credentials.json\n"))),Object(r.b)("li",{parentName:"ol"},"Deploy the App",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"kubectl apply -f kafka-java-console-sample.yaml\n"))),Object(r.b)("li",{parentName:"ol"},"Wait and get the logs",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"kubectl wait pod kafka-java-console-sample --for=condition=Ready\nkubectl logs kafka-java-console-sample --follow\n"))),Object(r.b)("li",{parentName:"ol"},"Delete the pod",Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"kubectl delete pod kafka-java-console-sample\n"))),Object(r.b)("li",{parentName:"ol"},"Delete the topic if you are using the the free plan (free plan only allows one topic/partition)")))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-eda-activities-labs-lab-0-solution-mdx-96f5f7ec3336c44bfd70.js.map