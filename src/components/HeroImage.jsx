import '../assets/styles/HeroStyle.css'

import React from 'react'
import { Link } from 'react-router-dom';
import HeroImg from '../assets/images/bg-purple.jpg'

const HeroImage = () => {
  return (
    <div className='hero'>
        <div className="mask">
          <img className='into-img' src={HeroImg} alt="img" />
        </div>
        <div className="content">
            <p>Hi, I'M Navin</p>
            <h1>React Developer.</h1>
            <div>
                <Link to='/project' className='btn'>Project</Link>
                <Link to='/contact' className='btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage;