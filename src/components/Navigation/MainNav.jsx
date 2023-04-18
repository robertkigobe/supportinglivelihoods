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
              <li className="main-nav__item">
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li className="main-nav__item">
                <Link className="link" to="/">
                  Chaplaincy
                </Link>
              </li>
              <li className="main-nav__item">
                <Link className="link" to="/">
                  Our Mass
                </Link>
              </li>
              <li className="main-nav__item">
                <Link className="link" to="/">
                  Leadership
                </Link>
              </li>
              <li className="main-nav__item">
                <Link className="link" to="/">
                  Radio Programing
                </Link>
              </li>
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
            <Link to="/" className="mobile__link">
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
