import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { StyleSheetConsumer } from 'styled-components'
import logo from '../Assets/logo.png'
import { ShopContext } from '../../Context/ShopContext'
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {

    const [isclicked, setisclicked] = useState("shop")
    const { CartCount } = useContext(ShopContext);
    const { loginWithRedirect, logout, isAuthenticated, user} = useAuth0();


    // const toggleClicked = () => {
    //     if(isclicked) {
    //         setisclicked(!isclicked)
    //     }
    //     setisclicked(isclicked)
    // }

    return (
        <>
            <nav>
                <div className="logo">
                    <Link to={'/'}><img src={logo} alt="" /></Link>
                    <h1>SHOPPER</h1>
                </div>
                <div className="menu">
                    <ul>
                        <li onClick={() => setisclicked("shop")}> <Link style={{ textDecoration: 'none' }} to='/'>SHOP</Link> {isclicked === "shop" ? <hr /> : <></>}</li>
                        <li onClick={() => setisclicked("mens")}> <Link style={{ textDecoration: 'none' }} to='/mens'>MENS</Link>  {isclicked === "mens" ? <hr /> : <></>}</li>
                        <li onClick={() => setisclicked("women")}> <Link style={{ textDecoration: 'none' }} to='/womens'>WOMEN</Link>  {isclicked === "women" ? <hr /> : <></>}</li>
                        <li onClick={() => setisclicked("kids")}> <Link style={{ textDecoration: 'none' }} to='/kids'>KIDS</Link> {isclicked === "kids" ? <hr /> : <></>}</li>
                    </ul>
                </div>
                <div className="Cart">
                    {/* <Link to='/login'><button>Log In</button></Link> */}
                    {!isAuthenticated && <button onClick={() => loginWithRedirect()}>Log In</button>}

                    {isAuthenticated && <div className='Userprofile'>
                        <img src={user.picture} alt={user.name} />
                        <div className="col">
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        </div>
                    </div>}

                    {isAuthenticated && <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                        Log Out
                    </button>}

                    <Link to='/cart'><img src="cart.png" alt="" /></Link>
                    <div className="count">{CartCount()}</div>
                </div>
            </nav>
            <hr className='end' />
        </>
    )
}

export default Navbar
