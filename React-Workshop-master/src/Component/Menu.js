import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <section className='col-md-12 p-3 bg-warning-subtle d-flex justify-content-center gap-3 align-items-center'>
    <Link to={'/'} className='btn btn-dark'>Home</Link>
    <Link to={'/Login'} className='btn btn-dark'>Login</Link>
</section>

  )
}

export default Menu