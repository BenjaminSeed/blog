import React from "react";
import Header from "../../Components/Header";
import Posts from "../../Posts/Posts";
import Sidebar from "../../Sidebar/Sidebar";
import "../../Styles/Home.css";

function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
