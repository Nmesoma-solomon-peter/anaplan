import React from 'react'
import './Section2.css'
import plan from '../assets/plan.png'
import act from '../assets/act.png'
import analyse from '../assets/analyse.png'

function Section2() {
    return (
        <div className='section2 container-fluid pt-5 pb-5'>
            {/* sec2 part1 */}
            <div className='sec2part1'>
                <h2 className='text-secondary sec2h2 '>The automous enterprise</h2>
                <p className='text-secondary'>Moving from insights to outcomes</p>
            </div>
            {/* sec2 part1 */}
            <div className='row sec2row mt-5 '>
                <div className='col col-md-6'>
                    <h4 className='text-primary sec2__h4'>Plan</h4>
                    <p className='text-secondary sec2__p'>Embed xP&A, IBP, and RevOps capabilities in your business with Connected Planning. Our plan-as-a-system solution delivers continous sensing and iteration.</p>
                    <button type="button" className="btn btn-outline-primary bg-white btn-sm  header__btn ">Learn more</button>
                </div>
                <div className='col col-md-6 ps-5'>
                    <img src={plan} alt='sec2__img1' className='sec2__img ms-5' />
                </div>
            </div>
            {/* sec2 2nd row */}
            <div className='row sec2row mt-5 '>
                <div className='col col-md-6'>
                    <h4 className='text-primary sec2__h4'>Act</h4>
                    <p className='text-secondary sec2__p'>Put the power of innovation into the hands of the doers, so all business units can maximize their contribution to overall results.</p>
                    <button type="button" className="btn btn-outline-primary bg-white btn-sm  header__btn ">Learn more</button>
                </div>
                <div className='col col-md-6 ps-5'>
                    <img src={act} alt='sec2__img2' className='sec2__img ms-5' />
                </div>
            </div>
            {/* sec2 3rd row */}

            <div className='row sec2row mt-5 '>
                <div className='col col-md-6'>
                    <h4 className='text-primary sec2__h4'>Analyze</h4>
                    <p className='text-secondary sec2__p'>Create consistent and informed forward momentum - by evaluating options and trade-offs in the current environment in real time.</p>
                    <button type="button" className="btn btn-outline-primary bg-white btn-sm header__btn ">Learn more</button>
                </div>
                <div className='col col-md-6 ps-5'>
                    <img src={analyse} alt='sec2__img3' className='sec2__img ms-5' />
                </div>
            </div>

        </div>
    )
}

export default Section2