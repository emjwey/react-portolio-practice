import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FaCodepen } from 'react-icons/fa'
import {motion} from "framer-motion"
import { fadeUp, fadeIn, viewPort } from '../../animate'

export default function HeaderSocials(){

    return (
        <motion.div 
            whileInView = {fadeIn.onScreen}
            initial = {fadeUp.offScreen}
            variants = {fadeUp}
            viewport = {viewPort}
            transition={{  delay: 1}}
            className="header__socials" >
            <motion.a 
                variants = {fadeUp}
                href="https://linkedin.com/in/emjwey/" 
                target="_blank"
                title="LInked In">
                <BsLinkedin/>
            </motion.a>
            <motion.a
                variants = {fadeUp}
                href="https://github.com/emjwey/" 
                target="_blank"
                title="Github">
                <FaGithub/>
            </motion.a>
            <motion.a
                variants = {fadeUp}
                href="https://codepen.io/emjwey/" 
                target="_blank"
                title="Codepen">
                <FaCodepen/>
            </motion.a>
        </motion.div>
    )
}