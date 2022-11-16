import data from './Data'
import { fadeIn2,staggerUp , viewPort } from '../../animate'
import { motion} from "framer-motion"

export default function ServiceList(){
    return data.map((service,index) => {
        return (
            <motion.article 
                variants={staggerUp}  
                custom={index}  
                whileInView="onScreen"
                initial ="offScreen"
                viewport = {viewPort}
                className="service" key={index}>
                <div className="service__head">
                    <motion.div
                        whileInView = {fadeIn2.onScreen}
                        initial = {fadeIn2.offScreen}
                        variants = {fadeIn2}
                        viewport = {viewPort}
                        transition={{ delay: 1}}
                    >{service.icon}</motion.div>
                    <h3>{service.title}</h3>
                </div>
                <div className="service__list">
                    {service.desc}
                </div>
            </motion.article>
        )
    })
}