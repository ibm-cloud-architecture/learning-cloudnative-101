(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),l=a.n(r),b=a("NmYn"),i=a.n(b),n=a("Wbzz"),c=a("Xrax"),o=a("k4MR"),s=a("TSYQ"),p=a.n(s),m=a("QH2O"),u=a.n(m),h=a("qKvR");var O=e=>{let{title:t,theme:a,tabs:r=[]}=e;return Object(h.b)("div",{className:p()(u.a.pageHeader,{[u.a.withTabs]:r.length,[u.a.darkMode]:"dark"===a})},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:u.a.text},t)))))},j=a("BAC9");var d=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:r}}}=Object(n.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:b,branch:i}=a||r,c=l+"/edit/"+i+b+"/src/pages"+t;return l?Object(h.b)("div",{className:"bx--row "+j.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},N=a("FCXl"),f=a("dI71"),w=a("I8xM");var g=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,r=a.split("/").filter(Boolean).slice(-1)[0],l=t.map(e=>{const t=i()(e,{lower:!0,strict:!0}),l=t===r,b=new RegExp(r+"/?(#.*)?$"),c=a.replace(b,t);return Object(h.b)("li",{key:e,className:p()({[w.selectedItem]:l},w.listItem)},Object(h.b)(n.Link,{className:w.link,to:""+c},e))});return Object(h.b)("div",{className:w.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":e},Object(h.b)("ul",{className:w.list},l))))))},t}(l.a.Component),y=a("MjG9"),k=a("CzIb"),x=a("Asxa"),v=a("OIbQ"),C=a.n(v);var T=e=>{let{date:t}=e;const a=new Date(t);return t?Object(h.b)(x.c,{className:C.a.row},Object(h.b)(x.a,null,Object(h.b)("div",{className:C.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=e=>{let{pageContext:t,children:a,location:r,Title:l}=e;const{frontmatter:b={},relativePagePath:s,titleType:p}=t,{tabs:m,title:u,theme:j,description:f,keywords:w,date:x}=b,{interiorTheme:v}=Object(k.a)(),{site:{pathPrefix:C}}=Object(n.useStaticQuery)("2456312558"),P=C?r.pathname.replace(C,""):r.pathname,D=m?P.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",A=j||v;return Object(h.b)(o.a,{tabs:m,homepage:!1,theme:A,pageTitle:u,pageDescription:f,pageKeywords:w,titleType:p},Object(h.b)(O,{title:l?Object(h.b)(l,null):u,label:"label",tabs:m,theme:A}),m&&Object(h.b)(g,{title:u,slug:P,tabs:m,currentTab:D}),Object(h.b)(y.a,{padded:!0},a,Object(h.b)(d,{relativePagePath:s}),Object(h.b)(T,{date:x})),Object(h.b)(N.a,{pageContext:t,location:r,slug:P,tabs:m,currentTab:D}),Object(h.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},FHeL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return n})),a.d(t,"default",(function(){return s}));var r=a("wx14"),l=a("Ff2n"),b=(a("q1tI"),a("7ljp")),i=a("013z");a("qKvR");const n={},c={_frontmatter:n},o=i.a;function s(e){let{components:t}=e,a=Object(l.a)(e,["components"]);return Object(b.b)(o,Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Tools"),Object(b.b)("h4",null,"Command Line"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://brew.sh/"},"Brew")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"Kubectl")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/tektoncd/cli"},"Tekton CLI")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/wercker/stern"},"Stern")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/ahmetb/kubectx"},"Kubectx Kubens"))),Object(b.b)("h4",null,"Source Code Management"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://git-scm.com/doc"},"Git"))),Object(b.b)("h4",null,"Image/Artifact Management"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://docs.docker.com/docker-hub/"},"Docker Hub")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/home/"},"Dockerfile Documentation")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://docs.docker.com/develop/develop-images/dockerfile_best-practices/"},"Dockerfile Best Practices")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.jfrog.com/confluence/display/RTF/Welcome+to+Artifactory"},"JFrog Artifactory"))),Object(b.b)("h4",null,"Container Management"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/"},"Minikube Documentation")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/home/"},"Kubernetes Documentation")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},"Kubernetes Basics")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/"},"Kubernetes Concepts")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://code-ready.github.io/crc/"},"OpenShift CRC"))),Object(b.b)("h4",null,"Continuous Integration"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://jenkins.io/doc/"},"Jenkins")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/tektoncd/pipeline/tree/master/docs"},"Tekton Documentation")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/tektoncd/pipeline/tree/master/examples"},"Tekton Examples")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://github.com/tektoncd/catalog"},"Tekton Catalog"))),Object(b.b)("h4",null,"Continuous Delivery/Deployment"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/"},"ArgoCD Overview")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/getting_started/"},"ArgoCD Getting Started")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://argoproj.github.io/argo-cd/user-guide/best_practices/"},"ArgoCD Best Practices"))),Object(b.b)("h4",null,"Build Management & Code Quality"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://maven.apache.org/guides/index.html"},"Maven")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://docs.gradle.org/current/userguide/userguide.html"},"Gradle")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://docs.sonarqube.org/latest/"},"SonarQube"))),Object(b.b)("h4",null,"Configuration Management"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.ansible.com/use-cases/configuration-management"},"Ansible")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.terraform.io/docs/index.html"},"Terraform"))),Object(b.b)("h4",null,"Test Automation"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell"},"Cypress")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://docs.pact.io/"},"PACT"))),Object(b.b)("h4",null,"Monitoring"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.nagios.org/documentation/"},"Nagios"))),Object(b.b)("h4",null,"Alerting"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://support.pagerduty.com/"},"PagerDuty")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://prometheus.io/docs/alerting/overview/"},"Prometheus")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://sysdigdocs.atlassian.net/wiki/spaces/Monitor/pages/369950741/Alerts"},"Sysdig"))),Object(b.b)("h4",null,"Logging"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://docs.logdna.com/docs"},"LogDNA")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.elastic.co/guide/index.html"},"ELK"))),Object(b.b)("h2",null,"IBM Architecture Center"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/architecture/architectures/cloud-native"},"Cloud Native")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/architecture/architectures/public-cloud"},"Public Cloud")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/architecture/architectures/private-cloud"},"Private Cloud")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.ibm.com/cloud/architecture/architectures/devOpsArchitecture"},"DevOps Architecture"))),Object(b.b)("h2",null,"Podcasts"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://kubernetespodcast.com/"},"Kubernetes Podcast")," "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"http://podcast.podctl.com/"},"PodCTL")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"http://airhacks.fm/"},"AirHacks Java with Adam Bien")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://thepodlets.io/"},"The Podlets")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.gcppodcast.com/"},"Google Cloud Platform Podcast")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.thecloudcast.net/"},"The Cloud Cast")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"http://weare.netflix.net/"},"We are Netflix")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://developer.ibm.com/depmodels/cloud/podcasts/ibm_developer_podcast/"},"IBM Developer Podcast")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://softwareengineeringdaily.com/category/all-episodes/exclusive-content/Podcast/"},"Software Engineering Daily")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://changelog.com/podcast"},"The changelog (Open Source)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://changelog.com/gotime"},"Go Time (Golang)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.redhat.com/en/command-line-heroes"},"Command Line Heroes")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.softwaredefinedtalk.com/"},"Software Defined Talk"))),Object(b.b)("h2",null,"Youtube Channels/Playlists"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PL7bmigfV0EqQzxcNpmcdTJ9eFRPBe-iZa"},"TGI Kubernetes (Every Friday 4PM EST)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.youtube.com/channel/UC7noUdfWp-ukXUlAsJnSm-Q/videos?view=0&sort=dd&flow=grid"},"Red Hat Developers")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.youtube.com/user/rhopenshift/videos?view=0&sort=dd&flow=grid"},"OpenShift")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLj6h78yzYM2NDs-iu8WU5fMxINxHXlien"},"CNCF KubeCon 2019 NA")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLj6h78yzYM2OQP0DXXmtdIHNtfFSJqVAU"},"CNCF Servless Summit 2019 NA")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLj6h78yzYM2OQP0DXXmtdIHNtfFSJqVAU"},"CNCF EnvoyCon Summit 2019 NA")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLj6h78yzYM2OHQTTN_SjId-oFcQWag5lW"},"CNCF Observability Summit 2019 NA")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLj6h78yzYM2MGKo_LNRA-lhxlNXwiDJDT"},"CNCF Secury Day 0 2019 NA")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLEx5khR4g7PJELLTYwXZHcimWAwTUaWGA"},"GOTO Conferences - Software Architecture")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLEx5khR4g7PIEfXSB9bDS4lB-J9stOynD"},"GOTO Conferences - Microservices")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLEx5khR4g7PLCoWS5k9u2WQ8RdKqhKEKn"},"GOTO Conferences - DevOps")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.youtube.com/playlist?list=PLEx5khR4g7PJquVHXtkcdo-QzK54bfmY9"},"GOTO Conferences - The Human Factor"))),Object(b.b)("h2",null,"Books"),Object(b.b)("p",null,"Currently IBMers have free access to books and other resources on learning.oreilly.com"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://learning.oreilly.com/library/view/mastering-distributed-tracing/9781788628464/"},"Mastering Distributing Tracing")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://learning.oreilly.com/library/view/software-engineering-at/9781492082781"},"Software Engineering at Google (Feb 2020)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://learning.oreilly.com/library/view/kubernetes-operators/9781492078234/"},"Kubernetes Operators (Jan 2020)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://learning.oreilly.com/library/view/kubernetes-best-practices/9781492056461/"},"Kubernetes Best Practices (Nov 2019)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://learning.oreilly.com/library/view/kubernetes-up-and/9781492046523/"},"Kubernetes Up and Running, 2nd Edition (Oct 2019)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://learning.oreilly.com/library/view/cloud-native/9781492053811/"},"Cloud Native (Aug 2019)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://learning.oreilly.com/library/view/programming-kubernetes/9781492047094/"},"Programming Kubernetes (Jul 2019)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://learning.oreilly.com/library/view/kubernetes-patterns/9781492050278/"},"Kubernetes Patterns (Apr 2019)")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://learning.oreilly.com/library/view/cloud-native-devops/9781492040750/"},"Cloud Native DevOps with Kubernetes (Mar 2019)"))),Object(b.b)("h2",null,"News Letters"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://kubeweekly.io/"},"KubeWeekly newsletter")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://us12.campaign-archive.com/home/?u=0e61a764c5cf33d9f3eff0749&id=846fac531b"},"Software Engineering Daily")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"http://airhacks.news/"},"Adam Bien")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://serverless.email/"},"Serverless.Email")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.jeremydaly.com/newsletter/"},"Off-by-one")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://www.lastweekinaws.com/"},"Last Week in AWS"))),Object(b.b)("h2",null,"Twitter"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/csantanapr"},"Carlos")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/openshift"},"OpenShift")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/rhdevelopers"},"Red Hat Developers")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/IBMcloud"},"IBM Cloud")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/learnk8s"},"Learnk8s")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/kubernauts"},"Kunernaust/IO")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/kelseyhightower"},"Kelsey Hightower")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/CivoCloud"},"CivoCloud")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/bibryam"},"Bilgin Lrbyam")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/danieloh30"},"Daniel Oh")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/burrsutter"},"Burr Sutter")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/brendandburns"},"Brendan Burns")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/jbeda"},"Joe Beda")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/mauilion"},"Duffie Cooley")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/alexellisuk"},"Alex Ellis")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/MicroProfileIO"},"MicroProfile")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/nodejs"},"Node.js")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/nheidloff"},"Niklas Heidloff")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/sspeiche"},"Steve Speicher")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://twitter.com/ibuildthecloud"},"Darren Shepherd"))))}s.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-resources-index-mdx-a6fd6d4a3354b4ccfc25.js.map