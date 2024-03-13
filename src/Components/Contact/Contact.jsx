import React from "react";
import './Contact.css';
import contact from '../../Assests/contact.jpg';
import {MdCall} from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';


const Contact = ()=> {
    return (
       <section className="c-wrapper">
        <div className="c-container">
            <div className="c-left">
                <span className="orangeText" >Our Contact Us</span>
                <span className="primaryText" >Easy to contact us</span>
                <span className="secondaryText" >We always ready to help by providijng the best services for you.<br/> We beleive a good blace to live can make your life better</span>

                <div className="contactModes">
                    <div className="row">
                        <div className="mode">
                            <div className="start">
                                <div className="icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="detail">
                                    <span className="primaryText" >Call</span><span className="secondaryText" >012 123 456 99</span>
                                </div>
                            </div>
                            <div className="button">Call Now</div>
                        </div>

                        <div className="mode">
                            <div className="start">
                                <div className="icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="detail">
                                    <span className="primaryText" >Chat</span><span className="secondaryText" >012 123 456 99</span>
                                </div>
                            </div>
                            <div className="button">Chat Now</div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="mode">
                            <div className="start">
                                <div className="icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="detail">
                                    <span className="primaryText" >Video</span><span className="secondaryText" >012 123 456 99</span>
                                </div>
                            </div>
                            <div className="button">Video Call Now</div>
                        </div>

                        <div className="mode">
                            <div className="start">
                                <div className="icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="detail">
                                    <span className="primaryText" >Message</span><span className="secondaryText" >012 123 456 99</span>
                                </div>
                            </div>
                            <div className="button">Message Now</div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="c-right">
                <div className="image-container">
                    <img src={contact} alt="" />
                </div>
            </div>
        </div>
       </section>
    );
  };
  
  export default Contact;