import React from 'react';
import { Element } from 'react-scroll';
import LinearProgress from '@mui/material/LinearProgress';
import './skillcontainer.css';

const skillcontainer = () => {
  return (
    <Element className='skillcontainer' id='skills'>
        <div className='skillcontainer__image'>
            <img src="https://www.shutterstock.com/image-photo/asian-teenager-students-doing-robot-600nw-2221748207.jpg" alt="" />
        </div>
        <div className='skillcontainer__texts'>
            <h2>My Skills</h2>
            <div className='skillcontainer__skillset'>
                <h5>React</h5>
                <div className='skillcontainer__slider skillcontainer__slider1'></div>
                <LinearProgress variant="determinate" value={90} />
            </div>
            <div className='skillcontainer__skillset'>
                <h5>Next JS</h5>
                <div className='skillcontainer__slider skillcontainer__slider2'></div>
                <LinearProgress variant="determinate" value={65} />
            </div>
            <div className='skillcontainer__skillset'>
                <h5>JavaScript</h5>
                <div className='skillcontainer__slider skillcontainer__slider3'></div>
                <LinearProgress variant="determinate" value={80} />
            </div>
            <div className='skillcontainer__skillset'>
                <h5>Python</h5>
                <div className='skillcontainer__slider skillcontainer__slider4'></div>
                <LinearProgress variant="determinate" value={70} />
            </div>
            <div className='skillcontainer__skillset'>
                <h5>HTML & CSS</h5>
                <div className='skillcontainer__slider skillcontainer__slider5'></div>
                <LinearProgress variant="determinate" value={90} />
            </div>
        </div>

    </Element>
  )
}

export default skillcontainer;