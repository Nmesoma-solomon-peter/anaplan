import React from 'react'
import './Section5.css'
import last1 from '../assets/last1.png'
import last2 from '../assets/last2.png'
import last3 from '../assets/last3.png'

function Section5() {
  return (
    <div className='section5 container-fluid pt-5 pb-5'>
    <div className="row row row-cols row-cols-sm-2 row-cols-md-3 mt-5 mb-5">
        <img src={last1} alt="lastimgs" className='mb-5'/>
        <img src={last2} alt="lastimgs" className='mb-5'/>
        <img src={last3} alt="lastimgs" className='mb-5'/>
    </div>
    </div>
  )
}

export default Section5