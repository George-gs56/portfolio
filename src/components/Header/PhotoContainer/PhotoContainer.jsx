import React from 'react'
import { Element } from "react-scroll"
import TopContent from '../TopContent/topcontent'
import './PhotoContainer.css'

const PhotoContainer = () => {
  return (
    <Element name='about' className='photocontainer'>
        <TopContent/>
    </Element>
  )
}

export default PhotoContainer;