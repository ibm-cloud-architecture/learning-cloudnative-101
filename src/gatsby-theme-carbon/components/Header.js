import React from 'react';
import Header from 'gatsby-theme-carbon/src/components/Header';

const CustomHeader = props => (
  <Header {...props}>
    <span>IBM Garage</span>&nbsp;Cloud Native Bootcamp
  </Header>
);

export default CustomHeader;
