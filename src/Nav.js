import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../src/assets/Netflix-Logo.png";
import Avtar from "../src/assets/Netflix-avatar.png"
import "./Nav.css";
const Nav = () => {

  const navigate=useNavigate();
  
  const [show , handleShow] =useState(false);
  useEffect(()=>{
    window.addEventListener("scroll" ,transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
    },[]);

  const transitionNavBar = () =>{
    if(window.scrollY > 100){
      handleShow(true);
    }else {
      handleShow(false);
    };
  }
  return (
    <>
      <div className={`nav ${show && 'nav__black'} `}>
        <div className="nav__contents">
          <img
            onClick={()=>{
              navigate("/")
            }}
            className="nav__logo"
            src={Logo}
            alt="Netflix Logo"
          />
          <img
            onClick={()=>{
              navigate("/profile")
            }}
            className="nav__avatar"
            src={Avtar}
            alt="Netflix Avtar"
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
