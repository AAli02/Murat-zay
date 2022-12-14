import React, { useState } from 'react'
import person from '../../assets/person.png';

import './Header.css'

// ---------- MODAL  JS START ----------

const Header = () => {
  let isModalOpen = false;
  let contrastToggle = false;

  // const [modal, setModal] = useState(false);
  // const toggleModal = () => {
  //   setModal(!modal)
  // }
  
  function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    // emailjs
    //   .sendForm(
    //     "service_6uxmb3g",
    //     "template_p5h1mdl",
    //     event.target,
    //     "VjSzrKiC_NqXkJ_VL"
    //   )
    //   .then(() => {
    //     loading.classList.remove("modal__overlay--visible");
    //     success.classList += " modal__overlay--visible";
    //   })
    //   .catch(() => {
    //     loading.classList.remove("modal__overlay--visible");
    //     alert(
    //       "The email service is temporarily unavailable. Please contact me directly on email@email.com"
    //     );
    // });
  }
  
  function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }

  // ---------- MODAL JS END ----------

return (
    <section id='landing__page'>
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="text__name">Name Last<span className='yellow__text'>.</span> </h1>
  
        <div className='links__text'>
  
        <p className='socials hover__p'>Instagram | Linkdin</p>
        <p className='socials hover__p'>Resume | Social</p>
  
        </div>
  
        <button onClick={toggleModal} className='contact__btn'>
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
  )};
  
  export default Header;

