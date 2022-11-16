import CV from '../../assets/Mark_Jefferson_Aniñon_Resume.pdf'
import { motion } from "framer-motion"
import { fadeUp, viewPort } from "../../animate"

export default function CTA(){
    return (
        <div className="cta">
            <motion.a
                whileInView = {fadeUp.onScreen}
                initial = {fadeUp.offScreen}
                variants = {fadeUp}
                viewport = {viewPort}
                transition = {{delay: .04}}
                href={CV} download className='btn'
            >
                Download CV
            </motion.a>
             <motion.a
                whileInView = {fadeUp.onScreen}
                initial = {fadeUp.offScreen}
                variants = {fadeUp}
                viewport = {viewPort}
                transition = {{delay: .05}}
            href="#contact" className='btn btn-primary'
            >
                Let's Talk
            </motion.a>
        </div>
    )
}