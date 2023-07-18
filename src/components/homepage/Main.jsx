import React from "react";
import "./Main.css";
import jb1 from "../../images/jb1.jpeg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main__home">
      <div className="main__home_image__container">
        <img className="main__home_image" src={jb1} alt="alt" />
      </div>
      <div className="main__home_info">
        
        <span className="main__home_info__title">
          Every Person Deserves a Decent Life.{" "}
        </span>
        <Link className="button" to="/">
          Donate
        </Link>
      </div>
    </div>
  );
};

export default Main;
