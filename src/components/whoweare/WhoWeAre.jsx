import "./WhoWeAre.css";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <div className="main_whoweare">
      <div className="main__title">
        <div>
          <Link className="whoweare__button buttongroup" to="/health">
            {" "}
            HEALTH
          </Link>
          <Link className="whoweare__button buttongroup" to="/specialneeds">
            {" "}
            SPECIAL NEEDS{" "}
          </Link>
          <Link className="whoweare__button buttongroup" to="/education">
            {" "}
            EDUCATION{" "}
          </Link>
          <Link className="whoweare__button buttongroup" to="/livelihood">
            {" "}
            LIVELIHOOD{" "}
          </Link>
        </div>
      </div>

      <p className="main_paragraph">
        <br />
        <ul>
          WHO ARE WE?
          <li>
            Nonprofit organization restoring hope among poor and struggling
            families
          </li>
        </ul>
        WHAT WE DO
        <ul>
          <li>
            Health
            <ul>
              <li>Antenatal and post-natal services</li>
              <li>Out-patient services and Nutrition care</li>
            </ul>
          </li>
          <li>
            Education:
            <ul>
              <li>Formal education ($250)</li>
            </ul>
          </li>
          <li>
            Special Needs
            <ul>
              <li>
                We are committed to fostering the flourishing of children with
                disabilities such as physical, developmental, behavioral,
                emotional, and sensory impaired disorders
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
          </li>
          <li>
            Livelihood
            <ul>
              <li>Providing clean water • Offering vocational training to</li>
              <li>women and youth</li>
            </ul>
          </li>
        </ul>
        <br />
      </p>
    </div>
  );
};

export default WhoWeAre;
