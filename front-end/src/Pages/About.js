import React from 'react'
import "../Pages/About.scss"
import NavBar from "../Components/NavBar"

export default function About() {
  return (
    <div className='about'>
      <div className='about__left'>
      </div>
      <div className='about__right'>
        <NavBar />
        <h1>About The Cat Club</h1>
        <h4 className='about__text'>
            Cat Club is a global community of cat people that gather online to show their appreciation to cats as well as display their own cats as members of our club.

            Cat Club started in 2022 by our founder, Zane Ahmed. Zane with the help of her cat, Cali opened an inclusive space for cat parents and guardians alike.  
        </h4>
      </div>
       
       
    </div>
  )
}
