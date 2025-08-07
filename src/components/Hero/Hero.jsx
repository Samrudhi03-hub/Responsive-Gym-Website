import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
// images required for right side
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png"
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {

    const transition = {type: 'spring', duration: 3};
    const mobile = window.innerWidth<=768 ? true : false; 
  return (
    <div className='hero' id='home'>
        <div className="blur hero-blur"></div>
        <div className="left-h">

            <Header/>
        {/* the best ad */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile ? '165px': '238px'}}
                whileInView={{left: '8px'}}
                transition={{...transition, type: 'tween'}}
                ></motion.div>
                <span>the best fitness club in the town</span>
            </div>

            {/* Hero header */}   
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Transform </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Body Today</span>
                </div>
                <div>
                    <span>
                        In this space, we shape bodies and uplift lives — one goal at a time
                    </span> 
                </div>
            </div>

            {/* figures */}

            <div className="figures">
                <div>
                    <span>
                        <NumberCounter end={100} start={80} delay="4" preFix="+" />
                    </span>
                    <span>expert coachEs</span>
                </div>
                <div>
                    <span><NumberCounter end={1000} start={900} delay="4" preFix="+" /></span>
                    <span>memberS joined</span>
                </div>
                <div>
                    <span><NumberCounter end={50} start={0} delay="4" preFix="+" /></span>
                    <span>fitness programs</span>
                </div>
            </div>

            {/* hero buttons */}
            <div className="hero-buttons">
                <buttons className="btn">Start Now</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>

            {/* right side of hero section */}
        </div>
        <div className="right-h">
            <button className="btn">Join Now</button>

            <motion.div 
            initial={{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>100 bpm</span>
            </motion.div>

            {/* hero-images */}
            <img src={hero_image} alt="" className='hero_image' />
            <motion.img
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition={transition}
            src={hero_image_back} alt="" className='hero_image_back' />

            {/* calories */}
            <motion.div 
            initial={{right: '37rem'}}
            whileInView={{right: '28rem'}}
            transition={transition}
            className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Calories burned</span>
                    <span>300 kcal</span>
                </div>
                
            </motion.div>
        </div>
    </div>
  )
}

export default Hero