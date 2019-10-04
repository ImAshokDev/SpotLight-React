import React from 'react';

const List = ({ i, h, p }) => (
  <div className="list">
    <div className="list1">
      <i>{i}</i>

      <h3>{h}</h3>
      <p>{p}</p>
    </div>
  </div>
);

export default List;
