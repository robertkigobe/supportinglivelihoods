import React from "react";
import "./Carousel.css";
import { useState } from "react";

import sisters from "../../images/uccbimages/sisters.jpeg";

const Carousel = () => {

  const [open, isOpen] = useState(0);

 const show =()=>{
  isOpen(1);
 }

  return (
    
      <section className="main-carousel ">
        <div className="landing_content">
        <img onLoad={show} src={sisters} alt="UCCB" className="landing__image" style={{opacity: open}} />
          
        </div>
      </section>
    
  );
};

export default Carousel;
