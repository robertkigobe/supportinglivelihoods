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
                Supporting Livelihoods
                  </Link>
            <ul
              className="dropdown-list"
              onClick={dropDownHandler1}
             
            >
              About us
              <i className="fa fa-caret-down"></i>
              
              <li  style={{
                display: closed1 ? "none" : "block",
              }}>
                <Link className="link" to="/">
                    Vision
                  </Link>
              </li>
              <li  style={{
                display: closed1 ? "none" : "block",
              }}>
                <Link className="link" to="/">
                    Mission
                  </Link>
              </li>
              <li  style={{
                display: closed1 ? "none" : "block",
              }}>
                <Link className="link" to="/#">Contact us</Link>
              </li>
              
            </ul>
            <ul
              className="dropdown-list"
              onClick={dropDownHandler2}
             
            >
              What we do
              <i className="fa fa-caret-down"></i>
              
              <li  style={{
                display: closed2 ? "none" : "block",
              }}>
                <Link className="link" to="/">
                Event 1
                  </Link>
              </li>
              <li  style={{
                display: closed2 ? "none" : "block",
              }}>
                <Link className="link" to="/">
                Event 2
                  </Link>
              </li>
              
            </ul>
            <ul
              className="dropdown-list"
              onClick={dropDownHandler3}
             
            >
              Blog
              <i className="fa fa-caret-down"></i>
              
              <li  style={{
                display: closed3 ? "none" : "block",
              }}>
                <Link className="link" to="/">
                Blog 1
                  </Link>
              </li>
              <li  style={{
                display: closed3 ? "none" : "block",
              }}>
                <Link className="link" to="/">
                Resources
                  </Link>
              </li>
              
              
            </ul>
            
            <ul
              className="dropdown-list"
              onClick={dropDownHandler4}
             
            >
              Ways to support
              <i className="fa fa-caret-down"></i>
              
              <li  style={{
                display: closed4 ? "none" : "block",
              }}>
                <Link className="link" to="/">
                Donate
                  </Link>
              </li>
              <li  style={{
                display: closed4 ? "none" : "block",
              }}>
               <Link className="link" to="/">
               Volunteer
                  </Link>
              </li>
              
            </ul>

          </nav>
        </div>
        <div className="main-nav">
          <div className="main-nav__title">
            Supporting Livelihoods Inc
          </div>
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <div className="main-nav__item">
              <div className="main-nav__item__dropdown__head">About us</div>
              <ul className="main-nav__item__dropdown_content">
                <li>
                  <Link className="link" to="/">
                    About Us
                  </Link>
                </li>
                <li>Our Vision</li>
                <li>Our Mission</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="main-nav__item">
              <div className="main-nav__item__dropdown__head">
                What we do
              </div>
              <ul className="main-nav__item__dropdown_content">
                <li>Event 1</li>
                <li>Event 2</li>
                <li>Event 3</li>
                <li>Event 4</li>
              </ul>
            </div>

            <div className="main-nav__item">
              <div className="main-nav__item__dropdown__head">Blogs</div>
              <ul className="main-nav__item__dropdown_content">
                <li>Blog 1</li>
                <li>Blog 2</li>
                <li>Blog 3</li>
                <li>Blog 4</li>
              </ul>
            </div>

            <div className="main-nav__item">
              <div className="main-nav__item__dropdown__head">Ways to support </div>
              <ul className="main-nav__item__dropdown_content">
                <li>Donate</li>
                <li>Volunteer</li>
                
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
