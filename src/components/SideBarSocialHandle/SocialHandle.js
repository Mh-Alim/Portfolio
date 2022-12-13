import React from 'react'
import "./SocialHandle.css"
import Insta from "../../svgs/Insta"
import Github from '../../svgs/Github'
import Twitter from '../../svgs/Twitter'
import LinkedIn from '../../svgs/LinkedIn'
      
const SocialHandle = () => {
  return (
    // https://github.com/Mh-Alim
        <div className="socialNavbar">

          <p className = "svgs"><Github Link= "https://github.com/Mh-Alim"/></p>
          <p className = "svgs"><Insta Link="https://www.instagram.com/alimkhan6470/"/></p>
          <p className = "svgs"><Twitter Link="https://twitter.com/AlimKha22614831" /></p>
          <p className = "svgs"><LinkedIn Link="https://www.linkedin.com/in/alim-khan-109165204/"/></p>
          <p id='vline'></p>
          
        </div>
   
  )
}

export default SocialHandle