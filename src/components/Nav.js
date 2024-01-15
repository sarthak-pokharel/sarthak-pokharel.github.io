import { AppBar, Icon, IconButton, Typography } from "@mui/material";

import avatar from '../Assets/avatar.svg'
import "./Nav.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Logo(){
    return (<>
    <div style={{marginTop:15}}>
            <img src={avatar} width={70} height={70} />
            {/* <Typography variant="h4"><b>Up.</b></Typography> */}
        </div>
    </>)
}


const Hamburger = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="52"
      height="24"
      viewBox="0 0 52 24"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
        <rect
          id="Rectangle_3"
          data-name="Rectangle 3"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 47)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_5"
          data-name="Rectangle 5"
          width="42"
          height="4"
          rx="2"
          transform="translate(304 67)"
          fill="#574c4c"
        />
        <rect
          id="Rectangle_4"
          data-name="Rectangle 4"
          width="52"
          height="4"
          rx="2"
          transform="translate(294 57)"
          fill="#574c4c"
        />
      </g>
    </svg>
  );



  export default function Nav() {
    const [showNavbar, setShowNavbar] = useState(false);
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };
  
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Logo />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink onClick={()=>handleShowNavbar()} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink onClick={()=>handleShowNavbar()} to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink onClick={()=>handleShowNavbar()} to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink onClick={()=>handleShowNavbar()} to="/skills">Skills</NavLink>
              </li>
              <li>
                <NavLink onClick={()=>handleShowNavbar()} to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  