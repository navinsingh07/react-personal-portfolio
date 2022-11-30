import '../assets/styles/NavbarStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { useState } from 'react';

export const Navbar = () => {

  // const[click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  //On Scroll Color Change Code
  // const[color, setColor] = useState(false)
  // const changeColor = () => {
  //   if(window.scrollY >=5){
  //     setColor(true);
  //   } else {
  //     setColor(false)
  //   }
  // };

  // window.addEventListener("scroll", changeColor);


  return (
    <div className='header'>
        <Link to='/'>
            <h1>Portfolio</h1>
        </Link>
        {/* <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/project'>Project</Link></li>
            <li> <Link to='/about'>About</Link></li>
            <li> <Link to='/contact'>Contact</Link></li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: '#000' }} />) 
        : (<FaBars size={20} style={{ color: '#000' }} />)}
          
          
        </div> */}
    </div>
  )
}
