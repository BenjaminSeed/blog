import React from "react";
import "../Styles/Sidebar.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          className="sidebarImage"
          src={require("../Assets/DSC02372.jpg")}
          alt="photograph of me"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum modi
          perferendis
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Film</li>
          <li className="sidebarListItem">Learning</li>
          <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          <FaGithubSquare className="sidebarIcon" size={30} />
          <FaLinkedin className="sidebarIcon" size={30} />
          <FaTwitterSquare className="sidebarIcon" size={30} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
