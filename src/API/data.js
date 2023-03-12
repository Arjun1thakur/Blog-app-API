import React, { createContext, useEffect, useState } from 'react'

export let Store=createContext()
const Data = (props) => {
    let [Data,setData]=useState([])
    let [LatestStories,setLatestStories]=useState([])
    useEffect(()=>{
        let fetchData= async ()=>{
            let api=await fetch('https://blog-api-kgmy.onrender.com/')
            let apiJson=await api.json()
            setData(apiJson.Data)
            setLatestStories(apiJson.LatestStoriesData)
        }
        fetchData()
    },[])
  return (
    <Store.Provider value={{Data,LatestStories}}>
         {props.children}
    </Store.Provider>
  )
}

export default Data