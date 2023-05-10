import { Link } from "react-router-dom";
import { useState } from "react";
import "./MainNav.css";
import logo from "../../images/uccbimages/logo132.png";

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
    <header className="header">
      <nav className="main-header">
        
        <div className="main-header__badge">
          <img
            src={logo}
            alt="UCCB"
            className="logo__image"
            onClick={clickImageHandler}
          />

          <nav
            onClick={clickHandler}
            className="sidenav"
            style={{
              display: isImageOpen ? "block" : "none",
            }}
          >

<Link className="dropdown-list" to="/">
                Home
                  </Link>
            <ul
              className="dropdown-list"
              onClick={dropDownHandler1}
             
            >
              Who we are
              <i className="fa fa-caret-down"></i>
              
              <li  style={{
                display: closed1 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                    About Us
                  </Link>
              </li>
              <li  style={{
                display: closed1 ? "none" : "block",
              }}>
                <Link className="link" to="/#">Chaplaincy</Link>
              </li>
              <li  style={{
                display: closed1 ? "none" : "block",
              }}>
                <Link className="link" to="/#">Executive Board</Link>
              </li>
              <li  style={{
                display: closed1 ? "none" : "block",
              }}>
                <Link className="link" to="/#">Executive Committee</Link>
              </li>
              <li  style={{
                display: closed1 ? "none" : "block",
              }}>
                <Link className="link" to="/#">Leadership Council</Link>
              </li>
              <li  style={{
                display: closed1 ? "none" : "block",
              }}>
                <Link className="link" to="/#">President's Message</Link>
              </li>
              <li  style={{
                display: closed1 ? "none" : "block",
              }}>
                <Link className="link" to="/#">Chairman's Message</Link>
              </li>

              <li  style={{
                display: closed1 ? "none" : "block",
              }}>
                <Link className="link" to="/#">Bubondo</Link>
              </li>
            </ul>
            <ul
              className="dropdown-list"
              onClick={dropDownHandler2}
             
            >
              How we evangelize
              <i className="fa fa-caret-down"></i>
              
              <li  style={{
                display: closed2 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Readings
                  </Link>
              </li>
              <li  style={{
                display: closed2 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Family life
                  </Link>
              </li>
              <li  style={{
                display: closed2 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Faith formation
                  </Link>
              </li>
              <li  style={{
                display: closed2 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Catholic education
                  </Link>
              </li>
              <li  style={{
                display: closed2 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Baptism
                  </Link>
              </li>
              <li  style={{
                display: closed2 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Holy Communion
                  </Link>
              </li>
              <li  style={{
                display: closed2 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Holy Matrimony
                  </Link>
              </li>
              <li  style={{
                display: closed2 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Sacrament of the Sick
                  </Link>
              </li>
              <li  style={{
                display: closed2 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Propery blessings
                  </Link>
              </li>
              <li  style={{
                display: closed2 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                    Choirs
                  </Link>
              </li>
              <li  style={{
                display: closed2 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Memorial Masses
                  </Link>
              </li>
              <li  style={{
                display: closed2 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Small Community masses
                  </Link>
              </li>
              <li  style={{
                display: closed2 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Mass Schedules
                  </Link>
              </li>
            </ul>
            <ul
              className="dropdown-list"
              onClick={dropDownHandler3}
             
            >
              Who we serve
              <i className="fa fa-caret-down"></i>
              
              <li  style={{
                display: closed3 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Children
                  </Link>
              </li>
              <li  style={{
                display: closed3 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Young adults
                  </Link>
              </li>
              <li  style={{
                display: closed3 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Women
                  </Link>
              </li>
              <li  style={{
                display: closed3 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Married
                  </Link>
              </li>
              <li  style={{
                display: closed3 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Community Support
                  </Link>
              </li>
              
            </ul>
            
            <ul
              className="dropdown-list"
              onClick={dropDownHandler4}
             
            >
              Ways to give
              <i className="fa fa-caret-down"></i>
              
              <li  style={{
                display: closed4 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Donate
                  </Link>
              </li>
              <li  style={{
                display: closed4 ? "none" : "block",
              }}>
               <Link className="link" to="/aboutus">
               Volunteer
                  </Link>
              </li>
              <li  style={{
                display: closed4 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Become a lector
                  </Link>
              </li>
              <li  style={{
                display: closed4 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Become a choir member
                  </Link>
              </li>
              <li  style={{
                display: closed4 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Become an altar boy
                  </Link>
              </li>
              <li  style={{
                display: closed4 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Become an usher
                  </Link>
              </li>
              <li  style={{
                display: closed4 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Become a knight of columbus
                  </Link>
              </li>
             
            </ul>

            <ul
              className="dropdown-list"
              onClick={dropDownHandler5}
             
            >
              Uganda Matyrs
              <i className="fa fa-caret-down"></i>
              
              <li  style={{
                display: closed5 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Married
                  </Link>
              </li>
              <li  style={{
                display: closed5 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                News and Events
                  </Link>
              </li>
              <li  style={{
                display: closed5 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Organizing Committee
                  </Link>
              </li>
              <li  style={{
                display: closed5 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                How to support
                  </Link>
              </li>
              <li  style={{
                display: closed5 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                How to support
                  </Link>
              </li>
              <li  style={{
                display: closed5 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Gallery
                  </Link>
              </li>
            </ul>

            <ul
              className="dropdown-list"
              onClick={dropDownHandler6}
             
            >
              News
              <i className="fa fa-caret-down"></i>
              
              <li  style={{
                display: closed6 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                Announcements
                  </Link>
              </li>
              <li  style={{
                display: closed6 ? "none" : "block",
              }}>
                <Link className="link" to="/aboutus">
                About Last week
                  </Link>
              </li>
              
            </ul>

          </nav>
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
                <li>Become an altar boy</li>
                <li>Become an usher</li>
                <li>Become a knight of columbus</li>
              </ul>
            </div>

            <div className="main-nav__item">
              <div className="main-nav__item__dropdown__head">
                Uganda Matyrs
              </div>
              <ul className="main-nav__item__dropdown_content">
                <li>News and Events</li>
                <li>Organizing Committee</li>
                <li>How to support</li>
                <li>Gallery</li>
              </ul>
            </div>

            <div className="main-nav__item">
              <div className="main-nav__item__dropdown__head">News </div>
              <ul className="main-nav__item__dropdown_content">
                <li>Announcements</li>
                <li>About Last week</li>
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
    </header>
  );
};
export default MainNav;
