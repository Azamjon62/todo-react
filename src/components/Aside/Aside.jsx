import React from 'react'
import "./index.scss"
import img1 from "../../assets/imgs/img1.svg"
import icon1 from "../../assets/imgs/icon1.svg";
import icon2 from "../../assets/imgs/icon2.svg";
import icon3 from "../../assets/imgs/icon3.svg";
import icon4 from "../../assets/imgs/icon4.svg";
import icon5 from "../../assets/imgs/icon5.svg";
import icon6 from "../../assets/imgs/icon6.svg";
import icon7 from "../../assets/imgs/icon7.svg";


const Aside = () => {
  return (
    <aside>
      <div className="aside">
        <div className="aside__flex">
          <div className="aside__flex__top">
            <div className="aside__flex__top__logo">
              <span>|</span> <h1>CRUD OPERATIONS</h1>
            </div>
            <div className="aside__flex__top__admin">
              <img src={img1} alt="admin photo" />
              <h3>Karthi Madesh</h3>
              <a href="#">Admin</a>
            </div>
          </div>

          <div className="aside__flex__medium">
            <ul className='aside__flex__medium__ul' >
                <li className='li' > <img src={icon1} alt="home" /> <a href="#">Home</a></li>
                <li className='li' > <img src={icon2} alt="course" /> <a href="#">Course</a></li>
                <li className='li' > <img src={icon3} alt="students" /> <a href="#">Students</a></li>
                <li className='li' > <img src={icon4} alt="payment" /> <a href="#">Payment</a></li>
                <li className='li' > <img src={icon5} alt="report" /> <a href="#">Report</a></li>
                <li className='li' > <img src={icon6} alt="Settings" /> <a href="#">Settings</a></li>
            </ul>
          </div>
            <div className='aside__flex__login' >
                <a href="#">Logout <img src={icon7} alt="logout" /> </a>
            </div>

        </div>
      </div>
    </aside>
  );
}

export default Aside

