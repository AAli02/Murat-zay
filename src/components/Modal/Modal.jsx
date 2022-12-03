import React from 'react'

import './Modal.css'

const Modal = () => {
  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='modal__laf modal__about'>
          <h3 className='modal__title modal_-title--about'> About me </h3>
          <h4 className='modal__sub-title modal__sub-title--about'>Real Estate Agent</h4>
          <p className='modal__para'>Im a 21 year old real estate agent Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className='modal__half modal__contact'>
          <i className='fas fa-times modal__exit click' onClick="toggleModal()"></i>
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
              <i className='fas fa-spinner'></i>
            </div>
            <div className='modal__overlay modal__overlay--success'>
              Thanks for the message! Looking forward to speaking to you soon.
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal