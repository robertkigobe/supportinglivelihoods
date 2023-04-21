import React from "react";
import { Link } from "react-router-dom";
import "./MainNav.css";
import { Envelope } from "react-bootstrap-icons";
import { Clock } from "react-bootstrap-icons";
import logo from "../../images/uccbimages/logo132.png";

const Footer = () => {
  const mail = "info@uccb.us";
  const masstime1 = "Sunday 1:00 pm";
  const masstime2 = "Friday 8:00 pm";
  return (
    <nav className="main-footer">
      <div className="section-title">
        <h1 className="main-footer__title">
          Ugandan Catholic Community in the Archdiocese of Boston
        </h1>
      </div>

      <div className="footer__container">
        <div className="footer_block_image">
          <img src={logo} alt="UCCB" className="logo__image_footer" />
        </div>
        <div className="footer_block">
          <ul className="main-footer__links">
            <li className="main-footer__link">
              <Envelope />
              {mail}
            </li>
            <li className="main-footer__link">
              <Clock />
              {masstime1}
            </li>
            <li className="main-footer__link">
              <Clock />
              {masstime2}
            </li>
          </ul>
        </div>
      </div>
        <div className="footer_block_last">
          <ul className="main-footer__links">
            <li className="main-footer__link">
              <Link className="main-footer__link" to="/chaplaincy">
              Chaplaincy
              </Link>
            </li>
            <li className="main-footer__link">
              <Link className="main-footer__link" to="/currentreading">
              Our Mass
              </Link>
            </li>
            <li className="main-footer__link">
              <Link className="main-footer__link" to="/home">
                Announcements
              </Link>
            </li>
            <li className="main-footer__link">
              <Link className="main-footer__link" to="/home">
                About Us
              </Link>
            </li>
            
          </ul>
        </div>
    </nav>
  );
};

export default Footer;
