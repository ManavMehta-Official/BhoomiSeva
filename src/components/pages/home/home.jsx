import React from 'react';
import { Helmet } from 'react-helmet';
import './home.css';
import Navbar from '../../navbar/navbar';
import logo from '../../../images/logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faSchool, faHouseChimneyUser, faChevronDown, faMapMarkerAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { recentEvent_1_description, recentEvent_2_description, recentEvent_3_description, recentEvent_1_image, recentEvent_2_image, recentEvent_3_image } from '../../../recentEventManager';
import {GiTwirlyFlower} from 'react-icons/gi';
import {IoIosArrowRoundForward} from 'react-icons/io';
import Button from '@mui/material/Button';
import {FaCanadianMapleLeaf} from 'react-icons/fa';
import orph from '../../../images/orphanage/orph2.jpeg';
import leafHold from '../../../images/leafHold.jpeg';
import divider from '../../../images/divider.svg';
import { event_1_description, event_1_title, event_1_location, event_1_image } from '../../../eventManager';
import SectionSupport from '../../sectionSupport/sectionSupport';
import { email } from '../../../App';

export default function home() {
  return (
    <div className="home-banner">
      <Helmet>
        <title>Bhoomi Seva</title>
      </Helmet>
      
      <div className='banner-img'>
      <Navbar />
        <div className="home-banner-text">
          <div className="row">
          

            <div className="col-sm-6">
              <h1 className='home-banner-text welcome-text'> 
                Welcome to
              </h1>
              <h1 className="home-banner-text" style={{"font-size": "5.5rem", "font-weight": "700"}}>
                Bhoomi Seva
              </h1>
              <div className="home-banner-btnHolder" style={{"margin-left": "2%", "margin-top": "2%"}}>
                <button className="rounded-orangeBtn" onClick={event =>  window.location.href='/bhoomiseva/#/donate'}>
                  Donate
                </button>
                <button className="rounded-whiteBtn" style={{"margin-left": "2%"}} onClick={event =>  window.location.href='/bhoomiseva/#/contact'}>
                  Contact
                </button>
              </div>
            </div>

            <div className="col-sm-6 mx-auto text-end">
              <img src={logo} alt="bhoomi seva logo" className='img-fluid ms-auto remove' style={{"width": "45%", "marginTop": "30%", "marginRight": "10%"}} />
            </div>
          </div>
          
        </div>

        </div>

        <section className='mx-auto text-center' style={{"padding": "5%"}}>
          <GiTwirlyFlower class="symbol" />
          <h1 class="define" style={{"marginTop": "2%", "color": "#968b6a"}}>
            Let's give a better <br />Earth to our children!
          </h1>

          <a href="/bhoomiseva/#/about" class="about-link">ABOUT US<IoIosArrowRoundForward style={{"font-size": "1.4em"}} /></a>
        </section>

        <hr className='hr-sec mx-auto' style={{"marginBottom": "5%"}} />
        
        <section className="what-we-do">
          <h1 className='section-title fancy-title mx-auto text-center' style={{"color": "#5e522b"}}><img src={divider} className="img-fluid" alt="flower stick" /> WHAT WE DO <img src={divider} className="img-fluid" alt="flower stick" /></h1>
        <div class="row card-container" style={{"padding": "2%"}} >
                <div class="col-sm-4 card-container-ind">
                    <div class="card">
                        <div class="card-body">
                          <h5 class="card-title"><FontAwesomeIcon icon={faSeedling} size="lg" style={{"color": "rgb(11, 182, 11)"}} />  Environment</h5>
                          <p class="card-text">
                            <ul><li>Support and training to farmers to switch to agroforestry and / or natural farming<br /></li></ul>
                            <ul><li>Cow donations to marginal farmers who want to switch to agroforestry.</li></ul>
                          </p>
                          <div class="mx-auto text-center" >
                            <Button variant="contained" className="containedBtn" disableElevation onClick={event =>  window.location.href='/bhoomiseva/#/environment'}>Read more</Button>
                          </div>
                        </div>
                      </div>
                </div>
                <div class="col-sm-4 card-container-ind">
                    <div class="card">
                        <div class="card-body">
                          <h5 class="card-title"><FontAwesomeIcon icon={faSchool} size="lg" style={{"color": "rgb(146, 142, 142)"}} /> Education</h5>
                          <p class="card-text" >
                            <ul><li>Scholarships for the Merit Rural Students<br /></li></ul>
                            <ul><li>Free Online coaching for 10th grade Students<br /></li></ul>
                            <ul><li>Free Online coaching for entrance exam tests for Jawahar Navodaya Vidyalaya admission for 6th grade<br /></li></ul>
                            <ul><li>External Scholarship opportunities guidance for rural merit students<br /></li></ul>
                          </p>
                          <div class="mx-auto text-center">
                          <Button variant="contained" className="containedBtn" onClick={event =>  window.location.href='/bhoomiseva/#/education'} disableElevation>Read more</Button>
                          </div>
                        </div>
                      </div>
                </div>
                <div class="col-sm-4 card-container-ind">
                    <div class="card">
                        <div class="card-body">
                          <h5 class="card-title"><FontAwesomeIcon icon={faHouseChimneyUser} size="lg" style={{"color": "rgb(202, 75, 36)"}} /> Orphanage Support</h5>
                          <p class="card-text">
                           <ul><li>Sponsor a meal for the orphanage kids for around Rs 6000<br /></li></ul>
                            <ul><li>School/College fees support for the kids at times<br /></li></ul>
                            <ul><li>Donation of laptops so that the kids can take online classes<br /></li></ul>
                            <ul><li>Donation of bicycles <br /></li></ul>
                            <ul><li>Donation of Used clothes, foot wear, stationary items, furniture etc.<br /></li></ul>
                            
                          </p>
                          <div class="mx-auto text-center" >
                          <Button variant="contained" className="containedBtn" onClick={event =>  window.location.href='/bhoomiseva/#/orphanage-support'} disableElevation>Read more</Button>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
        </section>

        <div className="recent-events" style={{"min-height": "90vh"}}>
          <h1 class="mx-auto text-center"><FaCanadianMapleLeaf style={{"color": "#968b6a"}} /></h1>
        <h1 class="fancy-title mobile-title mx-auto text-center" style={{"color": "#968b6a", "font-weight": "500"}}>Recent Events</h1>
            <h1 class='title mx-auto text-center' style={{"color": "var(--red-alpha)"}}>AT BHOOMI SEVA</h1>

            <div class="row mx-auto text-center" style={{"margin-top": "5%"}}>
              
                <div class="col-sm-4">
                  <div class="card">
                    <img src={recentEvent_1_image} class="card-img-top"  alt="cow donation" />
                    <div class="card-body">
                      
                      <div>
                          <button id='dd1' class="dropdown-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                          <FontAwesomeIcon icon={faChevronDown} />
                          </button>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                            <p class="mx-auto text-break">{recentEvent_1_description}</p>
                          </div>
                        </div>
                      </div>


                    </div>
                </div>
                </div>

                <div class="col-sm-4">
                    <div class="card">
                        <img src={recentEvent_2_image} class="card-img-top" alt="scholarship" />
                        <div class="card-body">

                          <div>
                            <button id='dd-2' class="dropdown-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <FontAwesomeIcon icon={faChevronDown} />
                            </button>
                          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <p class="mx-auto text-break">{recentEvent_2_description} </p>
                            </div>
                          </div>
                        </div>

                        </div>
                    </div>
                </div>

                <div class="col-sm-4">
                    <div class="card">
                        <img src={recentEvent_3_image} class="card-img-top" alt="meal sponsor" />
                        <div class="card-body">

                          <div>
                            <button id='dd-3' class="dropdown-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              <FontAwesomeIcon icon={faChevronDown} />
                            </button>
                          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <p class="mx-auto text-break">{recentEvent_3_description}</p>
                            </div>
                          </div>
                        </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

        <section className='nice col-sm-12 my-auto text-center'>
          <h1 className='define my-auto text-center text-banner-media' style={{"fontSize": "3.5rem", "font-weight": "700"}}>Save Our Environment.</h1> <br />
          <Button variant="contained" className='explore-more' size="large" onClick={event =>  window.location.href='/bhoomiseva/#/environment'} disableElevation>Explore more</Button>
        </section>

        <div className="events-ongoing" style={{"marginTop": "5%"}}>
        <h1 class="fancy-title mobile-title mx-auto text-center" style={{"color": "#968b6a"}}>Initiatives Ongoing</h1>
            <h1 class='title mx-auto text-center' style={{"color": "black"}}>AT BHOOMI SEVA</h1>

            <div class="row" style={{"padding": "2% 5%"}}>
                <div class='col-sm-4'>
                
                </div>

                <div class='col-sm-4'>
                    <div class="card">
                        <img src={event_1_image} class="card-img-top" alt="farmers training" />
                        <div class="card-body">
                          <h5 class="card-title">{event_1_title}</h5>
                          <h5 class='location'><FontAwesomeIcon icon={faMapMarkerAlt} /> {event_1_location}</h5>
                          <p class="card-text" style={{"textAlign": "left"}}>{event_1_description}</p>
                          <a href="/event-1" class="link" data-bs-toggle="modal" data-bs-target="#event1Modal">Learn more<IoIosArrowRoundForward style={{"fontSize": "1.4rem"}} /></a>
                        </div>
                    </div>
                    
                </div>

                <div class='col-sm-4'>

                </div>
            </div>

        </div>

      <div class="modal fade" id="event1Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">{event_1_title}</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            Farmers’ training in agroforestry and natural farming is organized on May 2022 in Chirantana School, Kabbalu, Kanakapura to spread awareness among farmers. <br /> <br />
            <ul><li>Publicize about training program among farmers in and around Kanakapura.<br /></li></ul>
            <ul><li>Lunch and tea organized for farmers on the training days.<br /></li></ul>
            <ul><li>Registration of farmers who want to switch to agroforestry and/or natural farming.<br /></li></ul>
            <ul><li>Cow donations to selected marginal farmers.<br /></li></ul>
            <ul><li>If you wish you can donate in small amounts like 1k, 2k, 5k… Visit <a href='/bhoomiseva/#/donate' class='text-link'>donate</a> <br /></li></ul>
            <ul><li>If you wish to volunteer leave a message at {email}</li></ul>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
