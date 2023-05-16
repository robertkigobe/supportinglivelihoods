import React from "react";
import "./Chaplains.css";
import nolan from '../../images/uccbimages/nolan.jpg';
import lugonja from '../../images/uccbimages/Lugonja.jpg';
import jude from '../../images/uccbimages/Jude2.jpg';


const Chaplains = () => {
  return (
    <div className="main__chaplaincy">
      <div className="main__chaplaincy__title">
        <h1>Spiritual Care</h1>
      </div>
      <div className="main__chaplaincy__info">
        <p>
          Our Chaplains create a strong Catholic community, serving the
          religious and spiritual needs of student, faculty, and staff members.
          Particular emphasis is dedicated to the student body. In addition, it
          endeavors to collaborate with other religious leaders on campus in
          addressing religious pluralism through programs, services, and
          communications.
        </p>
        <p>
          The Uganda Catholic Community in the Archdiocese of Boston(UCCB) has
          been in existence for over 25 year but got organized in the present
          formation from 2004. The UCCB has its offices at St. Mary parish On
          133 School street, Waltham, MA 02451. Rev. Fr. Michael Nolan is the
          pastor assisted by Fr. Jude Kaggwa and Fr. John B. Lugonja – Ugandan
          priests in residence at the parish and chaplains of the UCCB
          community.
        </p>
      </div>
      <ul className="main__chaplaincy__image-list">
        <li className="main__chaplaincy__image">
          <div className="chaplain_image">
          <img
              src={nolan}
              alt="Fr Michael Nolan"
              className="chaplain__image"
            />
          </div>
          <p className="main__chaplaincy-name">Fr Nolan Michael</p>
        </li>
        <li className="main__chaplaincy__image">
          <div className="chaplain_image">
          <img
              src={lugonja}
              alt="Fr John Bosco Lugonja"
              className="chaplain__image"
            />
          </div>
          <p className="main__chaplaincy-name">Fr Lugonja John Bosco</p>
        </li>
        <li className="main__chaplaincy__image">
          <div className="chaplain_image">
          <img
              src={jude}
              alt="Fr Jude Kagwa"
              className="chaplain__image"
            />
          </div>
          <p className="main__chaplaincy-name">Fr Jude Kagwa</p>
        </li>
      </ul>
    </div>
  );
};

export default Chaplains;
