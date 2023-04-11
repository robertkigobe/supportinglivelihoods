import { Link } from "react-router-dom";
import "./MainNav.css";

const MainNav = () => {
  return (
    <div className="main-header">
      <div className="main-header__brand">
        <Link className="link" to="/home">UCCB</Link>
      </div><nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <Link className="link" to="/">Home</Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to="/">Who are we</Link>
            </li>
            <li className="main-nav__item">
              <Link  className="link" to="/currentreading">Prayer &amp; Worship</Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to="/">News &amp; Articles</Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to="/">Radio Programing</Link>
            </li>
            <li className="main-nav__item main-nav__item--cta">
              <Link className="link cta" to="/">Donate</Link>
            </li>
          </ul>
        </nav>
      </div>
    
  );
};
export default MainNav;
