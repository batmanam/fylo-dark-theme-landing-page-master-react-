import React from 'react'
import virgol from '../assets/images/bg-quotes.png'
import photo1 from '../assets/images/profile-1.jpg'
import photo2 from '../assets/images/profile-2.jpg'
import photo3 from '../assets/images/profile-3.jpg'

export default function Comments() {
  return (
    <div id='team' className='commentCont'>
        <div className="coment">
            <img className='virgol' src={virgol} alt="virgol" />
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
            become a well-oiled collaboration machine.</p>
            <div className="profile">
                <img src={photo1} alt="profImg" />
                <div className="name">
                    <h5>Satish Patel</h5>
                    <h6>Founder & CEO, Huddle</h6>
                </div>
            </div>
        </div>
        <div className="coment">
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
            become a well-oiled collaboration machine.</p>
            <div className="profile">
                <img src={photo2} alt="profImg" />
                <div className="name">
                    <h5>Bruce McKenzie</h5>
                    <h6>Founder & CEO, Huddle</h6>
                </div>
            </div>
        </div>
        <div className="coment">
            <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
            become a well-oiled collaboration machine.</p>
            <div className="profile">
                <img src={photo3} alt="profImg" />
                <div className="name">
                    <h5>Iva Boydl</h5>
                    <h6>Founder & CEO, Huddle</h6>
                </div>
            </div>
        </div>
    </div>
  )
}
