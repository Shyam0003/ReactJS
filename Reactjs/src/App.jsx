import React from 'react'
import './App.css'

function App() {
  const handleForm = (e)=>{
    console.log(e.target.value,e.target.name)
  }
  return (
    <>
    <form action="">
      <span>Username</span>
        <input type="text" name='username' onChange={handleForm}/>
      <span>Password</span>
      <input type="text" name='password' onChange={handleForm}/>
        <input type="submit" />
    </form>
    </>
  )
}

export default App