(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"013z":function(e,a,t){"use strict";var i=t("q1tI"),l=t.n(i),n=t("NmYn"),c=t.n(n),b=t("Wbzz"),s=t("Xrax"),r=t("k4MR"),o=t("TSYQ"),d=t.n(o),p=t("QH2O"),m=t.n(p),g=t("qKvR");var A=e=>{let{title:a,theme:t,tabs:i=[]}=e;return Object(g.b)("div",{className:d()(m.a.pageHeader,{[m.a.withTabs]:i.length,[m.a.darkMode]:"dark"===t})},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},a)))))},u=t("BAC9");var f=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:i}}}=Object(b.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:n,branch:c}=t||i,s=l+"/edit/"+c+n+"/src/pages"+a;return l?Object(g.b)("div",{className:"bx--row "+u.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:u.link,href:s},"Edit this page on GitHub"))):null},h=t("FCXl"),O=t("dI71"),x=t("I8xM");var w=function(e){function a(){return e.apply(this,arguments)||this}return Object(O.a)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,i=t.split("/").filter(Boolean).slice(-1)[0],l=a.map(e=>{const a=c()(e,{lower:!0,strict:!0}),l=a===i,n=new RegExp(i+"/?(#.*)?$"),s=t.replace(n,a);return Object(g.b)("li",{key:e,className:d()({[x.selectedItem]:l},x.listItem)},Object(g.b)(b.Link,{className:x.link,to:""+s},e))});return Object(g.b)("div",{className:x.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",{"aria-label":e},Object(g.b)("ul",{className:x.list},l))))))},a}(l.a.Component),N=t("MjG9"),j=t("CzIb"),v=t("Asxa"),k=t("OIbQ"),y=t.n(k);var B=e=>{let{date:a}=e;const t=new Date(a);return a?Object(g.b)(v.c,{className:y.a.row},Object(g.b)(v.a,null,Object(g.b)("div",{className:y.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};a.a=e=>{let{pageContext:a,children:t,location:i,Title:l}=e;const{frontmatter:n={},relativePagePath:o,titleType:d}=a,{tabs:p,title:m,theme:u,description:O,keywords:x,date:v}=n,{interiorTheme:k}=Object(j.a)(),{site:{pathPrefix:y}}=Object(b.useStaticQuery)("2456312558"),C=y?i.pathname.replace(y,""):i.pathname,T=p?C.split("/").filter(Boolean).slice(-1)[0]||c()(p[0],{lower:!0}):"",E=u||k;return Object(g.b)(r.a,{tabs:p,homepage:!1,theme:E,pageTitle:m,pageDescription:O,pageKeywords:x,titleType:d},Object(g.b)(A,{title:l?Object(g.b)(l,null):m,label:"label",tabs:p,theme:E}),p&&Object(g.b)(w,{title:m,slug:C,tabs:p,currentTab:T}),Object(g.b)(N.a,{padded:!0},t,Object(g.b)(f,{relativePagePath:o}),Object(g.b)(B,{date:v})),Object(g.b)(h.a,{pageContext:a,location:i,slug:C,tabs:p,currentTab:T}),Object(g.b)(s.a,null))}},BAC9:function(e,a,t){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,a,t){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,a,t){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},OXXZ:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return b})),t.d(a,"default",(function(){return o}));var i=t("wx14"),l=t("Ff2n"),n=(t("q1tI"),t("7ljp")),c=t("013z");t("qKvR");const b={},s={_frontmatter:b},r=c.a;function o(e){let{components:a}=e,t=Object(l.a)(e,["components"]);return Object(n.b)(r,Object(i.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h3",null,"Prerequisite"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Configure Dashboards following the lab ",Object(n.b)("a",{parentName:"li",href:"/electives/monitoring/sysdig/#activities"},"here"))),Object(n.b)("h2",null,"Create Email Notification Channel"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open Sysdig"),Object(n.b)("li",{parentName:"ul"},"Go to Settings"),Object(n.b)("li",{parentName:"ul"},"Select “Notifications Channel”"),Object(n.b)("li",{parentName:"ul"},"Click “Add Notification Channel”"),Object(n.b)("li",{parentName:"ul"},"Select Email"),Object(n.b)("li",{parentName:"ul"},"Enter email address, this can be a functional id"),Object(n.b)("li",{parentName:"ul"},"Enter a Channel name this will be use when setting up channels ",Object(n.b)("inlineCode",{parentName:"li"},"production-web-service-sev-high-email"))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1116px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABb0lEQVQoz3WRz0rDQBDG9y1EKUURT4JSpF4sWqgoPppeBK0Wq7VU1L6IT+DViwqlaW2bbLLZP5ls1knWVGnrMCxs9vvNfDMh65Xj03rT82jfGYxGY5vj8cTG9Mt8ooYsb+3XW4/GmCiKTB5SSsZYGIbm/0A9KZSq5zcdvHAhYq0hToNSaskgCNBEsii01mS1fHjWuB+6k7f3j0/HGbiuyxgyQgiEY4ipR6nvCymxbppZAzyxEynu1C5uH7ImDABs1ZBzlU0RgvIkhwjwmj4Y89M2SVJ4Zfvg8i6dGevZYfCNcy6VMokZgxhKlkCMsA1soJTCE5Vkbffout2dh9GqDLkLwmGUM+ajMZbO4/u+63k4F8rI0uaetQ2Qw8bgotPnCL6isBe4PGDIBNkucgfpFKRQrtXbz387Z4XAGpM65pGKAaxhy0xlZKNy0uh0Z+Dc/4Lfmy0th4ul6lXraQZGhSXzDf+mNkmooxev1+y/fgN0zlwZP/bIWQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"email-channel",title:"email-channel",src:"/static/e2a97054491d432216ba9be81cbe326a/fe32f/email-channel.png",srcSet:["/static/e2a97054491d432216ba9be81cbe326a/7fc1e/email-channel.png 288w","/static/e2a97054491d432216ba9be81cbe326a/a5df1/email-channel.png 576w","/static/e2a97054491d432216ba9be81cbe326a/fe32f/email-channel.png 1116w"],sizes:"(max-width: 1116px) 100vw, 1116px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h2",null,"Create Slack Notification Channel"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open Sysdig"),Object(n.b)("li",{parentName:"ul"},"Go to Settings"),Object(n.b)("li",{parentName:"ul"},"Select “Notifications Channel”"),Object(n.b)("li",{parentName:"ul"},"Click “Add Notification Channel”"),Object(n.b)("li",{parentName:"ul"},"Select Slack"),Object(n.b)("li",{parentName:"ul"},"Enter Slack Incoming Webook URL. You can create a free slack workspaces for testing purposes for this lab. Once you have a Slack workspace you can create a Slack App with Incomig webhook ",Object(n.b)("a",{parentName:"li",href:"https://api.slack.com/messaging/webhooks"},"here")),Object(n.b)("li",{parentName:"ul"},"Enter a Channel name this will be use when setting up channels ",Object(n.b)("inlineCode",{parentName:"li"},"production-web-service-sev-high-slack"),". This is not the Slack Channel, is a “Sysdig” Alert Channel.")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1103px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"55.90277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXElEQVQoz3WSO0/DMBDH/U0AqdCFBalM7QCoLO3C92NlBSFKy7PiIfEJ2Jg6UB6hVRzbl/gZc3FJRUn5y7KT8/3ufGeT9Z3u6eXQe2+szUv5ReX/iKw22mcBlkr9uDoXx/F0OhWcG+eMNX6ZtNak3uwcn18ZozlAppRCmzGccxViySxLGLXWGvTQGrdVKTQW8NFJ72Py9TIavUbRJ6UUIAVAV4QxL2ecsgTDAYAAwIULgQMDkY1mp3d9h35Kqlm1OEMJc6OYTC32w9pqI8hao92/fcCf+bYLsJTS5z4yaSRFbuz8vOHwCqtAT1JvdQeLMIYUQsSUqjSbmOyN05SLhDE8OdpxxspwLjKvbO32b+6rMDp66yINYx4jzAI8a6QOKuBaq9OvZHZBxX3kTlrjsNtFvwv9fgVkc+/gYvj4By4/llwvGl35lEhte79a8xImYMXwOVj9lIwP35+/AVNVY45mAH7TAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"slack-channel",title:"slack-channel",src:"/static/b9dda8f04f6e68ae2c582db7022358ba/b7f4d/slack-channel.png",srcSet:["/static/b9dda8f04f6e68ae2c582db7022358ba/7fc1e/slack-channel.png 288w","/static/b9dda8f04f6e68ae2c582db7022358ba/a5df1/slack-channel.png 576w","/static/b9dda8f04f6e68ae2c582db7022358ba/b7f4d/slack-channel.png 1103w"],sizes:"(max-width: 1103px) 100vw, 1103px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h2",null,"Create Alert for HTTP errors"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open Sysdig"),Object(n.b)("li",{parentName:"ul"},"Select Alerts")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"923px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA+UlEQVQY042QS0pDMRSGsxWpE2eCUEc6UFCEghvoCqxQHFnrrNJVuB9xFyLqNTfvm9d933iaTO7AQT9Ofv4k/8mBoMPzm8V6452vqrrvu1iRDmi7tgXTNI0otDaOc2GtK8vKeZAKHZxczpdPRCtjLM6J0rowJqrVxgqljLUZxjll39kvYYwLATEupXEOTaZX84f1B8GU8QznXz8QIUxKKqQsYJgHhXMqRBZ7wGNCwUOhyen14nETQhiGIezBOLZrvlul5jCMEom0SWtn01VU+Bt0dDa7X73sP3kMOr64XT5v06v/0nvfO6fLsqxrZa32vu26T85f397/AG3Pe7apbpMWAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"find-alert-http-errors",title:"find-alert-http-errors",src:"/static/6d69966c6ffd68435995e3dc4fa7922e/036ce/find-alert-http-errors.png",srcSet:["/static/6d69966c6ffd68435995e3dc4fa7922e/7fc1e/find-alert-http-errors.png 288w","/static/6d69966c6ffd68435995e3dc4fa7922e/a5df1/find-alert-http-errors.png 576w","/static/6d69966c6ffd68435995e3dc4fa7922e/036ce/find-alert-http-errors.png 923w"],sizes:"(max-width: 923px) 100vw, 923px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Click Add Alert"),Object(n.b)("li",{parentName:"ul"},"Select Metric"),Object(n.b)("li",{parentName:"ul"},"Name it ",Object(n.b)("inlineCode",{parentName:"li"},"[Production][My Web Service] HTTP errors")),Object(n.b)("li",{parentName:"ul"},"Change to High"),Object(n.b)("li",{parentName:"ul"},"Select metric ",Object(n.b)("inlineCode",{parentName:"li"},"Average")," of ",Object(n.b)("inlineCode",{parentName:"li"},"net.http.error.count")),Object(n.b)("li",{parentName:"ul"},"Edit Scope",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"kubernetes.namespace.name")," in ",Object(n.b)("inlineCode",{parentName:"li"},"production")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"kubernetes.service.name")," in ",Object(n.b)("inlineCode",{parentName:"li"},"my-web-app")))),Object(n.b)("li",{parentName:"ul"},"Edit Trigger ",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"To make it trigger faster for demo purposes set to metric ",Object(n.b)("inlineCode",{parentName:"li"},">")," ",Object(n.b)("inlineCode",{parentName:"li"},"1")," for ",Object(n.b)("inlineCode",{parentName:"li"},"1 minute")))),Object(n.b)("li",{parentName:"ul"},"Enable Notification Channels",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Enable Email ",Object(n.b)("inlineCode",{parentName:"li"},"production-web-service-sev-high-email")),Object(n.b)("li",{parentName:"ul"},"Enable Slack ",Object(n.b)("inlineCode",{parentName:"li"},"production-web-service-sev-high-slack")))),Object(n.b)("li",{parentName:"ul"},"Click Save"),Object(n.b)("li",{parentName:"ul"},"Enable the Alert")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"115.625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXCAIAAACEf/j0AAAACXBIWXMAABYlAAAWJQFJUiTwAAACPElEQVQ4y5VU246bMBDlT/sd/aE+9K1SpUp97WtXlfpQJZsmsCQhNgRDsLn5Rg/2LiFsWnVHxJkMnjnHc8YJQlGEgmGN6xLrD5ZEdbnl7JHnO1E8uSAix6bacXZoq0gUp4bbYTDGBBmv4jPdkGOUUTzb9BTSZH9Ow4zu8+wpo2FKopSkeZ5fyjgjVFSV7O1gYYEKt7WoUcdqY5UelNa9MkrDN1obpfwj+17L0UHW8GLBIU0Z51JKO4v+wzymHZ0h+PRr9X39uFmtuBDDGy3Ap+97QkhZlvCVUr0zODeA1qJDC3YBfiJaVVXTNHDAv21b+Mi3M0MtvMKGJbIQAshFUXiEefnXgD5yTYZxzs/nc+YMtQDbdR32YYVGqGucaa0RUVJ5jOdkUEU+XiANm8YdUMjtRgRv4bhsiKi5gpj6GXkq7+nNid2TakBVO9FGJ5CMbntunhLQ6rr2LKYj4ESggBS/Xmn7o06YU+cmx2sxVb8mIxPIl8sFDnRijAHWg8MWdW+k8lV9e7wBAQ3LnUEF1PWTsxwScyvsXM8KTMqS4xY5tljvI19POas1qg22LuIZLZO/7cLN4ZhSOh/m+WAa90w3yT/GyRk8HI6beB/vQpbn6A2YYv2vu+knTCtFijwhJ8wmpRRNQsObtu3QbdnlsmmNvH8ltTvh19P24fc6IyR1liTJeEPtgJlU1vztf2LsNr5+MhrRY1mywskNnYHth3GYH/WFMEZfah286a8DtzzOsvWJvPvw8f3nL38ASdQ7+Vgwc00AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"create-alert",title:"create-alert",src:"/static/24fadda41f1731297cc08e6d39131787/3cbba/alert-config-1.png",srcSet:["/static/24fadda41f1731297cc08e6d39131787/7fc1e/alert-config-1.png 288w","/static/24fadda41f1731297cc08e6d39131787/a5df1/alert-config-1.png 576w","/static/24fadda41f1731297cc08e6d39131787/3cbba/alert-config-1.png 1152w","/static/24fadda41f1731297cc08e6d39131787/12736/alert-config-1.png 1206w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h2",null,"Trigger an Alert with HTTP errors"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Simulate HTTP Errors by calling the web service with the following command.")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-shell"},"while true; do sleep 0.1; curl http://localhost:8081/status/500 -si | head -1 ; done\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Go to the dashboard ",Object(n.b)("inlineCode",{parentName:"li"},"Kubernetes Service Golder Signals - My Web Service")," select a 10S time window and Maximize the panel ",Object(n.b)("inlineCode",{parentName:"li"},"Error Rate (4xx/5xx) per Service"))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.90277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAABYlAAAWJQFJUiTwAAACV0lEQVQoz51TyWsTURyeP8VzD+JBvIgHQS8uiGDBk6gItgMK1Rb3gl68piamNUubyTKZzJJZMhUvFelJQ0sSBIl4CCQYSDqJ2Wbf/M2kTYOoh378+L0333vf+97yG+T4+cuzd9Dw23Bg5U0wGAqGQmEfkUgkEFgpiGKlUtnZ2S37qFarP3zkKGo1GkGOnTx39cY8wzB4lsgSOSJHCoJQKAg8zxNEtlQqtVqtWq1Wr9ebzZ/tdrvZbHa73U/b2wRDISfOXplbeMJzHO2DZdkCSAWB4zgcx4vF4mg0kiSp0Wi09/ZUVbVt27Ksj1tbOYJAbt971O/1JB+dTmcwHMoHAJnH9PuD3i/odCWp1+upmgb8YDD4Uiwi6NKy67q247h/A5iAm6ZpkOXhUDcMRVGgA0PlUgm5//jleBLsx5kCkM5kRdOwFdlUVdfQXV1zFNm1bU+MLr7wnH3lxHAi3ic1zTY8jCmY7DmXy8j8w+ee8//FumZbpmGaY/JQfPfBM3/bRxKji8tHF8/52/73mb0WxKZpabrh/HHmsRhu+/Cep7LXsS24MMc32He2rIMzLzwFQpNHuiIbqjKdDUXWIcsyxOfdMiN++PrtOyjh3UEMlYucunR96dXr95siFDTHeXUtiiIPrbjJcjyQAF4Q1xPpYDgC9S8W/HkMzbN5ZObMxdlbqMBzFE1TNAORz+fhPyEpGoJmGKh2IFlYCZbkeX+MpEkSeGTm9IVrN1GcJLEMnsxmYxi2Go2/i6+vxeJrsVgsgW2kM3EsGcdS68nURioNn4kMDjmawH4D6cEngWrzNN4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"5xx-errors",title:"5xx-errors",src:"/static/4464e540239860b5dbf526b1c8c0b43a/3cbba/5xx-errors.png",srcSet:["/static/4464e540239860b5dbf526b1c8c0b43a/7fc1e/5xx-errors.png 288w","/static/4464e540239860b5dbf526b1c8c0b43a/a5df1/5xx-errors.png 576w","/static/4464e540239860b5dbf526b1c8c0b43a/3cbba/5xx-errors.png 1152w","/static/4464e540239860b5dbf526b1c8c0b43a/2abe9/5xx-errors.png 1658w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You can see that the problem was detected and an alert triggered.")),Object(n.b)("h2",null,"Receiving Alert Notifications"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Slack Notification is received alerting about the http errors")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"626px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.48611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAAsTAAALEwEAmpwYAAABLElEQVQoz42QaW7DIBCFff/z9AC9QJQqcuQFEhvUgjFe4jW2CaQvcZr+SaU+WfjBzDcz4Kl6CdJccqakmsYzPmfddZW1D/88cT9+mKaq8Yha3jdbSd62H34cx/v9/pgkhFLO+QE6HmGSJAmCgDHeD4CmYRiAE0I8/MwyH2hECY2jGElRFIVheCMpRQYq4nC32/m+D5MmaV3XF2OQ72GIi7WccSQxxrIs67qubdumacZx7Pt+9TCn0wkhHDrnHp3X20gp0BAxjGSMwWzzPF//0C+87ouyBKyU6lpU6DAY1pfMC7iuqzgKpfhSKhdCaK3BF0UhhdQ5dhrXye9Cg6qsMNoTdpmuKBfpp0RshUHCSyn1XcBQrizLXN2KgcEbPTpPxp4Xi/X6D61j43W/AS53+VJ8upDCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"slack-alert",title:"slack-alert",src:"/static/c32d2a511340352ee438d67a6c845b64/c012a/slack-alert.png",srcSet:["/static/c32d2a511340352ee438d67a6c845b64/7fc1e/slack-alert.png 288w","/static/c32d2a511340352ee438d67a6c845b64/a5df1/slack-alert.png 576w","/static/c32d2a511340352ee438d67a6c845b64/c012a/slack-alert.png 626w"],sizes:"(max-width: 626px) 100vw, 626px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Email Notification is received alerting about the http errors")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"794px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.51388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsTAAALEwEAmpwYAAABl0lEQVQoz5WT626CQBCFef8HM1Fjsaj8wBvKRUEBQYUKLPZjtxhTk6aeuJtxdudyzg7a7Xarqqqu6y8JIQR/MfI8v7+gaRohwZ2yLLUsy/b7fRiGcRxHUXQ4HI7HozKSJMF5Op3SNGXHeblcnnNpeB3HcV3X8zxl+L5PJDZJd7ud62I6G4ntdksxKtdVJeq6rRwEAQcqTGVhD4KwKIrz+Ux27iiDXnDScBhlSXrVsISAS3N/B438aWVVFlIzcl+vV4yHNs86PUcKWa3lzLJtu9frTafTyWQyn8/hiU7QDiWUhGEH7FSCFBoLqqZpGsbncDgcDAbj8bjf7y+XS7TgiFwo53fAGUv8BPOqCGbbG8f1KIQ8PDL9iw61xMOuJOi8bZsHXCwW1mJjWus4ThgbJOWSYvuHlm1lmFiW5fvearWkMVjBE1aMRCZBukeiB9pgKvD0uq4bhgHl0Wg0m82wUXEvQTr25AUtZ4LpWf/4WK1tBkwpxFnaQQ1J/oKWM4urdH4uqlq8Nyot51/fzf+nTVPj8u54KnwDBZaQsKGdHWIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"email-alert",title:"email-alert",src:"/static/b223bb9d3b56c18df5d05ddb9a541828/d4b82/email-alert.png",srcSet:["/static/b223bb9d3b56c18df5d05ddb9a541828/7fc1e/email-alert.png 288w","/static/b223bb9d3b56c18df5d05ddb9a541828/a5df1/email-alert.png 576w","/static/b223bb9d3b56c18df5d05ddb9a541828/d4b82/email-alert.png 794w"],sizes:"(max-width: 794px) 100vw, 794px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h2",null,"Receiving Resolution Notifications"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Stop the HTTP Error simulation, and the system will send another notificatoon about the resolution")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Another Slack Notification is received when the problem is resolved"))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"618px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsTAAALEwEAmpwYAAABK0lEQVQY021RCW6DMBDk/4/JB/KCVI0UHMIRAz7AHOEsSSAcrToxSqtKHVnLeMx4x7Yx9yMvww3bMBqykLEgwJBMRELykEkuVBRLzpkfcMa6rpumqe/7YRjGcTSmcao+qu3blpiEHMlut9vv96b5nBwOB0IIKpR3DejW0VJKZVkGv/EAhgf3+el0cl03CII0TbGcqKQoijzPkxUqEVLEUbzaYLrdbgYYkiCxZVl1XUNalgWRIM4amOrPi8zzQ+NpXhn2g1lKedFAc7Rdf53+4kf5NSPWkZBIm+FEhbmqqjRJissF4SGiQkebsizbtsXlPc1IrtLMcb3zmdq2jcPTM8XA+R3H8X0fxPM8VCEE7oVS2jTN9Xo1dISx7u5Zc6+64Uvj84V/+aKBB/sGcFm278xyBwoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"slack-resolved",title:"slack-resolved",src:"/static/a7145fdf98ac480d02422429b9222ea1/cdc8f/slack-resolved.png",srcSet:["/static/a7145fdf98ac480d02422429b9222ea1/7fc1e/slack-resolved.png 288w","/static/a7145fdf98ac480d02422429b9222ea1/a5df1/slack-resolved.png 576w","/static/a7145fdf98ac480d02422429b9222ea1/cdc8f/slack-resolved.png 618w"],sizes:"(max-width: 618px) 100vw, 618px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Another Email Notification is received when the problem is resolved")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"784px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdklEQVQoz5WSi26CQBRE9/8/zVc0QUmFRUFUbBEBoQUWsIfdtKmJTXQScJa9r5mrUEq1bcu71oB3XVdVVVmWt0foNAhrmkZkWXY6neI4TtP0crkkSXLWgHDkNs/z6/UKJ6Aoir7vTRV+BXG+74dheDgcdrsdZL/fU8uQ4/FoPvoacOLJpznZgpKkbbdbIrgjIggCCJn0oTOFzBQfGvRHZZLm7+dcNBpoNvOYqkj6He+x8v6m2l40rapVw9mUGOZ5GoJHenI2m71pMDNDYjU+pT9geGOnsRD/uB3cJnm9XpM8n8/H4/FoNIJMJhPHcXDB6DdewnEEHmuwToE2+mCYlHLjeZAoilgeblG7vof5Umngy9CZOWnubkIviIryE9ee1YxDbMVxXPbqSsli2SRT0bnUgNDn32T0LBYL3LIsizfCpK6CPebfBinugWeDYTzL5XI6ndqrlaVh2zbJuIVySuCQKZT+AUfED4Z5nue47jn7qtULSwbf0dQXlbMft+QAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"slack-resolved",title:"slack-resolved",src:"/static/2db8e1f86846422a255dd8898f4839f8/ee623/email-resolved.png",srcSet:["/static/2db8e1f86846422a255dd8898f4839f8/7fc1e/email-resolved.png 288w","/static/2db8e1f86846422a255dd8898f4839f8/a5df1/email-resolved.png 576w","/static/2db8e1f86846422a255dd8898f4839f8/ee623/email-resolved.png 784w"],sizes:"(max-width: 784px) 100vw, 784px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You can see in the Golden Signal Dashboard for Error Rate that rates go back to zero")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAIAAAA7N+mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAnElEQVQoz52R0Q7DIAhF+///OxSEy8B1HbXLko4HPLl60iobET2Iemvu8Ju17auZmwJwWHLCwlF2aHkyZAxx7i7iQ8Cc3JtLAEfivXujDJkRXcdZjnOmNXqRo9xiMuIvBl9lW+WlPrJc5Lfzl3xs49eD515+yYocz3BLtiLblFHk7z1HhZChmjxHuKlIsKrOZK+anHqkIqZqMVrgCc2bUwt4GxgNAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"5xx-resolved",title:"5xx-resolved",src:"/static/335d40e17b3895386cca2096953c3318/3cbba/5xx-resolved.png",srcSet:["/static/335d40e17b3895386cca2096953c3318/7fc1e/5xx-resolved.png 288w","/static/335d40e17b3895386cca2096953c3318/a5df1/5xx-resolved.png 576w","/static/335d40e17b3895386cca2096953c3318/3cbba/5xx-resolved.png 1152w","/static/335d40e17b3895386cca2096953c3318/0b124/5xx-resolved.png 1728w","/static/335d40e17b3895386cca2096953c3318/4ea69/5xx-resolved.png 2304w","/static/335d40e17b3895386cca2096953c3318/85a0c/5xx-resolved.png 2326w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(n.b)("h2",null,"Events"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"To see all events collected click Events on Sysdig")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"68.40277777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAIAAACgpqunAAAACXBIWXMAABYlAAAWJQFJUiTwAAABzElEQVQoz5VTy24TMRT1h4EEqlBZAAJUVEqFeFWs+B3+i0WFgFWmDenErxm/H5NMOB5nQrvsyci5Y/vce+6xhxy9/bxorsZx3N0TIJBHL98vmuuYch6GYQNsAfwh3XAbOZfFYbN/GwZuFDk6+USZ2I1jo9lP1vzm13/Esj6If7GrhaVLLztrhJBciF7KTkqldfCePHnzhXEJGcyqhq6WrF0JupL0L1/XsfNGJ6+tNcZYa521UAF1Rfbj1x+YKGRtvBQy+JBTyjGlGBOawW+KQQshxBhB2/c8juTVx2+1cq8tpcygTNm8B+KcM/ZBLGNQLRnHKPq+xxI5Pr2oZGUcpr0P/8mpAOXglJvgvce4nQAKefD8XZUNMnJrrSuhikQMJjQqpftewecDcyI/O5t7BplZ5/JcuUpAFhxdy8XNmlIu1pTftLTrFZJWcreXzTksTXfJqAZzXIo+hqmPciWQsfR8qAyykDLMnLnlEqOIUgo+YYRVaFtNIA9fnM9uO7iNIyk9T6gBTAIZimBHNaJOuhjI8fnXWtm4gJPAbDVpvAWsdl3Xtm09JK1V8mGXNuTp6UVLGZa32DRtLbfn7ndyuOdIGnPm0V4a9n354x84dAuoejA1OQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"events",title:"events",src:"/static/7f3b3bc354ebffad2667008ab3f5b83d/3cbba/events-view.png",srcSet:["/static/7f3b3bc354ebffad2667008ab3f5b83d/7fc1e/events-view.png 288w","/static/7f3b3bc354ebffad2667008ab3f5b83d/a5df1/events-view.png 576w","/static/7f3b3bc354ebffad2667008ab3f5b83d/3cbba/events-view.png 1152w","/static/7f3b3bc354ebffad2667008ab3f5b83d/0b124/events-view.png 1728w","/static/7f3b3bc354ebffad2667008ab3f5b83d/4ea69/events-view.png 2304w","/static/7f3b3bc354ebffad2667008ab3f5b83d/fed7c/events-view.png 2432w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))}o.isMDXComponent=!0},QH2O:function(e,a,t){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-electives-monitoring-sysdig-activities-alerts-index-mdx-a62b4327fd2127bac8f9.js.map