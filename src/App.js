// import logo from './logo.svg';
// import './App.css';
// import Student from './components/Student';
// // import Header from './components/Header';
// // import Footer from './components/Footer';

// function App() {
//   return (
//     <div className="App">
//       {/* <Header/>
//            <h1>Bannari Amman Institute of Technology</h1>
//            <p>This is my contents</p>
//       <Footer/> */}
//       <Student name="Dhurshitha" course="DSA" batch="2027" />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter,Routes,Route, Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AboutCollege from './pages/AboutCollege';
import AboutDept from './pages/AboutDept';
import Counter from './components/Counter';
import Login from './components/Login';
import Toggle from './components/Toggle';
import Form from './components/Form';
import ThemeToggle from './components/ThemeToggle';
import List from './components/List';
function App() {
  return (
    // <BrowserRouter>
    // {/* Navigation bar */}
    // <nav>
    //   <Link to='/'>Home</Link>
    //   <Link to='/about'>About Us</Link>
    //   <Link to='/contact'>Contact Us</Link>
    // </nav>
    // {/* Main Router */}
    // <Routes>
    //   <Route path='/' element={<Home/>}/>
    //   {/* Nested route for about page */}
    //   {/* here Route is not self closing tag */}
    //   <Route path='/about' element={<About/>}>
    //     <Route path='college' element={<AboutCollege/>}/>
    //     <Route path='department' element={<AboutDept/>}/>
    //   </Route>
    //   <Route path='/contact' element={<Contact/>}/>
    // </Routes>
    // </BrowserRouter>
        <div className="App">
          <Counter/>
          <Login/>
          <Toggle/>
          <Form/>
          <ThemeToggle/>
          <List/>
        </div>
    );
}
export default App;
