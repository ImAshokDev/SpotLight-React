import React from 'react';

const List = ({ i, h, p }) => (
  <div className="list">
    <i>{i}</i>
    <h3>{h}</h3>
    <p>{p}</p>
  </div>
);

export default List;
