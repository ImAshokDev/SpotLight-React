import React from 'react';
import './Gallery.scss';
import HeaderBlock from '../HeaderBlock';
import img1 from './images/01.jpg';
import img2 from './images/02.jpg';
import img3 from './images/03.jpg';
import img4 from './images/04.jpg';
import img5 from './images/05.jpg';
import img6 from './images/06.jpg';
import img7 from './images/07.jpeg';
import img8 from './images/08.jpg';

const Gallery = () => (
  <div className="gallery-section">
    <HeaderBlock
      h="Gallery"
      p="   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget
      risus vitae massa semper aliquam quis mattis quam."
      fc="Black"
    />
    <GalleryBlock />
  </div>
);

const GalleryBlock = () => (
  <div className="gallery-block">
    <Img image={img1} />
    <Img image={img2} />
    <Img image={img3} />
    <Img image={img4} />
    <Img image={img5} />
    <Img image={img6} />
    <Img image={img7} />
    <Img image={img8} />
  </div>
);

const Img = ({ image }) => (
  <div className="img">
    <img src={image} alt="" />
  </div>
);
export default Gallery;
