import React from 'react'

export default function CardLogement(props) {
  return (
    <div className='card-logement'>
        <h2>{props.title}</h2>
        <img src={props.image}/>
    </div>
    
  )
}
