import React, { useState } from 'react'

function Toggle() {
    const[show,setShow]=useState(false);
    const[log,setLog]=useState(false);
  return (
    <div>
        <button  onClick={()=>setShow(!show)}>{show?"Hide" :"show"}</button>
        {show && <p>Hello Mern Stack</p>}
        <br/><br/>
        <button onClick={()=>setLog(!log)}>{log?"Logout":"Login"}</button>
        <br/>
        {log?"Heyyy👌You are logged In":"You are Logged Out"}
    </div>
  )
}

export default Toggle