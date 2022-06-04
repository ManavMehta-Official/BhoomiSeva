import React from 'react';
import Navbar from '../../../components/navbar/navbar';
import Support from '../../support/support';
import { Helmet } from 'react-helmet';
import './orphanage.css';
import orphanageChildren from '../../../images/orphanage/orphanageBG.jpeg';
import orph1 from '../../../images/orphanage/orph1.jpeg';
import orph2 from '../../../images/orphanage/orph2.jpeg';
import orph3 from '../../../images/orphanage/orph3.jpeg';
import orph4 from '../../../images/orphanage/orph4.jpeg';
import orph5 from '../../../images/orphanage/orph5.jpeg';
import divider from '../../../images/divider.svg';
import SectionSupport from '../../sectionSupport/sectionSupport';

export default function orphanage() {
  return (
    <div>

        <Helmet>
            <title>Bhoomi Seva | Orphanage Support</title>
        </Helmet>


        <div className="orphanage-bg">
                <div style={{"background": "rgba(0, 0, 0, 0.4)", "height": "75vh"}}>
                <Navbar />

                <h1 className='banner-section-title' style={{"marginTop": "13%"}}>
                    Bhoomi Seva for <br />
                    Orphanage Support.
                </h1>
                <div style={{"margin-left": "2%", "margin-top": "1.5%"}}>
                    <button className="rounded-orangeBtn" style={{"padding": "0.8% 2.5%"}} onClick={event =>  window.location.href='/bhoomiseva/#/donate'}>
                    Donate
                    </button>
                    <button className="rounded-whiteBtn" style={{"padding": "0.8% 2.5%", "margin-left": "1%"}} onClick={event =>  window.location.href='/bhoomiseva/#/get-involved'}>
                    Join Initiative
                    </button>
                </div>
                </div>
        </div>

        <div className="row">

            <div className="col-sm-8">
                <h1 className='page-title' style={{"fontSize": "3.6rem"}}>Orphanage Support</h1>
                <img src={divider} className='img-fluid page-title-hr' alt='flower stick' />

                <p class="text-content project-section-text" style={{"padding": "2% 4%", "text-align": "justify", "font-size": "1.4rem", "margin-top": "4%"}}>
                <ul><li>Sponsor a meal for the orphanage kids for around Rs 6000</li></ul>
                <ul><li>School/College fees support for the kids at times</li></ul>
                <ul><li>Donation of laptops so that the kids can take online classes</li></ul>
                <ul><li>Donation of bicycles</li> </ul>
                <ul><li>Donations of Used clothes, foot wear, stationary items, furniture etc.</li></ul>

                </p>

                <div style={{"padding": "2% 5%", "margin-top": "5%"}}>
                      <div class="card testimonial" style={{"margin-bottom": "4%"}}>
                              <div class="card-body">
                                <h4 class="card-0">Sri Krishnashraya Educational Trust</h4>
                                <h5 class="card-title">Pushparaj</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Founder and Managing Trustee</h6>
                                <p class="card-text" style={{"font-weight": "400", "lineHeight": "25px"}}>
                                We would like to say our most sincere thanks to the Bhoomi Seva organization.  Because they have been supporting Krishnashraya home kids and helping their basic needs like food, education, cloth, medical and other emergency requirements of the kids. 
                                Once again we would like to thank Lakshmi Madam and all other supporters from the Bhoomi Seva organization for helping and supporting us. 
                                </p>
                              </div>
                      </div>
                    </div>

                <div style={{"padding": "2% 8%"}}>
                </div>
                

            </div>
            <div className="col-sm-4">
                <Support />
            </div>
        </div>

        <h1 className='page-title text-center' style={{"fontSize": "4.4rem", "margin-bottom": "4%"}}><img src={divider} className='img-fluid' alt='flower stick' /> Gallery <img src={divider} className='img-fluid ' alt='flower stick' /></h1>

        <div className="row mx-auto" style={{"padding": "1% 2%"}}>

        
        

            <div className="col-sm-6">
                <img src={orph1} alt="orphan children" class="img-fluid" />
                <img src={orph3} alt="orphan children" class="img-fluid" style={{"margin-top": "2%"}} />
                <img src={orph4} alt="orphan children" class="img-fluid" style={{"margin-top": "2%"}} />
            </div>
            <div className="col-sm-6">
                <img src={orph2} alt="orphan children" class="img-fluid" />
                <img src={orphanageChildren} alt="orphanage" className='img-fluid' style={{"margin-top": "2%"}} />
                <img src={orph5} alt="orphan children" class="img-fluid" style={{"margin-top": "2%"}} />
            </div> 
            
        </div>
<SectionSupport />
    </div>
  )
}
