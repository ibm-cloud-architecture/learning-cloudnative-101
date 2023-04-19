#!/bin/bash

echo 'Running System Checks'

if hash ibmcloud 2>/dev/null
then
    printf '\xE2\x9C\x85 IBM Cloud CLI \n'
else
    printf '\xE2\x9D\x8C IBM Cloud CLI \n \n'

    printf 'Download the IBM Cloud CLI using the links below: \n'
    printf 'For All Users: https://cloud.ibm.com/docs/cli/reference/ibmcloud?topic=cloud-cli-install-ibmcloud-cli \n \n '
fi

if hash git 2>/dev/null
then
    printf '\xE2\x9C\x85 Git CLI \n'
else
    printf '\xE2\x9D\x8C Git CLI \n \n'

    printf 'Download the Git CLI using the links below: \n'
    printf 'For All Users: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git \n \n'
fi

if hash crc 2>/dev/null
then
    printf '\xE2\x9C\x85 CRC \n'
else
    printf '\xE2\x9D\x8C CRC \n \n'

    printf '* A RedHat Account is Required * \n'
    printf 'Download CRC using the links below: \n'
    printf 'For All Users: https://cloud.redhat.com/openshift/install/crc/installer-provisioned \n \n'
fi

if hash minikube 2>/dev/null
then
    printf '\xE2\x9C\x85 Minikube \n'
else
    printf '\xE2\x9D\x8C Minikube \n \n'

    printf 'Download Minikube using the links below: \n'
    printf 'For All Users: https://kubernetes.io/docs/tasks/tools/install-minikube/ \n \n'
fi

if hash docker 2>/dev/null
then
    printf '\xE2\x9C\x85 Docker CLI \n'
else
    printf '\xE2\x9D\x8C Docker CLI \n \n'

    printf 'Download the Docker CLI using the links below: \n'
    printf 'For Mac: https://docs.docker.com/docker-for-mac/install/ \n'
    printf 'For Linux Users: https://docs.docker.com/engine/install/ubuntu/ \n'
    printf 'For Windows: https://docs.docker.com/docker-for-windows/install/ \n \n'

fi

if hash kubectl 2>/dev/null
then
    printf '\xE2\x9C\x85 Kubernetes CLI \n'
else
    printf '\xE2\x9D\x8C Kubernetes CLI \n \n'

    printf 'Download the Kubernetes CLI using the links below: \n'
    printf 'For All Users: https://kubernetes.io/docs/tasks/tools/install-kubectl/ \n \n'
fi

if hash oc 2>/dev/null
then
    printf '\xE2\x9C\x85 Openshift CLI \n'
else
    printf '\xE2\x9D\x8C Openshift CLI \n \n'

    printf 'Download the Openshift CLI using the links below: \n'
    printf 'For All Users: https://mirror.openshift.com/pub/openshift-v4/clients/oc/latest/ \n \n'
fi

if hash tkn 2>/dev/null
then
    printf '\xE2\x9C\x85 Tekton CLI \n'
else
    printf '\xE2\x9D\x8C Tekton CLI \n \n'

    printf 'Download the Tekton CLI using the links below: \n'
    printf 'For All Users: https://github.com/tektoncd/cli#installing-tkn \n \n'
fi

if hash argocd 2>/dev/null
then
    printf '\xE2\x9C\x85 Argo CLI \n'
else
    printf '\xE2\x9D\x8C Argo CLI \n \n'

    printf 'Download the Argo CLI using the links below: \n'
    printf 'For All Users: https://argoproj.github.io/argo-cd/cli_installation/ \n \n'
fi