import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';


// function App() {
//   return (
//     // <div className="App">
//     //   <h1>This is the text i am typing after deleting the existing header tag from start to end</h1>
//     //   <p>that header tag will be in default after you open this file after installing the dependenccy i am just typping this tags after deleting that existing header tag</p>
//     // </div>
//     <Home/>//when you just type this the import will automatically occur
    
//   );
// }

// export default App;


import React from 'react'

function App() {
  return (
    <>
      <Home/>
      <About/>
    </>
  )
}

export default App
