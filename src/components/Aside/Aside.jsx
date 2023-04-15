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

import { NavLink } from "react-router-dom";


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
                <NavLink to="/" className='li' > <img src={icon1} alt="home" /> Home</NavLink>
                <NavLink to="/course" className='li' > <img src={icon2} alt="course" /> Course</NavLink>
                <NavLink to="/students" className='li' > <img src={icon3} alt="students" /> Students</NavLink>
                <NavLink to="/payment" className='li' > <img src={icon4} alt="payment" /> Payment</NavLink>
                <NavLink to="/report" className='li' > <img src={icon5} alt="report" /> Report</NavLink>
                <NavLink to="/settings" className='li' > <img src={icon6} alt="Settings" /> Settings</NavLink>
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

