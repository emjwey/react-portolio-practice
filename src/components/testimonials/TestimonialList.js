// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Data from './Data'


export default function TestimonialList(){
    const testi = Data.map(({image,client,review},index) => {
        return (
            <SwiperSlide  key={client+index}>
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src={image} alt=""/>
                    </div>
                    <div className='client__content'>
                        <h5>{client}</h5>
                        <small>{review}</small>    
                    </div> 
                </article>
            </SwiperSlide>
        )
    })

    return (
        <Swiper className='container testimonials__container'
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
         
        
        >
            {testi}
        </Swiper>
    )
 
}