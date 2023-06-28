import React from "react";
import "./Main.css";
import jb1 from "../../images/jb1.jpeg";

const Main = () => {
  return (
    <div className="main__home">
      <div className="main__home_image__container">
        <img className="main__home_image" src={jb1} alt="alt" />
      </div>
      <div className="main__home_info">
        <span className="main__home_info__title">Nonprofit organization restoring hope among poor and struggling
            families</span>
        </div>
    </div>
  );
};

export default Main;
