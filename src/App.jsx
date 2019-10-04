import React from 'react';
import './App.scss';
import Header from './header/Header';
import img from './header/01.jpg';
import Content from './content/Content';

const App = () => (
  <div className="spotlight">
    <Header bg={img} />
    <Content />
  </div>
);

export default App;
