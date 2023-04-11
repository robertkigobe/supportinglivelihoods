import React from "react";
import './Section.css';

const Section = () => {
  return (
    <section className="section-features">
      <h1 className="section-title">News &amp; Events </h1>
      <ul className="section-features__list">
        <li className="section-feature">
          <div className="section-feature__image"></div>
          <p className="section-feature__description">Commiittee 1</p>
        </li>
        <li className="section-feature">
          <div className="section-feature__image"></div>
          <p className="section-feature__description">Coommittee 2</p>
        </li>
        <li className="section-feature">
          <div className="section-feature__image"></div>
          <p className="section-feature__description">Committe 3</p>
        </li>
      </ul>
    </section>
  );
};

export default Section;
