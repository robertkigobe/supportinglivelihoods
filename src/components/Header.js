import "../Homepage.css";
import { Envelope } from "react-bootstrap-icons";
import { Clock } from "react-bootstrap-icons";
import { Speaker } from "react-bootstrap-icons";

const Header = () => {
  const mail = "   info@uccb.us";
  const masstime = "Sunday 1:00 pm";
  const onair = "Listen Live";
  return (
    <header>
      <div className="p-1 mb- bg-dark header">
        {/* Desktop */}
        <div className="container py-5 text-white justify-content-center align-items-center">
          <div className="row g-0">
            <div className="col-2 col-md-2 container d-flex justify-content-right align-items-left">
              <div className="col-sm-8 col-md-10">
                <div className="col-image-logo img-thumbnail rounded"></div>
              </div>
            </div>

            <div className="col-6 col-md-10 container d-flex justify-content-right align-items-right">
              <div>
                <p className="display-2 fs-2 fw-bold ">
                  Uganda Catholic Community in the Archdiocese of Boston
                </p>
                
            <div className="container align-items-right">
              <Envelope />
              {mail} <Clock />
              {masstime}
              <div className="accordion-button">
                <a
                  className="btn btn-outline-warning"
                  href="https://s4.radio.co/s844a35264/listen"
                >
                  <Speaker />
                  {onair}
                </a>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
