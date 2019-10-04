import React from 'react';
import './Service.scss';
import List from './List';
import HeaderBlock from '../HeaderBlock';

const Service = () => (
  <div className="service-section">
    <ServiceBlock />
  </div>
);

const ServiceBlock = () => (
  <div className="service-block">
    <HeaderBlock
      h="Our Services"
      p="   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
    risus vitae massa semper aliquam quis mattis quam."
    />
    <ListBlock />
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
