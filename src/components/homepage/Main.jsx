import React from "react";
import "./Main.css";
import jb1 from "../../images/jb1.jpeg";

const Main = () => {
  return (
    <div className="main__home">
      <div className="main__home_image">
        <img src={jb1} alt="alt" />
      </div>
      <div className="main__home_info">
        <span className="main__home_info__title">This is a place to put some new wording perhaps its going to be the slogan</span>
        </div>
    </div>
  );
};

export default Main;
