import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'IBM Cloud',
    href: 'https://cloud.ibm.com/',
  },
  {
    title: 'Kubernetes',
    href: 'https://kubernetes.io/',
  },
  {
    title: 'IBM Cloud Native',
    href: 'https://ibm-cloud-architecture.github.io/deliverables/cloud-native.html',
  }
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
