import React from 'react'
import Addvertise from '../Components/Addvertise'
import LatestArc from '../Components/LatestArc'
import TopPost from '../Components/TopPost'
import { Context } from '../Routes'
import { useContext } from 'react'
import Slider from '../Components/Slider'
const Fitness = () => {
    let data=useContext(Context)
    let a=data.FitnessData
    const random = Math.floor(Math.random() * a.length);
  return (
    <>
        <section>   
            <Slider val={a[random]}/>
            <div className="Pages ">
                <div className="cut flex">
                    <div className="left">
                        <h1 className="h1">Fitness</h1>
                        <LatestArc val={a}/>
                        <LatestArc val={data.FoodData}/>
                    </div>
                    <div className="right">
                        <Addvertise/>
                        <TopPost val={data.HollywoodData}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Fitness