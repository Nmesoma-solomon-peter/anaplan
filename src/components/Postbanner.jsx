import React from 'react'
import './Postbanner.css'
import anaplan from '../assets/anaplan.png'
import anafin from '../assets/anafin.png'
import anasales from '../assets/anasales.png'
import anasup from '../assets/anasup.png'
function Postbanner() {
    return (
        <div className='postbanner'>
            <div className='row  pbrow'>
                <div className='col col-md-3 anaction'>
                    <img src={anaplan} alt='ana action' />
                    <p className='pstp'>See Anaplan in action</p>
                </div>
                <div className='col col-md-3 anaction'>
                    <img src={anafin} alt='anafin' />
                    <p className='pstp'>Finance Solutions</p>
                </div>
                <div className='col col-md-3 anaction'>
                    <img src={anasales} alt='anasales' />
                    <p className='pstp'>Sales Solutions</p>
                </div>
                <div className='col col-md-3 anaction'>
                    <img src={anasup} alt='anasup'/>
                    <p className='pstp'>Supply Chain Solutions</p>
                </div>
            </div>
        </div>
    )
}

export default Postbanner