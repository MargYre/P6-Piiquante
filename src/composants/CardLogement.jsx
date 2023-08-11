import React from 'react'
import { Link } from 'react-router-dom'

export default function CardLogement(props) {
  return (
    <Link to={`/logements/${props.id}`} className='card-logement'>
        <h2>{props.title}</h2>
        <img src={props.image}/>
    </Link>
    
  )
}
