import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {IoLogoTwitter} from 'react-icons/io'
import { fadeIn,staggerUp , viewPort } from '../../animate'
import { motion} from "framer-motion"

export default function Footer(){

    const linkData = [
        {  name: 'Home', link: '#' },
        {  name: 'About', link: '#about'},
        {  name: 'Experience', link: '#experience' },
        {  name: 'Services', link: '#services' },
        {  name: 'Portfolio', link: '#portfolio' },
        {  name: 'Testimonials', link: '#testimonials' },
        {  name: 'Contact', link: '#contact' },
    ]

    const socialData =[
        {icon: <FaFacebookF/>, link:'https://fb.com/emjwey'},
        {icon: <RiInstagramFill/>, link:'https://instagram.com/emjweey'},
        {icon: <IoLogoTwitter/>, link:'https://twitter.com/emjweey'},
    ]

    const socialLink = socialData.map (({icon,link},index) => {
        return (
            <motion.a 
                variants={staggerUp}  
                custom={index}  
                whileInView="onScreen"
                initial ="offScreen"
                viewport = {viewPort}
                href={link} 
                target="_blank" 
                key={`social`+index}>
                    {icon}
            </motion.a>
        )
    })

    const footerLink = linkData.map (({link,name},index) => {
        return (
            <li key={name+index}> <a href={link}>{name}</a></li>
        )
    })

    return (
        <footer className='footer__container'>
            <motion.div 

                className='footer__socials'>
                {socialLink}
            </motion.div>
            <div className="footer__copyright">
                <motion.small
                    whileInView = {fadeIn.onScreen}
                    initial = {fadeIn.offScreen}
                    variants = {fadeIn}
                    viewport = {viewPort}
                    transition={{ delay: 0.2}}
                > Mark Jefferson Aniñon. &copy; 2022</motion.small>
            </div>
        </footer>
    )
}