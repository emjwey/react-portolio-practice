import React from "react"
import ContactOptions from './ContactOptions'
import ContactForm from './ContactForm'
import {motion}  from "framer-motion"
import { fadeUp ,viewPort} from '../../animate';

import "./contact.css"

export default function Contact(){
    return (
        <section id="contact">
             <motion.h5
                whileInView = {fadeUp.onScreen}
                initial = {fadeUp.offScreen}
                variants = {fadeUp}
                viewport = {viewPort}
                transition={{ delay: 0.1}}
            >
                Get In Touch
            </motion.h5>
            <motion.h2
                whileInView = {fadeUp.onScreen}
                initial = {fadeUp.offScreen}
                variants = {fadeUp}
                viewport = {viewPort}
                transition={{ delay: 0.15}}
            >
                Contact Me
            </motion.h2>
            
            <div className="container contact__container">
                <ContactOptions/>
                <ContactForm/>
            </div>
            
        </section>
    )
}