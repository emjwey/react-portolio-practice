import PortfolioList from "./PortfolioList" 
import './portfolio.css'

export default function Portfolio(){
    return (
        <section>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <PortfolioList/>
            </div>
        </section>
    )
}