import React from 'react'
import OtherProject from './OtherProject'
import "./OtherProject.css"

const OtherProjects = () => {
  return (
    <div className='otherProjects'>
        <h3 className="otherProjectsHeading">Other Projects</h3>
        <div className="other_project_list">

          <OtherProject />
          <OtherProject />
          <OtherProject />
          <OtherProject />
          <OtherProject />
          <OtherProject />
        </div>
    </div>
  )
}

export default OtherProjects