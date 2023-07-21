import { Link } from "react-router-dom";
import { useState } from "react";
import "./MainNav.css";
import logo from "../../images/logo1.jpeg";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="main">
      <header class="main-header">
        <div>
          <button class="toggle-button"  onClick={clickHandler}>
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
            <span class="toggle-button__bar"></span>
          </button>
          <a href="#" class="main-header__brand">
            <img src={logo} alt="alt" />
          </a>
        </div>
        <nav class="main-nav">
          <div className="main-nav__title">
            <span className="span1">Supporting Livelihoods Inc</span>
          </div>
          <ul class="main-nav__items">
          <li class="main-nav__item">
            <Link className="main-nav__item" to="/">
                  Home
                </Link>
            </li>
            <li class="main-nav__item">
            <Link className="main-nav__item" to="/health">
                  Health
                </Link>
            </li>
            <li class="main-nav__item">
            <Link className="main-nav__item" to="/specialneeds">Speacial needs and disabilities</Link>
            </li>
            <li class="main-nav__item">
            <Link className="main-nav__item" to="/education">Education</Link>
            </li>
            <li class="main-nav__item">
            <Link className="main-nav__item" to="/livelihood">Livelihood</Link>
            </li>
            <li class="main-nav__item">
            <Link className="main-nav__item" to="/">Gallery</Link>
            </li>
            <li class="main-nav__item">
            <Link className="main-nav__item" to="/support">How to Support</Link>
            </li>
          </ul>
        </nav>
      </header>
      <nav class="mobile-nav"
      style={{
        display: isOpen ? "block" : "none",
      }}
      >
        <ul class="mobile-nav__items">
          <li class="mobile-nav__item">
          <Link onClick={clickHandler} to="/"> Home </Link>
          </li>
          <li class="mobile-nav__item">
          <Link onClick={clickHandler}  to="/specialneeds">Speacial needs</Link>
          </li>
          <li class="mobile-nav__item">
          <Link onClick={clickHandler}  to="/education">Education</Link>
          </li>
          <li class="mobile-nav__item">
          <Link onClick={clickHandler}  to="/livelihood">Livelihood</Link>
          </li>
          <li class="mobile-nav__item">
          <Link onClick={clickHandler}  to="/">Gallery</Link>
          </li>
          <li class="mobile-nav__item">
          <Link onClick={clickHandler}  to="/support">How to Support</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MainNav;
