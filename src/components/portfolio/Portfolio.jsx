import PortfolioList from "./PortfolioList" 
import './portfolio.css'
import {motion}  from "framer-motion"
import { fadeUp ,viewPort} from '../../animate';

export default function Portfolio(){
    return (
        <section id="portfolio">
            <motion.h5
                whileInView = {fadeUp.onScreen}
                initial = {fadeUp.offScreen}
                variants = {fadeUp}
                viewport = {viewPort}
                transition={{ delay: 0.1}}
            >
                Some of my recent work
            </motion.h5>
            <motion.h2
                whileInView = {fadeUp.onScreen}
                initial = {fadeUp.offScreen}
                variants = {fadeUp}
                viewport = {viewPort}
                transition={{ delay: 0.15}}
            >
                Portfolio
            </motion.h2>

            <div className="container portfolio__container">
                <PortfolioList/>
            </div>
        </section>
    )
}