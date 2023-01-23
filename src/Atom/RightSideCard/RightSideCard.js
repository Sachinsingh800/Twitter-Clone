import React from 'react'
import style from './RightSideCard.module.css'
import { BsThreeDots} from 'react-icons/bs'

function RightSideCard() {
  const trend =[
    {
    name:"Sport-Trending",
    trends:"#AlNassr",
    Link:"Trending with #PSGRCSA",
    option:  <BsThreeDots />,
  },
    {
    name:"Sport-Trending",
    trends:"#AlNassr",
    Link:"Trending with #PSGRCSA",
    option:  <BsThreeDots />,
  },
    {
    name:"Sport-Trending",
    trends:"#AlNassr",
    Link:"Trending with #PSGRCSA",
    option:  <BsThreeDots />,
  },
    {
    name:"Sport-Trending",
    trends:"#AlNassr",
    Link:"Trending with #PSGRCSA",
    option:  <BsThreeDots />,
  },

]
  return (
    <div>

      {
        trend.map((trend) =>
        <>
        <div  className={style.main}>

        <div>{trend.name}</div>
        <div>{trend.trends}</div>
        <div>{trend.Link}</div>
       <div>{trend.option}</div>
        </div>
        </>
        )
      }
   
    </div>
  )
}

export default RightSideCard
