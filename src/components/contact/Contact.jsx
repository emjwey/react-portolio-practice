import React from "react"
import ContactOptions from './ContactOptions'
import ContactForm from './ContactForm'

import "./contact.css"

export default function Contact(){
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <ContactOptions/>
                <ContactForm/>
            </div>
        </section>
    )
}