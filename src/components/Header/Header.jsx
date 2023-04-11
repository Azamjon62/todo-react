import React from 'react'
import "./index.scss"
import icon8 from "../../assets/imgs/icon8.svg";
import icon9 from "../../assets/imgs/icon9.svg";
import icon10 from "../../assets/imgs/icon10.svg";

const Header = () => {
  return (
    <header>
      <div className="header container">
        <a href="#">
          <img className="header--img" src={icon8} alt="back" />
        </a>
        <div className="header__flex">
          <form className="header__flex__form">
            <label htmlFor="search">
              <input id="search" type="text" placeholder="Search" />
              <img src={icon10} alt="iconka" />
            </label>
          </form>
          <a href="#">
            <img className="header__flex--img" src={icon9} alt="icon ..." />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header