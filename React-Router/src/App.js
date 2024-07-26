import React, { useState } from "react";
import Menu from "./componant/Menu";
import Footer from "./componant/Footer";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./componant/Home";
import Login from "./componant/Login";
import About from "./componant/About";
function App() {

  return (
      <>
        <section className="container-fluid">
            <section className="row">
            <Menu></Menu>
            </section>

            <section className="row">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="/about" element={<About></About>}></Route>
            </Routes>
            </section>

            <section className="row">
            <Footer></Footer>
            </section>
 </section>     
      </>
      
  );
}

export default App;
