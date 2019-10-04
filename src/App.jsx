import React from 'react';
import './App.scss';
import Header from './header/Header';
import img from './header/01.jpg';
import Content from './content/Content';
import Service from './service/Service';
import Package from './package/Package';

const App = () => (
  <div className="spotlight">
    <Header bg={img} />
    <Content />
    <Service />
    <Package />
  </div>
);

export default App;
