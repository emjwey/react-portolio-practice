import { motion} from "framer-motion"
import data from './data'
import {staggerUp, viewPort } from "../../animate"

export default function Skill({isView}){

    const skills = data.map(({skill,icon,percent},index) => {
        return (
            <motion.article 
                variants={staggerUp}  
                custom={index}  
                whileInView="onScreen"
                initial ="offScreen"
                viewport = {viewPort}
                className="about__card" 
                key={index}>
                <div className='progress__bar'>
                    <motion.div 
                        whileInView={{width:`${percent}%` }}
                        initial={{width:0}}
                        transition={{ delay: 1}}
                        viewport = {viewPort}
                        className='progress_level' 
                    ></motion.div>
                    <motion.span 
                        whileInView={{opacity: 1}} 
                        initial={{opacity: 0}}
                        transition={{  delay: 1.2}}
                        viewport = {viewPort}
                    >
                        {percent} %
                    </motion.span >
                </div>
                <span className='about__icon'>{icon} </span>
                <h5>{skill}</h5>
                
            </motion.article>
        )
    })

    return (
        <motion.div className="about__cards" 
            initial="hidden"
            animate="visible">
            {skills}
        </motion.div>
    )
}