import React, { useState } from 'react'
import style from './RightSideCard.module.css'
import { BsThreeDots} from 'react-icons/bs'
import TrendOption from '../TrendOption/TrendOption'


function RightSideCard() {
  const [isNotInterested, setIsNotIntrested] =useState(false)
function handleClicked(){
  setIsNotIntrested(true)
}

  const trend =[
    {
    name:"Sport-Trending",
    trends:"#AlNassr",
    Link:"Trending with #PSGRCSA",
    option:  <TrendOption handleClicked={handleClicked}/>,
    isNotInterested:true,
  },
    {
    name:"Sport-Trending",
    trends:"#AlNassr",
    Link:"Trending with #PSGRCSA",
    option: <TrendOption handleClicked={handleClicked}/>,
    isNotInterested:false,
  },
    {
    name:"Sport-Trending",
    trends:"#AlNassr",
    Link:"Trending with #PSGRCSA",
    option:  <TrendOption handleClicked={handleClicked}/>,
    isNotInterested:false,
  },
    {
    name:"Sport-Trending",
    trends:"#AlNassr",
    Link:"Trending with #PSGRCSA",
    option:  <TrendOption handleClicked={handleClicked}/>,
    isNotInterested:false,
  },

]
  return (
    <div className={style.container}>
       <h2>what's happening.. ??</h2>
      {
        trend.map((trend) =>
        <> 
        <div  className={style.main}>
          <div>
          <div>{trend.name}</div>
                        <div>{trend.trends}</div>
                        <div>{trend.Link}</div>    
          </div>
                        
                        <div className={style.option}>{trend.option}</div>       
        </div>

        
        </>
        )
      }
   
    </div>
  )
}

export default RightSideCard
