import React from "react"
import "./experience.css"
import ExpItems from "./ExperienceItem"

export default function Experience(){
    return (
        <section id="experience" >
            <h5>What Skills I Have</h5>
            <h2>My Experiences</h2>
            <div className="container experience__container">
                <ExpItems/>
            </div>
        </section>
    )
}