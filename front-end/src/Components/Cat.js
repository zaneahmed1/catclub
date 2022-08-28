import React from 'react'
import { Link } from "react-router-dom";

export default function Cat({cat}) {
  return (
    <div>
      <tr>
        <td>
      <Link to={`/cats/${cat.id}`}>{cat.name}</Link>
      <img src={cat.image} alt={cat.name}  width="120" 
     height="120"/>
        </td>
      </tr>
    </div>
  )
}
