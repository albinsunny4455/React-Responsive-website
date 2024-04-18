import React from 'react';
import logo from '../image/logo1.png';
function Navbar() {
  return (
    <nav>
        <a href="#" className='logo'>
            <img src={logo} alt="logo" />
        </a>
        <input className='menu-btn' type="checkbox" id='menu-btn' />
        <label className='menu-icon' for='menu-btn' >
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href="#" className='active'>Home</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">AGENTS</a></li>
            <li><a href="#">PROPERTY</a></li>
            <li><a href="#">CONTACT</a></li>
        </ul>
        <a href="" className='property'>Properties</a>
    </nav>
  )
}

export default Navbar