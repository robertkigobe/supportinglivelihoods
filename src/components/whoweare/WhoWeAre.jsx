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
                We prioritize the health and well-being of individuals and
                families in Masaka. Our health programs include:
              </h3>

              <div>
                <button class="button">Read More</button>
              </div>
            </article>
            <article class="plan">
              <h1 class="plan__title">SPECIAL NEEDS</h1>
              {/* <h2 class="plan__price">$0/month</h2> */}
              <h3>
                We firmly believe that children with disabilities have unique
                talents and abilities that contribute to society. However, they
                often face discrimination, abuse, and disrespect due to a lack
                of understanding and awareness.
              </h3>

              <div>
                <button class="button">Read More</button>
              </div>
            </article>
            <article class="plan plan--highlighted">
              <h1 class="plan__annotation">EDUCATION</h1>
              {/* <h1 class="plan__title">PLUS</h1> */}
              {/* <h2 class="plan__price">$29/month</h2> */}
              <h3>
                We believe that education is a fundamental right for all
                children.
              </h3>

              <div>
                <button class="button">Read More</button>
              </div>
            </article>
            <article class="plan">
              <h1 class="plan__title">LIVELIHOOD</h1>
              {/* <h2 class="plan__price">$99/month</h2> */}
              <h3>
                We are dedicated to addressing the issue of poverty and
                empowering struggling families and individuals in Masaka.{" "}
              </h3>

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
