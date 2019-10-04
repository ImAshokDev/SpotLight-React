import React from 'react';
import './Package.scss';
import HeaderBlock from '../HeaderBlock';
import List from './List';

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
    <ListBlock />
  </div>
);

const ListBlock = () => (
  <div className="list-block">
    <List
      h="Hair Styling"
      p="Lorem ipsum dolor sit amet, consectetur
adipiscing eliteger gravida velit quis dolo
Pellentesque elit tortor"
      d="$"
      r="15"
    />
    <List
      h="Body Massage"
      p="Lorem ipsum dolor sit amet, consectetur
adipiscing eliteger gravida velit quis dolo
Pellentesque elit tortor"
      d="$"
      r="75"
    />
    <List
      h="Skin Treatment"
      p="Lorem ipsum dolor sit amet, consectetur
adipiscing eliteger gravida velit quis dolo
Pellentesque elit tortor"
      d="$"
      r="49"
    />
    <List
      h="Nail Painiting"
      p="Lorem ipsum dolor sit amet, consectetur
adipiscing eliteger gravida velit quis dolo
Pellentesque elit tortor"
      d="$"
      r="47"
    />
    <List
      h="Hair Treatment"
      p="Lorem ipsum dolor sit amet, consectetur
adipiscing eliteger gravida velit quis dolo
Pellentesque elit tortor"
      d="$"
      r="34"
    />
    <List
      h="Color Treatment"
      p="Lorem ipsum dolor sit amet, consectetur
adipiscing eliteger gravida velit quis dolo
Pellentesque elit tortor"
      d="$"
      r="34"
    />
  </div>
);
export default Package;
