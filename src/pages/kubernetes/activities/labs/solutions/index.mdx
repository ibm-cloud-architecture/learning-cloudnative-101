---
title: Kubernetes Lab Solutions
description: Solutions for Kubernetes Labs
---
# Solutions
<Accordion>


<AccordionItem title="Pod Creation">

    apiVersion: v1
    kind: Pod
    metadata:
      name: nginx
      namespace: web
    spec:
      containers:
        - name: nginx
          image: nginx
          command: ["nginx"]
          args: ["-g", "daemon off;", "-q"]
          ports:
          - containerPort: 80
    
</AccordionItem>

<AccordionItem title="Pod Configuration">

    
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: yoda-service-config
    data:
      yoda.cfg: |-
        yoda.baby.power=100000000
        yoda.strength=10
   
------------------------
    
    apiVersion: v1
    kind: Secret
    metadata:
      name: yoda-db-password
    stringData:
      password: 0penSh1ftRul3s!
    
------------------------
    
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
    
</AccordionItem>

<AccordionItem title="Multiple Containers">

    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: vader-service-ambassador-config
    data:
      haproxy.cfg: |-
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
    
------------------------

    apiVersion: v1
    kind: Pod
    metadata:
      name: vader-service
    spec:
      containers:
        - name: millennium-falcon
          image: ibmcase/millennium-falcon:1
        - name: haproxy-ambassador
          image: haproxy:1.7
          ports:
          - containerPort: 80
          volumeMounts:
          - name: config-volume
            mountPath: /usr/local/etc/haproxy
      volumes:
      - name: config-volume
        configMap:
          name: vader-service-ambassador-config
    
------------------------
    
    apiVersion: v1
    kind: Pod
    metadata:
    name: busybox
    spec:
    containers:
    - name: myapp-container
        image: radial/busyboxplus:curl
        command: ['sh', '-c', 'while true; do sleep 3600; done']

   Check it with
   
    kubectl exec busybox -- curl $(kubectl get pod vader-service -o=jsonpath='{.status.podIP}'):80
    
</AccordionItem>

<AccordionItem title="Probes">

    apiVersion: v1
    kind: Pod
    metadata:
      name: energy-shield-service
    spec:
      containers:
      - name: energy-shield
        image: ibmcase/energy-shield:1
        livenessProbe:
          httpGet:
            path: /healthz
            port: 8080
        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
          initialDelaySeconds: 5

</AccordionItem>

<AccordionItem title="Debugging">

   Check `STATUS` column for not Ready

    kubectl get pods --all-namespaces


   Check the description of the deployment

    kubectl describe deployment hyper-drive

   Save logs for broken pod
    
    kubectl logs <pod name> -n <namespace> > /home/cloud_user/debug/broken-pod-logs.log
    
   In the deployment's description you will see the following is wrong:
   <ul>
      <li>Selector and Label names do not match.</li>
      <li>The Probe is TCP instead of HTTP Get.</li>
      <li>The Service Port is 80 instead of 8080.</li>
   </ul>
   To fix probe, can't kubectl edit, need to delete and recreate the deployment

    kubectl get deployment <deployment name> -n <namespace> -o yaml --export > hyper-drive.yml
    

   Delete pod
    
    kubectl delete deployment <deployment name> -n <namespace>

   Edit yaml, and apply
    
    kubectl apply -f hyper-drive.yml -n <namespace>
    

   Verify

    kubectl get deployment <deployment name> -n <namespace>
</AccordionItem>

<AccordionItem title="Rolling Updates">

  Update the deployment to the new version like so:

    kubectl set image deployment/jedi-deployment jedi-ws=bitnamy/nginx:1.18.1 --record

  Check the progress of the rolling update:

    kubectl rollout status deployment/jedi-deployment

  In another terminal window

    kubectl get pods -w

  Get a list of previous revisions.
    
    kubectl rollout history deployment/jedi-deployment

  Undo the last revision.

    kubectl rollout undo deployment/jedi-deployment

  Check the status of the rollout.

    kubectl rollout status deployment/jedi-deployment

</AccordionItem>

<AccordionItem title="Cron Jobs">

    apiVersion: batch/v1beta1
    kind: CronJob
    metadata:
      name: xwing-cronjob
    spec:
      schedule: "*/1 * * * *"
      jobTemplate:
        spec:
          template:
            spec:
              containers:
              - name: xwing-status
                image: ibmcase/xwing-status:1.0
                args:
                - /usr/sbin/xwing-status.sh
              restartPolicy: OnFailure

------------------------

    kubectl get cronjob xwing-cronjob

</AccordionItem>

<AccordionItem title="Services">

    apiVersion: v1
    kind: Service
    metadata:
        name: jedi-svc
    spec:
        type: NodePort
        selector:
            app: jedi
        ports:
        - protocol: TCP
            port: 80
            targetPort: 8080
    
------------------------

    apiVersion: v1
    kind: Service
    metadata:
    name: yoda-svc
    spec:
    type: ClusterIP
    selector:
        app: yoda
    ports:
    - protocol: TCP
        port: 80
        targetPort: 8080

</AccordionItem>

<AccordionItem title="Persistent Volumes">

        apiVersion: v1
        kind: PersistentVolume
        metadata:
          name: postgresql-pv
        spec:
          storageClassName: localdisk
          capacity:
            storage: 1Gi
          accessModes:
            - ReadWriteOnce
          hostPath:
            path: "/mnt/data"

------------------------

        apiVersion: v1
        kind: PersistentVolumeClaim
        metadata:
          name: postgresql-pv-claim
        spec:
          storageClassName: localdisk
          accessModes:
            - ReadWriteOnce
          resources:
            requests:
              storage: 500Mi
        
------------------------

        apiVersion: v1
        kind: Pod
        metadata:
          name: postgresql-pod
        spec:
          containers:
          - name: postgresql
            image: bitnami/postgresql
            ports:
            - containerPort: 5432
            env:
            - name: MYSQL_ROOT_PASSWORD
              value: password
            volumeMounts:
            - name: sql-storage
              mountPath: /bitnami/postgresql/
          volumes:
          - name: sql-storage
            persistentVolumeClaim:
              claimName: postgresql-pv-claim
        
------------------------

</AccordionItem>

</Accordion>

