(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),c=a("NmYn"),r=a.n(c),l=a("Wbzz"),b=a("Xrax"),s=a("k4MR"),o=a("TSYQ"),p=a.n(o),m=a("QH2O"),d=a.n(m),g=a("qKvR");var u=e=>{let{title:t,theme:a,tabs:n=[]}=e;return Object(g.b)("div",{className:p()(d.a.pageHeader,{[d.a.withTabs]:n.length,[d.a.darkMode]:"dark"===a})},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:d.a.text},t)))))},A=a("BAC9");var h=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=Object(l.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:c,branch:r}=a||n,b=i+"/edit/"+r+c+"/src/pages"+t;return i?Object(g.b)("div",{className:"bx--row "+A.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:A.link,href:b},"Edit this page on GitHub"))):null},f=a("FCXl"),O=a("dI71"),N=a("I8xM");var j=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map(e=>{const t=r()(e,{lower:!0,strict:!0}),i=t===n,c=new RegExp(n+"/?(#.*)?$"),b=a.replace(c,t);return Object(g.b)("li",{key:e,className:p()({[N.selectedItem]:i},N.listItem)},Object(g.b)(l.Link,{className:N.link,to:""+b},e))});return Object(g.b)("div",{className:N.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":e},Object(g.b)("ul",{className:N.list},i))))))},t}(i.a.Component),w=a("MjG9"),y=a("CzIb"),x=a("Asxa"),k=a("OIbQ"),E=a.n(k);var C=e=>{let{date:t}=e;const a=new Date(t);return t?Object(g.b)(x.c,{className:E.a.row},Object(g.b)(x.a,null,Object(g.b)("div",{className:E.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=e=>{let{pageContext:t,children:a,location:n,Title:i}=e;const{frontmatter:c={},relativePagePath:o,titleType:p}=t,{tabs:m,title:d,theme:A,description:O,keywords:N,date:x}=c,{interiorTheme:k}=Object(y.a)(),{site:{pathPrefix:E}}=Object(l.useStaticQuery)("2456312558"),B=E?n.pathname.replace(E,""):n.pathname,v=m?B.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",I=A||k;return Object(g.b)(s.a,{tabs:m,homepage:!1,theme:I,pageTitle:d,pageDescription:O,pageKeywords:N,titleType:p},Object(g.b)(u,{title:i?Object(g.b)(i,null):d,label:"label",tabs:m,theme:I}),m&&Object(g.b)(j,{title:d,slug:B,tabs:m,currentTab:v}),Object(g.b)(w.a,{padded:!0},a,Object(g.b)(h,{relativePagePath:o}),Object(g.b)(C,{date:x})),Object(g.b)(f.a,{pageContext:t,location:n,slug:B,tabs:m,currentTab:v}),Object(g.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},Z6jl:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a("wx14"),i=a("Ff2n"),c=(a("q1tI"),a("7ljp")),r=a("013z");a("qKvR");const l={},b={_frontmatter:l},s=r.a;function o(e){let{components:t}=e,a=Object(i.a)(e,["components"]);return Object(c.b)(s,Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In this lab we are going to create a Container Image and store it in the ",Object(c.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/Registry?topic=Registry-registry_overview"},"IBM Cloud Container Registry")),Object(c.b)("h3",null,"Prerequisites"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"IBM Cloud Account")),Object(c.b)("h3",null,"Login into IBM Cloud"),Object(c.b)("h4",null,"Using the IBM Cloud Shell"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Login into ",Object(c.b)("a",{parentName:"li",href:"https://cloud.ibm.com/"},"IBM Cloud")),Object(c.b)("li",{parentName:"ol"},"Select correct account from top right drop down if your IBM id is associated with multiple accounts"),Object(c.b)("li",{parentName:"ol"},"Click the IBM Cloud Shell Icon on the top right corner of the IBM Cloud Console\n",Object(c.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAABYlAAAWJQFJUiTwAAABEklEQVQY02Pg5uaWlJQUEBDg4+MTFhbm4eEBcvn5+YFciDgnD6+OtLihsoKKmrq4uDg/vwA3Dx8XN6+goCBDenp6Tk5OVlZWRkYGhMzNycnMzAQxcnOBIlkJcauSwqamJ8SnZ8YnJOZkpdaU5ZQVZuRkZzH8+fPn169fv3//BjJ+g8HPn79//gKy/3z7/uP///8nDh92cHL29PEM9PN0d7IobJy7/PT/JYd+f/72h+EzKvj0+fP9Z18ev/jy7sPnh88/P3vz48rNezPnrVQM3igbvFk+YLVw+DWGyP+8ib/vPf3C8AUDfPr85fNnEANIfvr0+ceP7z9+/9949v+aU//Xnfm/8fTv9Se+bTr9/d2HLwAZa7EKhNn5tgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibm cloud shell icon",title:"ibm cloud shell icon",src:"/static/8a74cc7937e34a0efb24cd6c87b15435/3cbba/ibmcloud-shell-button.png",srcSet:["/static/8a74cc7937e34a0efb24cd6c87b15435/7fc1e/ibmcloud-shell-button.png 288w","/static/8a74cc7937e34a0efb24cd6c87b15435/a5df1/ibmcloud-shell-button.png 576w","/static/8a74cc7937e34a0efb24cd6c87b15435/3cbba/ibmcloud-shell-button.png 1152w","/static/8a74cc7937e34a0efb24cd6c87b15435/c95a1/ibmcloud-shell-button.png 1162w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(c.b)("li",{parentName:"ol"},"This opens a new browser window with command linux terminal prompt.\n",Object(c.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAABYlAAAWJQFJUiTwAAABGElEQVQY05WKy0rDQBiF5xGaSyeXxkUbM2kzSRaNNqmpVMG1CD6AwUUzBltDW6mPI0IlIgRyUawEn80xUnAj6MfPd84PBwxc3xseHvhjx3G94cgfjV3P7zsDpGMN9TRk1MXQuyYt9PQutuz+6dn50fEJUBSl3e50VFWSZY7nm01ITVMQRAih3FJYlpMkudFgIBQ4jmcYVhSllrIDoQgIub6ZzRfzxRWJgiC4rAnDSRzH0+lsebuMomi1uiOEhGFYe0KTboLgAtxnLw9l+fyabT7yzftbVVXFF2We50WRZ1lGn2+XZZmmaZI8UZIkWa8fAXaQ7ep4T7f3NdM2LctWVXX3F7QfIIQANkzcM7fGFPNv0CWo59v7J5/m/HDHk2s4ggAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibm cloud shell prompt",title:"ibm cloud shell prompt",src:"/static/e2d9336c3585267a1b94ea81e42bf4a5/3cbba/ibmcloud-shell-prompt.png",srcSet:["/static/e2d9336c3585267a1b94ea81e42bf4a5/7fc1e/ibmcloud-shell-prompt.png 288w","/static/e2d9336c3585267a1b94ea81e42bf4a5/a5df1/ibmcloud-shell-prompt.png 576w","/static/e2d9336c3585267a1b94ea81e42bf4a5/3cbba/ibmcloud-shell-prompt.png 1152w","/static/e2d9336c3585267a1b94ea81e42bf4a5/ca8b9/ibmcloud-shell-prompt.png 1320w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(c.b)("h3",null,"Create a new Container Registry namespace"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Ensure that you’re targeting the correct IBM Cloud Container Registry region. For example for Dallas region use ",Object(c.b)("strong",{parentName:"li"},"us-south"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"ibmcloud cr region-set us-south\n"))),Object(c.b)("li",{parentName:"ol"},"Choose a name for your first namespace, and create that namespace. Use this namespace for the rest of the Quick Start.Create a new Container Registry Namespace. This namespace is different from a Kubernetes/OpenShift namespace. The name needs to be all lowercase  and globaly unique within a region.",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"ibmcloud cr namespace-add <my_namespace>\n")),"Now set the environment ",Object(c.b)("inlineCode",{parentName:"li"},"NAMESPACE")," to be use for the rest of the lab",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"export NAMESPACE=<my_namespace>\n")))),Object(c.b)("h3",null,"Building and Pusing a Container Image"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Clone the folowwing git repository and change directory to ",Object(c.b)("inlineCode",{parentName:"p"},"1-containers")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"git clone --depth 1 https://github.com/csantanapr/think2020-nodejs.git my-app\ncd my-app/1-containers/\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Inspect the file ",Object(c.b)("inlineCode",{parentName:"p"},"Dockerfile")," it contains a multistage build, first layer builds the application, the second copies only the built files."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"cat Dockerfile\n")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-Dockerfile"},'FROM registry.access.redhat.com/ubi8/nodejs-12 as base\n\nFROM base as builder\n\nWORKDIR /opt/app-root/src\n\nCOPY package*.json ./\n\nRUN npm ci\n\nCOPY public public \nCOPY src src \n\nRUN npm run build\n\nFROM base\n\nWORKDIR /opt/app-root/src\n\nCOPY --from=builder  /opt/app-root/src/build build\n\nCOPY package*.json ./\n\nRUN npm ci --only=production\n\nCOPY --chown=1001:0 server server\nRUN chmod -R g=u server\n\nENV PORT=8080\n\nLABEL com.example.source="https://github.com/csantanapr/think2020-nodejs"\nLABEL com.example.version="1.0"\n\nARG ENV=production\nENV NODE_ENV $ENV\nENV NODE_VERSION $NODEJS_VERSION\nCMD npm run $NODE_ENV\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Build and push the image, if not already set replace ",Object(c.b)("inlineCode",{parentName:"p"},"$NAMESPACE")," with the namespace you added previously, replace ",Object(c.b)("inlineCode",{parentName:"p"},"us.icr.io")," if using a different region."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"ibmcloud cr build --tag us.icr.io/$NAMESPACE/my-app:1.0 ./\n")))),Object(c.b)("h3",null,"Explore the Container Registry on the IBM Cloud Console"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Explore the container image details using the IBM Cloud Console. Go to the Main Menu->Kubernetes->Registry you can use the tabs ",Object(c.b)("inlineCode",{parentName:"li"},"Namespaces"),", ",Object(c.b)("inlineCode",{parentName:"li"},"Repository"),", ",Object(c.b)("inlineCode",{parentName:"li"},"Images"),Object(c.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"24.65277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAxElEQVQY03WNXQ6CMBCEeyWv5QG8jBfxFMY3AzEtLe0WSRTtn7SU4IKa8OKXzWQ7O+kQzrngvBLA4aGaTrX2QjljVAhRVRVe67pmjKFKKZ1zwfun9e3d3x6eGGO6rjPWWR+N621Izn+x1s7pgHmPinsf0zTFw/G12aXtvieggVJGKQWQSkkAaBbQKcsSm7XW+MTmoihQm0YzDqezKtiVpJRiP8+nbRiGcSHnPK7IC7hgIOdhmtBK5Ofmdegf2BQW8IsY4xukhBfZf1KBTQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"cr namespace",title:"cr namespace",src:"/static/ddbda32c7d0809f1fab26d6081ed7ab3/3cbba/cr-namespaces.png",srcSet:["/static/ddbda32c7d0809f1fab26d6081ed7ab3/7fc1e/cr-namespaces.png 288w","/static/ddbda32c7d0809f1fab26d6081ed7ab3/a5df1/cr-namespaces.png 576w","/static/ddbda32c7d0809f1fab26d6081ed7ab3/3cbba/cr-namespaces.png 1152w","/static/ddbda32c7d0809f1fab26d6081ed7ab3/0b124/cr-namespaces.png 1728w","/static/ddbda32c7d0809f1fab26d6081ed7ab3/92bcf/cr-namespaces.png 2158w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA1ElEQVQY0z2Oa07DMBCEfRyOh9QTcQGOwRXaSH7bxUmEmofjtesHYRug82P8aXY9WqKUEkJorTkXjFEmtLguxs2fX5EJo6Q0xnDOcQEhhBAjTEuwYxhvG/HeT9MNHQBwBhDXDVYPfovruj6iAAjxUIC0t/D+EV5e8+ktkWEYpFSMCufc8Kd+fISCUtr3vZSy6zprLTLeeLmcpb6emZN2JKWWe6p+vi/LnFLCevTvQ/u+o9daMcS7WmulFGQEHNWayUG4g2+r//r9jMmz5VmUDuEo5/wDWjUXt7qxo9IAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"cr namespace",title:"cr namespace",src:"/static/ce312f137d7784641d8598fe2362ece2/3cbba/cr-repositories.png",srcSet:["/static/ce312f137d7784641d8598fe2362ece2/7fc1e/cr-repositories.png 288w","/static/ce312f137d7784641d8598fe2362ece2/a5df1/cr-repositories.png 576w","/static/ce312f137d7784641d8598fe2362ece2/3cbba/cr-repositories.png 1152w","/static/ce312f137d7784641d8598fe2362ece2/0b124/cr-repositories.png 1728w","/static/ce312f137d7784641d8598fe2362ece2/fa7b7/cr-repositories.png 2154w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"28.47222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA/klEQVQY012Py06EMBiFeTu3vpQr30gXxo0xbly4GESGFmjLbYAKBUopHQ+QmOhJ057/a/6bRwhJkoRSGu1CiJtSQlgZC3mREy/V+Rylaco5V0oNw9D16tKqRipPStn3PdC4C2aaJrxq0N1gRr2O84oMrTW4WdbrdXn6mG/u7O298YKvT7QtiiIMw9PphPK+78dxnGVCCM5YikE4Z0EQoDkhmCl6fnl/eGWPb9xjtM2zsqpwKpToug75MOWmqq6bPM/ruhYia9sWqGmaPBNDXxvde2Z21q7OYZ5NzrllWQ7zS/7Bg8B48nvbeZ5nrHQYa+3yV8YY3PjC5moXCMIfiKdN/GoasxsAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"cr namespace",title:"cr namespace",src:"/static/8881d771e6f9ac0e58b6ec9512a21dc2/3cbba/cr-images.png",srcSet:["/static/8881d771e6f9ac0e58b6ec9512a21dc2/7fc1e/cr-images.png 288w","/static/8881d771e6f9ac0e58b6ec9512a21dc2/a5df1/cr-images.png 576w","/static/8881d771e6f9ac0e58b6ec9512a21dc2/3cbba/cr-images.png 1152w","/static/8881d771e6f9ac0e58b6ec9512a21dc2/0b124/cr-images.png 1728w","/static/8881d771e6f9ac0e58b6ec9512a21dc2/fa7b7/cr-images.png 2154w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"23.61111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAABYlAAAWJQFJUiTwAAAA2UlEQVQY01WPO27DMAyGdbuuuUsO0a2nyA06FF0KdOlQBAhQoHEGvwU7SetH9KIkq7FK23GQfCQI4gd/SiRRFCVJgjUMw6kiqKRpik2eZ+X+uP9lTDkmLYC6hRjbWdtpM2BHsDkxxjifJjSA0eA6K6XQWk8DE6SDxvuzv6egZRZn1eGHcy6EBADc9r3d5ZTKESEEiuT5U71s/tbx4Ol7P4T3XzR43b6/BR95Qeu6RicayrLArKqqbdumaVAhiyf/8NgvV4Pn3F9eFkbVqj1pbuY/OueuR5n5xn/mLRbNkXcFXAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"cr namespace",title:"cr namespace",src:"/static/51f30813a2115119369215e613ab1b7e/3cbba/cr-settings.png",srcSet:["/static/51f30813a2115119369215e613ab1b7e/7fc1e/cr-settings.png 288w","/static/51f30813a2115119369215e613ab1b7e/a5df1/cr-settings.png 576w","/static/51f30813a2115119369215e613ab1b7e/3cbba/cr-settings.png 1152w","/static/51f30813a2115119369215e613ab1b7e/0b124/cr-settings.png 1728w","/static/51f30813a2115119369215e613ab1b7e/0f8cd/cr-settings.png 2140w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(c.b)("h3",null,"Extra Credit (Run Imge on Kubernetes)"),Object(c.b)("p",null,"If you have a Kubernetes Cluster you can run your application image"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Get the Access token for your Kubernetes cluster, command assumes your cluster name is ",Object(c.b)("inlineCode",{parentName:"p"},"mycluster")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"ibmcloud ks cluster config -c mycluster\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Run the following commands to create a deployment using the image we just build. If not already set replace ",Object(c.b)("inlineCode",{parentName:"p"},"$NAMESPACE")," with your IBM Container Registry Namespace we stored the image."),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"kubectl create deployment my-app --image us.icr.io/$NAMESPACE/my-app:1.0\nkubectl rollout status deployment/my-app\nkubectl port-forward deployment/my-app 8080:8080\n")),Object(c.b)("p",{parentName:"li"},"If the app is connected you should see the following output"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"Forwarding from 127.0.0.1:8080 -> 8080\nForwarding from [::1]:8080 -> 8080\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Open a new Session and run the following command"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"curl localhost:8080 -I\n")),Object(c.b)("p",{parentName:"li"},"You should see in the first line of output the following"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"HTTP/1.1 200 OK\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"To access the app using a browser use the IBM Cloud Shell Web Preview. Click the Web Preview Icon and select port ",Object(c.b)("inlineCode",{parentName:"p"},"8080")," from the drop down. The application will open in a new browser window.\n",Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"880px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"111.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAIAAABPIytRAAAACXBIWXMAABYlAAAWJQFJUiTwAAABzElEQVQ4y51UzW7aQBj0E+QAEhUC/IO9u/5j18Y22GuSRqqSUxwprfoCvXPorfeqalUOPEZfKVJOHBCBG2+Qsa1EkQKl9RysXe/MN/uNd6202+1ut2uapqqqhmH4vo/pYDBgjGmahlXXdes3tm3HcZLJfDQatVqtTqej9Pt9QqwwDB3H8Twvn80IIRCkaYqKIOm6Dt7QMBzXlZPkepaHUTQcDjVNV3a73Xa73Ww2jxXW6zXG+/1+Pp/DLQgCFEUt13F02/ks7K/9s2/ffzzc369WK+V3hcVi8XqwXC6LohiPx+8vL2WeSykvzi98EYyJea2+u7n7+OtniXLbb9Hr9dA/PG3GsHnLsvBEO4xSlzHdMNRBCYUfAQJL0yzLJDQmZYRSQjEklkWQXM1RvENAj4hdBIJzEQl+zr2EjzATQiAFLIEA2lExSLdFcXVTfIr4H979EnkfkmgynWZpiqUT4tJZwJkHnE+5H/LS9p+cAUqplDmaRlpW3e4zEEfNOSoGw6lA3+C0GBR0mCSTMub/FYNRd9nEmVEWBCHiaSRmLI7jKI4bisv74HrNxDSvrkRD55rX6FNVh6T+NzRxxsk6iNPi+oQfxAvhb+KTeAJcCvxkIydqHgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ibm cloud shell web preview select",title:"ibm cloud shell web preview select",src:"/static/91d3d9c5930fb93c73e298de56572354/8edf0/ibmcloud-shell-preview.png",srcSet:["/static/91d3d9c5930fb93c73e298de56572354/7fc1e/ibmcloud-shell-preview.png 288w","/static/91d3d9c5930fb93c73e298de56572354/a5df1/ibmcloud-shell-preview.png 576w","/static/91d3d9c5930fb93c73e298de56572354/8edf0/ibmcloud-shell-preview.png 880w"],sizes:"(max-width: 880px) 100vw, 880px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),"\n",Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"986px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.7638888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAABYlAAAWJQFJUiTwAAABs0lEQVQ4y5WSS2/UMBDH97Owj9hxnMTO2tk4juM8m+2qIFREOSBOSAghuCBxqHoooj1UKuJQIcSVI5+SSdouqkjRVvppNK+/PXFmolKTKANWZ5ZHMtWmaTtrK7BFWSeJNqbIbVnVbaI0QsT3WVHUe91Gxmrih7KHxYAXCBoKcCiTwd+MpH1Db5HHXBpBKYwSCCcOWQ5EA72zcG/YZrYgTyDvpgdKEwjGoUOfy6+dUe4VOyhEJMJMOThE9IFiL7bLJy/jF2/AcTDbTUyFgwI/65JX78uTb/Xn7/rtMd8cjc7/780C+lyelsdfm7Of+1e/69Mr1h3CiTuIb2+2ny7qLz/2Ln/Zj+d8/Xz48v+KMZRBTDiJUtY9y96d5B9O46PXftr0j0cFvqu/I56hcI4Z/MOZE0wfYaIaYtbTKYEQ8rOBcbFLRZLVMinCpVamEaoMuZKrXOpKqEIkdqWrOK0wlWNiX5pyDfrlKi/bA2NbEeepabSpwUI+Kzpb7UPbsGpjYy9cDsB4NN/41eOgPQyapwtPzBGDyef3jX39YFs8YYgwnswB7Mttfrf1dPkAAx6827vwByY5y7icnNB9AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"web app",title:"web app",src:"/static/b16277bd92e9e6d8670f17d6de46d28b/97270/web-app.png",srcSet:["/static/b16277bd92e9e6d8670f17d6de46d28b/7fc1e/web-app.png 288w","/static/b16277bd92e9e6d8670f17d6de46d28b/a5df1/web-app.png 576w","/static/b16277bd92e9e6d8670f17d6de46d28b/97270/web-app.png 986w"],sizes:"(max-width: 986px) 100vw, 986px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"To stop the application on the terminal with the ",Object(c.b)("inlineCode",{parentName:"p"},"kubectl port-forward")," command quit by pressing Ctrl+C in *",Object(c.b)("em",{parentName:"p"},"Session 1")))),Object(c.b)("h3",null,"Delete Deployment and Image"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Delete the app deployment",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"kubectl delete deployment my-app\n"))),Object(c.b)("li",{parentName:"ol"},"Delete the container image, if not already set replace ",Object(c.b)("inlineCode",{parentName:"li"},"$NAMESPACE")," with the registry namespace",Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre"},"ibmcloud cr image-rm us.icr.io/$NAMESPACE/my-app:1.0\n")))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-lectures-containers-activities-ibmcloud-cr-index-mdx-cbad507a8ac8f98fe1ca.js.map