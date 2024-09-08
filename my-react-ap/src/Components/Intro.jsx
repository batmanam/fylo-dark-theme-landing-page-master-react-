import React from 'react'
import introImg from '../assets/images/illustration-intro.png'
import Button from './Button/Button'

export default function Intro() {
  return (
    <div className='intro'>
        <img src={introImg} alt="introImg" />
        <h1>All your files in one secure location, accessible anywhere</h1>
        <p>Fylo stores all your most important files in one secure location. Access them wherever 
        you need, share and collaborate with friends family, and co-workers.</p>
        <Button name = 'Get Start'/>
    </div>
  )
}
