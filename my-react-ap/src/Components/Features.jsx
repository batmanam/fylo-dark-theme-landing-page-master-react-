import React from 'react'
import img1 from '../assets/images/icon-access-anywhere.svg'
import img2 from '../assets/images/icon-security.svg'
import img3 from '../assets/images/icon-collaboration.svg'
import img4 from '../assets/images/icon-any-file.svg'
import bg from '../assets/images/bg-curvy-desktop.svg'
import lilbg from '../assets/images/bg-curvy-mobile.svg'



export default function Features() {
  return (
    <div id='feature' className='features'>
      <img className='bg' src={bg} alt="" />
      <img className='lilbg' src={lilbg} alt="" />
        <div className="box">
            <img src={img1} alt="access files img" />
            <h2>Access your files, anywhere</h2>
            <p>The ability to use a smartphone, tablet, or computer to access your account means your 
               files follow you everywhere.</p>
        </div>
        <div className="box">
            <img src={img2} alt="access files img" />
            <h2>Security you trust</h2>
            <p>2-factor authentication and user-controlled encryption are just a couple of the security 
            features we allow to help secure your files.</p>
        </div>
        <div className="box">
            <img src={img3} alt="access files img" />
            <h2>Real-time collaboration</h2>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. 
               No email attachments required.</p>
        </div>
        <div className="box">
            <img src={img4} alt="access files img" />
            <h2>Store any type of file</h2>
            <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
               file types to be securely stored and shared.</p>
        </div>
    </div>  
  )
}
