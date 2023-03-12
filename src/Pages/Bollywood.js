import React, { useContext } from 'react'
import Addvertise from '../Components/Addvertise'
import LatestArc from '../Components/LatestArc'
import Slider from '../Components/Slider'
import TopPost from '../Components/TopPost'
import { Context } from '../Routes'

const Bollywood = () => {
    let data=useContext(Context)
    let a=data.BollywoodData
    const random = Math.floor(Math.random() * a.length);
  return (
    <>
        <section>
            <Slider val={a[random]}/>
            <div className="Pages ">
                <div className="cut flex">
                    <div className="left">
                        <h1 className="h1">Bollywood</h1>
                        <LatestArc val={data.BollywoodData}/>
                        <h1 className="h1">Latest Movies</h1>
                        <LatestArc  val={data.HollywoodData}/>
                    </div>
                    <div className="right">
                        <TopPost val={data.FitnessData}/>
                        <Addvertise/>
                        <TopPost val={data.TechnologyData}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Bollywood