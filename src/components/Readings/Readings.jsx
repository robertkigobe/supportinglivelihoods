import React from "react";
import "./Readings.css";
import { Link } from "react-router-dom";

const Readings = () => {
  return (
    <section className="reading__section">
      <div className="section-title">
        <h1>Ekitabo Ky'Mukristu</h1>
      </div>
      <div className="section_block">
        <h1 className="section__title">AMAYINGIRA</h1>
        <ul className="section__features">
          <li className="section__feature">Greeting</li>
          <li className="section__feature">Concluding Rite</li>
          <li className="section__feature">Penetential Rites</li>
          <li className="section__feature">Gloria:</li>
          <li className="section__feature">Readings:</li>
        </ul>
        <div className="section__button-container">
          <Link className="section__button" to={"/"}>
            AMAYINGIRA
          </Link>
        </div>
      </div>
      <div className="section_block section--highlighted">
        <h1 className="section_annotation">EKIGAMBO KY'OMUKAMA</h1>
        <ul className="section__features">
          <li className="section__feature">ESSOMO I</li>
          <li className="section__feature">OLUYIMBA OLW’OKWEBUULIRIRA</li>
          <li className="section__feature">ESSOMO II</li>
          <li className="section__feature">OKWANIRIZA EVANJIRI</li>
          <li className="section__feature">EVANJIRI</li>
        </ul>
        <div className="section__button-container">
          <Link className="section__button" to={"/"}>
            AMASOMMO
          </Link>
        </div>
      </div>
      <div className="section_block">
        <h1 className="section__title">ESSALA</h1>
        <ul className="section__features">
          <li className="section__feature">Credo</li>
          <li className="section__feature">Liturgy of the Eucharist</li>
          <li className="section__feature">Eucharistic Prayer 2</li>
          <li className="section__feature">Our Father</li>
          <li className="section__feature">Communion</li>
        </ul>
        <div className="section__button-container">
          <Link className="section__button" to={"/"}>
            ESSAALA
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Readings;
