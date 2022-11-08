import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {IoLogoTwitter} from 'react-icons/io'

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
        {icon: <IoLogoTwitter/>, link:'https://twitter.com/emjwey'},
    ]

    const socialLink = socialData.map (({icon,link},index) => {
        return (
            <a href={link} target="_blank" key={`social`+index}>{icon}</a>
        )
    })

    const footerLink = linkData.map (({link,name},index) => {
        return (
            <li key={name+index}> <a href={link}>{name}</a></li>
        )
    })

    return (
        <footer className='footer__container'>
            <a href="#" className='footer__logo'>Emjwey</a>

            <ul className='footer__links'>
                {footerLink}
            </ul>

            <div className='footer__socials'>
                {socialLink}
            </div>

            <div className="footer__copyright">
                <small>&copy; React Porfolio by Emjwey creds Egator. All rights reserved.</small>
            </div>
        </footer>
    )
}