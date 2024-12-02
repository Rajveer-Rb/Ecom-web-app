import React from 'react'
import { useContext } from 'react';
import './Payments.css'
import { ShopContext } from '../../Context/ShopContext';

const Payments = () => {
  const { totalCartAmount, all_product, CartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className='checkout'>

      <div className="OrderSummary">
        <div className="topSec">
          <p>Pay</p>
          <h1>${totalCartAmount()}</h1>
        </div>

        <div className="bottomSec">

          {all_product.map((e) => {
            if (CartItems[e.id] > 0) {
              return <div className="OrderedProduct">
                <div className="lef">
                  <img src={e.image} alt="productImg" />
                  <div className="Prodinfo">
                    <h4>{e.name}</h4>
                    <p>Qty {CartItems[e.id]}^</p>
                  </div>
                </div>
                <div className="rig">${e.new_price * CartItems[e.id]}</div>
              </div>
            }
            return null;
          })}

          <div className="summary">
            <div className="subtotal">
              <p>Subtotal</p>
              <p>${totalCartAmount()}</p>
            </div>
            <hr className='upHr' />
            <div className="shipping">
              <p>Shipping</p>
              <p>$0</p>
            </div>
            <hr className='downHr' />
            <div className="totalAmount">
              <p>Total due</p>
              <p>${totalCartAmount()}</p>
            </div>
          </div>
        </div>

      </div>

      <div className="UserDetails">

        <h1>Shipping information</h1>

        <div className="mail">
          <label className='lab' htmlFor="Email">Email</label>
          <input className='padd' type="email" placeholder='email' />
        </div>

        <div className="address">
          <label className='lab' htmlFor="address">Shipping Info.</label>
          <input className='padd' type="text" placeholder='Name' />
          <input className='padd' type="text" placeholder='State' />
          <input className='padd' type="text" placeholder='District' />
          <input className='padd' type="text" placeholder='Zip-code' />
          <h6 className='underline'>Enter address manually</h6>
        </div>

        <div className="paymentDetails">
          <h4>Card Info.</h4>
          <input className='padd' type="text" placeholder='1234 1234 1234'/>
          <div className="row">
            <input type="text" className='wFull' placeholder='MM / YY' />
            <input type="text" className='wFull' placeholder='CVC' />
          </div>
        </div>

        <div className="final">
          <div className='confirm'>
            <input className='padd' type="checkbox" />
            <p className='pa'>Billing address is same as shipping</p>
          </div>
          <button className='pay'>Pay ${totalCartAmount()}</button>
        </div>

      </div>
    </div>
  )
}

export default Payments
