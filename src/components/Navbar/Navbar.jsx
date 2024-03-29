import React, { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState('false');

  return (
    <nav className='app__navbar'>
      {/* logo */}
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>

      {/* links */}
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>

      {/* login & burgerbtn */}
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Login / Register</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>

        <div className='app__navbar-login-icon'>
          <div />
          <GiHamburgerMenu onClick={() => setToggleMenu(true)} />
        </div>

      </div>

      {/* menu in small screen */}
      {/* check if the toggleMenu is true  */}
      {toggleMenu == true ?
        <div className="app__navbar-smallscreen">
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu className="overlay__close" onClick={() => setToggleMenu(false)} />

            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#about">About</a></li>
              <li className="p__opensans"><a href="#menu">Menu</a></li>
              <li className="p__opensans"><a href="#awards">Awards</a></li>
              <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
        :
        null
      }

    </nav>
  );
};

export default Navbar;
