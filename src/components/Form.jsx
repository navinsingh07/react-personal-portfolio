import '../assets/styles/Form.css'

import React from 'react'

const Form = () => {
  return (
    <>
        <div className="form">
            <form>
            <h2>Contact Me</h2>
                <label>Your Name</label>
                <input type="text"></input>
                <label>Email</label>
                <input type="text"></input>
                <label>Subject</label>
                <input type="text"></input>
                <label>Message</label>
                <textarea rows="6" placeholder='type your message here'/>
                <button className='btn'>Submit</button>
            </form>
        </div>

    </>
  )
}

export default Form