import React from 'react';
import './HeaderBlock.scss';

const HeaderBlock = ({ h, p }) => (
  <div className="header-block">
    <h1>{h}</h1>
    <p>{p}</p>
  </div>
);

export default HeaderBlock;
