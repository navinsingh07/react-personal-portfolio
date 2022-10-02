import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/About.css'
import react1 from '../assets/images/react1.png'
import react2 from '../assets/images/react2.jpg'

const AboutContent = () => {
  return (
    <>
      <div className="about">
        <div className="left">
          <h1>Who Am I?</h1>
          <p>I'm a front-end Developer/ Full Stack Developer(Mern).</p>
          <Link to='/contact'>
            <button className='btn'>Contact</button>
          </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="image-stack top">
              <img src={react1} alt='pro2' className='img'/>
            </div>
            <div className="image-stack bottom">
              <img src={react2} alt='pro2' className='img'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutContent