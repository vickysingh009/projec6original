import { useState } from "react";
import Navbar from "./components/navbar_component";
import "./App.css";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <>
      <div className="">
        {" "}
        <Navbar></Navbar>
      </div>
<Outlet />
    </>
  );
}

export default App;
