import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { LatestStoriesData } from '../../../../project/src/data'
import { Store } from '../API/data'
const LatestStories = () => {
    let arr=useContext(Store)
  return (
    <div className='LatestStories'>
        <h1 className="h1">Latest Stories</h1>
        <div className="Storiescards flex">
            {arr.LatestStories.map((data,index)=>{
                return (
                    <Link to={'/'+data.Category+'/'+data.name} state={{data:data}} key={index}>
                        <div className="cardsStories" >
                        <h2>{data.title}</h2>
                            <p>{data.content}</p>
                            <p><span style={{fontWeight:'700'}}>{data.Category}</span> / {data.Date}</p>
                        </div>
                    </Link>
                )
            })}
        </div>
        <div className="more">VIEW MORE</div>
    </div>
  )
}

export default LatestStories