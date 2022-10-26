import React from 'react'
import cuckoologo from '../../Icons/gamebop-logo.png'
import './Watermark.css'

function Watermark(){
    return (
        <div className="watermark">
            <img className="logoImage" src={cuckoologo} alt="Cuckoo Logo"/>
            <span className="logoText">Gamebop</span>
        </div>
    )
}

export default Watermark