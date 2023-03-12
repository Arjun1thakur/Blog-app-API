import React from 'react'
import { Link } from 'react-router-dom'
const TopPost = (data) => {
  let arr=data.val
  return (
    <>
        <div className='topPost'>
            <h1 className="h1">{arr[1] && arr[1].Category}</h1>
            {arr.map((data,index)=>{
                return (
                  <Link to={'/'+data.Category+'/'+data.name} state={{data:data}} key={index}>
                  <div className="TopPost flex" id={`Top_${index}`} key={index}>
                          <div className="TopPostimg"><img src={data.src} alt="logo" /></div>
                          <div className="content2">
                              <p style={{fontWeight:'400'}}>{data.name}</p>
                              <p><span style={{fontWeight:'700' ,fontSize:'10px'}}>{data.Category}</span> / {new Date().toLocaleDateString()}</p>
                          </div>
                          <div className="no">{index+1}</div>
                  </div>
                  </Link>
                )
            })}
        </div>
    </>
  )
}

export default TopPost