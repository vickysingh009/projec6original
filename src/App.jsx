import { useState } from "react";
import Navbar_Component from "./components/Navbar_Component";
import "./App.css";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <>
      <div className="">
        {" "}
        <Navbar_Component></Navbar_Component>
      </div>
<Outlet />
    </>
  );
}

export default App;
