import React from 'react'
import RightSideCard from '../../Atom/RightSideCard/RightSideCard'
import style from './RightComponent.module.css'


function RightComponent() {
    const Card = [
        {cardData:<RightSideCard/>
         },
        {cardData:<RightSideCard/>
         },
        {cardData:<RightSideCard/>
         },
        {cardData:<RightSideCard/>
         },
        {cardData:<RightSideCard/>
         },
    ]
  return (
    <div className={style.main}>
        <h2 className={style.heading}>What's happening</h2>
      {
        Card.map((card, id )=> 
         <div className={style.card} key={id} >{card.cardData}</div>)
      }
       <button className={style.button}>Show more </button>
    </div>
  )
}

export default RightComponent
