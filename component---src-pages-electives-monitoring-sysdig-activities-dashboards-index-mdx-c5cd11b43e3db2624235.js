(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),b=a("NmYn"),i=a.n(b),r=a("Wbzz"),c=a("Xrax"),s=a("k4MR"),o=a("TSYQ"),d=a.n(o),p=a("QH2O"),u=a.n(p),m=a("qKvR");var g=e=>{let{title:t,theme:a,tabs:n=[]}=e;return Object(m.b)("div",{className:d()(u.a.pageHeader,{[u.a.withTabs]:n.length,[u.a.darkMode]:"dark"===a})},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},t)))))},h=a("BAC9");var O=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=Object(r.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:b,branch:i}=a||n,c=l+"/edit/"+i+b+"/src/pages"+t;return l?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},A=a("FCXl"),j=a("dI71"),N=a("I8xM");var x=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map(e=>{const t=i()(e,{lower:!0,strict:!0}),l=t===n,b=new RegExp(n+"/?(#.*)?$"),c=a.replace(b,t);return Object(m.b)("li",{key:e,className:d()({[N.selectedItem]:l},N.listItem)},Object(m.b)(r.Link,{className:N.link,to:""+c},e))});return Object(m.b)("div",{className:N.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":e},Object(m.b)("ul",{className:N.list},l))))))},t}(l.a.Component),v=a("MjG9"),w=a("CzIb"),f=a("Asxa"),k=a("OIbQ"),y=a.n(k);var C=e=>{let{date:t}=e;const a=new Date(t);return t?Object(m.b)(f.c,{className:y.a.row},Object(m.b)(f.a,null,Object(m.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=e=>{let{pageContext:t,children:a,location:n,Title:l}=e;const{frontmatter:b={},relativePagePath:o,titleType:d}=t,{tabs:p,title:u,theme:h,description:j,keywords:N,date:f}=b,{interiorTheme:k}=Object(w.a)(),{site:{pathPrefix:y}}=Object(r.useStaticQuery)("2456312558"),T=y?n.pathname.replace(y,""):n.pathname,P=p?T.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",E=h||k;return Object(m.b)(s.a,{tabs:p,homepage:!1,theme:E,pageTitle:u,pageDescription:j,pageKeywords:N,titleType:d},Object(m.b)(g,{title:l?Object(m.b)(l,null):u,label:"label",tabs:p,theme:E}),p&&Object(m.b)(x,{title:u,slug:T,tabs:p,currentTab:P}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(O,{relativePagePath:o}),Object(m.b)(C,{date:f})),Object(m.b)(A.a,{pageContext:t,location:n,slug:T,tabs:p,currentTab:P}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XP2i:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return o}));var n=a("wx14"),l=a("Ff2n"),b=(a("q1tI"),a("7ljp")),i=a("013z");a("qKvR");const r={},c={_frontmatter:r},s=i.a;function o(e){let{components:t}=e,a=Object(l.a)(e,["components"]);return Object(b.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h3",null,"Prerequisite"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Configure the Sysdig Agent on a kubernetes cluster, you can use one of the labs in this bootcamp located ",Object(b.b)("a",{parentName:"li",href:"/monitoring/sysdig/#activities"},"here"))),Object(b.b)("h2",null,"Setup Environment"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Create two namespaces")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-shell"},"kubectl create ns staging\nkubectl create ns production\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Deploy web service to both namspaces")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-shell"},"kubectl -n staging create deployment my-web-app --image=docker.io/kennethreitz/httpbin\nkubectl -n staging create svc nodeport my-web-app --tcp=8080:80\nkubectl -n production create deployment my-web-app --image=docker.io/kennethreitz/httpbin\nkubectl -n production create svc nodeport my-web-app --tcp=8080:80\n")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Send load to each web service, run each command in a different terminal")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-shell"},"kubectl -n staging port-forward service/my-web-app 8080:8080\n")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-shell"},"kubectl -n production port-forward service/my-web-app 8081:8080\n")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-shell"},"while true; do sleep 1; curl http://localhost:8080/status/200 -si | head -1 ; done\n")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-shell"},"while true; do sleep 1; curl http://localhost:8081/status/200 -si | head -1 ; done\n")),Object(b.b)("h2",null,"Create Dashboard “Kubernetes Service Golden Signals”"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Select Dashboards -> Default Templates -> Kubernetes Service Golden Signals"),Object(b.b)("li",{parentName:"ul"},"On the top right menu select “Create Custom Dashboard”"),Object(b.b)("li",{parentName:"ul"},"Name the new dashboard ",Object(b.b)("inlineCode",{parentName:"li"},"Kubernetes Service Golden Signals - My Web Service")),Object(b.b)("li",{parentName:"ul"},"Click Create and Open"),Object(b.b)("li",{parentName:"ul"},"Click Edit Scope"),Object(b.b)("li",{parentName:"ul"},"Select ",Object(b.b)("inlineCode",{parentName:"li"},"kubernetes.namespace.name")," ",Object(b.b)("inlineCode",{parentName:"li"},"in")," ",Object(b.b)("inlineCode",{parentName:"li"},"production")),Object(b.b)("li",{parentName:"ul"},"Click Save"),Object(b.b)("li",{parentName:"ul"},"Click the star icon to add to favorites")),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1027px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRUlEQVQoz0VSTW8TMRD1f8iBVnBCoHKgAU7tgYiWAxKn8ru4UCUVUmgjQUIl+CcIEJxAkKppEoU2IbtNs7Z3/W2e7bZMVhvPeN68mbdD7jx5/nJvfzad/u4fHQ8Gw+FoCDsZTiaT0Wg0Ho+zLC8KulwW0Wg6n85mZ1lGVuqN5kHPGDvPF1m+EEJ6751zxuhk1lofzVqj8TPhhmtJjSK3Hm23Ou9xx8tSSqmUdEg3pqqqkiNWKqUMalmLCOc8xREEhNx8uLXXOcTJKA06J6RlDLUDlfPGO2ktN1rhyjn0gAcn7Swi5MHTF+3uB6QyRpWUoTWLOlpIAY6yDFQgRv9CCPiRvxRSIkLqWzvt7keAF0tWSaOMx4O2KRdLKgomWClDxDnAgMdoeOvYGlmtN1696R3P/adfxZc++zbQ/TMPWX6Mq899/vWIfz/RP/94oawQoRPGGPBJVHJ741mrc4jxTzPx90LPFjovNPTICj09VyFyoedLLTFJGDz0b6JBVrK63mgd9FCprDjKBZkcug7yJIHwThFku+gkw4GsrDd22+/AleXnjHN9CXOQpqAULWDSgrIkGBLQMz4YpTQIVlvb3G2/jczVFWEsbP+zXW8LDOWAv2y7dm+zud8FGJxxjUJ2WilzZalcEun6NghWW9tA23CwvIHcQlXBo0FYyETxF92wf1LigyXNAvON+4+bUbAQVQo64A55OEfXJoxWMgkNF7DgOEvubu+8jhsGZTAQcKiJPbXIlkIrHbQGCk1FUYwLSGwJ9v4fQp81H5awPMcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"golden-dashboard",title:"golden-dashboard",src:"/static/843a91126f1b874719510a07d00b6ffc/eb6bf/golden-signals.png",srcSet:["/static/843a91126f1b874719510a07d00b6ffc/7fc1e/golden-signals.png 288w","/static/843a91126f1b874719510a07d00b6ffc/a5df1/golden-signals.png 576w","/static/843a91126f1b874719510a07d00b6ffc/eb6bf/golden-signals.png 1027w"],sizes:"(max-width: 1027px) 100vw, 1027px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("h2",null,"Create Dashboard “Kubernetes Pod Overview”"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Select Dashboards -> Default Templates -> Kubernetes -> Kubernetes Pod Overview"),Object(b.b)("li",{parentName:"ul"},"On the top right menu select “Copy Dashboard”"),Object(b.b)("li",{parentName:"ul"},"Name the new dashboard ",Object(b.b)("inlineCode",{parentName:"li"},"Kubernetes Pod Overview - My Web Service")),Object(b.b)("li",{parentName:"ul"},"Click Edit Scope"),Object(b.b)("li",{parentName:"ul"},"Select ",Object(b.b)("inlineCode",{parentName:"li"},"kubernetes.namespace.name")," ",Object(b.b)("inlineCode",{parentName:"li"},"in")," ",Object(b.b)("inlineCode",{parentName:"li"},"staging")," ",Object(b.b)("inlineCode",{parentName:"li"},"production")),Object(b.b)("li",{parentName:"ul"},"Click Save"),Object(b.b)("li",{parentName:"ul"},"Click the star icon to add to favorites")),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"921px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.16666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsTAAALEwEAmpwYAAACk0lEQVQoz2VS22oUQRCdr9AXo4gP4gVBIypBH4yQiEF8zAf4OeJjEg2aaHTRoOCPCEYTsrdsNnub3ZnZmZ1L9/R91jMzWSFYFEV3V1f3OXXKurH84vXa5km7fXhYrTcatVqt0Wi0Wq1qNV90Oh3/rAW+b9vD/tCuNxvWhbuLbz5+JYQOHc/x/JHjeWNfa62UVEplWTb9zzKTRZnsT8bWpfkn6x++4CghlKYpAiLjPGWMC2mMoSnNM5QmcUzyNCWE4PUgCKwr95ff7uyiWKXxVBBFI40FJ7kLKkVuEaUTlAikZaoVkYJnZuQ61uV7S4CNYi3kVBsDsFwglh5Hceu412y14L2B3bPtwWjkT0LX9086Hevp6st3n7+huEDLhBTArI02BV2SJKE7Btw4SYLJxA+CMIq4ELjc6/Wsa49WNj/lsMEkLQysQLXsTb5nOX3OmJKydNd1Pc/rdrvW3B10O28YoZKLDDFlinFdulIanBPCw5h1Bl67C0HiKOEJlY47xs/Py4bp4jeAlVJmheF/qIXPjNF+MNnZ/fG+8v3n3v600G/kONbc7cdrW5WpMSAThiHn/J+YKIYksrBcc+yzDCfAggsAb12cX1zfqnCWOgWTMIxAsVQyK64yxtAemp4aFuUHuc7nri9sFEOCY4iUJgkGhVGqhAJodB3F6CEewJQgy1OKAQJyzKl1/ubDspgRrphkqCSpgmRMiTTvMMCik4pjm7LkNGWE9AD71srqZqGznsljZvMM2KB6ZqqLVBnH47F19cHS+nbFaIUZiOI4ihBiMOdclN2KZ4eFJVEYQfZZ8cKzVxvbfhQ3u/39WuNPtX5QP/pdre/Xm+3BsGOPjvt2q29Xj46bJ12sc8f5yP11UP0LynJdYZmTDDYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"pod-overview",title:"pod-overview",src:"/static/e1b3bfc6095b86803139b8e323a1243b/6f606/pod-overview.png",srcSet:["/static/e1b3bfc6095b86803139b8e323a1243b/7fc1e/pod-overview.png 288w","/static/e1b3bfc6095b86803139b8e323a1243b/a5df1/pod-overview.png 576w","/static/e1b3bfc6095b86803139b8e323a1243b/6f606/pod-overview.png 921w"],sizes:"(max-width: 921px) 100vw, 921px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(b.b)("h2",null,"Sharing Dashboard"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Select one of your Dashboards"),Object(b.b)("li",{parentName:"ul"},"Click the top right menu select “Dashboard Settings”"),Object(b.b)("li",{parentName:"ul"},"Enable Public Dashboard"),Object(b.b)("li",{parentName:"ul"},"You can share just with your team or as public url")),Object(b.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(b.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABYlAAAWJQFJUiTwAAABN0lEQVQoz41Sy0rDQBTNN7gRaTfdS6sg6EKp0IXgJ2l9rNr6AEPR/3OdRZNJ5pV5ZDxzp0JE0B4uyZnJnLn3npts7+z65uUjhMCF1BGt0toYA6a0AsA55xVj3vuuB0iy/ePZ7dM6BM/oMxeC8xhCSjysc1CQKEDbjygeji/mi7zzDkmwhcwpoPojgCgenV49vr6D0VYq53+kk9noZPbwvKZ1REqrYrvUsdLfO4oc0entUubBeDpf5iF0VLbnhJYQdW1rCIknYLk1bDiZ3i1jz1JKiIWEY8Jau0vxJF7l1LODic5GgO8kHky2ZbOqamz7qVhTsU1ZNj3Udd0nQggUT+Kjy/s455gZFuKfKDdlURQV7voprgkgcCf1lR0cns8Xb6HzsDF0AbfCTkwCh+BcMtwYC4N+T/ELV5lcTwi0e+oAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(b.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"share-dashboard",title:"share-dashboard",src:"/static/67979c51a4d2eba25e49d12cd4a7a973/3cbba/share-dashboard.png",srcSet:["/static/67979c51a4d2eba25e49d12cd4a7a973/7fc1e/share-dashboard.png 288w","/static/67979c51a4d2eba25e49d12cd4a7a973/a5df1/share-dashboard.png 576w","/static/67979c51a4d2eba25e49d12cd4a7a973/3cbba/share-dashboard.png 1152w","/static/67979c51a4d2eba25e49d12cd4a7a973/0b124/share-dashboard.png 1728w","/static/67979c51a4d2eba25e49d12cd4a7a973/585b2/share-dashboard.png 1890w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-electives-monitoring-sysdig-activities-dashboards-index-mdx-c5cd11b43e3db2624235.js.map