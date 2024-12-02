import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>

      <h1>Get Exlusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay tuned</p>

      <div className="info">
        <input type="email" placeholder='enter your email' />
        <button>Subscibe</button>
      </div>
      
    </div>
  )
}

export default NewsLetter
