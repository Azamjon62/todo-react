import React from 'react'
import "./index.scss"
import img2 from "../../assets/imgs/img2.svg";
import icon11 from "../../assets/imgs/icon11.svg";
import icon12 from "../../assets/imgs/icon12.svg";

const Card = () => {
  return (
    <div className="mains">
      <div className="mains__list container">
        <h2 className="mains__list-h2">Students List</h2>
        <button className="mains__list-btn">ADD NEW STUDENT</button>
      </div>

      <hr className="container" />

      <div className=" wrapper container">
        <div className="wrapper__flex">
          <p>Name</p>
          <p>Email</p>
        </div>
        <div className="wrapper__flex2">
          <p>Phone</p>
          <p>Enroll Number</p>
        </div>
        <p>Date of admission</p>
      </div>

      <div className="card container">
        <div className="card__flex">
          <img src={img2} alt="img" />
          <p>Karthi</p>
        </div>
        <div className="card__flex">
          <p>karthi@gmmail.com</p>
          <p>7305477760</p>
          <p>1234567305477760</p>
        </div>
        <div className="card__fleis">
          <p>08-Dec, 2021</p>
          <div className="card__fleis__icon">
            <a href="#">
              <img src={icon11} alt="pen" />
            </a>
            <a href="#">
              <img src={icon12} alt="trash" />
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="card container">
        <div className="card__flex">
          <img src={img2} alt="img" />
          <p>Karthi</p>
        </div>
        <div className="card__flex">
          <p>karthi@gmmail.com</p>
          <p>7305477760</p>
          <p>1234567305477760</p>
        </div>
        <div className="card__fleis">
          <p>08-Dec, 2021</p>
          <div className="card__fleis__icon">
            <a href="#">
              <img src={icon11} alt="pen" />
            </a>
            <a href="#">
              <img src={icon12} alt="trash" />
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="card container">
        <div className="card__flex">
          <img src={img2} alt="img" />
          <p>Karthi</p>
        </div>
        <div className="card__flex">
          <p>karthi@gmmail.com</p>
          <p>7305477760</p>
          <p>1234567305477760</p>
        </div>
        <div className="card__fleis">
          <p>08-Dec, 2021</p>
          <div className="card__fleis__icon">
            <a href="#">
              <img src={icon11} alt="pen" />
            </a>
            <a href="#">
              <img src={icon12} alt="trash" />
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="card container">
        <div className="card__flex">
          <img src={img2} alt="img" />
          <p>Karthi</p>
        </div>
        <div className="card__flex">
          <p>karthi@gmmail.com</p>
          <p>7305477760</p>
          <p>1234567305477760</p>
        </div>
        <div className="card__fleis">
          <p>08-Dec, 2021</p>
          <div className="card__fleis__icon">
            <a href="#">
              <img src={icon11} alt="pen" />
            </a>
            <a href="#">
              <img src={icon12} alt="trash" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card