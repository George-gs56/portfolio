import React from 'react'
import {Element} from 'react-scroll'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import './contact.css'

const contact = () => {
  return (
    <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email : <span>whitegeorge5611@gmail.com</span>
            </p>
            <p>
                Github Username : <span>George-gs56</span>
            </p>
            <div className='contact__address' id ='address'>
            <p>
                <span>Address: </span>GEORGE. R
                Sagayapuram (village),
                Elathagiri (post),
                Palepalli (taluk),
                Krishnagiri (district),
                Pin-Code : 635 108.
            </p>
            </div>
            <div className='contact__icons'>
                <a href='https://www.linkedin.com/in/george-r-87104a282/'>
                        <LinkedInIcon/>
                </a>
                <a href='https://www.instagram.com/whitegeorge5611/'>
                        <span><InstagramIcon/></span>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100087164442121'>
                        <FacebookIcon/>
                </a>
            </div>
        </div>
    </Element>
  )
}

export default contact