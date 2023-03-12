import React from 'react'
import Addvertise from '../Components/Addvertise'
import LatestArc from '../Components/LatestArc'
import TopPost from '../Components/TopPost'
import { Context } from '../Routes'
import { useContext } from 'react'
import Slider from '../Components/Slider'

const Food = () => {
    let data=useContext(Context)
    let a=data.FoodData
    const random = Math.floor(Math.random() * a.length);
  return (
    <>
        <section>
            <Slider val={a[random]}/>
            <div className="Pages ">
                <div className="cut flex">
                    <div className="left">
                        <h1 className="h1">Food</h1>
                        <LatestArc val={a}/>
                        <LatestArc val={data.FitnessData}/>
                    </div>
                    <div className="right">
                        <Addvertise/>
                        <TopPost val={data.BollywoodData}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Food