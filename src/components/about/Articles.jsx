
import data from './data'

export default function Articles(){
 
    const article = data.map((arti,index) => {
        return (
            <article className="about__card" key={index}>
                <span className='about__icon'>{arti.icon} </span>
                <h5>{arti.header}</h5>
                <small>{arti.content}</small>
                
            </article>
        )
    })

    return (
        <div className="about__cards">
            {article}
        </div>
    )
}