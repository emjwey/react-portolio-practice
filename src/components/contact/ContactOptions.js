import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaLinkedinIn} from 'react-icons/fa'
import { fadeIn2,staggerUp , viewPort } from '../../animate'
import { motion} from "framer-motion"

export default function ContactOptions(){

    const options = [
        // {
        //     icon:<MdOutlineEmail/>,
        //     title:'Email',
        //     contact:'me@emjwey.com',
        //     link:'mailto:me@emjwey.com'
        // },
        {
            icon:<RiMessengerLine/>,
            title:'Messenger',
            contact:'emjwey',
            link:'https://m.me/emjwey',
            
        },
        {
            icon:<FaLinkedinIn/>,
            title:'Linkedin',
            contact:'/in/emjwey',
            link:'https://www.linkedin.com/in/emjwey',
            button: "Connect"
        }
    ]


    const optionList = options.map(({icon,title,contact,link,button},index) => {
        return (
                <motion.div 
                    variants={staggerUp}  
                    custom={index}  
                    whileInView="onScreen"
                    initial ="offScreen"
                    viewport = {viewPort}
                    className="contact__option" 
                    key={title+index}
                >
                    {icon}
                    <h4>{title}</h4>
                    <p>{contact}</p>
                    <a href={link} target="_blank">{button? button : "Send a message"}</a>
                </motion.div>
        )
    })


    return (
        <div className="contact__options">
            {optionList}
        </div>
    )
}