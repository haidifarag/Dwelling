import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
}from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './Value.css';
import {MdOutlineArrowDropDown} from 'react-icons/md';
import img from '../../Assests/value.png'; 
import data from '../../accordion';
const Value =()=> {
    return (
        <section className="v-wrapper">
            <div className="v-container">
                <div className="v-left">
                    <div className="image-container">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="v-right">
                    <span className="orangeText" >Our Value</span>
                    <span className="primaryText" >Value We Give To You</span>
                    <span className="secondaryText" >We always ready to help by providing the best services for you. <br/> We beleive a good place to live can make your life better.</span>
                    <Accordion  className="accordion" allowMultipleExpanded={false} preExpanded={[0]} >
                        {
                            data.map((item, i)=> {
                                return (
                                <AccordionItem className={"accordionItem"} key={i} uuid={i} >
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="accordionButton">

                                            <div className="icon">
                                                 {item.icon}
                                            </div>
                                            <span className="primaryText">
                                                {item.heading}    
                                            </span>     
                                            <div className="icon">
                                               <MdOutlineArrowDropDown size={20} />
                                            </div>      
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                                );
                            })
                        }

                    </Accordion>

                </div>
            </div>
        </section>
    );
  }
  
  export default Value ;