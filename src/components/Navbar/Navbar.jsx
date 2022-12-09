import React from "react";
import mlogo from '../../assets/mlogo.png';

import "./Navbar.css";

const Navbar = () => (
  <nav>
    <figure>
      <img id="personal_logo" src={mlogo} alt="" />
    </figure>
    <ul className="nav__link--list">
      <li className="nav__link">
        <a 
          href="#properties"
          className="nav__link--anchor link__hover-effect">
        Properties
        </a>
      </li>
      <li className="nav__link">
        <a onclick="toggleModal()"
        href="#properties"
          className="nav__link--anchor link__hover-effect">
        About
        </a>
      </li>
      <li className="nav__link">
        <a onclick="toggleModal()"
          href="#properties"
          className="nav__link--anchor link__hover-effect">
        Contact
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
