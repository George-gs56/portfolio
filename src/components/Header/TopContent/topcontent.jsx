import React from 'react'
import { Button, Link } from 'react-scroll'
import './topcontent.css'

const topcontent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
            <h1>R. George</h1>
            <p>Creative Web and App Developer.</p>
            <a href='www.google.com'>
                <button className='topcontent__downloadbutton' download>Download CV</button>
            </a>
            <Link to='projects' smooth={true} duration={500}>
            <button className='topcontent__projectbutton'>My Creations</button>
            </Link>
        </div>

    </div>
  )
}

export default topcontent