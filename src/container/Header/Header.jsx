import React, { useState } from 'react'
import person from '../../assets/person.png';

import './Header.css';

const Header = () => (
  <section id='landing__page'>
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="text__name">Name Last<span className='yellow__text'>.</span> </h1>

      <div className='links__text'>

      <p className='socials'>Instagram | Linkdin</p>
      <p className='socials'>Resume | Social</p>

      </div>

      <button id="contact__submit" class="contact__btn">
         Contact
      </button>
    </div>

    <div className='header__img'>
        <img src={person} alt="" />
  </div>
      <div className='header__content-2'>
      <h1 className='location'>Pittsburgh, PA</h1>
  </div>
      </div>
    </section>
);

export default Header;
