import './services.css'
import ServiceList from './ServiceList'
import {motion}  from "framer-motion"
import { fadeUp ,viewPort} from '../../animate';

export default function Services(){
 
    return (
        <section id="services"  >
           
            <motion.h5
               whileInView = {fadeUp.onScreen}
               initial = {fadeUp.offScreen}
               variants = {fadeUp}
               viewport = {viewPort}
               transition={{ delay: 0.1}}
            >
                What I Can Do
            </motion.h5>
            <motion.h2
                whileInView = {fadeUp.onScreen}
                initial = {fadeUp.offScreen}
                variants = {fadeUp}
                viewport = {viewPort}
                transition={{ delay: 0.15}}
            >   
                Services
            </motion.h2>

            <div className="container services__container">
                <ServiceList/>
            </div>
        </section>
    )
}