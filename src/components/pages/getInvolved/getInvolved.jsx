import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../navbar/navbar';
import './getInvolved.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {FaEnvelope} from 'react-icons/fa';
import Support from '../../support/support';
import Button from '@mui/material/Button';
import divider from '../../../images/divider.svg';
import extendBG from '../../../images/contact/extendBG.png';
import SecctionSupport from '../../sectionSupport/sectionSupport';

export default function getInvolved() {
  return (
    <div>

        <Helmet>
            <title>Bhoomi Seva | Get Involved</title>
        </Helmet>

        <div className="getInvolved-bg">
        <div style={{"background": "rgba(0, 0, 0, 0.2)", "height": "75vh"}}>
        <div>
          <Navbar />

          <h1 className='banner-section-title' style={{"fontSize": "5rem", "margin-top": "15%"}}>
            Get Involved <br />
            with Bhoomi Seva.
          </h1>
        </div>
        </div>
      </div>

      <h1 className='page-title' style={{"fontSize": "3.6rem"}}>Join the Initiative</h1>
      <img src={divider} className="img-fluid page-title-hr" alt="flower stick" />

    <div className="row" style={{"padding": "4%"}}>
        <div className="col-sm-7 form-bg" style={{"backgroundColor": "var(--lighter-bg)", "border-radius": "1rem", "padding": "4% 2%"}}>
            <h1 style={{"fontFamily": "var(--font-noto)", "color": "var(--wood)"}}>Subscribe to Bhoomi Seva</h1> <br />
            <p class="text-center" style={{"marginBottom": "2%", "fontFamily": "var(--font-mono)", "font-size": "1.2rem", "color": "var(--wood)", "marginTop": "2%"}}>Join our whatsapp group.</p>
            <div className="mx-auto text-center" style={{"marginBottom": "8%"}}>
                <Button variant="contained" size="large" className="whatsappBtn" onClick={event =>  window.location.href='https://chat.whatsapp.com/JvzZ6pc6Gzz5Vo00B3qlRF'} target="_blank" disableElevation>
                <FontAwesomeIcon icon={faWhatsapp} size="lg" /> &nbsp; Bhoomi Seva Whatsapp
                </Button>
            </div>
            <hr class="mx-auto" style={{"width": "90%", "marginBottom": "8%"}} />
        <form style={{"padding": "1% 7%"}}>
            <div class="input-group mb-3">
                <span class="input-group-text" style={{"background-color":"var(--red-alphaBtn)"}} id="basic-addon1"> <FontAwesomeIcon icon={faPhone} style={{"color": "white"}} />  </span>
                <input type="text" class="form-control whatsappNumberInput" placeholder="Enter your whatsapp number" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <br />

            <div class="input-group mb-3">
                <span class="input-group-text" style={{"background-color":"var(--red-alphaBtn)"}} id="basic-addon1"> <FaEnvelope style={{"color": "white"}}/>  </span>
                <input type="text" class="form-control whatsappNumberInput" placeholder="Enter email address" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <br />

            <div class="form-check" style={{"text-align": "left"}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    Farmer's support / Cow donation
                </label>
            </div>
            <div class="form-check" style={{"text-align": "left"}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    Education
                </label>
            </div>
            <div class="form-check" style={{"text-align": "left"}}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    Orphanage Support
                </label>
            </div>
            <br />
            <div className='mx-auto text-center'>
                <Button variant="contained" size="medium" className="submitBtn" disableElevation>
                 Subscribe
                </Button>
                <hr style={{"margin-top": "5%"}} />
                
                <Button style={{"margin-top": "5%"}} variant="outlined" className='learn-more-outline' size="medium" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Unsubscribe</Button>
            </div>
            
            

        </form>


        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header" style={{"border": "none !important"}}>
                                        <h5 class="modal-title title mx-auto text-center" style={{"font-size": "1.8rem"}} id="staticBackdropLabel">Unsubscribe to Bhoomi Seva Initiatives.</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body" style={{"padding": "1% 15%"}}>
                                            <form style={{"padding": "10% 7%"}}>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" style={{"background-color":"var(--red-alphaBtn)", "color": "white"}} id="basic-addon1"><FontAwesomeIcon icon={faPhone} /></span>
                                                    <input type="text" class="form-control" placeholder="Enter your whatsapp number" aria-label="Username" aria-describedby="basic-addon1" />
                                                </div>
                                                <div class="input-group mb-3">
                                                    <span class="input-group-text" style={{"background-color":"var(--red-alphaBtn)", "color": "white"}} id="basic-addon1"><FaEnvelope /></span>
                                                    <input type="text" class="form-control" placeholder="Enter email address" aria-label="Username" aria-describedby="basic-addon1" />
                                                </div>
                                                <div class="form-check" style={{"text-align": "left"}}>
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                      Farmer's support / Cow donation
                                                    </label>
                                                </div>
                                                <div class="form-check" style={{"text-align": "left"}}>
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Education
                                                    </label>
                                                </div>
                                                <div class="form-check" style={{"text-align": "left"}}>
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Orphanage Support
                                                    </label>
                                                </div>
                                                <div class="mx-auto text-center">
                                                    <Button variant="contained" id="unsubscribe" type="submit" size="medium" className="submitBtn submit" disableElevation>
                                                        Unsubscribe
                                                    </Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    </div>
                                </div>

            

        </div>

        <div className="col-sm-5 mx-auto" style={{"margin-top": "-10%"}}>
            <Support />
        </div>
    </div>

    </div>
  )
}
