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
                <div className='col col-md-3'>
                    <img src={anaplan} alt='ana action' />
                    <p>See Anaplan in action</p>
                </div>
                <div className='col col-md-3'>
                    <img src={anafin} alt='anafin' />
                    <p>Finance Solutions</p>
                </div>
                <div className='col col-md-3'>
                    <img src={anasales} alt='anasales' />
                    <p>Sales Solutions</p>
                </div>
                <div className='col col-md-3'>
                    <img src={anasup} alt='anasup'/>
                    <p>Supply Chain Solutions</p>
                </div>
            </div>
        </div>
    )
}

export default Postbanner