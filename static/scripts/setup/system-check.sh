#!/bin/bash

echo 'Running System Checks'

if hash ibmcloud 2>/dev/null
then
    printf '\xE2\x9C\x85 IBM Cloud CLI \n'
else
    printf '\xE2\x9D\x8C IBM Cloud CLI \n \n'

    printf 'Download IBM Cloud CLI using the links below: \n'
    printf 'For Mac: https://brew.sh/ \n'
    printf 'For Linux Users: https://docs.brew.sh/Homebrew-on-Linux \n \n'
fi

if hash git 2>/dev/null
then
    printf '\xE2\x9C\x85 Git CLI \n'
else
    printf '\xE2\x9D\x8C Git CLI \n \n'

    printf 'Download Git using the links below: \n'
    printf 'For Mac: https://brew.sh/ \n'
    printf 'For Linux Users: https://docs.brew.sh/Homebrew-on-Linux \n \n'
fi

if hash crc 2>/dev/null
then
    printf '\xE2\x9C\x85 CRC \n'
else
    printf '\xE2\x9D\x8C CRC \n \n'

    printf 'Download CRC using the links below: \n'
    printf 'For Mac: https://brew.sh/ \n'
    printf 'For Linux Users: https://docs.brew.sh/Homebrew-on-Linux \n \n'
fi

if hash minikube 2>/dev/null
then
    printf '\xE2\x9C\x85 Minikube \n'
else
    printf '\xE2\x9D\x8C Minikube \n \n'

    printf 'Download Minikube using the links below: \n'
    printf 'For Mac: https://brew.sh/ \n'
    printf 'For Linux Users: https://docs.brew.sh/Homebrew-on-Linux \n \n'
fi

if hash docker 2>/dev/null
then
    printf '\xE2\x9C\x85 Docker CLI \n'
else
    printf '\xE2\x9D\x8C Docker CLI \n \n'

    printf 'Download Docker using the links below: \n'
    printf 'For Mac: https://brew.sh/ \n'
    printf 'For Linux Users: https://docs.brew.sh/Homebrew-on-Linux \n \n'
fi

if hash kubectl 2>/dev/null
then
    printf '\xE2\x9C\x85 Kubernetes CLI \n'
else
    printf '\xE2\x9D\x8C Kubernetes CLI \n \n'

    printf 'Download Kubernetes using the links below: \n'
    printf 'For Mac: https://brew.sh/ \n'
    printf 'For Linux Users: https://docs.brew.sh/Homebrew-on-Linux \n \n'
fi

if hash oc 2>/dev/null
then
    printf '\xE2\x9C\x85 Openshift CLI \n'
else
    printf '\xE2\x9D\x8C Openshift CLI \n \n'

    printf 'Download Openshift using the links below: \n'
    printf 'For Mac: https://brew.sh/ \n'
    printf 'For Linux Users: https://docs.brew.sh/Homebrew-on-Linux \n \n'

if hash tkn 2>/dev/null
then
    printf '\xE2\x9C\x85 Tekton CLI \n'
else
    printf '\xE2\x9D\x8C Tekton CLI \n \n'

    printf 'Download Tekton using the links below: \n'
    printf 'For Mac: https://brew.sh/ \n'
    printf 'For Linux Users: https://docs.brew.sh/Homebrew-on-Linux \n \n'
fi

if hash argocd 2>/dev/null
then
    printf '\xE2\x9C\x85 Argo CLI \n'
else
    printf '\xE2\x9D\x8C Argo CLI \n \n'

    printf 'Download Argo using the links below: \n'
    printf 'For Mac: https://brew.sh/ \n'
    printf 'For Linux Users: https://docs.brew.sh/Homebrew-on-Linux \n \n'
fi

if hash brew 2>/dev/null
then
    printf '\xE2\x9C\x85 Brew CLI \n'
else
    printf '\xE2\x9D\x8C Brew CLI \n \n'

    printf 'Download Brew using the links below: \n'
    printf 'For Mac: https://brew.sh/ \n'
    printf 'For Linux Users: https://docs.brew.sh/Homebrew-on-Linux \n \n'
fi

if hash dockerhub 2>/dev/null
then
    printf '\xE2\x9C\x85 DockerHub CLI \n'
else
    printf '\xE2\x9D\x8C DockerHub CLI \n \n'
    
    printf 'Download Brew using the links below: \n'
    printf 'For Mac: https://brew.sh/ \n'

    printf 'For Linux Users: https://docs.brew.sh/Homebrew-on-Linux \n \n'
fi