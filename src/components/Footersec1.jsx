import React from 'react'
import './Footersec1.css'
import linkedinicon from  '../assets/linkedinicon.png'
import instagram from '../assets/instagram.png'
import twitericon from '../assets/twitericon.png'
import facebookicon from '../assets/facebookicon.png'

function Footersec1() {
    return (
        <div className='container-fluid Footersec1'>
            <div className='row'>
                <div className='col col-md-6'>
                    <div className='d-flex mt-5 mb-5'>
                        <div>
                            <h6>QUICK LINKS</h6>
                            <a href='/' className='footersec1a me-5'>Why Anaplan</a>
                            <a href='/' className='footersec1a me-5'>Connected Planning</a>
                            <a href='/' className='footersec1a me-5'>Customer Stories</a>
                            <a href='/' className='footersec1a me-5'> Partners</a>
                            <a href='/' className='footersec1a me-5'>Pricing</a>
                            <a href='/' className='footersec1a me-5'>Anaplan Live!</a>
                            <a href='/' className='footersec1a me-5'>COVID-19</a>
                        </div>

                        <div>
                            <h6>PLATFORM</h6>
                            <a href='/' className='footersec1a me-5'>User Experience</a>
                            <a href='/' className='footersec1a me-5'>Intelligence</a>
                            <a href='/' className='footersec1a me-5'>Planning and Modelling</a>
                            <a href='/' className='footersec1a me-5'> Extensibility</a>
                            <a href='/' className='footersec1a me-5'>Enterprise Scale</a>
                            <a href='/' className='footersec1a me-5'>Security</a>
                            <a href='/' className='footersec1a me-5'>Predictive Insights</a>
                        </div>
                        <div>
                            <h6>SOLUTIONS</h6>
                            <a href='/' className='footersec1a'>Finance</a>
                            <a href='/' className='footersec1a'>Sales</a>
                            <a href='/' className='footersec1a'>Supply Chain</a>
                            <a href='/' className='footersec1a'>HR and Workforce</a>
                            <a href='/' className='footersec1a'>Marketting</a>
                        </div>
                    </div>
                </div>
                <div className='col col-md-6'>
                    <div className='d-flex mt-5 mb-5'>
                        <div>
                            <h6 >RESOURCES</h6>
                            <a href='/' className='footersec1a me-5'>Resource Library</a>
                            <a href='/' className='footersec1a me-5'>Blog</a>
                            <a href='/' className='footersec1a me-5'>Live Events & Webinars</a>
                            <a href='/' className='footersec1a me-5'> Success Overview</a>
                            <a href='/' className='footersec1a me-5'>Community</a>
                            <a href='/' className='footersec1a me-5'>Documentation</a>
                            <a href='/' className='footersec1a me-5'>Knowledge Base</a>
                            <a href='/' className='footersec1a me-5'>Forums</a>
                            <a href='/' className='footersec1a me-5'>Platform Training</a>
                            <a href='/' className='footersec1a me-5'>Contact Support</a>
                        </div>

                        <div>
                            <h6>COMPANY</h6>
                            <a href='/' className='footersec1a me-5'>About us</a>
                            <a href='/' className='footersec1a me-5'>Leadership</a>
                            <a href='/' className='footersec1a me-5'>Newsroom</a>
                            <a href='/' className='footersec1a me-5'>ESG</a>
                            <a href='/' className='footersec1a me-5'>Careers</a>
                            <a href='/' className='footersec1a me-5'>UK Gender Pay</a>
                            <a href='/' className='footersec1a me-5'>Contact us</a>
                        </div>
                        <div>
                            <h6>ALSO OF INTEREST</h6>
                            <a href='/' className='footersec1a'>How to Forcast Demand</a>
                            <a href='/' className='footersec1a'>for new Products</a>
                            <a href='/' className='footersec1a'>Post-transformation, digital-</a>
                            <a href='/' className='footersec1a'>driven Performance</a>
                            <a href='/' className='footersec1a'>What is Supply</a>
                            <a href='/' className='footersec1a'>Management?</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex footericonrow pe-3'>
            
                <button type="button" className="btn btn-outline-primary bg-white btn-sm header__btn ">Learn more  <i class="bi bi-chevron-down"></i></button>

                <div className='me-5'>
                    <img className='fticon' src={linkedinicon} alt='linkedinicon'/>
                    <img className='fticon' src={facebookicon} alt='fbicon'/>
                    <img className='fticon' src={twitericon} alt='twitericon'/>
                    <img className='fticon' src={instagram} alt='instagram'/>
                </div>
            </div>
        </div>
    )
}

export default Footersec1