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
    <List
      i={<i className="fas fa-briefcase" />}
      h="Body Spa"
      p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus."
    />
    <List
      i={<i className="fas fa-pencil-alt" />}
      h="Expert Hair Spa"
      p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus."
    />
    <List
      i={<i className="far fa-sun" />}
      h=" Massage"
      p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus."
    />
    <List
      i={<i className="fas fa-volume-up" />}
      h=" Manicure"
      p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus."
    />
    <List
      i={<i className="fas fa-trophy" />}
      h="Wedding Makeup"
      p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero scelerisque ligula sagittis faucibus eget quis lacus."
    />
  </div>
);
export default Service;
