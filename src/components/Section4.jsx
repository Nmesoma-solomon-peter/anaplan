import React from 'react'
import './Section4.css'
import sec41 from '../assets/sec41.png'
import sec42 from '../assets/sec42.png'
import sec43 from '../assets/sec43.png'
import sec44 from '../assets/sec44.png'
import sec45 from '../assets/sec45.png'
import sec46 from '../assets/sec46.png'

function Section4() {
    return (
        <div className='section4 bg-primary  container-fluid pb-5 pt-5'>
            <div className='align-items-center sec4__heading '>
                <h3 className='text-white sec4__h3'>Analysts recognize Anaplan as game-changing for performance management and modernizing FP&A</h3>
                <span className='line'></span>
            </div>
            <div className='row align-items-center justify-content-center me-5 mt-5 mb-5'>
                <div className='col col-md-2'> <img src={sec41} alt='sec41' /></div>
                <div className='col col-md-2'> <img src={sec42} alt='sec42' /></div>
                <div className='col col-md-2'> <img src={sec43} alt='sec43' /></div>
                <div className='col col-md-2'> <img src={sec44} alt='sec44' /></div>
                <div className='col col-md-2'> <img src={sec45} alt='sec45' /></div>
                <div className='col col-md-2'> <img src={sec46} alt='sec46' /></div>
            </div>
            <button type="button" className="btn btn-outline-primary bg-white btn-sm header__btn mt-3 mb-5">See our recognitions</button>
        </div>
    )
}

export default Section4