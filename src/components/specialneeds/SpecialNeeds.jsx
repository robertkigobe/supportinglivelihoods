import React from "react";
import "./SpecialNeeds.css";

const SpecialNeeds = () => {
  return (
    <div className="main_specialneeds">
      <div className="specialneeds_title">
        <h1>Special Needs and Disabilities</h1>
      </div>
      <div className="specialneeds_info">
        <p>
          We firmly believe that children with disabilities have unique talents
          and abilities that contribute to society. However, they often face
          discrimination, abuse, and disrespect due to a lack of understanding
          and awareness. Our Special Needs and Disabilities program aims to:
        </p>
      </div>
      <div className="specialneeds_list">
        <ul className="specialneeds_list_items">
          <li>
            <p>
              Create Awareness About Disabilities: We raise awareness in the
              community about disabilities, challenging misconceptions and
              promoting inclusion and acceptance.
            </p>
          </li>
          <li>
            <p>
              Provision of Equipment: We provide children with disabilities with
              the necessary equipment and assistive devices to enhance their
              mobility, communication, and independence.
            </p>
          </li>
          <li>
            <p>
              Education: We ensure that children with disabilities receive
              quality education tailored to their specific needs, empowering
              them to reach their full potential and become active members of
              society.
            </p>
          </li>
          <li>
            <p>
              Social Work Services and Accompaniment: Our dedicated social work
              team offers counseling, support, and accompaniment to children
              with disabilities and their families, promoting their emotional
              well-being and social integration.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SpecialNeeds;
