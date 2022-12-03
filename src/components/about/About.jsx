import React from "react"
import "./about.css"
import ME from '../../assets/about.webp'
import Skills from "./Skills"
import {motion}  from "framer-motion"
import {fadeIn, fadeUp, rotate, viewPort, zoomIn} from "../../animate"

export default function About(){
 
    return (
        <section id="about">
            <motion.h5
                whileInView = {fadeUp.onScreen}
                initial = {fadeUp.offScreen}
                variants = {fadeUp}
                viewport = {viewPort}
                transition={{ delay: 0.1}}
            >
                Get To Know
            </motion.h5>
            <motion.h2
                whileInView = {fadeUp.onScreen}
                initial = {fadeUp.offScreen}
                variants = {fadeUp}
                viewport = {viewPort}
                transition={{ delay: 0.15}}
            >   
                About Me
            </motion.h2>

            <div className="container about__container">
                <motion.div 
                    whileInView = {fadeIn.onScreen}
                    initial = {fadeIn.offScreen}
                    variants = {fadeIn}
                    viewport = {viewPort}
                    transition={{ delay: 0.3}}
                    className="about__me">
                    <motion.div 
                        whileInView = {zoomIn.onScreen}
                        initial = {zoomIn.offScreen}
                        variants = {zoomIn}
                        viewport = {viewPort}
                        transition={{ delay: 0.5}}
                        
                        className="about__me-image "
                    >
                        <motion.img 
                            initial = {rotate.onScreen}
                            whileHover={rotate.offScreen} 
                            src={ME} alt="about me"  />
                    </motion.div>
                </motion.div>
                <div className="about__content">
                    <Skills />
                    <motion.p
                        whileInView = {fadeUp.onScreen}
                        initial = {fadeUp.offScreen}
                        variants = {fadeUp}
                        viewport = {viewPort}
                        transition={{ delay: 0.1}}
                        >A <strong>WordPress Developer</strong> with 3 years of experience on WordPress CMS Websites. I use theme builder such as Elementor, Beaver Builder, Divi. I also customize, create custom-post-types, ACF, 3rd party integration with standard coding. I have experience with E-commerce, Membership, and Learning Management System.
                    </motion.p>
                    <motion.a 
                        whileInView = {fadeUp.onScreen}
                        initial = {fadeUp.offScreen}
                        variants = {fadeUp}
                        viewport = {viewPort}
                        transition={{ delay: 0.1}}
                        href="#contact" 
                        className="btn btn-primary"
                        >
                        Let's Talk
                    </motion.a>
                </div>
                
            </div>
        </section>
              
    )
}