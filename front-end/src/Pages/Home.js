import React from 'react'
import { Login } from '../Components/Login'
import "../Pages/Home.scss"
import logo from "../../src/catclublogo.png"

export default function Home() {
  return (
    <div className='home'>
      <div className='home__left'>
      <div className="home__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className='home__text'>
        <h1>Join the Cat Club</h1>
        <h2>Where we love cats</h2>
        </div>
        <div className='home__buttons'>
                 <Login/>
        </div>
 
      </div>
      <div className='home__right'></div>
    </div>
  )
}
