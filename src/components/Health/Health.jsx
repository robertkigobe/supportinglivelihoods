import React from "react";
import "./Health.css";

const Health = () => {
  return (
    <div className="main_health">
      <div className="health_title">
        <h1>Health</h1>
      </div>
      <div className="health_info ">
        We prioritize the health and well-being of individuals and families in
        Masaka. Our health programs include:
      </div>
      <div className="health_list">
        <ul className="health_list_items">
          <li>
            Antenatal and Postnatal Services: We provide essential healthcare
            services to expectant and new mothers, ensuring safe pregnancies and
            healthy infants.
          </li>
          <li>
            Outpatient Services: Our medical team offers general medical care
            and consultations to vulnerable communities, addressing various
            health concerns and promoting overall well-being.
          </li>
          <li>
            Food Access and Nutrition Education: We support struggling families
            by providing access to nutritious food and educating them on proper
            nutrition practices, empowering them to make healthy choices.
          </li>
          <li>
            Medical Camps and Outreaches: We organize medical camps and outreach
            programs to reach underserved communities, delivering medical
            services, health screenings, and education on preventive care.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Health;
