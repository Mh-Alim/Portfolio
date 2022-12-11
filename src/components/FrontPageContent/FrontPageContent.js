import React from 'react'
import "./FrontPageContent.css"
import Github from "../../svgs/Github"
import LinkedIn from "../../svgs/LinkedIn"
import Icon from "../../svgs/icon"

const FrontPageContent = () => {
  return (
    <div className="FrontPageContent">
        <div className="Headings">
          <h1 className="hii"><span className='hvr-wobble-vertical'>H</span><span className='hvr-wobble-vertical'>i</span><span className='hvr-wobble-vertical'>,</span> my name is</h1>
          <h1 className="name"><span className='hvr-wobble-vertical'>A</span><span className='hvr-wobble-vertical'>l</span><span className='hvr-wobble-vertical'>i</span><span className='hvr-wobble-vertical'>m</span> Khan.</h1> 
          <h1 className="developer">Web Developer</h1>
          <h1 className="intro">
            I'm a student at National Institute of Technology Raipur with a keen interest in coding and passionate about creating interactive applications and experiences on the web.          </h1>
          {/* Hi There, I’m Alim and I am <span className='green'>Fullstack Web Developer</span>. It's been 1 years, I am learning Web Developemnt. Currently I am doing my graduation in Electrical Engineering, Although I am doing my graduation in Electrical Engineering but because of my interest I learnt Web Development and developed many websites */}
          <div className="icons_outer">
            <div className="icons">
              <p className='cursor hover'><Github /></p> <span className='space'></span>
              <p className='cursor hover'><LinkedIn /></p>
            </div>
            <div className="res hover"><span style={{marginRight:"0.3rem"}}>Resume</span><Icon /> </div>
          </div>

        </div>
    </div>
  )
}

export default FrontPageContent