import React from 'react'
import "./About.css"

const About = () => {
  // My interest in web development started back in 2021 (1st year of college)
  return (
    <div className='about' id='aboutme'>
        <h2 className="heading green">About me</h2>
        <div className="box">
            <div className="content">
                Hello!! My name is Alim and I enjoy creating things that live on the internet. And currently I am a student at National Institute of Technology Raipur. <br /><br />
                While my experiences as an undegraduate have been diverse until this time I found myself interested in coding and learned many different technologies in the word of web. I want to keep learning and build things because it is fun to me.
                <br /><br />
                Over a span of 1.5 years or so, I have accumulated different skills and experimented with different library, framework and languages.

            </div>
            {/* <div className="port_img"><img src={profileImg} alt="" /></div> */}
            <div className="outer_overlay">
              <div className="overlay"></div>
            </div>
        </div>
    </div>
  )
}

export default About