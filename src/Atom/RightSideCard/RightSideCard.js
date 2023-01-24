import React, { useState } from 'react'
import style from './RightSideCard.module.css'
import TrendOption from '../TrendOption/TrendOption'


function RightSideCard() {

  const [data ,setData] =useState(

     [
      {
        id:1,
      name:"Sport-Trending1",
      trends:"#AlNassr",
      Link:"Trending with #PSGRCSA",
      isNotInterested:true,
    },
      {
        id:2,
      name:"Sport-Trending2",
      trends:"#AlNassr",
      Link:"Trending with #PSGRCSA",
      isNotInterested:false,
    },
      {
        id:3,
      name:"Sport-Trending3",
      trends:"#AlNassr",
      Link:"Trending with #PSGRCSA",
      isNotInterested:false,
    },
      {
        id:4,
      name:"Sport-Trending4",
      trends:"#AlNassr",
      Link:"Trending with #PSGRCSA",
      isNotInterested:false,
    },
  
  ]
  )
   console.log(data)


   const removeData=(id)=>{
    setData((current)=>current.filter((trend)=>trend.id !==id))
  }



  return (
    <div className={style.container}>
       <h2>what's happening.. ??</h2>
      {
        data.map((elem, id) =>
        <> 
        <div key={id}  className={style.main}>
          <div>     
                          <div>{elem.name}</div>
                        <div>{elem.trends}</div>
                        <div>{elem.Link}</div>    
          </div>
                        <div><TrendOption handleClicked={()=>removeData(elem.id)} /> </div>
                        <div className={style.option}>{elem.option}</div>       
        </div>

        
        </>
        )
      }
   
    </div>
  )
}

export default RightSideCard
