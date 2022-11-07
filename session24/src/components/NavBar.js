import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
  } from "react-router-dom";
  
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCode } from '@fortawesome/free-solid-svg-icons'
  import { faTimes } from '@fortawesome/free-solid-svg-icons'
  import { faBars } from '@fortawesome/free-solid-svg-icons'

  import Home from "../pages/Home";
  import About from "../pages/About";
  import Contact from "../pages/Contact";
  import Work from "../pages/Work";

function Nav() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <FontAwesomeIcon icon={faCode} />
            KAW Inc.
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                Contact Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/work"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                My Work
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
          {click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default function NavBar() {
  
  return (
    <>
       <BrowserRouter>
        <Nav />
        <div className="pages">
          <Routes>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Work" element={<Work />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}