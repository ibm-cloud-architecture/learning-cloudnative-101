---
title: Kubernetes Configuration
description: Configuration of Kubernetes
---

<AnchorLinks small>
  <AnchorLink>Container Configuration</AnchorLink>
  <AnchorLink>Resource Requirements</AnchorLink>
  <AnchorLink>ConfigMaps</AnchorLink>
  <AnchorLink>Secrets</AnchorLink>
  <AnchorLink>SecurityContexts</AnchorLink>
  <AnchorLink>Service Accounts</AnchorLink>
  <AnchorLink>Activities</AnchorLink>
</AnchorLinks>

# Container Configuration

**Command and Argument**

When you create a Pod, you can define a command and arguments for the containers that run in the Pod.

The command and arguments that you define in the configuration file override the default command and arguments provided by the container image

Dockerfile vs Kubernetes
Dockerfile Entrypoint -> k8s command
Dockerfile CMD -> k8s args

**Ports**

When you create a Pod, you can specify the port number the container exposes, as best practice is good to put a `name`, this way a service can specify targetport by name reference.

**Environment Variable**

When you create a Pod, you can set environment variables for the containers that run in the Pod. To set environment variables, include the env or envFrom field in the container configuration

A Pod can use environment variables to expose information about itself to Containers running in the Pod. Environment variables can expose Pod fields and Container fields

## Resources

