import React from "react";
import './Readings.css'
import { Link } from "react-router-dom";

const Readings = () => {
  return (
    <div>
        <div className="section-title">
            <h1>Luganda Mass Order</h1>
        </div>
      <article className="order">
        <h1 className="order__title">Introduction</h1>
        <ul className="order__features">
          <li className="order__feature">Greeting</li>
          <li className="order__feature">Concluding Rite</li>
          <li className="order__feature">PENITENTIAL RITE</li>
          <li className="order__feature">GLORIA:</li>
          <li className="order__feature">GLORIA:</li>
        </ul>
        <div>
          <button className="order__button">Introduction</button>
        </div>
      </article>
      <article className="order order--highlighted">
        <h1 className="order__annotation">Liturgy of the Word</h1>
        <ul className="order__features">
          <li className="order__feature">First Reading</li>
          <li className="order__feature">Psalm</li>
          <li className="order__feature">Second Reading</li>
          <li className="order__feature">Gospel Acclamation</li>
          <li className="order__feature">Gospel</li>
          <li className="order__feature">GLORIA Sermion</li>
        </ul>
        <div>
          <Link className="order__button" to={'/currentreading'}>Todays Readings</Link>
        </div>
      </article>
      <article className="order">
        <h1 className="order__title">Liturgy of the Eucharist</h1>
        <ul className="order__features">
          <li className="order__feature">Credo</li>
          <li className="order__feature">Liturgy of the Eucharist</li>
          <li className="order__feature">Eucharistic Prayer 2</li>
          <li className="order__feature">Our Father</li>
          <li className="order__feature">Communion</li>
        </ul>
        <div>
          <button className="order__button">Prayers</button>
        </div>
      </article>
    </div>
  );
};

export default Readings;
