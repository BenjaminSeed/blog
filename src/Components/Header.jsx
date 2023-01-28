import React from 'react'
import  '../Styles/Header.css'

function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">GETTING STACKED: MY CODING JOURNEY</span>
                <span className="headerTitleLg">BLOG</span>
            </div>
            <img className="headerImg" src={require("../Assets/shahadat-rahman-BfrQnKBulYQ-unsplash.jpg")} alt="code on screen" />
        </div>
    )
}

export default Header
