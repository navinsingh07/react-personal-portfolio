import '../assets/styles/HeroStyle.css'
import Typed from 'react-typed';
import React from 'react'

const HeroImage = () => {
  return (
    <div className='hero'>

      <div className="main">
        <div className="leftSection">
          <p>Hello!</p>
          <p>Welcome to My Portfolio</p>
          <Typed className='typed'
                    strings={[
                    'Frontend Developer',
                    'React.js Developer',
                    'Web Developer',
                    ]}
                    typeSpeed={40}
                    loop
                />
        </div>
        <div className="rightSection">
         
        </div>
      </div>

      
    </div>
  )
}

export default HeroImage;