import React from 'react'
import './Hero.css'
import hand_icon from '../img/hand_icon.png'
import arrow_icon from '../img/arrow.png'
import hero_image from '../img/hero_food_pic.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>Enjoy</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>Your Food at</p>
                    <p>Your Own Pace</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Promos</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero