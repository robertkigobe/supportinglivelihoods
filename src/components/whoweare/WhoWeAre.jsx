import "./WhoWeAre.css";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <div className="main_whoweare">
      <div className="main_whoweare_main__title">
        <span>who we are</span>
      </div>
      <div className="main_who_we_are_containers">
      <div className="who_we_are_container">
      HEALTH
        <ul>
          <li>Antenatal and post-natal services</li>
          <li>Out-patient services and Nutrition care</li>
        </ul>
        <Link className="whoweare__button" to="/health">
          HEALTH
        </Link>
      </div>
      <div className="who_we_are_container">
      SPECIAL NEEDS
        <ul>
          <li>
            We are committed to fostering the flourishing of children with
            disabilities such as physical, developmental, behavioral, emotional,
            and sensory impaired disorders
          </li>
          <li>Autism, Down Syndrome, Fragile X Syndrome</li>
          <li>Sensory Impairment</li>
          <li>Deaf-blind</li>
          <li>Deaf</li>
          <li>Physical Disabilities</li>
          <li>Muscular Dystrophy</li>
          <li>Cerebral Palsy</li>
          <li>Epilepsy</li>
          <li>Behavioral or Emotional Disabilities</li>
          <li>ADD</li>
          <li>Oppositional Defiant Disorder</li>
          <li>Bipolarized</li>
        </ul>
        <Link className="whoweare__button" to="/specialneeds">
          SPECIAL NEEDS
        </Link>
      </div>
      <div className="who_we_are_container">
      EDUCATION
        <ul>
          <li>Formal education ($250)</li>
        </ul>
        <Link className="whoweare__button" to="/education">
          EDUCATION
        </Link>
      </div>
      <div className="who_we_are_container">
        
          LIVELIHOOD
        
        <ul>
          <li>women and youth</li>
        </ul>
        <Link className="whoweare__button" to="/livelihood">
          LIVELIHOOD
        </Link>
      </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
