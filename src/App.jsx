import React from "react";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Card from "./UI/Card/Card.jsx";
import Payment from "./UI/Payment/Payment";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <Aside />
      <div className="baz">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/students" element={<Card />} />
          <Route path="/payment" element={<Payment/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
