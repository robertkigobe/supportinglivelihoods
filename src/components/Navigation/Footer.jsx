import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Envelope } from "react-bootstrap-icons";
import { CompassFill } from "react-bootstrap-icons";
import logo from  "../../images/logo1.jpeg";

const Footer = () => {
  const mail = "info@supportinglivelihoods.org";
  const address = "143 north road checlmsford 01824-2166";
  
  return (
    <nav className="main-footer">
      <div className="section-title">
        <h1 className="main-footer__title">
          Supporting Livelihoods Inc
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
              <CompassFill />
              {address}
            </li>
            
          </ul>
          <div className="map"></div>
        </div>
      </div>
      <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
      defer
    ></script>
    </nav>
    
  );
};

export default Footer;
