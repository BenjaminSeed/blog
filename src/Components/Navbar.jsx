import "../Styles/Navbar.css";
import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className="nav">
      <div className="topLeft">
        <FaGithubSquare className="navIcon" size={30} />
        <FaLinkedin className="navIcon" size={30} />
        <FaTwitterSquare className="navIcon" size={30} />
      </div>
      <div className="topCentre">
      <ul className="topList">
        <li className="topListItem">HOME</li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">PROJECTS</li>
        <li className="topListItem">WRITE</li>
        <li className="topListItem">LOGOUT</li>
      </ul>
      </div>
      <div className="topRight">
        <img className="topImage"
        //When using Webpack you need to require images in order for Webpack to process them
        src={require("../Images/DSC02372.jpg")} alt="Manchester Deansgate" />
        <FaSearch className="searchIcon" size={25} />
      </div>
    </div>
  );
}

export default Navbar;
