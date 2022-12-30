import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner pt-4 pb-4'>
      <div className='banner__content'>
        <h1 className='text-white bannerh1'>Be fearless</h1>
        <p className='text-white bcp'>Empower your decision-making by connecting data and enhancing collaboration, so you can shape your future with confidence.</p>
        <div className='bannerbtng'>
          <button type="button" className="btn btn-primary text-white btn-sm hbtn1 ms-2 header__btn ">Request a demo</button>
          <button type="button" className="btn bg-white text-primary btn-sm ms-2 hbtn2 header__btn ">Get the Gartner xP&A report</button>
        </div>
      </div>



    </div>
  )
}

export default Banner