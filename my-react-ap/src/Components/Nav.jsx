import React from 'react'
import logo from '../assets/images/logo.svg'

export default function Nav() {
  return (
    <nav>
        <a href="#"><img src={logo} alt="Fylo-logo" /></a>
        <ul className='navUl'>
            <li className='navLi'><a href="#feature">Features</a></li>
            <li className='navLi'><a href="#team">Team</a></li>
            <li className='navLi'><a href="#signIn">Sign In</a></li>
        </ul>
    </nav>
  )
}
