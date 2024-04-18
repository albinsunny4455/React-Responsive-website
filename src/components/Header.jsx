import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='header'>
        <Navbar/>
        <div className='intro'>
            <p>Looking for a property </p>
            <h1><span>Buy </span> and <br /> <span> Sell</span> Properties</h1>
            <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quam fuga provident fugit ea aliquid ipsum quis quod! Placeat ullam veritatis repellat quibusdam eligendi sint assumenda reprehenderit, minus magnam optio.</p>
            <a href="" className='header-btn'>Details</a>
        </div>
    </div>
  )
}

export default Header