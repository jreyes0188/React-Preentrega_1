import React from 'react'
import "./Header.css";
import img from "./logo.png"

const Header = (props) => {
    return (
        <div className='Header'>
            <img src={img} alt ='logo'/>
            <h1>{props.title}</h1>
        </div>
    )
}

export default Header;