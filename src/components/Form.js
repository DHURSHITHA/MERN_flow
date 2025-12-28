import React from 'react'
import { useState } from 'react';
function Form() {
    const [name,setName]=useState("");
  return (
    <div>
        <br/><br/>
        <input type='text' placeholder='Enter your name'onChange={(e)=>setName(e.target.value)} />
        {/* store the name lively after storing each of the character */}
        <br/>
        <h1>Hello, {name}</h1>
    </div>
  )
}

export default Form