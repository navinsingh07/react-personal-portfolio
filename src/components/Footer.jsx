import '../assets/styles/FooterStyles.css'

import React from 'react'
import { FaLinkedin, FaMailBulk, FaGithub } from 'react-icons/fa'

function Footer() {

  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="right">
                <h4>Connect With Me</h4>
                <p>
                    On Different Social Media Platforms
                </p>

                <div className="social">
                <a href='https://github.com/navinsingh07' target='__blank'><FaGithub size={30} style={{color:"#8892b0", marginRight:"2rem" , cursor:"pointer"}} /> </a>
                <a href='https://www.linkedin.com/in/navinsingh07/' target='__blank'><FaLinkedin size={30} style={{color:"#8892b0", marginRight:"2rem" , cursor:"pointer"}} /> </a>
                <a href='https://mail.google.com/' target='__blank'><FaMailBulk size={30} style={{color:"#8892b0", cursor:"pointer"}} /> </a>
                </div>

            </div>
        </div>

        <p>Made By ❤️ By Navin</p>

    </div>
  )
}

export default Footer