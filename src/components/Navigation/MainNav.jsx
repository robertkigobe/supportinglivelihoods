import { Link } from "react-router-dom";
import { useState } from "react";
import "./MainNav.css";
import logo from "../../images/uccbimages/logo132.png";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <header className="header">
      <nav className="main-header">
        <div className="main-header__toggle">
          <button className="toggle-button" onClick={clickHandler}>
            <span className="toggle-button__bar"></span>
            <span className="toggle-button__bar">All</span>
          </button>
        </div>
        <div className="main-header__badge">
          <img src={logo} alt="UCCB" className="logo__image" />
        </div>
        <div className="main-nav">
          <div className="main-nav__title">
            Ugandan Catholic Community in the Archdiocese of Boston
          </div>
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <div className="main-nav__item">
              <div className="main-nav__item__dropdown__head">Who we are </div>
              <ul className="main-nav__item__dropdown_content">
                <li>
                  <Link className="link" to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li>Office of the chaplaincy</li>
                <li>Board</li>
                <li>Executive Committee</li>
                <li>Leadership Council</li>
                <li>President's Message</li>
                <li>Chairman's Message</li>
                <li>Bubondo</li>
              </ul>
            </div>
            <div className="main-nav__item">
              <div className="main-nav__item__dropdown__head">
                How we evangelize
              </div>
              <ul className="main-nav__item__dropdown_content">
                <li>Choirs</li>
                <li>Family life</li>
                <li>Faith formation</li>
                <li>Catholic education</li>
                <li>Baptism</li>
                <li>Holy Communion</li>
                <li>Holy Matrimony</li>
                <li>Sacrament of the Sick</li>
                <li>Propery blessings</li>
                <li>Memorial Masses</li>
                <li>Small Community masses</li>
                <li>Mass Schedules</li>
              </ul>
            </div>

            <div className="main-nav__item">
              <div className="main-nav__item__dropdown__head">Who we serve</div>
              <ul className="main-nav__item__dropdown_content">
                <li>Children</li>
                <li>Young adults</li>
                <li>Women</li>
                <li>Men</li>
                <li>Married</li>
                <li>Community Support</li>
              </ul>
            </div>

            <div className="main-nav__item">
              <div className="main-nav__item__dropdown__head">Way to give </div>
              <ul className="main-nav__item__dropdown_content">
                <li>Donate</li>
                <li>Volunteer</li>
                <li>Become a lector</li>
                <li>Become a choir member</li>
                <li>become an altar boy</li>
                <li>Become an usher</li>
                <li>Become an knight of columbus</li>
              </ul>
            </div>

            <div className="main-nav__item">
              <div className="main-nav__item__dropdown__head">
                Uganda Matyrs{" "}
              </div>
              <ul className="main-nav__item__dropdown_content">
                <li>News and Events</li>
                <li>Organizing Committee</li>
                <li>How to support</li>
                <li>Prior Celebrations</li>
              </ul>
            </div>

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
      </nav>
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
