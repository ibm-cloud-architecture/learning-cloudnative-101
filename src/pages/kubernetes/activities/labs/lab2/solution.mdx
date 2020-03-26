---
title: Kubernetes Lab 2 - Pod Configuration
---

## Solution

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: yoda-service-config
data:
  yoda.cfg: |-
    yoda.baby.power=100000000
    yoda.strength=10
```

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: yoda-svc

```

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: yoda-db-password
stringData:
  password: 0penSh1ftRul3s!
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: yoda-service
spec:
  serviceAccountName: yoda-svc
  containers:
  - name: yoda-service
    image: bitnami/nginx
    volumeMounts:
      - name: config-volume
        mountPath: /etc/yoda-service
    env:
    - name: DB_PASSWORD
      valueFrom:
        secretKeyRef:
          name: yoda-db-password
          key: password
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"
  volumes:
  - name: config-volume
    configMap:
      name: yoda-service-config
```
