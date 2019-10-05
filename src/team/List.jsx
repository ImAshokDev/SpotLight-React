import React from 'react';

const List = ({
 image, h5, h6, p, i1, i2, i3 
}) => (
  <div className="list">
    <img src={image} alt="" />
    <h5>{h5}</h5>
    <h6>{h6}</h6>
    <p>{p}</p>
    <ul>
      <li>{i1}</li>
      <li>{i2}</li>
      <li>{i3}</li>
    </ul>
  </div>
);

export default List;
