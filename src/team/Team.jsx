import React from 'react';
import './Team.scss';
import HeaderBlock from '../HeaderBlock';
import List from './List';
import img1 from './images/01.jpg';
import img2 from './images/02.png';
import img3 from './images/03.png';
import img4 from './images/04.png';

const Team = () => (
  <div className="team-section">
    <HeaderBlock
      h="Team"
      p="   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
      risus vitae massa semper aliquam quis mattis quam."
      fc="black"
    />
    <TeamBlock />
  </div>
);

const TeamBlock = () => (
  <div className="team-block">
    <List
      image={img1}
      h5="jhon dow"
      h6="founder"
      p=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa."
      i1={<i className="fab fa-facebook-f" />}
      i2={<i className="fab fa-twitter" />}
      i3={<i className="fab fa-google-plus-g" />}
    />
    <List
      image={img2}
      h5="markus linn"
      h6="creative"
      p=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa."
      i1={<i className="fab fa-facebook-f" />}
      i2={<i className="fab fa-twitter" />}
      i3={<i className="fab fa-google-plus-g" />}
    />

    <List
      image={img3}
      h5="chris jemes"
      h6="technical"
      p=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa."
      i1={<i className="fab fa-facebook-f" />}
      i2={<i className="fab fa-twitter" />}
      i3={<i className="fab fa-google-plus-g" />}
    />
    <List
      image={img4}
      h5="vintes mars"
      h6="marketing"
      p=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae massa."
      i1={<i className="fab fa-facebook-f" />}
      i2={<i className="fab fa-twitter" />}
      i3={<i className="fab fa-google-plus-g" />}
    />
  </div>
);

export default Team;
