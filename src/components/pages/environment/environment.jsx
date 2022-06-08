import React from 'react';
import { Helmet } from 'react-helmet';
import './environment.css';
import Navbar from '../../navbar/navbar';
import Support from '../../support/support';
import { farmerTrainingImage, personTestimonialImageCowDonation, personTestimonialKanadaCowDonation, personTestimonialCowDonation, cowDonation1Image, cowDonation2Image, envgalleryImg1, envgalleryImg2, personTestimonialNameCowDonation, personTestimonialProfessionCowDonation } from '../../../environmentManager';
import divider from '../../../images/divider.svg';
import {GiSpotedFlower} from 'react-icons/gi';
import SectionSupport from '../../sectionSupport/sectionSupport';
import gallery_1 from '../../../images/environment/galleryCow1.jpeg';
import gallery_2 from '../../../images/environment/galleryCow2.jpeg';
import farmer from '../../../images/environment/farmerTraining.jpeg';
import sunitha from '../../../images/environment/sunitha.jpeg';


export default function environment() {
  return (
    <div>

      <Helmet>
        <title>Bhoomi Seva | Environment</title>
      </Helmet>

      <div className="env-bg">
        <div style={{"background": "rgba(0, 0, 0, 0.1)", "height": "75vh"}}>
          <Navbar />

          <h1 className='banner-section-title'>
            Bhoomi Seva for <br />
            Environment.
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
          <h1 className='page-title text-media-env' style={{"fontSize": "3.6rem"}}>Environment  </h1> 
          <img src={divider} className='img-fluid page-title-hr' alt='flower stick' />

          <h1 class="text-content project-section-text" style={{"font-size": "1.4rem", "text-align": "justify", "padding": "2% 4%", "marginTop": "5%"}}>
                            Today, fertility of soil has depleted due to the use of chemical fertilizers all over the world. <br /><br /><br />
                            <ul><li> By 2050, 90% of the Earth’s Soils could be degraded  unless we act now(UNCCD, 2020)</li></ul><br />
                            <ul><li>Food production could fall by 30% in 20 years if soil extinction is not prevented(World Economic Forum)</li></ul><br />
                            <ul><li>We only have 60 years of Soil Left(UN Food & Agriculture Organization)</li></ul><br />
                            <ul><li>52% of World’s Agricultural Soils already degraded (UN Food & Agriculture Organization)</li></ul><br /><br />

                            The occupation of farming is the most noble occupation in the world. We get food on our table everyday, because some farmers have grown these crops in their fields. We should not take it lightly. Such farmers in my opinion should lead a good life. But, it is not so. Today, farmers are in distress and many have committed suicide not able to sustain livelihood.<br /><br />

                            Bhoomi Seva intends to improve the livelihood of farmers by helping them switch to agroforestry and organic farming which has proven to be more lucrative. In an attempt to encourage farmers to switch to agroforestry or natural farming, Bhoomi Seva provides training to the farmers, and also donates desi cows to the marginal farmers which are required to practice natural farming.<br />
          </h1>

            <div style={{'padding': "2% 4%"}}>
              <h3 class="project-section-title" style={{"font-size": "2rem !important", "color": "black !important", "margin-top": "5%"}}>Farmer’s Training in Natural Farming and Agroforestry</h3>

                <h1 class="text-content project-section-text" style={{"padding": "2% 4%", "text-align": "justify", "font-size": "1.4rem", "margin-top": "4%"}}>
                  <ul><li> Build awareness among farmers about the benefits of organic farming and Agroforestry, on how use of chemical fertilizers reduces yield over a period of time, and that natural farming practise for more than a couple of years can increase yield more than what they get from usage of chemical fertilizers.</li></ul><br />
                  <ul><li>Provide guidance on how to switch to Organic farming or Agroforestry.</li></ul><br />
                  <ul><li>This also increases farmer’s income by 300-800% in 3-8 years.</li></ul><br />
                  <ul><li>Share videos and information from other model farmers who have been successful in doing this, and how their life has transformed after the switch</li></ul><br />


                    <img src={farmer} alt="farmer training" className='img-fluid phone-img' style={{"width": "60%", "margin-left": "5%"}} />

                </h1>



                <h3 class="project-section-title" style={{"font-size": "2rem !important", "color": "black !important", "margin-top": "5%"}}>Desi Cow Donation</h3>

                <h1 class="text-content" style={{"padding": "2% 4%", "text-align": "justify", "font-size": "1.4rem", "margin-top": "4%"}}>
                    <p className='project-section-text'>
                      Desi cows are required by farmers in order to pursue natural farming on their farms. Thus, we are helping marginal farmers who do not have desi cows by donating desi cows. This also helps farmers to earn additional income by selling milk.
                    </p>

                    <div style={{"padding": "2% 5%"}} className="testimonial-media">
                      <div class="card testimonial" style={{"margin-bottom": "4%"}}>
                              <div class="card-body">
                                <img src={sunitha} alt="logo" width="50" height="50" class="d-inline-block align-text-top" style={{"border-radius": "100rem"}} />
                                <h5 class="card-title">{personTestimonialNameCowDonation}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{personTestimonialProfessionCowDonation}</h6>
                                <p class="card-text" style={{"font-weight": "400", "lineHeight": "25px"}}>
                                  {personTestimonialKanadaCowDonation}
                                </p>
                                <hr width="100%" class="mx-auto" />
                                <p class="card-text" style={{"font-weight": "400", "lineHeight": "25px"}}>
                                  {personTestimonialCowDonation}
                                </p>
                              </div>
                      </div>
                    </div>

                </h1>

                {/* <img src={cowDonation1Image} alt="cow donation" className='img-fluid phone-img mimg' style={{"width": "40%", "margin-left": "5%", "margin-right": "5%", "margin-bottom": "5%"}} />
                <img src={cowDonation2Image} alt="cow donation" className='img-fluid phone-img mimg' style={{"width": "40%", "margin-left": "5%", "margin-right": "5%", "margin-bottom": "5%"}} /> */}

            </div>
        </div>

        <div className="col-sm-4">
          

          <div style={{"marginTop": "60%", "padding-right": "4%", "padding-left": "4%"}}>
            <h3 className='page-title' style={{"font-size": "2.4rem"}}><GiSpotedFlower /> Gallery</h3>

            <div style={{"boxShadow": "var(--hover)", "padding": "5% 8%"}}>
              <br />
              <br />
              <img src={gallery_1} alt="cow donation" className='img-fluid' style={{"width": "100%", "margin-bottom": "8%"}} />
              <img src={gallery_2} alt="cow donation" className='img-fluid' style={{"width": "100%", "margin-bottom": "8%"}} />

            </div>
          </div>

          <Support />

        </div>
      </div>

      <SectionSupport />

    </div>
  )
}
