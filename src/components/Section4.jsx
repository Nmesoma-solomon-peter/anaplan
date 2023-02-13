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
            {/* <div className='align-items-center  me-5 mt-5 mb-5'> */}
                <div className='row row row-cols-2 row-cols-sm-2 row-cols-md-3 mt-5 mb-5 g-3'>
                    <div className='col col-md-2 logsec'> <img src={sec41} alt='sec41'  className='companylog'/></div>
                    <div className='col col-md-2 logsec '> <img src={sec42} alt='sec42'  className='companylog' /></div>
                    <div className='col col-md-2 logsec'> <img src={sec43} alt='sec43'  className='companylog' /></div>
                    <div className='col col-md-2 logsec'> <img src={sec44} alt='sec44'  className='companylog'/></div>
                    <div className='col col-md-2 logsec'> <img src={sec45} alt='sec45' /></div>
                    <div className='col col-md-2 logsec'> <img src={sec46} alt='sec46'  className='companylog'/></div>
                </div>
            {/* </div> */}
            <button type="button" className="btn btn-outline-primary bg-white btn-sm header__btn mt-3 mb-5">See our recognitions</button>
        </div>
    )
}

export default Section4