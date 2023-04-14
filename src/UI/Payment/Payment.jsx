import React from 'react'
import "./index.scss"
import icon13 from "../../assets/imgs/icon13.svg"

const Payment = () => {
  return (
    <div>
      <div className="mains">
        <div className="mains__list container">
          <h2 className="mains__list-h2">Payment Details</h2>
          <a href="#"><img src={icon13} alt="short" /></a>
        </div>
      </div>
    </div>
  );
}

export default Payment