import '../assets/styles/FooterStyles.css'

import React from 'react'
import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaGithub } from 'react-icons/fa'

function Footer() {

  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome  size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                
                <div>
                    <p>123 House No333</p>
                    <p>New Delhi</p>
                </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    9560871602</h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    neginavin99@gmail.com</h4>
                </div>

            </div>

            <div className="right">
                <h4>Connect With Me</h4>
                <p>
                    On Different Social Media Platforms
                </p>

                <div className="social">
                <a href='https://github.com/navinsingh07' target='__blank'><FaGithub size={30} style={{color:"#fff", marginRight:"2rem" , cursor:"pointer"}} /> </a>
                <a href='https://www.linkedin.com/in/navinsingh07/' target='__blank'><FaLinkedin size={30} style={{color:"#fff", marginRight:"2rem" , cursor:"pointer"}} /> </a>
                <a href='https://mail.google.com/' target='__blank'><FaMailBulk size={30} style={{color:"#fff", marginRight:"2rem" , cursor:"pointer"}} /> </a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer