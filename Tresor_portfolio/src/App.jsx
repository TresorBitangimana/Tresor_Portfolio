
import './App.css'

import Home from './Home/Home';
import Projects from "./Projects/Projects"
import About from './About/About';
import Contacts from './Contacts/Contacts';


import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {

  function showMediaNav(){
    const mediaNav = document.getElementById("media-nav-bar-container");
    if(mediaNav.style.display == "none"){
      mediaNav.style.display = "flex";
    }
    else{
      mediaNav.style.display = "none";
    }
  }

  return (
    <Router basename="/Portfolio">

      <nav className="navagation" id="navagation">
        <div className="logo-container" id="logo-container">
          <h1 className="logo" id="logo">Tresor bitangimana</h1>
        </div>
        <div className="navagation-paths">
          <Link className="paths" to="/">Home</Link>
          <Link className="paths" to="/Projects/Projects">Projects</Link>
          <Link className="paths" to="/About/About">About</Link>
          <div className="contacts-container" id="contacts-container">
            <Contacts />
          </div>
        </div>

        <div className="more-options-button" id="more-options-button">
          <div onClick={showMediaNav} className="span-container" id="span-container">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

        {/* media nar bar shows when the more options button is clicked  */}
        <div className="media-nav-bar-container" id="media-nav-bar-container">
          <Link className="media-paths" to="/">Home</Link>
          <Link className="media-paths" to="/Projects/Projects">Projects</Link>
          <Link className="media-paths" to="/About/About">About</Link>
        </div>

      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/Projects/Projects" element={<Projects />}>Projects</Route>
        <Route path="/About/About" element={<About />}>About</Route>
      </Routes>

    </Router>

    
  )
}

export default App
