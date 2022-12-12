import React from 'react'
import "./Skills.css"
import html from "../../imgs/html.png"
import css from "../../imgs/css-3.png"
import js from "../../imgs/js.png"
import react from "../../imgs/science.png"
import node from "../../imgs/node-js.png"
import vsCode from "../../imgs/visual-studio.png"
import git from "../../imgs/git.png"
import Tilt from 'react-parallax-tilt';

const Skills = () => {
  return (
    <div className='skills' id='skills'>
        <h2 className='skills_heading green'> Skills </h2>

        {/* below div should be from backend  */}
        <div className="skillsIcons white">
            
            <div className="html skill">
                <Tilt ><img src={html} alt="" /></Tilt>
                <h4>HTML</h4>
            </div>
            
            
            <div className="css skill">
                <Tilt ><img src={css} alt="" /></Tilt>
                <h4>CSS</h4>
            </div>
          
            <div className="js skill">
                <Tilt ><img src={js} alt="" /></Tilt>
                <h4>JS</h4>
            </div>
           
            <div className="react skill">
                <Tilt glareEnable={true} glareColor="var(--green)"><img src={react} alt="" /></Tilt>
                <h4>REACT JS</h4>
            </div>
           
            <div className="node skill">
                <Tilt ><img src={node} alt="" /></Tilt>
                <h4>NODE JS</h4>
            </div>
         
            <div className="vscode skill">
                <Tilt ><img src={vsCode} alt="" /></Tilt>
                <h4>VS CODE</h4>
            </div>
           
            <div className="git skill">
                <Tilt ><img src={git} alt="" /></Tilt>
                <h4>GIT</h4>
            </div>
         
            
        </div>
    </div>

    
  )
}

export default Skills