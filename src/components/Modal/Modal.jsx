import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import './Modal.css'


// ---------- MODAL  JSSTART ----------

const Modal = () => {
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
    <div className='overlay'>

      <div className='modal'>
        <div className='modal__half modal__about'>
          <h3 className='modal__title modal_-title--about'> About me </h3>
          <h4 className='modal__sub-title modal__sub-title--about'>Real Estate Agent</h4>
          <p className='modal__para'>Im a 21 year old real estate agent Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='modal__half modal__contact'>
          <i className='fas fa-times modal__exit click' onClick={toggleModal}></i>
          <h3 className='modal__title modal__title--contact'>Lets have a chat!</h3>
          <form id='contact__form' onSubmit="contact(event)"></form>
          <div className='form__item'>
            <label className='form__item--label'>Name</label>
            <input className='input' name="user_name" type="text" required />
          </div>
          <div className='form__item'>
            <label className='form__item--label'>Email</label>
            <input className='input' name="email" type="text" required />
          </div>
          <div className='form__item'>
            <label className='form__item--label'>Message</label>
            <input className='input' name="message" type="text" required />
          </div>
          <button id='contact__submit' className='form__submit'>Send it</button>
          <form>
            <div className='modal__overlay modal__overlay--loading'>
              <FontAwesomeIcon icon='fas fa-spinner' />
            </div>
            <div className='modal__overlay modal__overlay--success'>
              Thanks for the message! Looking forward to speaking with you soon.
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal