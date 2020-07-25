---
title: Kubernetes Lab 5 - Debugging
---

## Solution
   Check `STATUS` column for not Ready
```
    kubectl get pods --all-namespaces
```

   Check the description of the deployment
    ```
    kubectl describe deployment hyper-drive
    ```
   Save logs for a broken pod
    
    kubectl logs <pod name> -n <namespace> > /home/cloud_user/debug/broken-pod-logs.log
    
   In the description you will see the following is wrong:
- Selector and Label names do not match.
- The Probe is TCP instead of HTTP Get.
- The Service Port is 80 instead of 8080.

   To fix probe, can't kubectl edit, need to delete and recreate the deployment
    ```
    kubectl get deployment <deployment name> -n <namespace> -o yaml --export > hyper-drive.yml
    ```

   Delete pod
    ```
    kubectl delete deployment <deployment name> -n <namespace>
    ```
   Can also use `kubectl replace`

   Edit yaml, and apply
    ```
    kubectl apply -f hyper-drive.yml -n <namespace>
    ```

   Verify
    ```
    kubectl get deployment <deployment name> -n <namespace>
    ```