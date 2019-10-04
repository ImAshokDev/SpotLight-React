import React from 'react';

const List = ({
 h, p, d, r 
}) => (
  <div className="list">
    <div className="left">
      <h4>{h}</h4>
      <p>{p}</p>
    </div>
    <div className="right">
      <div>
        <p>
          <span>{d}</span>
          {r}
        </p>
      </div>
    </div>
  </div>
);

export default List;
