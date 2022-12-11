import React from 'react'
import {Link} from "react-router-dom"
import "./RightSideBar.css"


const ButtonMailto = () => {
    return (
        <Link className='mailToBtn'
            to='#'
            onClick={(e) => {
                window.location = "mailto:samsoon7789@gmail.com";
            }}
        >
            <div className="flex">
                <p className='email'>samsoon7789@gmail.com</p> 
                <p className='vertical_line'></p>
            </div>
        </Link>
    );
}

export default ButtonMailto