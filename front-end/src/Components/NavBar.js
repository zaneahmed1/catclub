import React from 'react'
import { Link } from "react-router-dom";
import "./NavBar.css"
import catclublogo from "../catclublogo.png"


export default function NavBar() {
  return (
    <nav className='navbar'>
   <Link to="/"><img className='logo' src={catclublogo} alt="img"/></Link>
   <div className='navlink'>
        <Link to="/about">About</Link>
      </div>
      <div className='navlink'>
        <Link to="/cats">See Cats</Link>
      </div>
      <div className='navlink'>
        <Link to="/cats/new">Add A Cat </Link>
      </div>
    </nav>
  )
}
