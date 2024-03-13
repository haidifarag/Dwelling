import React from "react";
import './Residencies.css';
import { Swiper, SwiperSlide, useSwiper} from "swiper/react";
import "swiper/css";
import data from '../../slider.json';
import { sliderSettings } from "../../common";
import image from "../../Assests/r1.png";


function Residencies() {
    return (
        <section className="r-wrapper">
            <div className="r-container">
               <div className="r-head">
                    <span className="orangeText">Best Choices</span>
                    <span className="primaryText">Popular Residencies</span>
                </div>
                <Swiper {...sliderSettings}  className="swipper">
                    <SliderButtons/>
                    { 
                    data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="r-card">
                                    <img src={image} alt="home" />
                                    <span className="r-price">
                                        <span style={{color:"orange"}}>$</span>
                                        <span>{card.price}</span>
                                    </span>
                                    <span className="c-name">{card.name}</span>
                                    <span className="c-detail">{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
  };
  
  export default Residencies;

  const SliderButtons = ()=> {
    const swiper = useSwiper();
    return (
        <div className="r-button">
            <button onClick={()=> swiper.slidePrev()} >&lt;</button>
            <button onClick={()=> swiper.slideNext()} >&gt;</button>
        </div>
    );
  };
  