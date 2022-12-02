import React from 'react';

import './Header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="text__name">Murat Zay<span className='yellow__text'>.</span> </h1>
      <p className='socials'>Instagram | Linkdin</p>
      <p className='socials'>Resume | Social</p>

      <button id="contact__submit" class="contact__btn">
                Contact
              </button>
    </div>
  </div>
);

export default Header;
