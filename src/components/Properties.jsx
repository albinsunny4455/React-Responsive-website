import React from 'react'
import Bproperty from './Bproperty'
import pImage1 from '../image/p1.png'
import pImage2 from '../image/p2.png'
import pImage3 from '../image/p3.png'


function Properties() {
  return (
    <div className='product'>
       <div className="p-heading">
        <h3>Properties</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quo?</p>
        </div> 
        <div className="product-container">
            <Bproperty image={pImage1} name="aaaa" price="500$"/>
            <Bproperty image={pImage2} name="bbb" price="800$"/>
            <Bproperty image={pImage3} name="cccc" price="350$"/>
        </div>
    </div>
  )
}

export default Properties