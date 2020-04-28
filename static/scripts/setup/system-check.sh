#!/bin/bash

echo 'Running System Checks'

if hash ibmcloud 2>/dev/null
then
    printf '\xE2\x9C\x85 IBM Cloud CLI \n'
else
    printf '\xE2\x9D\x8C IBM Cloud CLI \n'
fi

if hash git 2>/dev/null
then
    printf '\xE2\x9C\x85 Git CLI \n'
else
    printf '\xE2\x9D\x8C Git CLI \n'
fi

if hash crc 2>/dev/null
then
    printf '\xE2\x9C\x85 CRC \n'
else
    printf '\xE2\x9D\x8C CRC \n'
fi

if hash minikube 2>/dev/null
then
    printf '\xE2\x9C\x85 Minikube \n'
else
    printf '\xE2\x9D\x8C Minikube \n'
fi

if hash kubectl 2>/dev/null
then
    printf '\xE2\x9C\x85 Kubernetes CLI \n'
else
    printf '\xE2\x9D\x8C Kubernetes CLI \n'
fi

if hash oc 2>/dev/null
then
    printf '\xE2\x9C\x85 Openshift CLI \n'
else
    printf '\xE2\x9D\x8C Openshift CLI \n'
fi

if hash tkn 2>/dev/null
then
    printf '\xE2\x9C\x85 Tekton CLI \n'
else
    printf '\xE2\x9D\x8C Tekton CLI \n'
fi

if hash argocd 2>/dev/null
then
    printf '\xE2\x9C\x85 Argo CLI \n'
else
    printf '\xE2\x9D\x8C Argo CLI \n'
fi


if hash crc 2>/dev/null
then
    printf '\xE2\x9C\x85 CRC CLI \n'
else
    printf '\xE2\x9D\x8C CRC CLI \n'
fi