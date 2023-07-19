import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <div className="main_education">
      <div className="education_title">
        <h1>Education</h1>
      </div>

      <div className="education_info">
        <p>
          We believe that education is a fundamental right for all children. Our
          education programs focus on:
        </p>
      </div>

      <div  className="education_list">
        <ul className="education_list_items">
          <li>
            Primary Education ($250 per child per year): We support children in
            accessing primary education, covering school fees, supplies, and
            educational resources, fostering a strong foundation for their
            future.
          </li>
          <li>
            High School Education ($450 per child per year): We enable deserving
            students to pursue their high school education by providing
            financial assistance and mentoring support.
          </li>
          <li>Tertiary Institute Education ($570 per student per year)</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
