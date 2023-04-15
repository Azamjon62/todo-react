import React from 'react'
import "./index.scss"


const Modal = () => {
  return (
    <div className="todo" ref={modalRef}>
      <form>
        <label htmlFor="">
          <input type="text" placeholder="name" />
        </label>
      </form>
    </div>
  );
}

export default Modal