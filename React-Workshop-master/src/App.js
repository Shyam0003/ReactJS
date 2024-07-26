import Menu from './Component/Menu';
import Footer from './Component/Footer';
import { Route, Routes } from "react-router-dom";
import Login from './Component/Login';
import Home from './Component/Home';
import React from 'react';
function App() {

  return (
    <>
      <section className='container fluid'>
        <section className='row'>
          <Menu></Menu>
        </section>
       
        <section className="row" >
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
            </Routes>
            </section>

            <section className="row">
            <Footer></Footer>
            </section>
      </section>     
        
    </>
  );
}

export default App