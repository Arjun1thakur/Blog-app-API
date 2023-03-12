import './Style/Main.css'
import React, { createContext, useContext } from 'react'
import { Store } from './API/data'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import ScrollToTop from './Components/scroolup'
import Header from './Components/Header'
import Error from './Pages/Error';
import Footer from './Components/Footer';
import Bollywood from './Pages/Bollywood';
import Technolgy from './Pages/Technology';
import Hollywood from './Pages/Hollywood';
import Fitness from './Pages/Fitness';
import Food from './Pages/Food';
import Wood from './Components/wood';

export let Context=createContext()
const Main = () => {
  let Data=useContext(Store)
  let BollywoodData=[]
  let HollywoodData=[]
  let FitnessData=[]
  let FoodData=[]
  let TechnologyData=[]
  
  Data.Data.forEach((data)=>{
    switch (data.Category) {
      case 'Bollywood':
        BollywoodData.push(data)
        break;
      case 'Hollywood':
        HollywoodData.push(data)
        break;
      case 'Fitness':
        FitnessData.push(data)
        break;
      case 'Food':
        FoodData.push(data)
        break;
      case 'Technology':
        TechnologyData.push(data)
        break;
      default:
        console.log('Main.js')
        break;
    }
  })
  return (
    <>
        <div className="container">
            <BrowserRouter>
            <ScrollToTop/>
                <Header/>
                <Context.Provider value={{BollywoodData,HollywoodData,FitnessData,FoodData,TechnologyData}}>
                    <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='bollywood' element={<Bollywood/>} />
                      <Route path='technology' element={<Technolgy/>} />
                      <Route path='hollywood' element={<Hollywood/>} />
                      <Route path='fitness' element={<Fitness/>} />
                      <Route path='food' element={<Food/>} />
                      <Route path='/:Category/:path' element={<Wood/>} />
                      <Route path={'*'} element={<Error />} />
                    </Routes>
                </Context.Provider>
                <Footer/>
            </BrowserRouter>
        </div>
    </>
  );
}

export default Main