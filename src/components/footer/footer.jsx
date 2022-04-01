import React from 'react';
import './footer.css';
import { email } from '../../App';
import { phone } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {IoIosFlower} from 'react-icons/io';

export default function footer() {
  return (
    <div className='footer'>
        <div className="text-center">
            <h1><IoIosFlower style={{"color": "#6b6248", "marginTop": "-8%"}} /></h1>
        </div>
        <div class="row">
                <div class="col-sm-4">
                    <h2 class="mx-auto" style={{"color": "var(--wood)", "fontFamily": "var(--font-noto)"}}>CONTACT US</h2>
                    

                    <div class="row footer-wrapper" style={{"margin-top": "5%"}}>
                        <div class="col-sm-6">
                            <p style={{"text-align": "left", "color": "#6b6248"}} ><FontAwesomeIcon icon={faPhone} style={{"color": "#6b6248", "text-align": "right", "fontFamily": "var(--font-mono)"}} size="2x" />&nbsp;&nbsp;&nbsp;&nbsp; {phone}</p>
                        </div>
                        <div class="col-sm-6">
                        </div>
                    </div>

                    <div class="row footer-wrapper" style={{"margin-top": "5%"}}>
                        <div class="col-sm-6">
                            <p style={{"text-align": "left", "color": "#6b6248"}}><FontAwesomeIcon icon={faEnvelope} style={{"color": "#6b6248", "text-align": "right", "fontFamily": "var(--font-mono)"}} size="2x" />&nbsp;&nbsp;&nbsp;&nbsp; {email}</p>
                        </div>
                        <div class="col-sm-6">
                        </div>
                    </div>

                </div>
                <div class="col-sm-8">
                    <div >
                        <h3 class="mx-auto text-center mobile-footer-title" style={{"color": "var(--wood)", "fontFamily": "var(--font-noto)"}}>OUR MISSION</h3>
                        <p class="text-center footer-desc" style={{"text-align": "left", "color": "#6b6248", "fontFamily": "var(--font-mono)"}}>Bhoomi Seva mission is to reach out and help people in need in various ways esp. rural population, and rejuvenate our environment in our own capacity. </p>
                    </div>

                    <div style={{"margin-top": "5%"}}>
                        <h3 class="mx-auto text-center mobile-footer-title" style={{"color": "var(--wood)", "fontFamily": "var(--font-noto)"}}>OUR VISION</h3>
                        <p class="text-center footer-desc" style={{"text-align": "left", "color": "#6b6248", "fontFamily": "var(--font-mono)"}}>To uplift rural population and improve fertility of soil by encouraging farmers to take up agroforestry and/or natural farming(in Kanakapura area to start with).
                        </p>
                    </div>
                </div>
            </div>

            <div className='mx-auto text-center' style={{"marginTop": "5%"}}>
                <p className='cred'>Website developed by <a href="https://github.com/ManavMehta-Official" target="_blank" className='dev-link'>Manav Mehta</a> and <a href="https://github.com/shubhashricg" target="_blank" className='dev-link'>Shubhashri. C.G</a></p>
            </div>
    </div>
  )
}
