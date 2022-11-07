import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

export default function HeaderSocials(){

    return (
        <div className="header__socials">
            <a href="https://linkedin.com" target="_blank">
                <BsLinkedin/>
            </a>
            <a href="https://github.com" target="_blank">
                <FaGithub/>
            </a>
            <a href="https://dribble.com" target="_blank">
                <FiDribbble/>
            </a>
        </div>
    )
}