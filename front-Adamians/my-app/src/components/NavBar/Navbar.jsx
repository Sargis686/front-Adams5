
import { NavLink } from "react-router-dom";
import { useState } from "react";
import './style.css'
import  LOGOTYPE from  '../../Pictures/Logotype.png'



function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);//true

  const Close = () => setClick(false);   //false

  return (
    <div>
      {/* 
The Close function is used as an event handler for the onClick event of the div element. When the div element is clicked, the Close function will be called, which in turn will update the click state to false, effectively removing the main-container class from the div element and hiding it.

In summary, if you click on the div element, it will toggle the click state and hide/show the div element depending on its current value. */}
      <div className={click ? "main-container" : ""} onClick={() => Close()} />

      <nav className="navbar" onClick={e => e.stopPropagation()}>

        <div className="nav-container">

          <NavLink exact to="/" className="nav-logo">
         

         <img src={LOGOTYPE}/>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className="nav-item">

              <NavLink
                exact
                to="/Demos"
                // activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Demos
              </NavLink>

            </li>
            <li className="nav-item">

              <NavLink
                exact
                to="/Posts"
                // activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Posts
              </NavLink>

            </li>
            <li className="nav-item">

              <NavLink
                exact
                to="/blog"
                // activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Features
              </NavLink>

            </li>

            <li className="nav-item">

              <NavLink
                exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Categories
              </NavLink>

            </li>





            <li className="nav-item">

              <NavLink
                exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Shop

              </NavLink>

            </li>





            <li className="nav-item">

              <NavLink
                exact
                to="/contact"
                // activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Buy Now
              </NavLink>

            </li>





          </ul>

          <div className="nav-icon" onClick={handleClick}>

            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>

          </div>

        </div>

      </nav>

    </ div>
  );
}
export default NavBar