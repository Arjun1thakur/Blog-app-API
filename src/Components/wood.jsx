import React from 'react'
import { useLocation } from 'react-router-dom'

const Wood = () => {
    let location =useLocation();
    let arr=(location.state.data)
    let block=(location.state.arr)
  return (
    <>
        <div className="wood" >
            <img className='woodbackground' src={arr.src2} alt="" />
            <div className="mainWood flex">
                <img className='img' src={arr.src} alt="" />
                <div className='details'>
                    <h1>{arr.name}</h1>
                    <p>{arr.desc}</p>
                    <p>{arr.Rating}</p>
                    <p style={{padding:'10px 20px',backgroundColor:'rgba(0, 0, 0, 0.5)',textAlign:'center',borderRadius:'10px'}}>
                        <span style={{fontWeight:'700'}}>{arr.Category}</span>
                         / <span style={{fontWeight:'600'}}>{new Date().toLocaleDateString()}</span>
                    </p>
                </div>
            </div>
        </div>
        <h1 className='h1'>About </h1>
        <div className="desc"><p style={{fontSize:'1.3rem'}}>{arr.content}</p></div>
        <hr style={{margin:'40px 0px'}}  />
        <div >
            <h1 className='h1'>Related Post's</h1>
            <div className="blocks flex">
            {block && block.map((data,index)=>{
                return (
                    <div className="main flex relates" style={{color:'black'}} key={index}>
                        <img className='block' src={data.src} alt="img" />
                        <div>
                            <h2>{data.name}</h2>
                            <p>Languages: {data.Languages}</p>
                            <p>{data.desc}</p>
                            <p>{data.Rating}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    </>
  )
}

export default Wood