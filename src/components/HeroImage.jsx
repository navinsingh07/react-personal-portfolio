import '../assets/styles/HeroStyle.css'
import Typed from 'react-typed';

import React from 'react'
import { Link } from 'react-router-dom';
import HeroImg from '../assets/images/HP2.jpg'

const HeroImage = () => {
  return (
    <div className='hero'>
        <div className="mask">
          <img className='into-img' src={HeroImg} alt="img" />
        </div>
        <div className="content">
        <p>Hi, I'M Navin 😃</p>
        <Typed
                strings={[
                    'React Developer',
                    'Frontend Developer',
                    'Web Developer',
                    ]}
                    typeSpeed={80}
                    backSpeed={80}
                    loop ></Typed>
            <div className='heroBtn'>
                <Link to='/project' className='btn'>Project</Link>
                <Link to='/contact' className='btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage;