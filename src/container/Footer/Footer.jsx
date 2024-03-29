import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { SubHeading } from '../../components';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>

      <div className="app__footer-links_contact">
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Lorem ipsum dolor sit amet</p>
        <p className='p__opensans'>+1 212-258-1598</p>
        <p className='p__opensans'>+1 212-258-1599</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="gericht" />
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis qui tempora omnis!</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: "15px" }} />

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>

      </div>

      <div className="app__footer-links_work">
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>

        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>

    </div>

    <div className="footer__copyright">
      <p className='p__opensans'>2021 Gericht. All Rights reserved.</p>
    </div>


  </div>
);

export default Footer;
