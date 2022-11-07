import './services.css'
import ServiceList from './ServiceList'

export default function Services(){
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <ServiceList/>
            </div>
        </section>
    )
}