---
title: Kubernetes Lab 3 - Manage Multiple Containers
---

## Problem

This service has already been packaged into a container image, but there is one special requirement:
 - The legacy app is hard-coded to only serve content on port `8989`, but the team wants to be able to access the service using the standard port `80`.

Your task is to build a Kubernetes pod that runs this legacy container and uses the ambassador design pattern to expose access to the service on port `80`.

This setup will need to meet the following specifications:

- The pod should have the name `vader-service`.
- The `vader-service` pod should have a container that runs the legacy vader service image: `ibmcase/millennium-falcon:1`.
- The `vader-service` pod should have an ambassador container that runs the `haproxy:1.7` image and proxies incoming traffic on port `80` to the legacy service on port `8989` (the HAProxy configuration for this is provided below).
- Port `80` should be exposed as a `containerPort`.


<InlineNotification>

**Note**: You do not need to expose port 8989

</InlineNotification>

- The HAProxy configuration should be stored in a ConfigMap called `vader-service-ambassador-config`.
- The HAProxy config should be provided to the ambassador container using a volume mount that places the data from the ConfigMap in a file at /usr/local/etc/haproxy/haproxy.cfg.
haproxy.cfg should contain the following configuration data:

```
global
    daemon
    maxconn 256

defaults
    mode http
    timeout connect 5000ms
    timeout client 50000ms
    timeout server 50000ms

listen http-in
    bind *:80
    server server1 127.0.0.1:8989 maxconn 32
```

Once your pod is up and running, it's a good idea to test it to make sure you can access the service from within the cluster using port 80. In order to do this, you can create a busybox pod in the cluster, and then run a command to attempt to access the service from within the busybox pod.

Create a descriptor for the busybox pod called `busybox.yml`

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: busybox
spec:
  containers:
  - name: myapp-container
    image: radial/busyboxplus:curl
    command: ['sh', '-c', 'while true; do sleep 3600; done']
```

Create the busybox testing pod.
```
kubectl apply -f busybox.yml
```

Use this command to access `vader-service` using port 80 from within the busybox pod.
```
kubectl exec busybox -- curl $(kubectl get pod vader-service -o=custom-columns=IP:.status.podIP --no-headers):80
```

If the service is working, you should get a message that the hyper drive of the millennium falcon needs repair.

*Relevant Documentation:*
- [Kubernetes Sidecar Logging Agent](https://kubernetes.io/docs/concepts/cluster-administration/logging/#using-a-sidecar-container-with-the-logging-agent)
- [Shared Volumes](https://kubernetes.io/docs/tasks/access-application-cluster/communicate-containers-same-pod-shared-volume/)
- [Distributed System Toolkit Patterns](https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/)
