---
title: Tekton Lab
tabs: ['Openshift', 'IKS']
---

## Prerequisites

Make sure your environment is properly setup.

Follow the instructions [here](../../prerequisites#environment-setup)

## SetUp

### Tekton CLI Installation

- [Tekton CLI](https://github.com/tektoncd/cli) is command line utility used to interact with the Tekton resources.

- Follow the instructions on the tekton CLI github repository https://github.com/tektoncd/cli#installing-tkn

- For MacOS for example you can use brew
    ```
    brew tap tektoncd/tools
    brew install tektoncd/tools/tektoncd-cli
    ```
- Verify the Tekton cli
    ```
    tkn version
    ```
- The command should show a result like:
    ```
    $ tkn version
    Client version: 0.10.0
    ```
- If you already have the `tkn` install you can upgrade running
    ```
    brew upgrade tektoncd/tools/tektoncd-cli
    ```

### Tekton Pipelines Installation

- To deploy the Tekton pipelines:
    ```
   oc apply --filename https://raw.githubusercontent.com/ibm-cloud-architecture/learning-cloudnative-101/master/static/yamls/tekton-lab/tekton-operator.yaml
    ```
- ***Note***: It will take few mins for the Tekton pipeline components to be installed, you an watch the status using the command:
    ```
    oc get pods -n openshift-operators -w
    ```
    You can use `Ctrl+c` to terminate the watch
- A successful deployment of Tekton pipelines will show the following pods:
    ```
    NAME                                         READY   STATUS    RESTARTS   AGE
    openshift-pipelines-operator-9cdbbb854-x9tvs   1/1     Running   0          25s
    ```

## Create Target Namespace

- Set the environment variable `NAMESPACE` to `tekton-demo`, if you open a new terminal remember to set this environment again
    ```
    export NAMESPACE=tekton-demo
    ```
- Create a the namespace using the variable `NAMESPACE`
    ```
    oc new-project $NAMESPACE
    ```

## Tasks

### Task Creation

- Create the below yaml files.
- The following snippet shows what a Tekton Task YAML looks like:
- Create the file **task-test.yaml**
    ```yaml
    apiVersion: tekton.dev/v1beta1
    kind: Task
    metadata:
      name: java-test
    spec:
      params:
        - name: url
          default: https://github.com/ibm-cloud-architecture/cloudnative_sample_app
        - name: revision
          default: master
      steps:
        - name: git-clone
          image: alpine/git
          script: |
            git clone -b $(params.revision) --depth 1 $(params.url) /source
          volumeMounts:
            - name: source
              mountPath: /source
        - name: test
          image: maven:3.3-jdk-8
          workingdir: /source
          script: |
            mvn test
            echo "tests passed with rc=$?"
          volumeMounts:
            - name: m2-repository
              mountPath: /root/.m2
            - name: source
              mountPath: /source
      volumes:
        - name: m2-repository
          emptyDir: {}
        - name: source
          emptyDir: {}
    ```

- Each Task has the following:
- **name** - the unique name using which the task can be referred
    - name - the name of the parameter
    - description - the description of the parameter
    - default - the default value of parameter
- **Note**: The `TaskRun` or `PipelineRun` could override the parameter values, if no parameter value is passed then the default value will be used.

- **steps** - One or more sub-tasks that will be executed in the defined order. The step has all the attributes like a Pod spec
- **volumes** - the task can also mount external volumes using the volumes attribute.
- The parameters that were part of the spec inputs params can be used in the steps using the notation `$(<variable-name>)`.

### Task Deploy

- The application test task could be created using the command:
    ```
    oc apply -f task-test.yaml -n $NAMESPACE
    ```

- We will use the Tekton cli to inspect the created resources
    ```
    tkn task ls -n $NAMESPACE
    ```

- The above command should list one Task as shown below:
    ```
    NAME        AGE
    java-test   22 seconds ago
    ```


### TaskRun

- The [TaskRun](https://github.com/tektoncd/pipeline/blob/master/docs/taskruns.md) is used to run a specific task independently. In the following section we will run the build-app task created in the previous step

#### TaskRun Creation

- The following snippet shows what a Tekton TaskRun YAML looks like:
- Create the file **taskrun-test.yaml**
    ```yaml
    apiVersion: tekton.dev/v1beta1
    kind: TaskRun
    metadata:
      generateName: test-task-run-
    spec:
      taskRef:
        name: java-test
      params:
        - name: url
          value: https://github.com/ibm-cloud-architecture/cloudnative_sample_app
    ```
- **generateName** - since the TaskRun can be run many times, in order to have unqiue name across the TaskRun ( helpful when checking the TaskRun history) we use this generateName instead of name. When Kubernetes sees generateName it will generate unquie set of characters and suffix the same to build-app-, similar to how pod names are generated
- **taskRef** - this is used to refer to the Task by its name that will be run as part of this TaskRun. In this example we use build-app Task.
- As described in the earlier section that the Task inputs and outputs could be overridden via TaskRun.
- **params** - this are the parameter values that are passed to the task
- The application test task(java-maven-test) could be run using the command:
    ```bash
    kubectl create -f taskrun-test.yaml -n $NAMESPACE 
    ```
- **Note** - As tasks will use generated name, never use `oc apply -f taskrun-test.yaml`
- We will use the Tekton cli to inspect the created resources:
    ```bash
    tkn tr ls -n $NAMESPACE
    ```
    The above command should list one TaskRun as shown below:
    ```bash
    NAME                       STARTED        DURATION   STATUS
    test-task-run-q6s8c        1 minute ago   ---        Running(Pending)
    ```
    **Note** - It will take few seconds for the TaskRun to show status as Running as it needs to download the container images.

- To check the logs of the Task Run using the `tkn`:
  ```bash
  tkn tr logs -f --last -n $NAMESPACE
  ```
  **Note** - Each task step will be run within a container of its own.
  The -f or -a allows to tail the logs from all the containers of the task. For more options run `tkn tr logs --help`
- If you see the TaskRun status as Failed or Error use the following command to check the reason for error:
    ```bash
    tkn tr describe --last -n $NAMESPACE
    ```
- If it is successful, you will see something like below.
    ```bash
    tkn tr ls -n $NAMESPACE
    ```
    The above command should list one TaskRun as shown below:
    ```bash
    NAME                  STARTED          DURATION     STATUS
    test-task-run   47 seconds ago   34 seconds   Succeeded
    ```

### Creating additional tasks and deploying them

- Create a Task to build a container image and push to the registry
- This task will be later used by the pipeline.
- Download the task file [task-buildah.yaml](/yamls/tekton-lab/task-buildah.yaml) to build the image, push the image to the registy:
- Create the `buildah` Task using the file and the command:
    ```
    oc apply -f task-buildah.yaml -n $NAMESPACE
    ```
- Use the Tekton cli to inspect the created resources
    ```
    tkn task ls -n $NAMESPACE
    ```
- The above command should list one Task as shown below:
    ```
    NAME              AGE
    buildah            4 seconds ago
    java-test         46 minutes ago
    ```


- Create an environment variable for location to push the image to be build. Replace `NAMESPACE` for the dockerhub username, or IBM CR Namespace
    ```bash
    export REGISTRY_SERVER=image-registry.openshift-image-registry.svc:5000
    export IMAGE_URL=${REGISTRY_SERVER}/${NAMESPACE}/cloudnative_sample_app
    echo IMAGE_URL=${IMAGE_URL}
    ```
- Lets create a Task Run for `buildah` Task using the `tkn` CLI passing the inputs, outputs and service account.
    ```bash
    tkn task start buildah --showlog \
      -p image=${IMAGE_URL} \
      -p url=https://github.com/ibm-cloud-architecture/cloudnative_sample_app \
      -s pipeline \
      -n $NAMESPACE
    ```
    The task will start and logs will start printing automatically
    ```
    Taskrun started: buildah-run-vvrg2
    Waiting for logs to be available...
    ```

- Verify the status of the Task Run
    ```bash
    tkn tr ls -n $NAMESPACE
    ```
    Output should look like this
    ```
    NAME                  STARTED          DURATION     STATUS
    buildah-run-zbsrv      2 minutes ago    1 minute     Succeeded
    ```
- To clean up all Pods associated with all Task Runs, delete all the task runs resources
    ```bash
    oc delete taskrun --all -n $NAMESPACE
    ```
- (Optional) Instead of starting the Task via `tkn task start` you could also use yaml TaskRun, create a file **taskrun.yaml**
    ```yaml
    apiVersion: tekton.dev/v1beta1
    kind: TaskRun
    metadata:
      generateName: buildah-task-run-
    spec:
      serviceAccountName: pipeline
      taskRef:
        name: buildah
      params:
        - name: url
          value: https://github.com/ibm-cloud-architecture/cloudnative_sample_app
        - name: image
          value: image-registry.openshift-image-registry.svc:5000/tekton-demo/cloudnative_sample_app
    ```
    Then create the TaskRun with 
    ```bash
    oc create -f taskrun-buildah.yaml -n $NAMESPACE
    ```
    Follow the logs with:
    ```
    tkn tr logs -f -n $NAMESPACE
    ```

## Pipelines

### Pipeline Creation

- Pipelines allows to start multiple Tasks, in parallel or in a [certain order](https://github.com/tektoncd/pipeline/blob/master/docs/pipelines.md#runafter)

- Create the file **pipeline.yaml**, the Pipeline contains two Tasks
    ```yaml
    apiVersion: tekton.dev/v1beta1
    kind: Pipeline
    metadata:
      name: test-build
    spec:
      params:
        - name: repo-url
          default: https://github.com/ibm-cloud-architecture/cloudnative_sample_app
        - name: revision
          default: master
        - name: image-server
          default: image-registry.openshift-image-registry.svc:5000
        - name: image-namespace
          default: tekton-demo
        - name: image-repository
          default: cloudnative_sample_app
      tasks:
        - name: test
          taskRef:
            name: java-test
          params:
            - name: url
              value: $(params.repo-url)
            - name: revision
              value: $(params.revision)
        - name: build
          runAfter: [test]
          taskRef:
            name: buildah
          params:
            - name: image
              value: $(params.image-server)/$(params.image-namespace)/$(params.image-repository)
            - name: url
              value: $(params.repo-url)
            - name: revision
              value: $(params.revision)
    ```

- Pipeline defines a list of Tasks to execute in order, while also indicating if any outputs should be used as inputs of a following Task by using the from field and also indicating the order of executing (using the runAfter and from fields). The same variable substitution you used in Tasks is also available in a Pipeline.
- Create the Pipeline using the command:
  ```bash
  oc apply -f pipeline.yaml -n $NAMESPACE
  ```
- Use the Tekton cli to inspect the created resources
  ```bash
  tkn pipeline ls -n $NAMESPACE
  ```
  The above command should list one Pipeline as shown below:
  ```bash
  NAME              AGE              LAST RUN   STARTED   DURATION   STATUS
  test-build-push   31 seconds ago   ---        ---       ---        ---
  ```

### PipelineRun

#### PipelineRun Creation

- To execute the Tasks in the Pipeline, you must create a PipelineRun. Creation of a PipelineRun will trigger the creation of TaskRuns for each Task in your pipeline.
- Create the file **pipelinerun.yaml**
    ```yaml
    apiVersion: tekton.dev/v1alpha1
    kind: PipelineRun
    metadata:
      generateName: test-build-run-
    spec:
      serviceAccountName: pipeline
      pipelineRef:
        name: test-build
      params:
        - name: image-server
          value: image-registry.openshift-image-registry.svc:5000
        - name: image-namespace
          value: tekton-demo
    ```
    **serviceAccount** - it is always recommended to have a service account associated with PipelineRun, which can then be used to define fine grained roles.
- Create the PipelineRun using the command:
    ```bash
    oc create -f pipelinerun.yaml -n $NAMESPACE
    ```
- We will use the Tekton cli to inspect the created resources
    ```bash
    tkn pipelinerun ls -n $NAMESPACE
    ```

- The above command should list one PipelineRun as shown below:
    ```bash
    NAME                        STARTED         DURATION   STATUS
    test-build-push-run-c7zgv   8 seconds ago   ---        Running
    ```

- Wait for few minutes for your pipeline to complete all the tasks. If it is successful, you will see something like below.
    ```bash
    tkn pipeline ls -n $NAMESPACE
    ```
    ```
    NAME              AGE              LAST RUN                    STARTED         DURATION    STATUS
    test-build-push   33 minutes ago   test-build-push-run-c7zgv   2 minutes ago   2 minutes   Succeeded
    ```
- Run again the pipeline ls command
    ```bash
    tkn pipelinerun ls -n $NAMESPACE
    ```
    ```
    NAME                        STARTED         DURATION    STATUS
    test-build-push-run-c7zgv   2 minutes ago   2 minutes   Succeeded
    ```
    If it is successful, go to your container registry account and verify if you have the `cloudnative_sample_app` image pushed.

- (Optional) Run the pipeline again using the `tkn` CLI
    ```bash
    tkn pipeline start test-build --showlog \
      -s pipeline \
      -n $NAMESPACE
    ```
- (Optional) Re-run the pipeline using last pipelinerun values
    ```bash
    tkn pipeline start test-build-push --last -n $NAMESPACE
    ```

## Deploy Application

- Create a deployment
  ```bash
  oc create deployment cloudnative --image=${IMAGE_URL} -n $NAMESPACE
  ```
- Verify if the pods are running:
  ```bash
  oc get pods -l app=cloudnative -n $NAMESPACE
  ```
- Expose the deployment as a service
  ```bash
  oc expose deployment cloudnative --port=9080 -n $NAMESPACE
  ```
- Expose the service as a route
  ```bash
  oc expose service cloudnative -n $NAMESPACE
  ```
- Now access the compose the URL of the App using IP and NodePort
    ```bash
    export APP_URL="$(oc get route cloudnative --template 'http://{{.spec.host}}')/greeting?name=Carlos"
    echo APP_URL=$APP_URL
    ```
    ```
    http://cloudnative-tekton-demo.apps-crc.testing/greeting?name=Carlos
    ```
- Now access the app from terminal or browser
    ```bash
    curl $APP_URL
    ```
    Output should be
    ```json
    {"id":4,"content":"Welcome to Cloudnative bootcamp !!! Hello, Carlos :)"}
    ```
    ```bash
    open $APP_URL
    ```

