import React from 'react'
import Project from './Project'
import "./Projects.css"


const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className="projectHeading">Projects</div>
      <Project />
      <Project />
      <Project />
    </div>
  )
}

export default Projects