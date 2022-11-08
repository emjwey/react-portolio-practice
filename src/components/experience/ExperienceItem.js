import {BsFillPatchCheckFill} from 'react-icons/bs'
import DataFrontend from './DataFrontend'
import DataBackend from './DataBackend'
export default function ExpItems(){
    

    const exp = (data) => {
        return data.map((data,index) => {
            return (
                <article className="experience__details" key={data.skill+index}>
                    <BsFillPatchCheckFill/>
                    <div>
                        <h4>{data.skill}</h4>
                        <small className='text-light'>{data.level}</small>
                    </div> 
                </article>
            )
        })
    }

    return (
        <>
            <div className="experience__frontend">
                <h3>Frontend Development</h3>
                <div className="experience__content">
                    { exp(DataFrontend) }
                </div>
            </div>
            <div className="experience__backend">
            <h3>Backend Development</h3>
                <div className="experience__content">
                    { exp(DataBackend) }
                </div>
            </div>
        </>
    )
}