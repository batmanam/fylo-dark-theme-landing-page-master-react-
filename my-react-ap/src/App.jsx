import React from 'react'
import Nav from './Components/Nav'
import Intro from './Components/Intro'
import Features from './Components/Features'
import ImgInfo from './Components/ImgInfo'
import Comments from './Components/Comments'
import Email from './Components/Email'
import Foot from './Components/Foot'


export default function App() {
  return (
    <div className='container'>
      <header>
        <Nav />
        <Intro />
      </header>
      <main>
        <Features />
        <ImgInfo />
        <Comments />
        <Email />
      </main>
      <footer>
        <Foot />
      </footer>
    </div>
  )
}
