import React from "react";
import "./Livelihood.css";

const Livelihood = () => {
  return (
    <div className="main_livelihood">
      <div className="livelihood_title">
        <h1>Livelihood</h1>
      </div>
      <div className="livelihood_info">
        In addition to our focus on health and education, we are dedicated to
        addressing the issue of poverty and empowering struggling families and
        individuals in Masaka. Our Livelihood program aims to:
      </div>
      <div className="livelihood_list">
        <ul className="livelihood_list_items">
          <li>Providing Clean Water: </li>
          Access to clean and safe water is crucial for the well-being of
          communities. We work towards providing clean water sources, such as
          wells or water filtration systems, to ensure that families have access
          to safe drinking water and improved sanitation.
          <li>Offering Vocational Training to Women and Youth: </li>
          We believe in equipping individuals with the skills and knowledge
          necessary to improve their economic prospects. Through vocational
          training programs, we empower women and youth with practical skills in
          tailoring, carpentry, agriculture, and entrepreneurship. By gaining
          these skills, individuals can create sustainable livelihoods and break
          the cycle of poverty.
        </ul>
      </div>
    </div>
  );
};

export default Livelihood;
