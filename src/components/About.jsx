import React from 'react'
import heroimage from '../image/hero.png'
function About() {
  return (
    <div className='about'>
        <div className='about-model'>
            <img src={heroimage} alt="about-img" />
        </div>
        <div className='about-text'>
            <h2>We Are The Best <br />Real Estate Company</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad asperiores officiis voluptates placeat mollitia aspernatur nulla unde suscipit repellendus cumque corrupti sed quibusdam aut eum molestiae quia, odit itaque nisi!</p>
            <button>View More Details</button>
        </div>
    </div>
  )
}

export default About