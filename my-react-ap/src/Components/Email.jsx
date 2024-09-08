import React, { useState } from 'react'
import Button from './Button/Button'

export default function Email() {

  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function changeHandler(e){
    setValue(e.target.value);
  }
  function erorHandler(){
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(value)) {
      setError("");
    } else if (!regEx.test(value) || value === "") {
      setError("Please Enter a valid email address");
    } else {
      setError("");
    }
  }

  return (
    <div id='signIn' className='emailCont'>
        <h1>Get early access today</h1>
        <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
        questions, our support team would be happy to help you.</p>
        <from className="inputs">
            <input
            value={value} 
            onChange={changeHandler} 
            placeholder='email@example.com' 
            type="email" required
            />
            <span id='er'>{error}</span>
            <button onClick={erorHandler} className='btnForEmail' type='submit'>Get Start For Free</button>
        </from>
    </div>
  )
}
