import React from 'react'
import "./OtherProject.css"
import Github from "../../svgs/Github"
import Icon from "../../svgs/icon"
import FileSvg from '../../svgs/FileSvg'

const OtherProject = () => {
  return (
    <div className='otherProject'>
        <div className="otherProject_top_icons">
            <div className="fileIcon"><FileSvg /></div>
            <div className="otherProject_icon">
                <Github /> <span className="space"></span> <Icon />
            </div>
        </div>
        <div className="otherProject_heading">
            Food Blog 
        </div>
        <div className="otherProject_about">
            This is a Fully Responsive blog website where we were blogging about some foods. 
            <br />
            Implemented media query and flex box for designing.
            
            
        </div>
        <div className="otherProject_techs">
          <p className="other_tech">HTML</p>
          <p className="other_tech">CSS</p>
          <p className="other_tech">JAVASCRIPT</p>
          
        </div>
    </div>
  )
}

export default OtherProject