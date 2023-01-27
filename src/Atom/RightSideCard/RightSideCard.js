import React, { useEffect, useState } from 'react'
import style from './RightSideCard.module.css'
import TrendOption from '../TrendOption/TrendOption'


function RightSideCard() {
 const [newData, setNewData]=useState([])
  const [data ,setData] =useState(

     [
      {
        id:0,
      name:"Sport-Trending1",
      trends:"#AlNassr",
      Link:"Trending with #PSGRCSA",
      isNotInterested:true,
    },
      {
        id:1,
      name:"Sport-Trending2",
      trends:"#AlNassr",
      Link:"Trending with #PSGRCSA",
      isNotInterested:false,
    },
      {
        id:2,
      name:"Sport-Trending3",
      trends:"#AlNassr",
      Link:"Trending with #PSGRCSA",
      isNotInterested:false,
    },
      {
        id:3,
      name:"Sport-Trending4",
      trends:"#AlNassr",
      Link:"Trending with #PSGRCSA",
      isNotInterested:false,
    },
  
  ]
  )
  //  console.log(data)
  // localStorage.setItem("trendData",JSON.stringify(data)) 

   const removeData=(id)=>{

    setData((data)=>data.filter((trend)=>trend.id !==id))

    localStorage.setItem("trendData",JSON.stringify(data)) 
  }

useEffect(()=>{
 const TrendData=JSON.parse(localStorage.getItem('trendData'))

 if(TrendData === null || TrendData.length === 0){
   setNewData(data);
  }else{
    setNewData(TrendData)
  }
},[data])

  return (
    <div className={style.container}>
       <h2>what's happening.. ??</h2>
      {
        newData?.map((elem, id) =>
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
