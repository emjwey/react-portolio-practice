import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

export default function ContactOptions(){

    const options = [
        {
            icon:<MdOutlineEmail/>,
            title:'Email',
            contact:'support@emjwey.com',
            link:'mailto:support@emjwey.com'
        },
        {
            icon:<RiMessengerLine/>,
            title:'Messenger',
            contact:'emjwey',
            link:'https://m.me.emjwey'
        },
        {
            icon:<BsWhatsapp/>,
            title:'WhatsApp',
            contact:'097688292',
            link:'https://api.whatsapp.com/send?+63982738782'
        }
    ]


    const optionList = options.map(({icon,title,contact,link},index) => {
        return (
                <article className="contact__option" key={title+index}>
                    {icon}
                    <h4>{title}</h4>
                    <p>{contact}</p>
                    <a href={link} target="_blank">Send a message</a>
                </article>
        )
    })


    return (
        <div className="contact__options">
            {optionList}
        </div>
    )
}