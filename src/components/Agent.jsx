import React from 'react'
import Agentbox from './Agentbox'
import agentImage1 from '../image/s1.png'
import agentImage2 from '../image/s2.png'
import agentImage3 from '../image/s3.png'

function Agent() {
  return (
    <div className='agent'>
        <div className="a-heading">
            <h1>Agents</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='b-container'>
            <Agentbox image={agentImage1} name="Manu"/>
            <Agentbox image={agentImage2} name="Rahul"/>
            <Agentbox image={agentImage3} name="Kiran"/>
        </div>
    </div>
  )
}

export default Agent