**IKS & OpenShift**
- [Container Commands](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/)
- [Environment Variables](https://kubernetes.io/docs/tasks/inject-data-application/define-environment-variable-container/)
- [Pod Exposing](https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/#exposing-pods-to-the-cluster)

## References

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-cmd-pod
spec:
  containers:
  - name: myapp-container
    image: busybox
    command: ['echo']
  restartPolicy: Never
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-arg-pod
spec:
  containers:
  - name: myapp-container
    image: busybox
    command: ['echo']
    args: ['Hello World']
  restartPolicy: Never
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-port-pod
spec:
  containers:
  - name: myapp-container
    image: bitnami/nginx
    ports:
    - containerPort: 8080
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-env-pod
spec:
  restartPolicy: Never
  containers:
  - name: c
    image: busybox
    env:
    - name: DEMO_GREETING
      value: "Hello from the environment"
    command: ["echo"]
    args: ["$(DEMO_GREETING)"]
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-inter-pod
  labels:
    app: jedi
spec:
  restartPolicy: Never
  containers:
    - name: myapp
      image: bitnami/nginx
      ports:
        - containerPort: 8080
          name: http
      env:
        - name: MY_NODE_NAME
          valueFrom:
            fieldRef:
              fieldPath: spec.nodeName
        - name: MY_POD_NAME
          valueFrom:
            fieldRef:
              fieldPath: metadata.name
        - name: MY_POD_IP
          valueFrom:
            fieldRef:
              fieldPath: status.podIP
      command: ["echo"]
      args: ["$(MY_NODE_NAME) $(MY_POD_NAME) $(MY_POD_IP)"]
```

# Resource Requirements

When you specify a Pod, you can optionally specify how much CPU and memory (RAM) each Container needs. When Containers have resource requests specified, the scheduler can make better decisions about which nodes to place Pods on.

CPU and memory are each a resource type. A resource type has a base unit. CPU is specified in units of cores, and memory is specified in units of bytes.

## Resources

**IKS & OpenShift**
- [Compute Resources](https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container)
- [Memory Management](https://kubernetes.io/docs/tasks/administer-cluster/manage-resources/memory-default-namespace/)

## References

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: my-app
    image: bitnami/nginx
    ports:
      - containerPort: 8080
    resources:
      requests:
        memory: "64Mi"
        cpu: "250m"
      limits:
        memory: "128Mi"
        cpu: "500m"
```


Namespaced defaults mem
```yaml
apiVersion: v1
kind: LimitRange
metadata:
  name: mem-limit-range
spec:
  limits:
  - default:
      memory: 512Mi
    defaultRequest:
      memory: 256Mi
    type: Container
```

Namespaced defaults mem
```yaml
apiVersion: v1
kind: LimitRange
metadata:
  name: cpu-limit-range
spec:
  limits:
  - default:
      cpu: 1
    defaultRequest:
      cpu: 0.5
    type: Container
```

# ConfigMaps

ConfigMaps allow you to decouple configuration artifacts from image content to keep containerized applications portable.

You can data from a ConfigMap in 3 different ways.
- As a single environment variable specific to a single key
- As a set of environment variables from all keys
- As a set of files, each key represented by a file on mounted volume

## Resources

**OpenShift**
- [Mapping Volumes](https://docs.openshift.com/container-platform/4.3/nodes/containers/nodes-containers-projected-volumes.html)

**IKS**
- [ConfigMaps](https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/)

## References

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
   name: my-cm
data:
   color: blue
   location: naboo
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  restartPolicy: Never
  containers:
    - name: myapp
      image: busybox
      command: ["echo"]
      args: ["color is $(MY_VAR)"]
      env:
        - name: MY_VAR
          valueFrom:
            configMapKeyRef:
              name: my-cm
              key: color
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  restartPolicy: Never
  containers:
    - name: myapp
      image: busybox
      command:
        [
          "sh",
          "-c",
          "ls -l /etc/config; echo located at $(cat /etc/config/location)",
        ]
      volumeMounts:
        - name: config-volume
          mountPath: /etc/config
  volumes:
    - name: config-volume
      configMap:
        name: my-cm
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  restartPolicy: Never
  containers:
    - name: myapp
      image: busybox
      command: ["/bin/sh", "-c", "env | sort"]
      envFrom:
        - configMapRef:
            name: my-cm
  restartPolicy: Never
```

# Secrets

Kubernetes secret objects let you store and manage sensitive information, such as passwords, OAuth tokens, and ssh keys. Putting this information in a secret is safer and more flexible than putting it verbatim in a Pod definition or in a container image.

A Secret is an object that contains a small amount of sensitive data such as a password, a token, or a key. Such information might otherwise be put in a Pod specification or in an image; putting it in a Secret object allows for more control over how it is used, and reduces the risk of accidental exposure.


## Resources

**OpenShift**
- [Secrets](https://docs.openshift.com/container-platform/4.3/nodes/containers/nodes-containers-projected-volumes.html)
- [Secret Commands](https://docs.openshift.com/container-platform/4.3/cli_reference/openshift_cli/developer-cli-commands.html#secrets)

**IKS**
- [Secrets](https://kubernetes.io/docs/concepts/configuration/secret/)
- [Secret Distribution](https://kubernetes.io/docs/tasks/inject-data-application/distribute-credentials-secure/)

## References

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
type: Opaque
data:
  username: YWRtaW4=
stringData:
  admin: administrator
```

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: mysecret-config
type: Opaque
stringData:
  config.yaml: |-
    apiUrl: "https://my.api.com/api/v1"
    username: token
    password: thesecrettoken
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  containers:
  - name: my-app
    image: bitnami/nginx
    ports:
      - containerPort: 8080
    env:
      - name: SECRET_USERNAME
        valueFrom:
          secretKeyRef:
            name: mysecret
            key: username
    envFrom:
      - secretRef:
          name: mysecret
    volumeMounts:
      - name: config
        mountPath: "/etc/secrets"
  volumes:
    - name: config
      secret:
        secretName: mysecret-config
```

<Tabs>
<Tab label="OpenShift">

** Create files needed for rest of example.**
```
echo -n 'admin' > ./username.txt
echo -n '1f2d1e2e67df' > ./password.txt
```

** Creating Secret from files. **
```
oc create secret generic db-user-pass --from-file=./username.txt --from-file=./password.txt
```
** Getting Secret **
```
oc get secrets
```
** Gets the Secret's Description. **
```
oc describe secrets/db-user-pass
```

</Tab>

<Tab label="IKS">

** Create files needed for rest of example. **
```
echo -n 'admin' > ./username.txt
echo -n '1f2d1e2e67df' > ./password.txt
```
** Creates the Secret from the files **
```
kubectl create secret generic db-user-pass --from-file=./username.txt --from-file=./password.txt
```
** Gets the Secret **
```
kubectl get secrets
```
** Gets the Secret's Description. **
```
kubectl describe secrets/db-user-pass
```

</Tab>

</Tabs>

# SecurityContexts

A security context defines privilege and access control settings for a Pod or Container.

To specify security settings for a Pod, include the securityContext field in the Pod specification. The securityContext field is a PodSecurityContext object. The security settings that you specify for a Pod apply to all Containers in the Pod.

## Resources

**OpenShift**
- [Managing Security Contexts](https://docs.openshift.com/container-platform/4.3/authentication/managing-security-context-constraints.html)

**IKS**

- [Security Contexts](https://kubernetes.io/docs/tasks/configure-pod-container/security-context/)


## References

Setup minikube VM with users
```
minikube ssh
```
```
su -
```
```
echo "container-user-0:x:2000:2000:-:/home/container-user-0:/bin/bash" >> /etc/passwd
echo "container-user-1:x:2001:2001:-:/home/container-user-1:/bin/bash" >> /etc/passwd
echo "container-group-0:x:3000:" >>/etc/group
echo "container-group-1:x:3001:" >>/etc/group
mkdir -p /etc/message/
echo "Hello, World!" | sudo tee -a /etc/message/message.txt
chown 2000:3000 /etc/message/message.txt
chmod 640 /etc/message/message.txt
```


Using the this `securityContext` the container will be able to read the file `/message/message.txt`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-securitycontext-pod
spec:
  restartPolicy: Never
  securityContext:
    runAsUser: 2000
    runAsGroup: 3000
    fsGroup: 3000
  containers:
    - name: myapp-container
      image: busybox
      command: ["sh", "-c", "cat /message/message.txt && sleep 3600"]
      volumeMounts:
        - name: message-volume
          mountPath: /message
  volumes:
    - name: message-volume
      hostPath:
        path: /etc/message
```

Using the this `securityContext` the container should NOT be able to read the file `/message/message.txt`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-securitycontext-pod
spec:
  restartPolicy: Never
  securityContext:
    runAsUser: 2001
    runAsGroup: 3001
    fsGroup: 3001
  containers:
    - name: myapp-container
      image: busybox
      command: ["sh", "-c", "cat /message/message.txt && sleep 3600"]
      volumeMounts:
        - name: message-volume
          mountPath: /message
  volumes:
    - name: message-volume
      hostPath:
        path: /etc/message
```
** Run to see the errors **

<Tabs>
<Tab label="OpenShift">

** Get Pod Logs **
```
oc logs my-securitycontext-pod
```
** Should return **
```
cat: can't open '/message/message.txt': Permission denied
```
</Tab>

<Tab label="IKS">

** Get Pod Logs **
```
kubectl logs my-securitycontext-pod
```

** Should return **
```
cat: can't open '/message/message.txt': Permission denied
```
</Tab>

</Tabs>

# Service Accounts

A service account provides an identity for processes that run in a Pod.

When you (a human) access the cluster (for example, using kubectl), you are authenticated by the apiserver as a particular User Account (currently this is usually admin, unless your cluster administrator has customized your cluster). Processes in containers inside pods can also contact the apiserver. When they do, they are authenticated as a particular Service Account (for example, default).

User accounts are for humans. Service accounts are for processes, which run in pods.

User accounts are intended to be global. Names must be unique across all namespaces of a cluster, future user resource will not be namespaced. Service accounts are namespaced.

## Resources

**OpenShift**

- [Service Accounts](https://docs.openshift.com/container-platform/4.3/authentication/understanding-and-creating-service-accounts.html)
- [Using Service Accounts](https://docs.openshift.com/container-platform/4.3/authentication/using-service-accounts-in-applications.html)

**IKS**

- [Service Accounts](https://kubernetes.io/docs/reference/access-authn-authz/service-accounts-admin/)
- [Service Account Configuration](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/)

## References

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-service-account
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
spec:
  serviceAccountName: my-service-account
  containers:
  - name: my-app
    image: bitnami/nginx
    ports:
      - containerPort: 8080
```

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: build-robot-secret
  annotations:
    kubernetes.io/service-account.name: my-service-account
type: kubernetes.io/service-account-token
```

<Tabs>
<Tab label="OpenShift">

** Creating a ServiceAccount**
```
oc create sa <service_account_name>
```
** View ServiceAccount Details **
```
oc describe sa <service_account_name>
```

</Tab>

<Tab label="IKS">

** Create a ServiceAccount **
```
kubectl create sa <service_account_name>
```
** View ServiceAccount Details **
```
kubectl describe sa <service_account_name>
```

</Tab>

</Tabs>

## Activities

| Task                            | Description         | Link        |
| --------------------------------| ------------------  |:----------- |
| *** Try It Yourself ***                         |         |         |
| Pod Creation | Challenge yourself to create a Pod YAML file to meet certain parameters. | [Pod Creation](../kube-overview/activities/labs/lab1) |
| Pod Configuration | Configure a pod to meet compute resource requirements. | [Pod Configuration](../kube-overview/activities/labs/lab2) |
