import React from "react";
import './Hero.css';
import hero_img from '../../Assests/hero-image.png';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import {motion} from "framer-motion";

function Hero() {
    return (
       <section className="hero-wrapper">
        <div className="hero-container">

        <div className="hero-left">
            <div className="hero-title">
                <div className="orange-circle"/>
                <motion.h1
                initial={{y: "2rem" , opacity:0}}
                animate={{y: 0, opacity:1}}
                transition={{
                    duaration:2,
                    type:"spring"
                }}
                >
                    Discover <br /> 
                    Most Suitable <br /> 
                    Property
                </motion.h1>
               
            </div>
            <div className="hero-desc">
                <span>Find a variety of properties that suit you very easilty</span>
                <span>Forget all difficulties in finding a residence for you</span>
            </div>
            <div className="search-bar">
                <HiLocationMarker color="#4066ff" size={25}/>
                <input type="text"  />
                <button className="button">Search</button>
            </div>
            <div className="stats">
                <div className="stat">
                    <span><CountUp start={8800} end={9000} duaration={4}/>
                    <span>+</span>
                    </span>
                    <span className="secondaryText" >Premium Products</span>
                </div>
                <div className="stat">
                    <span><CountUp start={1950} end={2000} duaration={4}/>
                    <span>+</span>
                    </span>
                    <span className="secondaryText" >Happy Customers</span>
                </div>
                <div className="stat">
                    <span><CountUp  end={28} />
                    <span>+</span>
                    </span>
                    <span className="secondaryText" >Award Winning</span>
                </div>
            </div>
        </div>
        <div className="hero-right">
            <motion.div
                initial={{x: "7rem", opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{
                    duration:2,
                    type:"spring"
                }}
                className="image-container">

                <img src={hero_img} alt="" /> 
            </motion.div>
        </div>

        </div>
       </section>
    );
  }
  
  export default Hero;
  