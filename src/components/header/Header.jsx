
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

export default function Header(){
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Mark Jefferson</h1>
                <h5 className="text-light">Website Developer/WordPress Developer</h5>
                <CTA/>
                <HeaderSocials/>
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}