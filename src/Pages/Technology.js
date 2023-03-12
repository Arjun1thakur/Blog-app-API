import React from 'react'
import Addvertise from '../Components/Addvertise'
import LatestArc from '../Components/LatestArc'
import TopPost from '../Components/TopPost'
import { useContext } from 'react'
import Slider from '../Components/Slider'
import { Context } from '../Routes'

const Technolgy = () => {
    let data=useContext(Context)
    let a=data.TechnologyData
    const random = Math.floor(Math.random() * a.length);
  return (
    <>
        <section>
            <Slider val={a[random]}/>
            <div className="Pages ">
                <div className="cut flex">
                    <div className="left">
                        <h1 className="h1">Technolgy</h1>
                        <LatestArc val={data.TechnologyData}/>
                        <LatestArc val={data.FitnessData} />
                    </div>
                    <div className="right">
                        <TopPost val={data.HollywoodData}/>
                        <Addvertise/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Technolgy