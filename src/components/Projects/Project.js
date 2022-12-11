import React from 'react'
import "./Projects.css"
import Github from "../../svgs/Github"
import LinkedIn from "../../svgs/LinkedIn"
import x from "../../imgs/health_website_replace.png"

const Project = () => {
  return (
    
    <div className='project'>
        <div className="project_image">
            <div className="project_image_overlay"><img src={x} alt="" /></div>
        </div>
        <div className="project_content">
            <div className="project_content_header">
                <h1>Virtual Clinic</h1>
            </div>
            <div className="project_content_text">
                <p>An online appointment website for a specific clinic. And also showing patients their appointment number and included payment gateway also</p>
            </div>
            <div className="project_content_techs">
                <p className='project_content_techs_heading'>Technologies Used : </p>
                <p className="techs">React</p>
                <p className="techs">NodeJs</p>
                <p className="techs">Express</p>
                <p className="techs">Mongodb</p>
                <p className="techs">Stripe</p>
                <p className="techs">VS Code</p>
            </div>
            <div className="project_content_icons">
                <p className='cursor hover'><Github /></p> <span className='space'></span><p className='cursor hover'><LinkedIn /></p>
            </div>
            <br />
        </div>
    </div>
  )
}

export default Project