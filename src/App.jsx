import React from 'react';
import './App.scss';
import Header from './header/Header';
import img from './header/01.jpg';
import Content from './content/Content';
import Service from './service/Service';
import Package from './package/Package';
import Gallery from './gallery/Gallery';
import Team from './team/Team';
import Details from './details/Details';
import Contact from './contact/Contact';

const App = () => (
  <div className="spotlight">
    <Header bg={img} />
    <Content />
    <Service />
    <Package />
    <Gallery />
    <Team />
    <Details />
    <Contact />
  </div>
);

export default App;
