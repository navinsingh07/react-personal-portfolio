import React from 'react'
import './Skill.css'
import html from '../assets/html_logo.png'
import css from '../assets/css_logo.png'
import js from '../assets/Js-logo.png'
import react from '../assets/react-js.png'
import angular from '../assets/angular.png'
import node from '../assets/node-js.png'
import mongodb from '../assets/mongodb_logo.png'
import sql from '../assets/mysql_logo.png'

const Skills = () => {
  return (
    <div className='main-skill-div'>
        <h1 className='skilss_head'>Tech Stack</h1>

        <div className='skill-Logo'>
          <img src={html} alt="htmlPic" />
          <img src={css} alt="htmlPic" />
          <img src={js} alt="htmlPic" />
          <img src={react} alt="htmlPic" />
          <img src={angular} alt="htmlPic" />
          <img src={node} alt="htmlPic" />
          <img src={mongodb} alt="htmlPic" />
          <img src={sql} alt="htmlPic" />
        </div>


    </div>
  )
}

export default Skills