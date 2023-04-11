import React from "react";
import Aside from "./components/Aside/Aside";
import Header from "./components/Header/Header";
// import Main from "./components/Main/Main";

function App() {
  return (
    <div className="flex">
      <Aside />
      <div className="baz" >
        <Header />
        {/* <Main /> */}
      </div>
    </div>
  );
}

export default App;
