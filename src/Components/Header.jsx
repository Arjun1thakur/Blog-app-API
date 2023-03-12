import '../Style/Header.css'
import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Store } from '../API/data'

const ResHeader=(props)=>{
    let arr=props.Data.map((data)=>{
        return data;
    })
    let check=new Set()
    arr.filter((data)=>check.add(data.Category))
    let val=[...check]
    return (
        <div className="reshead">
            <NavLink className={({isActive})=>(isActive ? 'btn' : 'btn-active')}  to='/'>Home</NavLink>
            {val.map((data,index)=>{
                return <NavLink className={({isActive})=>(isActive ? 'btn' : 'btn-active')} key={index} to={`/${data}`}>{data}</NavLink>
            })}
        </div>
    )
}

function Header(){
    let data=useContext(Store)
    let [val0,setVal]=useState(false)
    let arr=data.Data.map((data)=>{
        return data;
    })
    let check=new Set()
    arr.filter((data)=>check.add(data.Category))
    let val=[...check]

    const onClick = () => setVal(val0=>!val0);
    return (
        <>
            <div className="nav flex">
                <div className="top flex">
                    <span className='span'>The </span>
                    <span className='siren'>Siren</span>
                </div>
                <div className="bottom flex">
                    <NavLink className={({isActive})=>(isActive ? 'btn' : 'btn-active')} to='/'>Home</NavLink>
                    {val.map((data,index)=>{
                        return <NavLink className={({isActive})=>(isActive ? 'btn' : 'btn-active')} key={index} to={`/${data}`}>{data}</NavLink>
                    })}
                </div>
                <div className="bottom2">
                    <button onClick={onClick}>menu</button>
                    {  val0 && <ResHeader Data={data.Data} /> }
                </div>
            </div>
        </>
    )
}

export default Header