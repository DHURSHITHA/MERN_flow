// //type rfce
// import React from 'react'
// function Home() {
//   return (
//     //here only one parent tag can present in on eparent tage we cant have multiple parent tag
//     //here if you try to create h1 tag seperately and p tag sepearatelly it will show error but if you create that within div tag (parent tag) within that we can create the child tag
//     // <div>Home</div>
//     //this is called as fragment tag (dummy parent tag)
//     //parent tag
//     <> 
//         <h1>Hii</h1>
//         {/* child tags */}
//         <p>hello</p>
//     </>
//     //parent tag close
//   )
// }

// export default Home

import React from 'react'

function Home() {
  return (
    <>
        <h2>Home</h2>
        <p>This is currently in Home page</p>
    </>

  )
}

export default Home