import React from "react";
import mlogo from '../../assets/mlogo.png';

import "./Navbar.css";

const Navbar = () => {
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

return (
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
      <li className="nav__link" onClick={toggleModal}>
        <a onclick="toggleModal()"
          href="#properties"
          className="nav__link--anchor link__hover-effect">
        About
        </a>
      </li>
      <li className="nav__link" onClick={toggleModal}>
        <a onclick="toggleModal()"
          href="#properties"
          className="nav__link--anchor link__hover-effect">
        Contact
        </a>
      </li>
    </ul>
  </nav>
)};

export default Navbar;
