import React from "react";
import './Companies.css';
import logo1 from '../../Assests/prologis.png';
import logo2 from '../../Assests/tower.png';
import logo3 from '../../Assests/equinix.png';
import logo4 from '../../Assests/realty.png';

function Companies() {
    return (
        <section className="c-wrapper">
            <div className="c-container">
                <img src={logo1} alt=""  />
                <img src={logo2} alt=""  />
                <img src={logo3} alt=""  />
                <img src={logo4} alt=""  />
            </div>
        </section>
    );
  }
  
  export default Companies;
  