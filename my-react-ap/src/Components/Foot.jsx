import React from 'react'
import logo from '../assets/images/logo.svg'
import location from '../assets/images/icon-location.svg'
import tel from '../assets/images/icon-phone.svg'
import mes from '../assets/images/icon-email.svg'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

export default function Foot() {
  return (
    <div className='footerCont'>
        <img src={logo} alt="logo" />
        <div className="fot">
            <div className="box1">
                <img src={location} alt="location-icon" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua</p>
            </div>
            <div className="box2">
                <ul>
                    <li><img src={tel} alt="tel-icon" /> +1-543-123-4567</li>
                    <li><img src={mes} alt="email-icon" /> example@fylo.com</li>
                </ul>
            </div>
            <div className="box3">
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </div>
            <div className="box4">
                <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                </ul>
            </div>
            <div className="box5">
                <span><a href="#"><FaFacebookF /></a></span>
                <span><a href="#"><FaTwitter /></a></span>
                <span><a href="#"><FaInstagram /></a></span>
            </div>
        </div>
    </div>
  )
}
