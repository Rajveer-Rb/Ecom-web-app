import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>

            <div className="hero-Left">
                <h2>NEW ARRIVALS ONLY</h2>

                <div className="hero-collection">
                    <div className="handIcon">
                        <p>new</p>
                        <img src="hand.png" alt="" />
                    </div>
                    {/* <div className="paras">
                        <p>collections </p>
                        <p>for everyone</p>
                    </div> */}
                    <p>collections </p>
                    <p>for everyone</p>
                </div>

                <div className="heroBtn">
                    <div>Latest Collection</div>
                    <img src="arrow.png" alt="" />
                </div>
            </div>

            <div className="hero-Right">
                <img src="hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero
