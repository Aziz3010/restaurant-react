import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>

    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className='headtext__cormorant' style={{ marginButtom: "3rem" }}>Find us</h1>

      <div className="app__wrapper-content">
        <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque.</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: "2rem 0 1rem 0" }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun 10:00 am - 03:00 am</p>
      </div>

      <button type='button' style={{ marginTop: "2rem" }} className='custom__button'>Visit Us</button>

    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>

  </div>
);

export default FindUs;

// stop video at 02:40:37