
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.webp'
import HeaderSocials from './HeaderSocials'
import { motion } from "framer-motion"
import {fadeUp, fadeIn, viewPort } from "../../animate"

export default function Header(){
     
    return (
        <header>
            <div className="container header__container">
                <motion.h5
                    whileInView = {fadeUp.onScreen}
                    initial = {fadeUp.offScreen}
                    variants = {fadeUp}
                    viewport = {viewPort}
                    transition={{ delay: 0.1}}
                > 
                    Hello I'm
                </motion.h5>
                <motion.h1
                    whileInView = {fadeUp.onScreen}
                    initial = {fadeUp.offScreen}
                    variants = {fadeUp}
                    viewport = {viewPort}
                    transition={{  delay: 0.15}}
                >  
                    Mark Jefferson Aniñon
                </motion.h1>
                <motion.h5 className="text-light job__desc"
                     whileInView = {fadeUp.onScreen}
                     initial = {fadeUp.offScreen}
                     variants = {fadeUp}
                     viewport = {viewPort}
                     transition={{  delay: 0.2}}
                >
                    WordPress/Website Developer
                </motion.h5>
                <CTA/>
                <HeaderSocials/>
                <motion.div 
                    animate = {fadeIn.onScreen}
                    initial = {fadeIn.offScreen}
                    variants = {fadeIn}
                    viewport = {viewPort}
                    transition={{  delay: 0.5}}
                    className="me">
                    <motion.img 
                        animate = {fadeUp.onScreen}
                        initial = {fadeUp.offScreen}
                        variants = {fadeUp}
                        viewport = {viewPort}
                        transition={{  delay: 0.7}}
                        src={ME} alt="me" />
                </motion.div>
                <motion.a 
                    whileInView = {fadeIn.onScreen}
                    initial = {fadeIn.offScreen}
                    variants = {fadeIn}
                    viewport = {viewPort}
                    transition={{  delay: 0.7}}
                    href="#about" 
                    className='scroll_down'
                >
                    Scroll Down
                </motion.a>
            </div>
        </header>
    )
}