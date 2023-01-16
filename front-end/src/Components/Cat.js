import React from 'react'
import { Link } from "react-router-dom";
import "../Components/Cat.scss"

export default function Cat({cat}) {
  return (

        <div className='catcard'>
          <div className='catcard__name'>
      <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
          </div> 
         <img className='catcard__image'src={cat.image} alt={cat.name}  width="235" height="200"/>
   </div>

  )
}
