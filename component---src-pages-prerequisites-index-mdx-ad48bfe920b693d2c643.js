(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),o=a("NmYn"),i=a.n(o),c=a("Wbzz"),b=a("Xrax"),r=a("k4MR"),p=a("TSYQ"),s=a.n(p),u=a("QH2O"),m=a.n(u),d=a("qKvR");var O=e=>{let{title:t,theme:a,tabs:n=[]}=e;return Object(d.b)("div",{className:s()(m.a.pageHeader,{[m.a.withTabs]:n.length,[m.a.darkMode]:"dark"===a})},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},t)))))},j=a("BAC9");var h=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=Object(c.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:o,branch:i}=a||n,b=l+"/edit/"+i+o+"/src/pages"+t;return l?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:b},"Edit this page on GitHub"))):null},N=a("FCXl"),g=a("dI71"),f=a("I8xM");var w=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map(e=>{const t=i()(e,{lower:!0,strict:!0}),l=t===n,o=new RegExp(n+"/?(#.*)?$"),b=a.replace(o,t);return Object(d.b)("li",{key:e,className:s()({[f.selectedItem]:l},f.listItem)},Object(d.b)(c.Link,{className:f.link,to:""+b},e))});return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":e},Object(d.b)("ul",{className:f.list},l))))))},t}(l.a.Component),k=a("MjG9"),y=a("CzIb"),C=a("Asxa"),v=a("OIbQ"),I=a.n(v);var x=e=>{let{date:t}=e;const a=new Date(t);return t?Object(d.b)(C.c,{className:I.a.row},Object(d.b)(C.a,null,Object(d.b)("div",{className:I.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=e=>{let{pageContext:t,children:a,location:n,Title:l}=e;const{frontmatter:o={},relativePagePath:p,titleType:s}=t,{tabs:u,title:m,theme:j,description:g,keywords:f,date:C}=o,{interiorTheme:v}=Object(y.a)(),{site:{pathPrefix:I}}=Object(c.useStaticQuery)("2456312558"),T=I?n.pathname.replace(I,""):n.pathname,S=u?T.split("/").filter(Boolean).slice(-1)[0]||i()(u[0],{lower:!0}):"",M=j||v;return Object(d.b)(r.a,{tabs:u,homepage:!1,theme:M,pageTitle:m,pageDescription:g,pageKeywords:f,titleType:s},Object(d.b)(O,{title:l?Object(d.b)(l,null):m,label:"label",tabs:u,theme:M}),u&&Object(d.b)(w,{title:m,slug:T,tabs:u,currentTab:S}),Object(d.b)(k.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:p}),Object(d.b)(x,{date:C})),Object(d.b)(N.a,{pageContext:t,location:n,slug:T,tabs:u,currentTab:S}),Object(d.b)(b.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},xbZq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return j}));var n=a("wx14"),l=a("Ff2n"),o=(a("q1tI"),a("7ljp")),i=a("013z");a("qKvR");const c={},b=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)},r=b("AnchorLinks"),p=b("AnchorLink"),s=b("Tabs"),u=b("Tab"),m=b("InlineNotification"),d={_frontmatter:c},O=i.a;function j(e){let{components:t}=e,a=Object(l.a)(e,["components"]);return Object(o.b)(O,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(r,{small:!0,mdxType:"AnchorLinks"},Object(o.b)(p,{mdxType:"AnchorLink"},"Required skills"),Object(o.b)(p,{mdxType:"AnchorLink"},"Workstation Setup"),Object(o.b)(p,{mdxType:"AnchorLink"},"Environment Setup"),Object(o.b)(p,{mdxType:"AnchorLink"},"Next Steps")),Object(o.b)("h2",null,"Required skills"),Object(o.b)("p",null,"This activites contained here require you to be proficient in working from the command line with a linux shell (Bash, Zsh, etc.) Below is a partial list of activites you should be able to perform. "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Copy, move, and rename files"),Object(o.b)("li",{parentName:"ul"},"Understand linux file permissions"),Object(o.b)("li",{parentName:"ul"},"Edit text files (vi, vim, emacs, etc)"),Object(o.b)("li",{parentName:"ul"},"Edit environment variables ($PATH)")),Object(o.b)("p",null,"Here is a course for learning (or brushing up) on working from the linux command line ",Object(o.b)("a",{parentName:"p",href:"https://www.udacity.com/course/linux-command-line-basics--ud595"},"Linux Command Line Basics")),Object(o.b)("h2",null,"Workstation Setup"),Object(o.b)(s,{mdxType:"Tabs"},Object(o.b)(u,{label:"Openshift (MacOS/Linux)",mdxType:"Tab"},Object(o.b)("h2",null,"Create accounts"),Object(o.b)("p",null,"You’ll need these accounts to use the Developer Tools environment."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"http://github.com"},"GitHub account")," (public, not enterprise): Create one if you do not have one aleady. If you have not logged in for a while, make sure your login is working.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com"},"IBM Cloud Account"),": Create one if needed, make sure you can log in. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.katacoda.com/"},"Katacoda Account"),": The account is free and easy to create.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.redhat.com/en"},"RedHat Account"),": Needed for CodeReady Containers."))),Object(o.b)("h2",null,"Run System Check Script"),Object(o.b)("p",null,"Run the following command in your terminal to check which tools need to be installed."),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"wget"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"wget -O - https://cloudnative101.dev/scripts/setup/system-check.sh | sh\n")),Object(o.b)("p",null,"Using ",Object(o.b)("inlineCode",{parentName:"p"},"curl"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"curl -s https://cloudnative101.dev/scripts/setup/system-check.sh | sh\n")),Object(o.b)("p",null,"After the script is run, make sure to install any missing tools."),Object(o.b)("h2",null,"Install CLIs and tools"),Object(o.b)("p",null,"The following is a list of desktop tools required to help with installation and development."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://git-scm.com/"},"Git Client"),": Needs to be installed in your development operating system, it comes as standard for Mac OS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started"},"IBM Cloud CLI"),": Required for management of IBM Cloud Account and management of your managed IBM Kubernetes and Red Hat OpenShift clusters"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Don’t install just the ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-install-ibmcloud-cli"},"IBM Cloud CLI"),", install the ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#step1-install-idt"},"IBM Cloud CLI and Developer Tools"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"curl -sL https://ibm.biz/idt-installer | bash\n")))))),Object(o.b)(m,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Note: ")," If you log in to the web UI using SSO, you’ll need to ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/iam?topic=iam-federated_id"},"create an API key")," for logging into the CLI.\nYou can also use this API key for ",Object(o.b)("a",{parentName:"p",href:"/admin/installation-ibm-cloud"},"installing the Developer Tools environment"),".")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop"),": Required for building and running docker images."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Installed and running on your local machine"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://github.com/tektoncd/cli"},"Tekton CLI"),": Used to help control Tekton\npipelines from the command line."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"    brew tap tektoncd/tools\n    brew install tektoncd/tools/tektoncd-cli\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"Visual Studio Code"),": A popular code editor"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You will be required to edit some files, having a good quality editor is always best practice"),Object(o.b)("li",{parentName:"ul"},"Enabling ",Object(o.b)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"},"launching VSCode from a terminal")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html"},"JDK 11"),": ",Object(o.b)("em",{parentName:"p"},"Optional")," installed on your local machine"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Used for SpringBoot content"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://code-ready.github.io/crc/#installing-codeready-containers_gsg"},"OpenShift CodeReady Containers (CRC)")))),Object(o.b)(m,{kind:"warning",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Warning:")," Make sure you have Cisco VPN turned off when using CRC."))),Object(o.b)(u,{label:"Openshift (Windows)",mdxType:"Tab"},Object(o.b)("h2",null,"Create accounts"),Object(o.b)("p",null,"You’ll need these accounts to use the Developer Tools environment."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"http://github.com"},"GitHub account")," (public, not enterprise): Create one if you do not have one aleady. If you have not logged in for a while, make sure your login is working.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com"},"IBM Cloud Account"),": Create one if needed, make sure you can log in. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.katacoda.com/"},"Katacoda Account"),": The account is free and easy to create.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.redhat.com/en"},"RedHat Account"),": Needed for CodeReady Containers."))),Object(o.b)("h2",null,"Cloud Native VM"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/csantanapr/vagrant-cloud-native#install"},"Cloud Native VM")," it comes pre-installed with kubernetes and all cloud native CLIs."),Object(o.b)("p",null,"Is highly recommended for Windows users to use this VM."),Object(o.b)("h2",null,"Install CLIs and tools"),Object(o.b)("p",null,"The following is a list of desktop tools required to help with installation and development."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://git-scm.com/"},"Git Client"),": Needs to be installed in your development operating system, it comes as standard for Mac OS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started"},"IBM Cloud CLI"),": Required for management of IBM Cloud Account and management of your managed IBM Kubernetes and Red Hat OpenShift clusters"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Don’t install just the ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-install-ibmcloud-cli"},"IBM Cloud CLI"),", install the ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#step1-install-idt"},"IBM Cloud CLI and Developer Tools"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"curl -sL https://ibm.biz/idt-installer | bash\n")))))),Object(o.b)(m,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Note: ")," If you log in to the web UI using SSO, you’ll need to ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/iam?topic=iam-federated_id"},"create an API key")," for logging into the CLI.\nYou can also use this API key for ",Object(o.b)("a",{parentName:"p",href:"/admin/installation-ibm-cloud"},"installing the Developer Tools environment"),".")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop"),": Required for building and running docker images."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Installed and running on your local machine"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://github.com/tektoncd/cli"},"Tekton CLI"),": Used to help control Tekton pipelines from the command line."))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"Visual Studio Code"),": A popular code editor"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You will be required to edit some files, having a good quality editor is always best practice"),Object(o.b)("li",{parentName:"ul"},"Enabling ",Object(o.b)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"},"launching VSCode from a terminal")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html"},"JDK 11"),": ",Object(o.b)("em",{parentName:"p"},"Optional")," installed on your local machine"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Used for SpringBoot content"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://code-ready.github.io/crc/#installing-codeready-containers_gsg"},"OpenShift CodeReady Containers (CRC)")))),Object(o.b)(m,{kind:"warning",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Warning:")," Make sure you have Cisco VPN turned off when using CRC."))),Object(o.b)(u,{label:"Kubernetes (MacOS/Linux)",mdxType:"Tab"},Object(o.b)("h2",null,"Create accounts"),Object(o.b)("p",null,"You’ll need these accounts to use the Developer Tools environment."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"http://github.com"},"GitHub account")," (public, not enterprise): Create one if you do not have one aleady. If you have not logged in for a while, make sure your login is working.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com"},"IBM Cloud Account"),": Create one if needed, make sure you can log in. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.katacoda.com/"},"Katacoda Account"),": The account is free and easy to create."))),Object(o.b)("h2",null,"Run System Check Script"),Object(o.b)("p",null,"Run the following command in your terminal to check which tools need to be installed."),Object(o.b)("p",null,"Using wget:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"wget -O - https://cloudnative101.dev/scripts/setup/system-check.sh | sh\n")),Object(o.b)("p",null,"Using curl:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"curl -s https://cloudnative101.dev/scripts/setup/system-check.sh | sh\n")),Object(o.b)("p",null,"After the script is run, make sure to install any missing tools."),Object(o.b)("h2",null,"Install CLIs and tools"),Object(o.b)("p",null,"The following is a list of desktop tools required to help with installation and development."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://git-scm.com/"},"Git Client"),": Needs to be installed in your development operating system, it comes as standard for Mac OS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started"},"IBM Cloud CLI"),": Required for management of IBM Cloud Account and management of your managed IBM Kubernetes and Red Hat OpenShift clusters"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Don’t install just the ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-install-ibmcloud-cli"},"IBM Cloud CLI"),", install the ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#step1-install-idt"},"IBM Cloud CLI and Developer Tools"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"curl -sL https://ibm.biz/idt-installer | bash\n")))))),Object(o.b)(m,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Note: ")," If you log in to the web UI using SSO, you’ll need to ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/iam?topic=iam-federated_id"},"create an API key")," for logging into the CLI.\nYou can also use this API key for ",Object(o.b)("a",{parentName:"p",href:"/admin/installation-ibm-cloud"},"installing the Developer Tools environment"),".")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop"),": Required for building and running docker images."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Installed and running on your local machine"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://github.com/tektoncd/cli"},"Tekton CLI"),": Used to help control Tekton\npipelines from the command line."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"    brew tap tektoncd/tools\n    brew install tektoncd/tools/tektoncd-cli\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"Visual Studio Code"),": A popular code editor"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You will be required to edit some files, having a good quality editor is always best practice"),Object(o.b)("li",{parentName:"ul"},"Enabling ",Object(o.b)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"},"launching VSCode from a terminal")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html"},"JDK 11"),": ",Object(o.b)("em",{parentName:"p"},"Optional")," installed on your local machine"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Used for SpringBoot content"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"},"Minikube"),": Follow the instructions for your Operating System."))),Object(o.b)(m,{kind:"warning",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Warning:")," Make sure you have Cisco VPN turned off when using minikube."))),Object(o.b)(u,{label:"Kubernetes (Windows)",mdxType:"Tab"},Object(o.b)("h2",null,"Create accounts"),Object(o.b)("p",null,"You’ll need these accounts to use the Developer Tools environment."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"http://github.com"},"GitHub account")," (public, not enterprise): Create one if you do not have one aleady. If you have not logged in for a while, make sure your login is working.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com"},"IBM Cloud Account"),": Create one if needed, make sure you can log in. ")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.katacoda.com/"},"Katacoda Account"),": The account is free and easy to create."))),Object(o.b)("h2",null,"Cloud Native VM"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/csantanapr/vagrant-cloud-native#install"},"Cloud Native VM")," it comes pre-installed with kubernetes and all cloud native CLIs."),Object(o.b)("p",null,"Is highly recommended for Windows users to use this VM."),Object(o.b)("h2",null,"Install CLIs and tools"),Object(o.b)("p",null,"The following is a list of desktop tools required to help with installation and development."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://git-scm.com/"},"Git Client"),": Needs to be installed in your development operating system, it comes as standard for Mac OS")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started"},"IBM Cloud CLI"),": Required for management of IBM Cloud Account and management of your managed IBM Kubernetes and Red Hat OpenShift clusters"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Don’t install just the ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-install-ibmcloud-cli"},"IBM Cloud CLI"),", install the ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#step1-install-idt"},"IBM Cloud CLI and Developer Tools"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"curl -sL https://ibm.biz/idt-installer | bash\n")))))),Object(o.b)(m,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Note: ")," If you log in to the web UI using SSO, you’ll need to ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/iam?topic=iam-federated_id"},"create an API key")," for logging into the CLI.\nYou can also use this API key for ",Object(o.b)("a",{parentName:"p",href:"/admin/installation-ibm-cloud"},"installing the Developer Tools environment"),".")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"Docker Desktop"),": Required for building and running docker images."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Installed and running on your local machine"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://github.com/tektoncd/cli"},"Tekton CLI"),": Used to help control Tekton\npipelines from the command line."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"    brew tap tektoncd/tools\n    brew install tektoncd/tools/tektoncd-cli\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"Visual Studio Code"),": A popular code editor"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"You will be required to edit some files, having a good quality editor is always best practice"),Object(o.b)("li",{parentName:"ul"},"Enabling ",Object(o.b)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"},"launching VSCode from a terminal")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html"},"JDK 11"),": ",Object(o.b)("em",{parentName:"p"},"Optional")," installed on your local machine"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Used for SpringBoot content"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-minikube/"},"Minikube"),": Follow the instructions for your Operating System."))),Object(o.b)(m,{kind:"warning",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Warning:")," Make sure you have Cisco VPN turned off when using minikube.")))),Object(o.b)("h2",null,"Environment Setup"),Object(o.b)(s,{mdxType:"Tabs"},Object(o.b)(u,{label:"MiniKube",mdxType:"Tab"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Verify your cluster has 4GB+ memory, and kubernetes 1.16+",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"minikube config view\n"))),Object(o.b)("li",{parentName:"ul"},"Verify your ",Object(o.b)("inlineCode",{parentName:"li"},"vm-driver")," is set for ",Object(o.b)("inlineCode",{parentName:"li"},"hyperkit"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"minikube config set vm-driver hyperkit\n"))),Object(o.b)("li",{parentName:"ul"},"In case memory is not set, or need to increase set the memory and recreate the VM",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"minikube config set memory 4096\nminikube config set kubernetes-version v1.16.6\nminikube delete\nminikube start\n"))),Object(o.b)("li",{parentName:"ul"},"Kubernetes should be v1.15+",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"kubectl version\n"))))),Object(o.b)(u,{label:"CRC (MiniShift)",mdxType:"Tab"},Object(o.b)("p",null,"Make sure CRC is installed. Check out the ",Object(o.b)("a",{parentName:"p",href:"https://access.redhat.com/documentation/en-us/red_hat_codeready_containers/1.0/html/getting_started_guide/getting-started-with-codeready-containers_gsg"},"CRC Page")," "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Setup CRC ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  crc setup\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"}," Start CRC ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"  crc start\n"))),Object(o.b)(u,{label:"IKS",mdxType:"Tab"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Login to ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com"},"IBM Cloud")," with your IBM ID.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click “Create Resource” and search for “kubernetes service”.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Select the tile for “Kubernetes Service” and do the following:"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Select the “Free Cluster” plan."),Object(o.b)("li",{parentName:"ul"},"Name your cluster."),Object(o.b)("li",{parentName:"ul"},"Select “Create” at the bottom right of the screen."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Once the Cluster is provisioned, Click on the “Connect via CLI” in the top right corner.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Follow the instructions to connect and you are set to go.")))),Object(o.b)(u,{label:"OpenShift on IBM Cloud (4.x)",mdxType:"Tab"},Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In this approach you share an OpenShift cluster on IBM Cloud with other bootcamp attendees.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Considering 10-15 attendees we recommend a cluster with 3 worker nodes (each 8 vCPUs + 32GB RAM - b3c.8x32).")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Ask your IBM cloud account owner to provide access to an OpenShift cluster.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"In addition to the IBM Cloud CLI also install the ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/openshift?topic=openshift-openshift-cli#cli_oc"},"OpenShift Origin CLI")," to be able to execute all commands.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Open your OpenShift web console from within your IBM cloud account, select your profile and choose “copy login command” to retrieve an access token for the login.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Login with your OpenShift Origin CLI."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  oc login --token=<token> --server=<server-url>:<server-port>\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Create your own project / namespace in OpenShift that you will leverage across all labs."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"  oc new-project <dev-your_initials>\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Validate in the OpenShift web console that your project has been created (Administrator view -> Home -> Projects)"))))),Object(o.b)("h2",null,"Next Steps"),Object(o.b)("p",null,"Once Setup is complete, you can now begin reading our about ",Object(o.b)("a",{parentName:"p",href:"../concepts/cloud-native"},"Cloud Native")," by clicking the link, or the ",Object(o.b)("inlineCode",{parentName:"p"},"Next")," button below."))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-prerequisites-index-mdx-ad48bfe920b693d2c643.js.map