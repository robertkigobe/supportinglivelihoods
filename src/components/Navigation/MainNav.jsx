import { Link } from "react-router-dom";
import { useState } from "react";
import "./MainNav.css";
import logo from "../../images/logo1.jpeg";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [closed1, setClosed1] = useState(true);
  const [closed2, setClosed2] = useState(true);
  const [closed3, setClosed3] = useState(true);
  const [closed4, setClosed4] = useState(true);
  const [closed5, setClosed5] = useState(true);
  const [closed6, setClosed6] = useState(true);

  const clickHandler = () => {
    setIsOpen((isOpen) => true);
  };

  const clickImageHandler = () => {
    setIsImageOpen((isImageOpen) => !isImageOpen);
  };
  const dropDownHandler1 = () => {
    setClosed1((closed1) => !closed1);
  };

  const dropDownHandler2 = () => {
    setClosed2((closed2) => !closed2);
  };
  const dropDownHandler3 = () => {
    setClosed3((closed3) => !closed3);
  };
  const dropDownHandler4 = () => {
    setClosed4((closed4) => !closed4);
  };
  const dropDownHandler5 = () => {
    setClosed5((closed5) => !closed5);
  };
  const dropDownHandler6 = () => {
    setClosed6((closed6) => !closed6);
  };

  return (
    <>
      <header class="main-header">
        <div>
          <button class="toggle-button">
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
          </button>
          <a href="#" class="main-header__brand">
            <img src={logo} alt="alt" />
          </a>
        </div>
        <nav class="main-nav">
          <ul class="main-nav__items">
            <li class="main-nav__item">
              <a href="#">WHO WE ARE</a>
            </li>
            <li class="main-nav__item">
              <a href="#">WHAT WE DO</a>
            </li>
            <li class="main-nav__item">
              <a href="#">GALLERY</a>
            </li>
            <li class="main-nav__item">
              <a href="#">SUPPORT US</a>
            </li>
          </ul>
        </nav>
      </header>
      <nav class="mobile-nav">
        <ul class="mobile-nav__items">
          <li class="mobile-nav__item">
            <a href="packages/index.html">Packages</a>
          </li>
          <li class="mobile-nav__item">
            <a href="customers/index.html">Customers</a>
          </li>
          <li class="mobile-nav__item mobile-nav__item--cta">
            <a href="start-hosting/index.html">Start Hosting</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default MainNav;
