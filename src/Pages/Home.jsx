import React, { useContext } from 'react'
import HomeCard from '../Components/HomeCard'
import MiddleCard from '../Components/MiddleCard'
import { Store } from '../API/data'
import LatestStories from '../Components/LatestStories'
import Latest from '../Components/Latest'
import { Context } from '../Routes'

const Home = () => {
    let val=useContext(Context)
    let data=useContext(Store)
    return (
        <>
            <h2 className="h1" style={{marginTop:'20px'}}>Tranding Box</h2>
            <HomeCard Data={data.Data}/>
            <MiddleCard val={val.FoodData} />
            <Latest val={val.BollywoodData} holly={val.FitnessData} dataAll={val.allData}/>
            <LatestStories/>
        </>
    )
}

export default Home