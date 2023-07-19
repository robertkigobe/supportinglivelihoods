import "./WhoWeAre.css";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
   
      <div className="">
        <section className="plans">
          <div className="plan_section_title">
            <h1 className="section-title">Who we are</h1>
          </div>

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
      </div>
    
  );
};

export default WhoWeAre;
