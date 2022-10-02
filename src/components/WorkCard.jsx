import React from 'react'
import '../assets/styles/WorkCardStyles.css'



const WorkCard = (props) => {
  return ( 
          <div className="project-card">
                <img src={props.imgsrc} alt="img"/>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-detials">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <a className="btn" href={props.view} target='__blank'>View</a>
                        <a className="btn" href={props.view} target='__blank'>Source</a>
                    </div>
                </div>
            </div>
  );

}
    
       

export default WorkCard