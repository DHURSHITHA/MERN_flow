import React from 'react'
import { Outlet } from 'react-router-dom'
import {Link} from 'react-router-dom'
function About() {
  return (
    <div className='About'>
        <h1>This is my About page</h1>
        <p>here it will show some of the details</p>
        <nav>
            <Link to='college'>About College</Link>
            <Link to='department'>About Department</Link>
        </nav>
        <Outlet/>
        {/* will display the nested page at bottom itself where the outlet is present there only the nested page will display*/}
    </div>
  )
}

export default About