import React from "react"
import "./about.css"
import ME from '../../assets/me-about.jpg'


import Articles from "./Articles"

export default function About(){
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="about me" />
                    </div>
                </div>
                <div className="about__content">
                    <Articles/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
                
            </div>
        </section>
    )
}