import Data from "./Data";

export default function PortfolioList(){
    return Data.map((list,index) => {
        return (
            <article className="portfolio__item" key={index}>
                <div className="portfolio__item-image">
                    <img src={list.image}/>
                </div>
                <h3>{list.title}</h3> 
                <div className="portfolio__item-cta">
                    <a href={list.github} className="btn" target="_blank">Github</a> 
                    <a href={list.demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </article>
        )
    })
}