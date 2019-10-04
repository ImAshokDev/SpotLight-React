import React from 'react';
import './Header.scss';
import Button from '../Button';

const Header = () => (
  <div className="header-section">
    <Head />
    <div>
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
);
export default Header;
