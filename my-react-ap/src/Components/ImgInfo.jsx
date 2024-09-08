import React from 'react'
import img from '../assets/images/illustration-stay-productive.png'
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function ImgInfo() {
  return (
    <div className='lil-cont'>
        <img src={img} alt="img" />
        <div className="info">
            <h1>Stay productive, wherever you are</h1>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
               storage needs.</p>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
               attachments required.</p>
            <p className='buttonLike'>See how Fylo works <FaArrowAltCircleRight className='arow'/></p>
        </div>
    </div>
  )
}
