---
title: Kubernetes Lab Ingress Controller IBM Free Kubernetes cluster
---

The [IBM Kubernetes service](https://www.ibm.com/cloud/container-service) free clusters consist of a single worker node with 2 CPU and 4 GB of memory for experimenting with Kubernetes. Unlike the fee-based service, these clusters do not include capabilities for application load balancing using ingress out-of-the-box. 

## Prerequisites

* Free IBM Kubernetes Cluster (IKS) - upgrade your account from **Lite** plan to create one. In the example commands, we'll assume that this cluster is named `mycluster`
* kubectl - match your cluster API version 
* Log in to IBM Cloud and configure `kubectl` using the `ibmcloud ks cluster config --cluster mycluster` command

## Components

On the IKS cluster, you will install helm charts for a [nginx ingress controller](https://github.com/nginxinc/kubernetes-ingress/tree/release-1.7/deployments/helm-chart) from NGINX. This lab already provides the templated yaml files so there is no need to use helm cli.


## Set up the ingress controller

*Only do this on a free IKS instance* These steps assume facts that only apply to free IKS instances:

* a single worker where the cluster administrator can create pods that bind to host ports
* no pre-existing ingress controller or application load balancer

Using the following steps with a paid instance can cause issues. See the [IBM Cloud containers documentation](https://cloud.ibm.com/docs/containers?topic=containers-cs_network_planning) for information on exposing applications with the ingress/alb services for paid clusters. **You have been warned**

1. Install the NGINX ingress controller with `helm` using a daemonset and no service resource (which will result in a single pod that binds to ports 80 and 443 on the worker node and will skip creation of a `ClusterIP, LoadBalancer, or NodePort` for the daemonset).
    ```bash
    kubectl apply -f https://cloudnative101.dev/yamls/ingress-controller/iks-ingress-v1.7.1.yaml
    ```

1. You can use free domain `.nip.io` to get a domain name using one of the IP Address of your worker nodes. Run this command to set your DOMAIN
    ```bash
    export DOMAIN=$(kubectl get nodes -o jsonpath='{.items[0].status.addresses[?(@.type=="ExternalIP")].address}').nip.io
    echo $DOMAIN
    ```
    
1. You can test the ingress controller using the `$DOMAIN`:

    ```bash
    curl -I http://$DOMAIN
    ```
    ```
    HTTP/1.1 404 Not Found
    Server: nginx/1.17.10
    ...
    ```
    
    A **404** is expected at this point because unlike the [kubernetes nginx ingress](https://github.com/kubernetes/ingress-nginx), the NGINX version of the ingress controller does not create a default backend deployment.

1. To use the ingress controller deploy a sample application, expose a service.
    ```bash
    kubectl create deployment web --image=bitnami/nginx
    kubectl expose deployment web --name=web --port 8080
    ```

1. Now create an Ingress resource
    ```bash
    cat <<EOF | kubectl apply -f -
    apiVersion: networking.k8s.io/v1beta1
    kind: Ingress
    metadata:
      name: web
      labels:
        app: web
    spec:
      rules:
        - host: web.$DOMAIN
          http:
            paths:
              - path: /
                backend:
                  serviceName: web
                  servicePort: 8080
    EOF
    echo "Access your web app at http://web.$DOMAIN"
    ```
1. List the created ingress
    ```bash
    kubectl get ingress web
    ```

1. Access your web application
   ```bash
   curl http://web.$DOMAIN
   ```
   The output prints the html
   ```html
   <p><em>Thank you for using nginx.</em></p>
   ```

1. Delete all the resources created
    ```bash
    kubectl delete deployment,svc,ingress -l app=web
    ```
