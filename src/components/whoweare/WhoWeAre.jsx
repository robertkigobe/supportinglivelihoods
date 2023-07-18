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
          <h1 className="section-title">WHO WE ARE</h1>
          <div className="who_we_are">
            Supporting Livelihoods Inc is a nonprofit organization dedicated to
            restoring hope among poor and struggling families in Luweero,
            Uganda. Our core values, including equality, respect,
            accountability, integrity, and compassion, guide our actions and
            shape our approach to community development.
          </div>
          <div className="plan__list">
            <article className="plan plan--highlighted">
              <h1 className="plan__annotation">HEALTH</h1>
              {/* <h2 class="plan__price">$0/month</h2> */}
              <h3>
                We prioritize the health and well-being of individuals and
                families in Masaka. Our health programs include:
              </h3>

              <div>
                <Link className="button" to="/education">
                  Read More
                </Link>
              </div>
            </article>
            <article className="plan plan--highlighted">
              <h1 className="plan__annotation">SPECIAL NEEDS</h1>
              {/* <h2 class="plan__price">$0/month</h2> */}
              <h3>
                We firmly believe that children with disabilities have unique
                talents and abilities that contribute to society. However, they
                often face discrimination, abuse, and disrespect due to a lack
                of understanding and awareness.
              </h3>

              <div>
                <Link className="button" to="/education">
                  Read More
                </Link>
              </div>
            </article>
            <article className="plan plan--highlighted">
              <h1 className="plan__annotation">EDUCATION</h1>
              {/* <h1 class="plan__title">PLUS</h1> */}
              {/* <h2 class="plan__price">$29/month</h2> */}
              <h3>
                We believe that education is a fundamental right for all
                children.
              </h3>

              <div>
                <Link className="button" to="/education">
                  Read more
                </Link>
              </div>
            </article>
            <article className="plan plan--highlighted">
              <h1 className="plan__annotation">LIVELIHOOD</h1>
              {/* <h2 class="plan__price">$99/month</h2> */}
              <h3>
                We are dedicated to addressing the issue of poverty and
                empowering struggling families and individuals in Masaka.{" "}
              </h3>

              <div>
                <Link className="button" to="/livelihood">
                  Read more
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default WhoWeAre;
