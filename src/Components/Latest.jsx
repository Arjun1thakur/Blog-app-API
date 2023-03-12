import Addvertise from './Addvertise'
import TopPost from './TopPost'
import Slider from './Slider'
import LatestArc from './LatestArc'
import { useContext } from 'react'
import { Store } from '../API/data'

function Latest(data){
    let sliderimg=useContext(Store)
    const random = Math.floor(Math.random() * sliderimg.Data.length);
    return (
        <>
            <section>
            <h1 className="h1">Latest Bollywood Movies</h1>
            <div className="LatestArcticle flex g">
                <div className="left">
                    <LatestArc val={data.val}/>
                    <Slider val={sliderimg.Data[random]}/>
                </div>
                <div className="right">
                    <Addvertise />
                    <TopPost val={data.holly} />
                </div>
            </div>
            </section>
        </>
    )
}
export default Latest