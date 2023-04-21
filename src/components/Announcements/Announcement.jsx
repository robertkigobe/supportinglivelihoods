import React from "react";
import "./Announcements.css";

const Announcements = () => {
  return (
    <section className="section__features">
      <h1 className="section-title">News &amp; Events </h1>
      <ul className="section-features__list">
        <li className="section-feature">
          <div className="section-feature__image"></div>
          <p className="section-feature__description">Announcement 1</p>
        </li>
        <li className="section-feature">
          <div className="section-feature__image"></div>
          <p className="section-feature__description">Announcement 2</p>
        </li>
        <li className="section-feature">
          <div className="section-feature__image"></div>
          <p className="section-feature__description">Announcement 3</p>
        </li>
      </ul>
    </section>
  );
};

export default Announcements;
