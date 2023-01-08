import React from 'react'
import { Login } from '../Components/Login'
import "../Pages/Home.css"
import logo from "../../src/catclublogo.png"

export default function Home() {
  return (
    <div className='main-display'>
      <div className='main-left'>
      <div className="logo">
          <img src={logo} />
        </div>
        <div className='text-wrapper'>
        <h1>Join the Cat Club</h1>
        <h2>Where we love cats</h2>
        </div>
        <div className='home-buttons'>
                 <Login/>
        </div>
 
      </div>
      <div className='main-right'></div>
    </div>
  )
}
