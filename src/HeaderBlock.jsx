import React from 'react';
import './HeaderBlock.scss';

const HeaderBlock = ({ h, p, fc }) => (
  <div className="header-block" style={{ color: fc }}>
    <h1>{h}</h1>
    <p>{p}</p>
  </div>
);

export default HeaderBlock;
