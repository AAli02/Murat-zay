import React from 'react';
import mlogo from '../../assets/mlogo.png';

import './Footer.css';

const Footer = () => (
<footer>
  <div class="row footer__row">
  <a href="#" class="footer__anchor">
    <figure class="footer__logo">
      <img src={mlogo} class="footer__logo--img" alt=""></img>
    </figure>
    <span class="footer__logo--popper">
      Top
      <i class="fas fa-arrow-up"></i>
    </span>
  </a>
  <div class="footer__social--list">
    <p className='link__hover-effect footer__social--link'>Social</p>    
    <p className='link__hover-effect footer__social--link'>Social</p>    
    <p className='link__hover-effect footer__social--link'>Social</p>    
  </div>
  <div class="footer__copyright">Copyright © 2021 Murat Zaynullaev</div>
</div>
</footer>
);

export default Footer;


// footer__social--link
// link__hover-effect