import React from "react"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

export default function App(){
    return (
        <div> 
            <Header/>
            <Nav/>
            <About/>
            <Services />
            <Portfolio />
            <Contact />
            <Footer/>
        </div>

    )
}