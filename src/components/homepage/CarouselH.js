
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from "react-router-dom";
import '../../Homepage.css'


const CarouselH = () => {
return (

    <div className="container  mt-5">
        <div
            id="carouselExampleControls"
            className="carousel carousel-dark slide mt-5 d-none d-lg-block"
            data-bs-interval="false"
        >
            {/* Desktop */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-sm-3 col-md-3">
                            <div className="col-image-advert1"></div>
                        </div>
                        <div className="col-sm-3 col-md-3">
                            <div className="col-image-advert2"></div>
                        </div>
                        <div className="col-sm-3 col-md-3">
                            <div className="col-image-advert3"></div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item ">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-sm-3 col-md-3">
                            <div className="col-image-advert1"></div>
                        </div>
                        <div className="col-sm-3 col-md-3">
                            <div className="col-image-advert2"></div>
                        </div>
                        <div className="col-sm-3 col-md-3">
                            <div className="col-image-advert3"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item ">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-sm-3 col-md-3">
                        <div className="col-image-advert1"></div>
                    </div>
                    <div className="col-sm-3 col-md-3">
                        <div className="col-image-advert2"></div>
                    </div>
                    <div className="col-sm-3 col-md-3">
                        <div className="col-image-advert3"></div>
                    </div>
                </div>
            </div>

            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
          <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
          ></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
          <span
              className="carousel-control-next-icon"
              aria-hidden="true"
          ></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        {/* Mobile */}
        <div className="d-lg-none mt-3">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-sm-3 col-md-3">
                    <div className="col-image-advert1"></div>
                </div>
            </div>
        </div>
        <div className="homepage-carousel-title mt-3">
            <Link className="btn btn-outline-secondary btn-lg" to={"#"}>
                {" "}
                View more Upcoming Events
            </Link>
        </div>
    </div>


);
};
export default CarouselH;
