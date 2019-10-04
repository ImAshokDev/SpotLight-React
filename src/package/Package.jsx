import React from 'react';
import './Package.scss';
import HeaderBlock from '../HeaderBlock';

const Package = () => (
  <div className="package-section">
    <PackageBlock />
  </div>
);

const PackageBlock = () => (
  <div className="package-block">
    <HeaderBlock
      h="Package"
      p="   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
      risus vitae massa semper aliquam quis mattis quam."
    />
  </div>
);
export default Package;
