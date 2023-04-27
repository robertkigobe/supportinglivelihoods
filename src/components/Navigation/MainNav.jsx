import { Link } from "react-router-dom";
import { useState } from "react";
import "../../shared.css";
import "./MainNav.css";
import logo from "../../images/uccbimages/logo132.png";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <header className="header">
      <div className="main-header">
        <div className="main-header__toggle">
          <button className="toggle-button" onClick={clickHandler}>
            <span className="toggle-button__bar"></span>
            UCCB
          </button>
        </div>
        <div className="main-header__badge">
          <img src={logo} alt="UCCB" className="logo__image" />
        </div>

        <div className="main-nav">
          <ul className="main-nav__items">
          <div className="main-nav__item">
              <div className="main-nav__item__dropdown__head">Who we are </div>
              <ul className="main-nav__item__dropdown_content">
                <li>About Us</li>
                <li>Leadership</li>
                <li>President's Message</li>
                <li>Chairman's Message</li>
                <li>Executive Committee</li>
                <li>Get in touch</li>
              </ul>
            </div>
            <li className="main-nav__item">
              <Link className="link" to="/chaplaincy">
                How we Evangelize
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to="/currentreading">
                Who we serve
              </Link>
            </li>
            
            <li className="main-nav__item">
              <Link className="link" to="/">
                Ways to give
              </Link>
            </li>

            <div className="main-nav__item">
              <div className="main-nav__item__dropdown__head">News </div>
              <ul className="main-nav__item__dropdown_content">
                <li>Announcements</li>
                <li>Just Recently</li>
              </ul>
            </div>

            <li className="main-nav__item main-nav__item--cta">
              <Link className="link__cta" to="/">
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav
        onClick={clickHandler}
        className="mobile-nav"
        style={{
          display: isOpen ? "block" : "none",
        }}
      >
        <ul className="mobile-nav__items">
          <li className="mobile-nav__item">
            <Link to="/" className="mobile__link">
              Chaplaincy
            </Link>
          </li>
          <li className="mobile-nav__item">
            <Link to="/currentreading" className="mobile__link">
              Our Mass
            </Link>
          </li>
          <li className="mobile-nav__item mobile-nav__item--cta">
            <Link to="/" className="mobile__link">
              Leadership
            </Link>
          </li>
          <li className="mobile-nav__item mobile-nav__item--cta">
            <Link to="/" className="mobile__link">
              Radio
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNav;
