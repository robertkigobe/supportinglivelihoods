import "./WhoWeAre.css";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <>
      {/* <div className="main_whoweare">
      <div className="main_whoweare_main__title">
        <span>who we are</span>
      </div>
  
     
      <div className="who_we_are_container">
      
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
    </div> */}
      <main>
        <section id="plans">
          <h1 className="section-title">who we are</h1>
          <div class="plan__list">
            <article class="plan plan--highlighted">
              <h1 class="plan__title">HEALTH</h1>
              {/* <h2 class="plan__price">$0/month</h2> */}
              <h3>
                We are committed to supporting the community with health
                services.
              </h3>
              <ul class="plan__features">
                <li class="plan__feature">Antenatal and post-natal services</li>
                <li class="plan__feature">
                  Out-patient services and Nutrition care
                </li>
                <li class="plan__feature">
                  Transportation to health facilities
                </li>
                <li class="plan__feature">Hygiene education</li>
                <li class="plan__feature">
                  Dental and Vision care for the eldery
                </li>
              </ul>
              <div>
                <button class="button">Read More</button>
              </div>
            </article>
            <article class="plan">
              <h1 class="plan__title">SPECIAL NEEDS</h1>
              {/* <h2 class="plan__price">$0/month</h2> */}
              <h3>Fostering the flourishing of children with special needs.</h3>
              <ul class="plan__features">
                <li>Autism, Down Syndrome, Fragile X Syndrome</li>
                <li class="plan__feature">
                  Sensory Impairment,Muscular Dystrophy
                </li>
                <li class="plan__feature">Deaf, and or Deaf-blind</li>
                <li class="plan__feature">Physical Disabilities</li>
                <li class="plan__feature">Cerebral Palsy, Epilepsy</li>
                <li class="plan__feature">
                  Behavioral or Emotional Disabilities, ADD
                </li>
                <li class="plan__feature">Oppositional Defiant Disorder</li>
                <li class="plan__feature">Bipolarized</li>
              </ul>
              <div>
                <button class="button">Read More</button>
              </div>
            </article>
            <article class="plan plan--highlighted">
              <h1 class="plan__annotation">EDUCATION</h1>
              {/* <h1 class="plan__title">PLUS</h1> */}
              {/* <h2 class="plan__price">$29/month</h2> */}
              <h3>
                Supporting the under priviledged in the community to have a
                chance at education.
              </h3>
              <ul class="plan__features">
                <li class="plan__feature">Schilarstic materials</li>
                <li class="plan__feature">Support for home tutoring</li>
                <li class="plan__feature">Support to small village schools</li>
                <li class="plan__feature">library services</li>
              </ul>
              <div>
                <button class="button">Read More</button>
              </div>
            </article>
            <article class="plan">
              <h1 class="plan__title">LIVELIHOOD</h1>
              {/* <h2 class="plan__price">$99/month</h2> */}
              <h3>Helping everyone have a chance at a life full of joy.</h3>
              <ul class="plan__features">
                <li class="plan__feature">Counselling</li>
                <li class="plan__feature">Companionship visits</li>
                <li class="plan__feature">Hope conversations</li>
              </ul>
              <div>
                <button class="button">Read More</button>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default WhoWeAre;
