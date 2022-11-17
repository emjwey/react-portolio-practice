import Data from "./Data";
import { fadeIn,staggerUp , viewPort } from '../../animate'
import { motion} from "framer-motion"

export default function PortfolioList(){
 
    return Data.map(({url, title, category, image},index) => {
        return (
            <motion.a
                variants={staggerUp}  
                custom={index}  
                whileInView="onScreen"
                initial ="offScreen"
                viewport = {viewPort}
                href={url} 
                target="_blank"  
                key={`portfolio-${index}`}>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={image} alt={title} title={title}/>
                    </div>
                    
                    <div className="portfolio__item-info">
                        <motion.div
                           whileInView = {fadeIn.onScreen}
                           initial = {fadeIn.offScreen}
                           variants = {fadeIn}
                           viewport = {viewPort}
                           transition={{ delay: 1}}
                        >
                            <h3>{title}</h3> 
                            <p>{category}</p>
                        </motion.div>
                    </div>
                </article>
            </motion.a>
        )
    })
}