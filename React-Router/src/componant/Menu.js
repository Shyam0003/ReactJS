import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <>
        <section className='col-md-12 p-3 bg-warning-subtle'>
            <Link to={"/"} className='btn btn-dark mx-2'>HOME</Link>
            <Link to={"/login"} className='btn btn-dark mx-2'>Login</Link>
            <Link to={'/about'} className='btn btn-dark mx-2'>About</Link>
        </section>
    </>
  )
}

export default Menu