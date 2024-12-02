import React from 'react'
import './BreadCrums.css'
import arrow from '../Assets/breadcrum_arrow.png'

const BreadCrums = (props) => {
  const {product} = props;
  return (
    <div className='breadCrum'>
      <p> HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name}</p>
    </div>
  )
}

export default BreadCrums
