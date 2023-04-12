import { Link } from "react-router-dom";
import "./MainNav.css";
import { Envelope } from "react-bootstrap-icons";
import { Clock } from "react-bootstrap-icons";
import { Speaker } from "react-bootstrap-icons";

const MainNav = () => {
  const mail = "   info@uccb.us";
  const masstime1 = "Sunday 1:00 pm";
  const masstime2 = "Friday 8:00 pm";
  const onair = "Listen Live";
  return (
    <>
      <div className="header">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <p>Uganda Catholic Community in the Archdiocese of Boston</p>
          </li>

          <li className="main-nav__item">
            <Envelope />
            {mail}
          </li>
          <li className="main-nav__item">
            <Clock />
            {masstime1}
          </li>
          <li className="main-nav__item">
            <Clock />
            {masstime2}
          </li>
        </ul>
      </div>
      <div className="main-header">
        <div className="main-header__brand">
          <Link className="link" to="/">
            UCCB
          </Link>
            <Link className="link" to="/">
          <div className="main-header__badge">
              
          </div>
            </Link>
        </div>
        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to="/">
                Who we are
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to="/currentreading">
                Prayer &amp; Worship
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to="/children">
                Committees
              </Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to="/">
                Radio Programing
              </Link>
            </li>
            <li className="main-nav__item main-nav__item--cta">
              <Link className="link cta" to="/">
                Donate
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default MainNav;
