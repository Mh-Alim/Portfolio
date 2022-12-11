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

          <a className = "svgs"  href= "https://github.com/Mh-Alim" target="_blank" rel="noreferrer">  <Github/></a>
          <a className = "svgs"  href="https://www.instagram.com/alimkhan6470/" target="_blank" rel="noreferrer"><Insta /></a>
          <a className = "svgs"  href="https://twitter.com/AlimKha22614831" target="_blank" rel="noreferrer"><Twitter /></a>
          <a className = "svgs"  href="https://www.linkedin.com/in/alim-khan-109165204/" target="_blank" rel="noreferrer"><LinkedIn/></a>
          <p id='vline'></p>
          
        </div>
   
  )
}

export default SocialHandle