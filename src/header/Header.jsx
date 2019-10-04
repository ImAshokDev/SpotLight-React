import React from 'react';
import './Header.scss';
import Button from '../Button';

const Header = ({ bg }) => (
  <div className="header-section " style={{ backgroundImage: `url(${bg})` }}>
    <Head />
    <div className="content">
      <h1>beauty spa</h1>
      <p>
        Lorem ipsum dolor sit ametcursus magna vel ipsum dolor sit amet
        scelerisque Lorem consectetur adipiscing elit.
      </p>
      <Button text="packages" />
    </div>
  </div>
);

const Head = () => (
  <div className="head-block">
    <div className="head-center">
      <div className="left">
        <h2>spotlight</h2>
      </div>
      <div className="right">
        <ul>
          <li>about</li>
          <li>services</li>
          <li>package</li>
          <li>gallery</li>
          <li>our team</li>
          <li>testimonials</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  </div>
);
export default Header;
