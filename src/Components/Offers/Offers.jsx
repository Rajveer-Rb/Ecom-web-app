import React from 'react'
import './Offers.css'
import exclusive from '../Assets/exclusive.png'

const Offers = () => {
  return (
    <div className='Offers'>
      <div className="Left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCT</p>
        <button>Check Now</button>
      </div>
      <div className="Right">
        <img src={exclusive} alt="" />
      </div>
    </div>
  )
}

export default Offers
