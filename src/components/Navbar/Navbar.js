import React from 'react'
import "./Navbar.css"
import nameLogo from "../../imgs/name_logo.png"
import {NavHashLink} from "react-router-hash-link"

const Navbar = () => {
  const toggleActiveClass = () => {

    console.log("clicked");
    var hamburger = document.querySelector(".hamburger");
    var navbar = document.querySelector(".nav_elements");

    // On click
    hamburger.classList.toggle("is-active");
    navbar.classList.toggle("showNavList")
  }
  
  return (

    
    <div className='navbar'>
        <div className="logo"><img src={nameLogo} alt="" /></div>
        <div className='nav_elements'>
            <p onClick={toggleActiveClass} className='nav_element' id='about'><NavHashLink smooth style={{ textDecoration: 'none',color : 'var(--slate)' }} to='#aboutme'> <span className='green'>01.</span><span className='nav_elem_text'>About</span>  </NavHashLink></p>
            <p onClick={toggleActiveClass} className='nav_element'><NavHashLink smooth  style={{ textDecoration: 'none',color : 'var(--slate)' }} to='#skills'> <span className='green'>02.</span><span className='nav_elem_text'>Skills</span> </NavHashLink></p>
            <p onClick={toggleActiveClass} className='nav_element'><NavHashLink smooth style={{ textDecoration: 'none',color : 'var(--slate)' }} to='#projects'> <span className='green'>03.</span><span className='nav_elem_text'>Projects</span></NavHashLink></p>
            <p onClick={toggleActiveClass} className='nav_element'><NavHashLink smooth style={{ textDecoration: 'none',color : 'var(--slate)' }} to='#contact'> <span className='green'>04.</span><span className='nav_elem_text'>Contact</span></NavHashLink></p>
            <div onClick={toggleActiveClass}  ><a  href="https://drive.google.com/file/d/1aoJhmxa6B2KUTJfoLmvwFwfeFnGDQjUE/view?usp=sharing"  target="_blank" rel="noreferrer"  className='nav_resume' style={{ textDecoration: 'none' }} > Resume </a></div>
        </div>
        <button className="hamburger hamburger--spin" onClick={toggleActiveClass} type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
    </div>
  )
}

export default Navbar