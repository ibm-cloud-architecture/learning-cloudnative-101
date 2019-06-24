# Cloud-native Overview

## Table of Contents

* [Introduction](#introduction)
* [What is cloud-native ?](#what-is-cloud-native-?)
* [Why cloud-native ?](#why-cloud-native-?)
* [How is it important ?](#how-is-it-important-?)
* [Cloud-native concepts](#cloud-native-concepts)
* [Cloud-native Roadmap](#cloud-native-roadmap)
* [Cloud-native Landscape](#cloud-native-landscape)
* [Cloud-native Serverless Landscape](#cloud-native-serverless-landscape)
* [Summary](#summary)
* [References](#references)

## Introduction

Cloud is everywhere. Today, many companies want to migrate their applications on to cloud. For this migration to be done, the applications must be re-architected in a way that they fully utilize the advantages of the cloud.

## What is cloud-native ?

Cloud-native is more about how we build and run applications taking full advantage of cloud computing rather than worrying about where we deploy it.

-	It is not just about optimizing your applications for cloud.
-	Allows you to build scalable systems.
-	Flexible and allows the companies to deliver continuous improvements.

Also cloud-native is an entirely different way of thinking and reasoning about software architecture.

## Why cloud-native ?

Cloud-native applications are different from the traditional applications that run in your data centres. The applications that are designed in the traditional way are not built keeping cloud compatibility in mind. They may have strong ties with the internal systems. Also, they cannot take advantage of all the benefits of the cloud.

So, we need a new architecture for our applications to utilize the benefits of cloud. There is a need to design the applications keeping cloud in mind and take advantage of several cloud services like storing, queuing, caching etc.

## How is it important ?

Speed, safety, and scalability comes with cloud-native applications. It helps you to quickly deliver the advancements. It allows you to have loose ties into the corporate IT where it most certainly would destabilize legacy architectures. It also helps you to continuously deliver your applications with zero downtime. The infrastructure is less predictable, service instances are all disposable, and the deployments are immutable. Also, to meet the expectations of the today’s world customers, these systems are architected for elastic scalability.

## Cloud-native concepts

### Disposable Infrastructure

While creating applications on cloud, you need several cloud resources as part of it. We often hear how easy it is to create all these resources. But did you ever think how easy is it to dispose them. It is definitely not that easy to dispose them and that is why you don’t hear a lot about it.

In traditional or legacy applications, we have all these resources residing on machines. If these go down, we need to redo them again and most of this is handled by the operations team manually. So, when we are creating applications on cloud, we bring those resources like load balancers, databases, gateways, etc on to cloud as well along with machine images and containers.

While creating these applications, you should always keep in mind that if you are creating a resource when required, you should also be able to destroy it when not required. Without this, we cannot achieve the factors speed, safety and scalability. If you want this to happen, we need automation.

Automation allows you to

-	Deliver new features at any time.
-	Deliver patches faster.
-	Improves the system quality.
-	Facilitates team scale and efficiency.

Now you know what we are talking about. Disposable infrastructure is nothing but `Infrastructure as Code`.

**Infrastructure as Code**

Here, you develop the code for automation exactly as same as the you do for the rest of the application using agile methodologies.

-	Automation code is driven by a story.
-	Versioned in the same repository as rest of the code.
-	Continuously tested as part of CI/CD pipeline.
-	Test environments are created and destroyed along with test runs.

Thus, disposable infrastructure lays the ground work for scalability and elasticity.

### Isolation

In traditional or legacy applications, the applications are monoliths. So, when there is bug or error in the application, you need to fix it. Once you changed the code, the entire application should be redeployed. Also, there may be side effects which you can never predict. New changes may break any components in the application as they are all inter related.

In cloud-native applications, to avoid the above scenario, the system is decomposed into bounded isolated components. Each service will be defined as one component and they are all independent of each other. So, in this case, when there is a bug or error in the application, you know which component to fix and this also avoids any side effects as the components are all unrelated pieces of code.

Thus, cloud-native systems must be resilient to man made errors. To achieve this we need isolation and this avoids a problem in one component affecting the entire system. Also, it helps you to introduce changes quickly in the application with confidence.

### Scalability

Simply deploying your application on cloud does not make it cloud-native. To be cloud native it should be able to take full benefits of the cloud. One of the key features is Scalability.

In today’s world, once your business starts growing, the number of users keep increasing and they may be from different locations. Your application should be able to support more number of devices and it should also be able to maintain its responsiveness. Moreover, this should be efficient and cost-effective.

To achieve this, cloud native application runs in multiple runtimes spread across multiple hosts. The applications should be designed and architected in a way that they support multi regional, active-active deployments. This helps you to increase the availability and avoids single point of failures.

### Disposable architecture

Leveraging the disposable infrastructure and scaling isolated components is important for cloud native applications. Disposable architecture is based on this and it takes the idea of disposability and replacement to the next level.

Most of us think in a monolithic way because we got used to traditional or legacy applications a lot. This may lead us to take decisions in monolithic way rather than in cloud native way. In monoliths, we tend to be safe and don’t do a lot of experimentation. But Disposable architecture is exactly opposite to monolithic thinking. In this approach, we develop small pieces of the component and keep experimenting with it to find an optimal solution.

When there is a breakthrough in the application, you can’t simply take decisions based on the available information which may be incomplete or inaccurate. So, with disposable architecture, you start with small increments, and invest time to find the optimal solution. Sometimes, there may be a need to completely replace the component, but that initial work was just the cost of getting the information that caused the breakthrough. This helps you to minimize waste allowing you to use your resources on controlled experiments efficiently and get good value out of it in the end.

### Value added cloud services

When you are defining an application, there are many things you need to care of. Each and every service will be associated with many things like databases, storage, redundancy, monitoring, etc. For your application, along with your components, you also need to scale the data. You can reduce the operational risk and also get all such things at greater velocity by leveraging the value-added services that are available on cloud. Sometimes, you may need third party services if they are not available on your cloud. You can externally hook them up with your application as needed.

By using the value added services provided by your cloud provider, you will get to know all the available options on your cloud and you can also learn about all the new services. This will help you to take good long-termed decisions. You can definitely exit the service if you find something more suitable for your component and hook that up with your application based on the requirements.

### Polyglot cloud

Most of you are familiar with Polyglot programming. For your application, based on the component, you can choose the programming languages that best suits it. You need not stick to a single programming language for the entire application. If you consider Polyglot persistence, the idea is choose the storage mechanism that suits better on a component by component basis. It allows a better global scale.

Similarly, the next thing will be Polyglot cloud. Like above, here you choose a cloud provider that better suits on a component by component basis. For majority of your components, you may have a go to cloud provider. But, this does not stop you from choosing a different one if it suits well for any of your application components. So, you can run different components of your cloud native system on different cloud providers based on your requirements.

### Self-sufficient, full-stack teams

In a traditional set up, many organizations have teams based on skill set like backend, user interface, database, operations etc. Such a structure will not allow you to build cloud native systems.

In cloud native systems, the system is composed of bounded isolated components. They have their own resources. Each of such component must be owned by self-sufficient, full stack team. That team is entirely responsible for all the resources that belong to that particular component. In this set up, team tends to build quality up front in as they are the ones who deploy it and they will be taking care of it if the component is broken. It is more like you build it and then you run it. So, the team can continuously deliver advancements to the components at their own pace. Also, they are completely responsible for delivering it safely.

### Cultural Change

Cloud native is different way of thinking. We need to first make up our minds, not just the systems, to utilize the full benefits of cloud. Compared to the traditional systems, there will be lots of things we do differently in cloud-native systems.

To make that happen, cultural change is really important. To change the thinking at high level, we just to first prove that the low level practices can truly deliver and encourage lean thinking. With this practice, you can conduct experimentation. Based on the feedback from business, you can quickly and safely deliver your applications that can scale.

## Cloud-native Roadmap

![CNCF Trailmap](./images/CNCF_TrailMap_latest.png)

## Cloud-native Landscape

![landscape](./images/landscape.png)

## Cloud-native Serverless Landscape

![serverless landscape](./images/landscape_serverless.png)

## Summary

In this, we covered the fundamentals of cloud native systems. You now know what cloud native is, why we need it and how it is important. Cloud native is not just deploying your application on cloud but it is more of taking full advantages of cloud. Also, from cloud-native roadmap, you will get an idea on how to design and architect your cloud-native system. You can also get the idea of different tools, frameworks, platforms etc from the cloud-native landscapes.

## References

- [Learn Cloud-native](https://www.ibm.com/cloud/learn/cloud-native)
- [John Gilbert, (2018). Cloud Native Development Patterns and Best Practices. Publisher: Packt Publishing](https://learning.oreilly.com/library/view/cloud-native-development/9781788473927/)
- [CNCF landscape](https://github.com/cncf/landscape)
