---
title: Kubernetes Lab 9 - Network Policies
---

## Problem

Setup minikube

```
minikube start --network-plugin=cni
kubectl apply -f https://docs.projectcalico.org/v3.9/manifests/calico.yaml
kubectl -n kube-system set env daemonset/calico-node FELIX_IGNORELOOSERPF=true
kubectl -n kube-system get pods | grep calico-node
```

Create secured pod
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: network-policy-secure-pod
  labels:
    app: secure-app
spec:
  containers:
  - name: nginx
    image: bitnami/nginx
    ports:
    - containerPort: 8080
```

Create client pod
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: network-policy-client-pod
spec:
  containers:
  - name: busybox
    image: radial/busyboxplus:curl
    command: ["/bin/sh", "-c", "while true; do sleep 3600; done"]
```

Create a policy to allow only client pods with label `allow-access: "true"` to access secure pod
 