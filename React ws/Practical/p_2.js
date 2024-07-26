import React, { useState } from "react";
import Title from "./Title";
import Info from "./Info";
function App() {
  const [name,setName]=useState('shyam panchasara')

  const test=(v)=>
  {
    setName('Apptsiam info juangadh')
  }
  return (
    <>
      <h1>Welcome to {name} </h1>
      <button onClick={()=>test('Shyam')}>Change data</button>
      <button onClick={()=>setName('Apptisam')}>My data </button>
      <br></br>
      <input type='text' placeholder='Enter the name' onChange={(e)=>setName(e.target.value)}></input>
    </>
  );
}   
export default App;
 