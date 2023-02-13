import React from 'react'
import './Section3.css'
import frame1 from '../assets/frame1.png'
import frame2 from '../assets/frame2.png'

function Section3() {
    return (
        <div className='section3 container-fluid pb-5 pt-5'>
            <div className='sec3__heading'>
                <p className='text-secondary  sec3headingp'>In a dynamic, ever-changing and fast-moving landscape</p>
                <h3 className='text-secondary sec3__h3  sec3headingh3'>Anaplan connects your strategy to your outcomes and drives accountability connected to a single source of truth</h3>
            </div>
            {/* sec3 part2 */}
            <div className='row sec3__part2 align-items-center'>
                <div className='col col-md-8'>
                    <img src={frame1} alt='sec3__img1' className='frame1' />
                </div>
                <div className='col col-md-3'>
                    <p className='sec3__p'>Leading consulting firms empower their clients with Anaplan</p>
                    <button type="button" className="btn btn-outline-primary bg-white btn-sm header__btn mt-3">See our partners</button>

                </div>

            </div>
            {/* sec3 part3 */}
            <div className='row sec3__part2 align-items-center'>
                <div className='col col-md-4'>
                    <p className='sec3__p'>Leading consulting firms empower their clients with Anaplan</p>
                    <button type="button" className="btn btn-outline-primary bg-white btn-sm header__btn mt-3">See our partners</button>

                </div>
                <div className='col col-md-8'>
                    <img src={frame2} alt='sec3__img2' className='frame2 ' />
                </div>

            </div>
        </div>
    )
}

export default Section3