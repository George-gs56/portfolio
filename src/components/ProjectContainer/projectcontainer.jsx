import React from 'react'
import { Element } from 'react-scroll'
import './ProjectContainer.css'

const projectcontainer = () => {
  return (
    <Element className='projectcontainer' id='projects'>
        <h1>Projects</h1>
        <div className='projectcontainer__image'>
            <img src="https://en.pimg.jp/050/920/594/1/50920594.jpg" alt="" />
            <a href='https://github.com/George-gs56/collegesortlist'>
                <button className='projectcontainer__pr1button'>View Project</button>
            </a>
            <div className='projectcontainer__image2'>
                <img src="https://www.shutterstock.com/image-photo/tablet-pc-text-portfolio-which-260nw-198896525.jpg" alt="" />
                <a href='www.google.com'>
                    <button className='projectcontainer__pr2button'>View Project</button>
                    </a>
            </div>
        </div>
    </Element>
  )
}

export default projectcontainer