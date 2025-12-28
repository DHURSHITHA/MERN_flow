import React from 'react'

function Login() {
const isLoggedIn=false;
  return (
    <div>
        <br/><br/>
        {isLoggedIn? "Welcome User!" :"Please Login"}
        <br/><br/>
    </div>
  )
}

export default Login