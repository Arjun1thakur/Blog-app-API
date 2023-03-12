import React from 'react'
import { Link } from 'react-router-dom'
const LatestArc = (props) => {
  let arr=props.val
  return (
    <>
        {arr.map((data,index)=>{
              return (
                <Link to={'/'+data.Category+'/'+data.name} state={{data:data,arr:arr}} key={index}>
                  <div className="main1 flex" style={{overflow:'hidden'}}>
                      <div className='latestimg' id='change'><img src={data.src} alt="logo" /></div>
                      <div className="content1 grid">
                          <h2>{data.name}</h2>
                          <h2 style={{padding:'5px 10px',width:'100px',backgroundColor:'rgba(0, 0, 0, 0.02)',textAlign:'center',borderRadius:'10px'}}>{data.Rating}</h2>
                          <p>{data.Languages}</p>
                          <p>{data.content.slice(0,150)}...</p>
                          <p>{data.desc}</p>
                          <p style={{padding:'10px 20px',backgroundColor:'rgba(0, 0, 0, 0.02)',textAlign:'center',borderRadius:'10px'}}><span style={{fontWeight:'700'}}>{data.Category}</span> / <span style={{fontWeight:'600'}}>{new Date().toLocaleDateString()}</span></p>
                      </div>
                  </div>
              </Link>
              )
          })}
            <div className="button">
                <Link to={arr.Category && arr[0].Category}>LOAD MORE</Link>
            </div>
    </>
  )
}

export default LatestArc