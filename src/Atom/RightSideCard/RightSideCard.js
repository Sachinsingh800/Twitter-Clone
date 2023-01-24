import React, { useState } from 'react'
import style from './RightSideCard.module.css'
import { BsThreeDots} from 'react-icons/bs'
import TrendOption from '../TrendOption/TrendOption'


function RightSideCard() {
  const [isNotInterested, setIsNotIntrested] =useState(false)

  const deleteItem =(ind) => {
    const updateditems = trend.filter((trend, id) =>{
         
    })
    setIsNotIntrested(updateditems)

}

  const trend =[
    {
    name:"Sport-Trending",
    trends:"#AlNassr",
    Link:"Trending with #PSGRCSA",
    option:  <TrendOption handleClicked={deleteItem}/>,
    isNotInterested:true,
  },
    {
    name:"Sport-Trending",
    trends:"#AlNassr",
    Link:"Trending with #PSGRCSA",
    option: <TrendOption handleClicked={deleteItem}/>,
    isNotInterested:false,
  },
    {
    name:"Sport-Trending",
    trends:"#AlNassr",
    Link:"Trending with #PSGRCSA",
    option:  <TrendOption handleClicked={deleteItem }/>,
    isNotInterested:false,
  },
    {
    name:"Sport-Trending",
    trends:"#AlNassr",
    Link:"Trending with #PSGRCSA",
    option:  <TrendOption handleClicked={deleteItem }/>,
    isNotInterested:false,
  },

]
  return (
    <div className={style.container}>
       <h2>what's happening.. ??</h2>
      {
        trend.map((trend, id) =>
        <> 
        <div key={id}  className={style.main}>
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
