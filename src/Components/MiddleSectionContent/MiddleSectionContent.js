import React from 'react';
import MiddleSectionCard from '../MiddleSectionCard/MiddleSectionCard';
import style from './MiddleSectionContent.module.css'

function MiddleSectionContent() {
    const Content=[
        {
            Card: <MiddleSectionCard />
        },
        {
            Card:<MiddleSectionCard/>
        },
        {
            Card:<MiddleSectionCard/>
        },
        {
            Card:<MiddleSectionCard/>
        },
        {
            Card:<MiddleSectionCard/>
        },
    ]
  return (
    <div className={style.main}>
      {
        Content.map((card ,index)=>
        <div key={index}>{card.Card}</div>
        )
      }
      
    </div>
  )
}

export default MiddleSectionContent
