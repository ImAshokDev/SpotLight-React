import React from 'react';
import './Contact.scss';
import HeaderBlock from '../HeaderBlock';
import Button from '../Button';

const Contact = () => (
  <div className="contact-section">
    <HeaderBlock
      h="contact us"
      p="   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
  risus vitae massa semper aliquam quis mattis quam."
      fc="black"
    />
    <ContactBlock />
  </div>
);

const ContactBlock = () => (
  <div className="contact-block">
    <div>
      <input type="text" placeholder="Your name.." />
    </div>
    <div>
      <input type="text" placeholder="Your email address.." />
    </div>
    <textarea type="text" placeholder="Your Message.." />
    <div>
      <Button text="send" />
    </div>
  </div>
);

export default Contact;
