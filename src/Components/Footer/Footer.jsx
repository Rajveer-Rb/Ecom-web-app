import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/insta.png'
import whatsapp_icon from '../Assets/whatsapp.png'
import pintrest_icon from '../Assets/pint.png'

const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className='links'>
                <li>Company</li>
                <li>Products</li>
                <li>Franchises</li>
                <li>About-Us</li>
                <li>Contacts</li>
            </ul>

            <div className="iconContainer">
                <div className="icons">
                    <img src={instagram_icon} alt="ig" />
                </div>

                <div className="icons">
                <img src={pintrest_icon} alt="pintrest" />
                </div>

                <div className="icons">
                <img src={whatsapp_icon} alt="whatsapp" />
                </div>
            </div>

            <div className="copyright">
                <hr />
                <p>Copyright © 2024 - All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer
