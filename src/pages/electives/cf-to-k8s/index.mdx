---
title: Kubernetes for CloudFoundry users
description: Cloud Foundry to Kubernetes
---

## Overview

Provided that you have been working mainly with CloudFoundry based application and had just learned on what Kubernetes is, this module tries to bridge the concept of what is happening in Kubernetes world that would correspond to the familiar thing in CloudFoundry application. This module assumes that you are very familar with CloudFoundry and have some basic understanding of Kubernetes objects and resources.

The discussion in this module comes in two sub-sections:

- Application execution environment comparison for CloudFoundry and Kubernetes and OpenShift
- Application staging process comparison for CloudFoundry

## Application execution environment

The application execution environment diagram for CloudFoundry below demonstrates the components that runs CloudFoundry applications.

<img src="./images/cf.PNG" alt="cf"></img>

In CloudFoundry, application runs within a Diego cell (used to be a DEA node) which runs a Garden container.
The cell is constructed from Droplet image that is stored in CloudFoundry BLOB store.
CloudFoundry provides router (Go router) for accessing the application running in the cell so that external access is enabled for the application.
For the application to access the backend services, it facilitates an environment variable called VCAP_SERVICES, which contains the credentials and access information for those backend services.

In Kubernetes application runs in the Kubernetes cluster as demonstrated below:

<img src="./images/kube.PNG" alt="Kube"></img>

- Kubernetes applications run in Pods, which are similar to Cloud Foundry Diego cells.
- There is a Kubernetes Service that performs load balancing for all the pod instances.
- External access to the Service is received from either a NodePort, a LoadBalancer service or an Ingress entry.
- The combination of Kubernetes Service and Ingress entry serves a similar function to the Go Router in CloudFoundry.
- Backend services binding in Kubernetes must be defined by the developer, the system does not provide a binding.
- Typically the information on where the service is located can be found in ConfigMaps and the credentials to access the service is stored in Secrets.
- So you can ended up with multiple configurations that are provided by the backend environment that you must bind to each of the applications that uses them.
- These ConfigMaps and Secrets are comparable to CloudFoundry's provided VCAP_SERVICES environment variable.

For OpenShift, which is derived from Kubernetes, the architecture is very similar. However, OpenShift has provided some functionality for the cluster that allows a more simple configuration of a cluster.

- One of the example is OpenShift router, which provides a combined way to develop an Ingress entry with a setting of DNS resources, this function is very similar to CloudFoundry Go Router.
- OpenShift uses a DeploymentConfig, which has more capabilities than a Kubernetes Deployment, it supports the definition of triggers, which allow the pods to be modified when a certain situation (such as image or configuration is updated).

<img src="./images/oc.PNG" alt="oc"></img>

## Application Staging

The staging of application, from the source repository into a runnable image differs greatly from one platform to another.
The staging is performed after the build artifact is collected, this include performing maven, gradle or other build mechanism.
Application is then staged into the Cloud platform; this staging process is typically split into: application container image creation and application container deployment.

<img src="./images/staging.PNG" alt="staging"></img>

In CloudFoundry, Droplet images are built by the CloudFoundry buildpacks.

- The buildpack will evaluate the application artifacts and construct a runnable Droplet image by providing the necessary pre-requisites and collect dependent codes.
- This process is explained further in [CloudFoundry staging](https://docs.cloudfoundry.org/concepts/how-applications-are-staged.html).
- The runnable Droplet image is stored in BLOB store and then to be deployed as a Garden container in a Diego cell.
- The service binding is provided by CloudFoundry as VCAP_SERVICES environment variable in the container.
- Finally CloudFoundry defines a Router entry for the application.

Although these processes sound complicated, it is actually performed using a single command `cf push`.

In OpenShift the staging of application is perfomed using BuildConfig, DeploymentConfig and bindings are defined in ConfigMaps and Secrets.

- OpenShift is using a **BuildConfig** generates an **ImageStream** in OpenShift.
- ImageStream represent a container image which can be build using Dockerfile or S2I process.
- The image building part can be accomplished using the command:

```bash
 oc start-build (buildconfig_name)
```

- You or the backend service provider then create ConfigMap and Secrets to access backend services.
- Finally, you use a Template object that contains at least a **DeploymentConfig** (with **Pod** definition), **Service** and **Route** to deploy the application.
- You deploy the application using the command:

```bash
 oc new-app -f template.yaml
```
In Kubernetes, staging is performed as follows:

- You create a **docker image** using a Dockerfile and store the image in a **Docker repository**
```bash
 docker build -t (image)
 docker push (image)
```
- You create ConfigMap and Secrets to access backend services
- You use YAML file to deploy Kubernetes resources such as **Kubernetes Pod** in a Deployment, **Kubernetes Service** and maybe an **Ingress**
```bash
 kubectl apply -f (template)
```

## Activities

| Task                            | Description         | Link        |
| --------------------------------| ------------------  |:----------- |
| *** Try It Yourself ***                         |         |         |
| Migrating to IKS | Migrating from Cloud Foundry to IKS | [IKS](../cf-to-k8s/iks-migration/) |
| Migrating to OpenShift | Migrating from Cloud Foundry to OpenShift | [OCP](../cf-to-k8s/oc-migration/) |