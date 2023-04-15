import React, { useState } from "react";
import "./index.scss";
import img2 from "../../assets/imgs/img2.svg";
import icon11 from "../../assets/imgs/icon11.svg";
import icon12 from "../../assets/imgs/icon12.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Card = () => {
  const [openModal, setModal] = useState(false);

  const [task, setTask] = useState([
    {
      id: 1,
      name: "Azamojn Xusanov",
      email: "azamjonx839@gmail.com",
      phone: "+998938516223",
    }

  ],
      localStorage.getItem("usersTask")
  );

  const [name, setName] = useState(
    {
    fullName: "",
    email: "",
    phone: "",
  }
  );
  const addTask = (e) => {
    e.preventDefault();

    const newTask = {      
      id: Date.now(),
      name: name.fullName,
      email: name.email,
      phone: name.phone,
    };

    if (
      !newTask.name.length ||
      !newTask.phone.length ||
      !newTask.email.length
    ) {
      toast.error("Please fill in the title and others !", {
        autoClose: 900,
        position: "top-right",
      });
      setModal(true);

    } else {
      setTask([...task, newTask]);
      setName({ fullName: "", email: "", phone: "" });
      toast.success("Task added successfully", {
        autoClose: 1300,
      });
    }

    console.log(name);
  };

  const deleteItem = (id) => {
    const newData = task.filter((item) => item.id != id);
    setTask(newData);
  };


  return (
    <div className="mains">
      <ToastContainer/>
      <div
        className={`modal`}
        style={{ display: `${openModal ? "block" : "none"}` }}
      >
        <div
          className="moda"
          onClick={() => {
            setModal(false);
          }}
        ></div>

        <form className="modal__form">
          <h2>Page Add a new Student task</h2>

          <div className="modal__form__flex">
            <label className="label1" htmlFor="name">
              <h3>Name</h3>
              <input
                type="text"
                name="name"
                id="name"
                value={name.fullName}
                onChange={(e) => setName({ ...name, fullName: e.target.value })}
              />
            </label>
            <label className="label2" htmlFor="email">
              <h3>Email</h3>
              <input
                type="text"
                name="email"
                id="email"
                value={name.email}
                onChange={(e) => setName({ ...name, email: e.target.value })}
              />
            </label>
          </div>
          <label className="modal__form__label3" htmlFor="deadline">
            <h3>Phone Number</h3>
            <input
              type="tel"
              name="deadline"
              id="deadline"
              value={name.phone}
              onChange={(e) => setName({ ...name, phone: e.target.value })}
            />
          </label>

          <button
            className="modal__form__btn"
            type="submit"
            onClick={(e) => {
              setModal(false);
              addTask(e);
              localStorage.setItem("usersTask", name);
            }}
          >
            Submit
          </button>
        </form>
      </div>

      <div className="mains__list container">
        <h2 className="mains__list-h2">Students List</h2>
        <button className="mains__list-btn" onClick={() => setModal(true)}>
          ADD NEW STUDENT
        </button>
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
        <p className="p">Date of admission</p>
      </div>

      {task?.map((item, index) => {
        return (
          <div className="baz" key={index}>
            <div key={item.id} className="card container">
              <div className="card__flex">
                <img src={img2} alt="img" />
                <p className="p1" title={item.email}>
                  {item.name.slice(0, 15)}
                </p>
              </div>
              <div className="card__flexs">
                <p className="p2" title={item.email}>
                  {item.email.slice(0, 17)}
                </p>
                <p className="p3" title={item.phone}>
                  {item.phone.slice(0, 13)}
                </p>
                <p className="p4" >{index + 1}</p>
              </div>
              <div className="card__fleis">
                <p>{new Date().toJSON().slice(0, 10)}</p>
                <div className="card__fleis__icon">
                  <a href="#">
                    <img src={icon11} alt="pen" />
                  </a>
                  <div onClick={() => deleteItem(item?.id)}>
                    <img src={icon12} alt="trash" />
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
