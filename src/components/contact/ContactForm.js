import React, { useRef ,useState} from 'react';
import emailjs from 'emailjs-com';
import {BsCheckCircle} from 'react-icons/bs'
export default function ContactForm(){

    const form = useRef();
    const [status,setStatus] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1phf34v', 'template_a7l3jqq', form.current, 'ahht-FX4lC0J-dKiQ')
          .then((result) => {
              e.target.reset();
              setStatus(true)
              setTimeout(()=>{
                setStatus(false)
              },5000)
          }, (error) => {
               
          });
      };

    return (
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" required/>
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="message" rows={7} placeholder="Your Message" required></textarea>
            <div>
                <button type="submit" className="btn btn-primary">Send Message</button> 
                
                { status && 
                    <span className='contact__success'>
                        <BsCheckCircle/> Your message was sent. Thank you!
                    </span>
                }
            </div>
        </form>
    )
}