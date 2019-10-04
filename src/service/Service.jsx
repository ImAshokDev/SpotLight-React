import React from 'react';
import './Service.scss';
import List from './List';

const Service = () => (
  <div className="service-section">
    <ServiceBlock />
  </div>
);

const ServiceBlock = () => (
  <div className="service-block">
    <ServiceHead />
    <ListBlock />
  </div>
);

const ServiceHead = () => (
  <div className="service-head">
    <h1>Our Services</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
      risus vitae massa semper aliquam quis mattis quam.
    </p>
  </div>
);

const ListBlock = () => (
  <div className="list-block">
    <List
      i={<i className="fas fa-chess-knight" />}
      h="Aroma Therapy"
      p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus."
    />
    <List />
    <List />
    <List />
    <List />
    <List />
  </div>
);
export default Service;
