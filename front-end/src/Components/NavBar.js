import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css"


export default function NavBar() {
  return (
    <nav className='navbar'>
      <h1>Cat Club</h1>
      <div className='navlink'>
        <Link to="/cats">See Cats</Link>
      </div>
      <div className='navlink'>
        <Link to="/cats/new">Add A Cat </Link>
      </div>
    </nav>
  )
}
