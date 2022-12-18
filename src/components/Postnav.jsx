import React from 'react'
import './Postnav.css'
import gradientimg from '../assets/gradientimg.png'

function Postnav() {
  return (
    <div className='postnav'>
      {/* <img src={gradientimg} alt="gradimg" className='gradimg .bg-image'/> */}
      <div className='d-flex gradinner'>
        <p className='gradp'>What do Gartner, and IDC have i common? They all named Anaplan planning leader. </p>
        <button type="button" className="btn text-white btn-sm ms-2 mb-3 gradinner__btn ">Read the research</button>
      </div>
    </div>
  )
}

export default Postnav