import data from './Data'
import {BiCheck} from 'react-icons/bi'
export default function ServiceList(){
    return data.map((service,index) => {
        return (
            <article className="service" key={index}>
                <div className="service__head">
                    <h3>{service.title}</h3>
                </div>
                <ul className="service__list">
                    {service.items.map((item,x) => <li key={`list`+x} ><BiCheck/> <p>{item}</p></li>)}
                </ul>
            </article>
        )
    })
}