import {AiFillSkype} from 'react-icons/ai'
import {RiWhatsappFill} from "react-icons/ri"
import {SiMessenger} from 'react-icons/si'
import { staggerUp , viewPort } from '../../animate'
import { motion} from "framer-motion"

export default function ContactOptions(){

    const options = [ 
 
        {
            icon:<SiMessenger/>,
            title:'Messenger',
            contact:'emjwey',
            link:'https://m.me/emjwey',
            
        },
        {
            icon:<RiWhatsappFill/>,
            title:'Whatsapp',
            contact:'6397618****',
            link:'https://emjwey.com/whatsapp',
        },
        {
            icon:<AiFillSkype/>,
            title:'Skype',
            contact:'Jeff',
            link:'https://emjwey.com/skype',
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