import React from "react";
import './Footer.css';
import logo from '../../Assests/logo3.png';


const Footer = ()=> {
    return (
       <section className="f-wrapper">
        <div className="f-container">
            <div className="f-left">
                <img src={logo} alt="" width={120} />
                <span className="secondaryText">
                Our vision is to make all people <br/>the best place to live for them 
                </span>
            </div>
            <div className="f-right">
                <span className="primaryText">Information</span>
                <span className="secondaryText" >145 New York, FL 5467, USA</span>
                <div className="f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
       </section>
    );
  };
  
  export default Footer;
