import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove from '../Assets/cart_cross_icon.png'
import { Link } from 'react-router-dom'


const CartItems = (props) => {

    const {totalCartAmount, all_product, CartItems, removeFromCart, moveToCheckout} = useContext(ShopContext);
    const {product} = props;

    return (
        <div className='cartItems'>
            <div className="formatMain">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Qunatity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                if (CartItems[e.id] > 0) {
                    return <div>
                        <div className="format formatMain">
                            <img className='productIcon' src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='count'>{CartItems[e.id]}</button>
                            <p>${e.new_price*CartItems[e.id]}</p>
                            <img className='removeIcon' src={remove} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartItemsDown">
                <div className="cartItemsTotal">
                    <h1>cart Totals</h1>
                    <div className="cartItems_Total_item">
                        <p>SubTotal</p>
                        <p>${totalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartItems_Total_item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartItems_Total_item">
                        <h3>Total</h3>
                        <h3>${totalCartAmount()}</h3>
                    </div>
                </div>
                <Link to='/checkout'>
                <button onClick={() => {moveToCheckout(product.id)}}>PROCEED TO CHECKOUT</button>
                </Link>
               
            </div>
            <div className="promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="promobox">
                    <input type="text" placeholder='promo code' />
                    <button className='submitBtn'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CartItems
