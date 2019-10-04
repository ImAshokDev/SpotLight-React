import React from 'react';
import './App.scss';
import Header from './header/Header';
import img from './header/01.jpg';

const App = () => (
  <div className="spotlight">
    <Header bg={img} />
  </div>
);

export default App;
