import React from 'react'
import Addvertise from '../Components/Addvertise'
import LatestArc from '../Components/LatestArc'
import TopPost from '../Components/TopPost'
import { useContext } from 'react'
import { Context } from '../Routes'
import Slider from '../Components/Slider'

const Hollywood = () => {
    let data=useContext(Context)
    let a=data.HollywoodData
    const random = Math.floor(Math.random() * a.length);

  return (
    <>
        <section>
            <Slider val={a[random]}/>
            <div className="Pages ">
                <div className="cut flex">
                    <div className="left">
                        <h1 className="h1">Hollywood</h1>
                        <LatestArc val={data.HollywoodData}/>
                        <LatestArc val={data.BollywoodData}/>
                    </div>
                    <div className="right">
                        <Addvertise/>
                        <TopPost  val={data.FoodData}/>
                        <TopPost  val={data.FitnessData}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hollywood