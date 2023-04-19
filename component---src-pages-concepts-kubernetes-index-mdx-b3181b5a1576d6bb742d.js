(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),s=a.n(i),r=a("Wbzz"),l=a("Xrax"),c=a("k4MR"),d=a("TSYQ"),p=a.n(d),h=a("QH2O"),b=a.n(h),u=a("qKvR");var m=e=>{let{title:t,theme:a,tabs:n=[]}=e;return Object(u.b)("div",{className:p()(b.a.pageHeader,{[b.a.withTabs]:n.length,[b.a.darkMode]:"dark"===a})},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:b.a.text},t)))))},f=a("BAC9");var g=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=Object(r.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:i,branch:s}=a||n,l=o+"/edit/"+s+i+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+f.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:f.link,href:l},"Edit this page on GitHub"))):null},w=a("FCXl"),y=a("dI71"),A=a("I8xM");var v=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map(e=>{const t=s()(e,{lower:!0,strict:!0}),o=t===n,i=new RegExp(n+"/?(#.*)?$"),l=a.replace(i,t);return Object(u.b)("li",{key:e,className:p()({[A.selectedItem]:o},A.listItem)},Object(u.b)(r.Link,{className:A.link,to:""+l},e))});return Object(u.b)("div",{className:A.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":e},Object(u.b)("ul",{className:A.list},o))))))},t}(o.a.Component),O=a("MjG9"),j=a("CzIb"),x=a("Asxa"),k=a("OIbQ"),T=a.n(k);var P=e=>{let{date:t}=e;const a=new Date(t);return t?Object(u.b)(x.c,{className:T.a.row},Object(u.b)(x.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=e=>{let{pageContext:t,children:a,location:n,Title:o}=e;const{frontmatter:i={},relativePagePath:d,titleType:p}=t,{tabs:h,title:b,theme:f,description:y,keywords:A,date:x}=i,{interiorTheme:k}=Object(j.a)(),{site:{pathPrefix:T}}=Object(r.useStaticQuery)("2456312558"),S=T?n.pathname.replace(T,""):n.pathname,I=h?S.split("/").filter(Boolean).slice(-1)[0]||s()(h[0],{lower:!0}):"",N=f||k;return Object(u.b)(c.a,{tabs:h,homepage:!1,theme:N,pageTitle:b,pageDescription:y,pageKeywords:A,titleType:p},Object(u.b)(m,{title:o?Object(u.b)(o,null):b,label:"label",tabs:h,theme:N}),h&&Object(u.b)(v,{title:b,slug:S,tabs:h,currentTab:I}),Object(u.b)(O.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:d}),Object(u.b)(P,{date:x})),Object(u.b)(w.a,{pageContext:t,location:n,slug:S,tabs:h,currentTab:I}),Object(u.b)(l.a,null))}},"9DSI":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return d}));var n=a("wx14"),o=a("Ff2n"),i=(a("q1tI"),a("7ljp")),s=a("013z");a("qKvR");const r={},l={_frontmatter:r},c=s.a;function d(e){let{components:t}=e,a=Object(o.a)(e,["components"]);return Object(i.b)(c,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Introduction"),Object(i.b)("p",null,"Kubernetes is an open source container orchestration platform that automates deployment, management and scaling of applications. Learn how Kubernetes enables cost-effective cloud native development."),Object(i.b)("h2",null,"What is Kubernetes?"),Object(i.b)("p",null,"Kubernetes—also known as ‘k8s’ or ‘kube’—is a container orchestration platform for scheduling and automating the deployment, management, and scaling of containerized applications."),Object(i.b)("p",null,"Kubernetes was first developed by engineers at Google before being open sourced in 2014.\nIt is a descendant of ‘Borg,’ a container orchestration platform used internally at Google. (Kubernetes is Greek for helmsman or pilot, hence the helm in the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cncf/artwork/tree/master/projects/kubernetes"},"Kubernetes logo"),".)"),Object(i.b)("p",null,"Today, Kubernetes and the broader container ecosystem are maturing into a general-purpose computing platform and ecosystem that rivals—if not surpasses—virtual machines (VMs) as the basic building blocks of modern cloud infrastructure and applications.\nThis ecosystem enables organizations to deliver a high-productivity ",Object(i.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/learn/paas"},"Platform-as-a-Service (PaaS)")," that addresses multiple infrastructure- and operations-related tasks and issues surrounding ",Object(i.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/learn/cloud-native"},"cloud native")," development so that development teams can focus solely on coding and innovation.     "),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/learn/kubernetes"},"https://www.ibm.com/cloud/learn/kubernetes")),Object(i.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(i.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/aSrqRSk43lY",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(i.b)("h2",null,"Predictable Demands Pattern"),Object(i.b)("p",null,"An application’s performance, efficiency, and behaviors are reliant upon it’s ability to have the appropriate allocation of resources.  The Predictable Demands pattern is based on declaring the dependencies and resources needed by a given application.  The scheduler will prioritize an application with a defined set of resources and dependencies since it can better manage the workload across nodes in the cluster.  Each application has a different set of dependencies which we will touch on next."),Object(i.b)("h3",null,"Runtime Dependencies"),Object(i.b)("p",null,"One of the most common runtime dependency’s is the exposure of a container’s specific port through hostPort.  Different applications can specify the same port through hostPort which reserves the port on each node in the cluster for the specific container.  This declaration restricts multiple continers with the same hostPort to be deployed on the same nodes in the cluster and restricts the scale of pods to the number of nodes you have in the cluster.  "),Object(i.b)("p",null,"Another runtime dependency is file storage for saving the application state.  Kubernetes offers Pod-level storage utilities that are capable of surviving container restarts.  Applications needing to read or write to these storage mechanisms will require nodes that is provided the type of volume required by the application.  If there is no nodes available with the required volume type, then the pod will not be scheduled to be deployed at all. "),Object(i.b)("p",null,"A different kind of dependency is configurations.  ConfigMaps are used by Kubernetes to strategically plan out how to consume it’s settings through either environment variables or the filesystem.  Secrets are consumed the same was as a ConfigMap in Kubernetes.  Secrets are a more secure way to distribute environment-specific configurations to containers within the pod. "),Object(i.b)("h3",null,"Resource Profiles"),Object(i.b)("p",null,"Resource Profiles are definitions for the compute resources required for a container.  Resources are categorized in two ways, compressible and incompressible.  Compressible resources include resources that can be throttled such as CPU or network bandwidth. Incompressible represents resouces that can’t be throttled such as memory where there is no other way to release the allocated resource other than killing the container.  The difference between compressible and incompressible is very important when it comes to planning the deployment of pods and containers since the resource allocation can be affected by the limits of each."),Object(i.b)("p",null,"Every application needs to have a specified minimum and maximum amount of resources that are needed.  The minimum amount is called “requests” and the maximum is the “limits”.  The scheduler uses the requests to determine the assignment of pods to nodes ensuring that the node will have enough capacity to accommodate the pod and all of it’s containers required resources.  An example of defined resource limits is below:"),Object(i.b)("p",null,"Different levels of Quality of Service (QoS) are offered based on the specified requests and limits."),Object(i.b)("p",null,".3 Quality of Service Levels\nBest Effort;;\nLowest priority pod with no requests or limits set for it’s containers. These pods will be the first of any pods killed if resources run low.\nBurstable;;\nLimits and requests are defined but they are not equal.  The pod will use the minimum amount of resources, but will consume more if needed up to the limit.  If the needed resources become scarce then these pods will be killed if no Best Effort pods are left.\nGuaranteed;;\nHighest priority pods with an equal amount of requests and limits. These pods will be the last to be killed if resources run low and no Best Effort or Burstable pods are left. "),Object(i.b)("h3",null,"Pod Priority"),Object(i.b)("p",null,"The priority of pods can be defined through a PriorityClass object. The PriorityClass object allows developers to indicate the importance of a pod relative to the other pods in the cluster.  The higher the priority number then the higher the priority of the pod. The scheduler looks at a pods priorityClassName to populate the priority of new pods.  As pods are being placed in the scheduling queue for deployment, the scheduler orders them from highest to lowest."),Object(i.b)("p",null,"Another key feature for pod priority is the Preemption feature.  The Preemption feature occurs when there are no nodes with enough capacity to place a pod.  If this occurs the scheduler can preempt (remove) lower-priority Pods from nodes to free up resources and place Pods with higher priority.  This effectively allows system administrators the ability to control which critical pods get top priority for resources in the cluster as well as controlling which critical workloads are able to be run on the cluster first. If a pod can not be scheduled due to constraints it will continue on with lower-priority nodes."),Object(i.b)("p",null,"Pod Priority should be used with caution for this gives users the ability to control over the kubernetes scheduler and ability to place or kill pods that may interrupt the cluster’s critical functions.  New pods with higher priority than others can quickly evict pods with lower priority that may be critical to a container’s performance.  ResourceQuota and PodDisruptionBudget are two tools that help combat this from happening read more here."),Object(i.b)("h2",null,"Declarative Deployment Pattern"),Object(i.b)("p",null,"With a growing number of microservices, reliance on an updating process for the services has become ever more important. Upgrading services is usually accompanied with some downtime for users or an increase in resource usage.  Both of these can lead to an error effecting the performance of the application making the release process a bottleneck.  "),Object(i.b)("p",null,"A way to combat this issue in Kubernetes is through the use of Deployments.  There are different approaches to the updating process that we will cover below. Any of these approaches can be put to use in order to save time for developers during their release cycles which can last from a few minutes to a few months. "),Object(i.b)("h3",null,"Rolling Deployment"),Object(i.b)("p",null,"A Rolling Deployment ensures that there is no downtime during the update process.  Kubernetes creates a new ReplicaSet for the new version of the service to be rolled out.  From there Kubernetes creates set of pods of the new version while leaving the old pods running.  Once the new pods are all up and running they will replace the old pods and become the primary pods users access."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.208333333333332%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAC4jAAAuIwF4pT92AAABPElEQVQY002QSWvCUBSF8/93XbVQCqHaXSu2RcxAxZCkiTVmUEPN5HuZEzHpxsZMxj6Eln6Ly71wDudwsfOFruvQzLJsaWx129UtADx/bcG17Ro2cNxQUNaDEbWQ1T8xAmtPXXM61+0JHZKs4MzmdqLfDKekoOGcfU3IvdfJi/h5xxhXQ56ZqW1dRVEchmEQBFhsfuwMNtanATA9P6SFJS2u3kRV1Q16tqLEJSdp74pOCNqYk3XDPhbf7gUIIRbII1/oe/w93ChFWVlb03Ft4G2jKHSghXYvcKtjsd8ltrlJk+RwOAAA0jSN4xhLUAUPetD5yrP5QurJRE8lcGZIy1xfo/D56IEeNlVdVvU+y/I8L4oCOVFt3/ex/w/zg2DAkU88+cxSoiYNePKRHY/ZSVWWTdsgDYpt2/b8yw8QnDY3yoHc5gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Rolling Deployment",title:"Rolling Deployment",src:"/static/ea31f21041413e0ee005776f7785b43d/3cbba/rolling-deploy.png",srcSet:["/static/ea31f21041413e0ee005776f7785b43d/7fc1e/rolling-deploy.png 288w","/static/ea31f21041413e0ee005776f7785b43d/a5df1/rolling-deploy.png 576w","/static/ea31f21041413e0ee005776f7785b43d/3cbba/rolling-deploy.png 1152w","/static/ea31f21041413e0ee005776f7785b43d/c27c3/rolling-deploy.png 1283w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null,"The upside to this approach is that there is no downtime and the deployment is handled by kubernetes through a deployment like the one below. The downside is with two sets of pods running at one time there is a higher usage of resources that may lead to performance issues for users. "),Object(i.b)("h3",null,"Fixed Deployment"),Object(i.b)("p",null,"A Fixed Deployment uses the Recreate strategy which sets the maxUnavailable setting to the number of declared replicas.  This in effect starts the versions of the pods as the old versions are being killed.  The starting and stopping of containers does create a little bit of downtime for customers while the starting and stopping is taking place, but the positive side is the users will only have to handle one version at a time."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAC4jAAAuIwF4pT92AAABRklEQVQY002QS0/CQBSF+//jzsiGRARUEqGKAZXSYn3UYqHg4FDA0pfQMoXpIxIoNobihIXxW9ycxZfck0Pt9iRJQu5igUWoi4opgtFAs0TFEqDehqP38eS+MzqvcDKARI3jmMjb7ZaKCOv1ahNFjvNcZ9P8IMWAI7pxK3TT/PCw2sqUWVqAJB9cNB4k8BN/T6dTfQ/l9vl5r4JAZQLbIfbBQAWKCoeaYU1IAANtqOofmvmmqN3+6HNqk0eWZSGEHMehJoCzpEtdLJpjuIo2DrIRRnPP9X0PLZDrudjDQRjopvbaahqmQYqapjmbzWzbppbLVRB+eX4YrSO5I5/KtXynlnu85kHzrMtkpWqhdsVAsdDjDm/yvCTskl0YhkEQYIyp/4PphpGt0xmWzt+VmBf+hKUzTLFQpctPzDFXSpVznMD/yYRfEBsvr9+PsJEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Fixed Deployment",title:"Fixed Deployment",src:"/static/9e1900eb02480e5fcbd05ab24144fa8f/3cbba/fixed-deploy.png",srcSet:["/static/9e1900eb02480e5fcbd05ab24144fa8f/7fc1e/fixed-deploy.png 288w","/static/9e1900eb02480e5fcbd05ab24144fa8f/a5df1/fixed-deploy.png 576w","/static/9e1900eb02480e5fcbd05ab24144fa8f/3cbba/fixed-deploy.png 1152w","/static/9e1900eb02480e5fcbd05ab24144fa8f/c27c3/fixed-deploy.png 1283w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("h3",null,"Blue-Green Release"),Object(i.b)("p",null,"A Blue-Green Release involves a manual process of creating a second deployment of pods with the newest version of the application running as well as keeping the old version of pods running in the cluster.  Once the new pods are up and running properly the administrator shifts the traffic over to the new pods. Below is a diagram showing both versions up and running with the traffic going to the newer (green) pods."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAC4jAAAuIwF4pT92AAABR0lEQVQY002Q3U+CYBSH+f/XZW2strR0K4c4zU0kUbISMlEQEBPkQwFf5HM5xVjTeudF67n47Vw82/mdg/ycOB6PMH0/YCSdVSxW1BTNZGSTnSw4eSaqi85odk88cbwI1SzLoHw4HJAUsttt92nquK+Prcu2hLbGF5UO0eNRSjpvcPmHNv4iXtHTM4ym+/x39mXbtn4C8WR6Pa4Dob6UBkkQCYoqTFRpOjesJRwERZuq+mxu8hN1JH8sbAcusiwLAOC6LrIUKKtf0RnM1KRtuneBAwKwDr0oCoEPvNDzQz9OYt2cv72zhmHAoqZprlYrx3GQzWYbJ59hlKS7lBtyRa5ZGDZvuzVaYIsjssARGN0gJeZuTKFUqTtg4M1JksRxHAQB8v9humHcPOK5Fl4gymSPzrfwHImViGr1uXlNldFasd3r/smQX0HqMAd/cl04AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Blue-Green",title:"Blue-Green",src:"/static/98edf1faf7d0d06c634911611189ecb9/3cbba/blue-green.png",srcSet:["/static/98edf1faf7d0d06c634911611189ecb9/7fc1e/blue-green.png 288w","/static/98edf1faf7d0d06c634911611189ecb9/a5df1/blue-green.png 576w","/static/98edf1faf7d0d06c634911611189ecb9/3cbba/blue-green.png 1152w","/static/98edf1faf7d0d06c634911611189ecb9/c27c3/blue-green.png 1283w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null,"The downfall to this approach is the use of resources with two separate groups of pods running at the same time which could cause performance issues or complications. However, the advantage of this approach is users only experience one version at a time and it’s easy to quickly switch back to the old version with no downtime if an issue arises with the newer version."),Object(i.b)("h3",null,"Canary Release"),Object(i.b)("p",null,"A Canary Release involves only standing up one pod of the new application code and shifting only a limited amount of new users traffic to that pod.  This approach reduces the number of people exposed to the new service allowing the administrator to see how the new version is performing.  Once the team feels comfortable with the performance of the new service then more pods can be stood up to replace the old pods.  An advantage to this approach is no downtime with any of the services as the new service is being scaled. "),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"31.59722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAAC4jAAAuIwF4pT92AAABO0lEQVQY002Q7U+CUBTG+f8/9Km1XPXBVqvNdGtuZUbGB8NRiMSbqMBFAW9yBUXeRAW7udX67ezsnLPn2c4eYn+gKArcXRfRok7LgOZVRTPfJKMjj1lpIAzHLW5w+0ixPQFLsyzD4jzPiQQTx2EY4lOHeS81+dNn4bj60qD5EimdPHQv661aWzyn1KM7imJ622xtWZZ+gPiSXt3POuzdW5q0CEJeVnllKKqaBsas0O+KqqSOlJHOiv0PQTEnVhzHpmlCCB3HISY8aTI1vVMBAyFKUgfaEEHowjiKsnWKK02SzSabI7evyLZtYzMAYDqd4plYrSJ/Ecy9BX6f5bpXbOOaezojK8ib/2XxM+TFdrfDzjRNgyDwfR8hRPwPTDeMcrNaJmsX9RsdGMvlEos8z/MP4HU2m+Gc9r98A4xCPGd9G3yGAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Canary Release",title:"Canary Release",src:"/static/87476599e000741c340d679dfc36f485/3cbba/canary-release.png",srcSet:["/static/87476599e000741c340d679dfc36f485/7fc1e/canary-release.png 288w","/static/87476599e000741c340d679dfc36f485/a5df1/canary-release.png 576w","/static/87476599e000741c340d679dfc36f485/3cbba/canary-release.png 1152w","/static/87476599e000741c340d679dfc36f485/c27c3/canary-release.png 1283w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("h2",null,"Health Probe Pattern"),Object(i.b)("p",null,"The Health Probe pattern revolves the health of applications being communicated to Kubernetes. To be fully-automatable, cloud-applications must be highly observable in order for Kubernetes to know which applications are up and ready to receive traffic and which cannot. Kubernetes can use that information for traffic direction, self-healing, and to achieve the desired state of the application."),Object(i.b)("h3",null,"Process Health Checks"),Object(i.b)("p",null,"The simplest health check in kubernetes is the Process Health Check.  Kubernetes simply probes the application’s processes to see if they are running or not. The process check tells kubernetes when a process for an application needs to be restarted or shut down in the case of a failure."),Object(i.b)("h3",null,"Liveness Probes"),Object(i.b)("p",null,"A Liveness Probe is performed by the Kubernetes Kubelet agent and asks the container to confirm it’s health.  A simple process check can return that the container is healthy, but the container to users may not be performing correctly.  The liveness probe addresses this issue but asking the container for its health from outside of the container itself. If a failure is found it may require that the container be restarted to get back to normal health.  A liveness probe can perform the following actions to check health:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"HTTP GET and expects a success which is code 200-399."),Object(i.b)("li",{parentName:"ul"},"A TCP Socket Probe and expects a successful connection."),Object(i.b)("li",{parentName:"ul"},"A Exec Probe which executes a command and expects a successful exit code (0).")),Object(i.b)("p",null,"The action chosen to be performed for testing depends on the nature of the application and which action fits best. Always keep in mind that a failing health check results in a restart of the container from Kubernetes, so make sure the right health check is in place if the underlying issue can’t be fixed."),Object(i.b)("h3",null,"Readiness Probes"),Object(i.b)("p",null,"A Readiness Probe is very similar to a Liveness probe, but the resulting action to a failed Readiness probe is different.  When a liveness probe fails the container is restarted and, in some scenarios, a simple restart won’t fix the issue, which is where a readiness probe comes in.  A failed readiness probe won’t restart the container but will disconnect it from the traffic endpoint.  Removing a container from traffic allows it to get up and running smoothly before being tossed into service unready to handle requests from users.  Readiness probes give an application time to catch up and make itself ready again to handle more traffic versus shutting down completely and simply creating a new pod. In most cases, liveness and readiness probes are run together on the same application to make sure that the container has time to get up and running properly as well as stays healthy enough to handle the traffic. "),Object(i.b)("h2",null,"Managed Lifecycle Pattern"),Object(i.b)("p",null,"The Managed Lifecycle pattern describes how containers need to adapt their lifecycles based on the events that are communicated from a managing platform such as Kubernetes.  Containers do not have control of their own lifecycles.  It’s the managing platforms that allow them to live or die, get traffic or have none, etc.  This pattern covers how the different events can affect those lifecycle decisions."),Object(i.b)("h3",null,"SIGTERM"),Object(i.b)("p",null,"The SIGTERM is a signal that is sent from the managing platform to a container or pod that instructs the pod or container to shutdown or restart.  This signal can be sent due to a failed liveness test or a failure inside the container.  SIGKILL allows the container to cleaning and properly shut itself down versus SIGKILL, which we will get to next. Once received, the application will shutdown as quickly as it can, allowing other processes to stop properly and cleaning up other files.  Each application will have a different shutdown time based on the tasks needed to be done."),Object(i.b)("h3",null,"SIGKILL"),Object(i.b)("p",null,"SIGKILL is a signal sent to a container or pod forcing it to shutdown.  A SIGKILL is normally sent after the SIGTERM signal.  There is a default 30 second grace period between the time that SIGTERM is sent to the application and SIGKILL is sent.  The grace period can be adjusted for each pod using the .spec.terminationGracePeriodSeconds field. The overall goal for containerized applications should be aimed to have designed and implemented quick startup and shutdown operations."),Object(i.b)("h3",null,"postStart"),Object(i.b)("p",null,"The postStart hook is a command that is run after the creation of a container and begins asynchronously with the container’s primary process. PostStart is put in place in order to give the container time to warm up and check itself during startup.  During the postStart loop the container will be labeled in “pending” mode in kubernetes while running through it’s initial processes.  If the postStart function errors out it will do so with a nonzero exit code and the container process will be killed by Kubernetes.  Careful planning must be done when deciding what logic goes into the postStart function because if it fails the container will also fail to start.  Both postStart and preStop have two handler types that they run:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"exec: Runs a command directly in the container.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"httpGet: Executes an HTTP GET request against an opened port on the pod container."))),Object(i.b)("h3",null,"preStop"),Object(i.b)("p",null,"The preStop hook is a call that blocks a container from terminating too quickly and makes sure the container has a graceful shutdown.  The preStop call must finish before the container is deleted by the container runtime.  The preStop signal does not stop the container from being deleted completely, it is only an alternative to a SIGTERM signal for a graceful shutdown. "))}d.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-concepts-kubernetes-index-mdx-b3181b5a1576d6bb742d.js.map