---
title: CICD Project Challenge
description: CICD Project Challenge
---

## Challenge

You are provided with the challenge to implement a demo that shows best practices for DevOps.
Implement Continous Integration and Continous Deployment for an Application on Kubernetes.

- Git repository with application code and Dockerfile, Developers have access to this git repository
- Git repository with pipeline manifest files (ie yamls) files, Operators have access to this repository
- Git repository with application manifest (ie yaml) files, automation only have access to this repository

## Specifications

![overview-diagram](images/tekton-argocd.png)

### Code Git Repository
- [Git repository with application code](https://github.com/ibm-cloud-architecture/tutorial-tekton-argocd-code)
- Create a new git repository using this repo as [template](https://github.com/ibm-cloud-architecture/tutorial-tekton-argocd-code/generate)
- Use the `Dockerfile` on the root of the repository to build a container image

### Infra Git Repository
- [Git repository with application manifest](https://github.com/ibm-cloud-architecture/tutorial-tekton-argocd-infra)
- Create a new git repository using this repo as [template](https://github.com/ibm-cloud-architecture/tutorial-tekton-argocd-infra/generate)
- The directory `ocp/yamls` contains the application manifest files

### Pipeline Git Repository
- Create new repository to store pipeline resources
- Use the ServiceAccount `pipeline`
- Use the following guide to create a Pipeline, Tasks, and secret:
    - Create a pipeline, tasks, secrets on the target namespace
    - Git clone the source code from the App repo
    - Build a container image using the `Dockerfile` on the repo
    - Tag the image using the 7 first characters of the git hash corresponding to last git commit
    - Push the container image into the internal image registry on the same namespace
    - Git clone the Infra git repo
    - Update the image on the deployment yaml with the new image id that has the tag with value of the git commit
    - Git commit the changes
    - Git push the changes to the infra git repo, this should trigger argocd to pickup any changes from the infra repo.

## Hints
- The secret contains the git username and token with permission `repo` that gives write access to the git infra repository
- OpenShift 4 comes with an internal image registry you can push from a Tekton task
- The image registry url contains the service name, port, namespace, image name and tag
    ```
    image-registry.openshift-image-registry.svc:5000/my-namespace-app/image-name:my-tag
    ```
- The image registry only handles ssl/https connections, but it uses a self sign certificate
- You need to ignore TLS-Verify to be able to succesfully push and ignore ssl errors for example using buildah set the flag `--tls-verify="false"`

## Extra Credit

- Make the pipeline to run automatically every time new code gets pushed to the Code git repository
  - Configure a Github Webhook using the new [Tekton Triggers](https://github.com/tektoncd/triggers) listener and bindings

## Solution
Here is one implementation as a [solution](./solution)
