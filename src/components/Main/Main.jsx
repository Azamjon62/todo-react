import React from 'react'
import "./index.scss"
import img3 from "../../assets/imgs/img3.svg"
import img4 from "../../assets/imgs/img4.svg"
import img5 from "../../assets/imgs/img5.svg"
import img6 from "../../assets/imgs/img6.svg";

const Main = () => {
  return (
    <main>
      <div className="main">
        <div className="main__flex container">
          <a href="#">
            <div className="main__flex__card">
              <div className="main__flex__card__flex">
                <img src={img3} alt="ico" />
                <p className="p">Students</p>
              </div>
              <h3 className="main__flex__card-h3">243</h3>
            </div>
          </a>

          <a href="#">
            <div className="main__flex__card2">
              <div className="main__flex__card__flex">
                <img src={img4} alt="ico" />
                <p className="p">Course</p>
              </div>
              <h3 className="main__flex__card-h3">13</h3>
            </div>
          </a>

          <a href="#">
            <div className="main__flex__card3">
              <div className="main__flex__card__flex">
                <img src={img5} alt="ico" />
                <p className="p">Payments</p>
              </div>
              <h3 className="main__flex__card-h3">
                <span>INR</span> 556,000
              </h3>
            </div>
          </a>

          <a href="#">
            <div className="main__flex__card4">
              <div className="main__flex__card__flex">
                <img src={img6} alt="ico" />
                <p className="p">Users</p>
              </div>
              <h3 className="main__flex__card-h3">3</h3>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}

export default Main