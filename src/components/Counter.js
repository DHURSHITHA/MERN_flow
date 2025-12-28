import React, { useState } from 'react'

function Counter() {
    //creating the state value for storing the values
    const[count,setCount]=useState(0);//initial value 0
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
  return (
    <div>
        <button onClick={increment}>Increment +</button>
        <h2>Count:{count}</h2>
        <button onClick={decrement}>Decrement -</button>
    </div>
  )
}

export default Counter