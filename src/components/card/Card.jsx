import React from 'react'
import '../card/card.css'
const Card = ({el}) => {
  return (
    <div className='card-container'>
        <div className="card-image">
            <img src={el.img} alt="" />
        </div>
    </div>
  )
}

export default Card