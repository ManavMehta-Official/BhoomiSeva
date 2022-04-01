import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../navbar/navbar';
import './education.css';
import Support from '../../support/support';
import {GiSpotedFlower} from 'react-icons/gi';
import { testimonialName1_1, testimonialImage1_1, testimonialProfession1_1, testimonial1_1, edugalleryImg1, edugalleryImg2, testimonial1_4_a, testimonialImage1_4_a, testimonialName1_4_a, testimonialProfession1_4_a, testimonial1_4_b, testimonialProfession1_4_b, testimonialName1_4_b, testimonialImage1_4_b } from '../../../educationManager';
import divider from '../../../images/divider.svg';
import SectionSupport from '../../sectionSupport/sectionSupport';

export default function education() {
  return (
    <div>
        <Helmet>
            <title>Bhoomi Seva | Education</title>
        </Helmet>

        <div className="edu-bg">
        <div style={{"background": "rgba(0, 0, 0, 0.04)", "height": "75vh"}}>
          <Navbar />

          <h1 className='banner-section-title'>
            Bhoomi Seva for <br />
            Education.
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
          <h1 className='page-title' style={{"fontSize": "3.6rem"}}>Education</h1>
          <img src={divider} className='img-fluid page-title-hr' alt='flower stick' />

            <div style={{'padding': "2% 4%"}}>
              <h3 class="project-section-title" style={{"font-size": "2rem !important", "color": "black !important", "margin-top": "5%"}}>Scholarships for the Merit Rural Students</h3>

                <h1 class="text-content project-section-text" style={{"padding": "2% 4%", "text-align": "justify", "font-size": "1.4rem", "margin-top": "4%"}}>
                Few students have been identified by Bhoomi Seva for scholarships. They will be facilitated with the scholarship every year until they complete their education.

                <div style={{"padding": "2% 5%", "margin-top": "5%"}}>
                      <div class="card testimonial" style={{"margin-bottom": "4%"}}>
                              <div class="card-body">
                                <img src={testimonialImage1_1} alt="logo" width="50" height="50" class="d-inline-block align-text-top" style={{"border-radius": "100rem"}} />
                                <h5 class="card-title">{testimonialName1_1}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{testimonialProfession1_1}</h6>
                                <p class="card-text" style={{"font-weight": "400", "lineHeight": "25px"}}>
                                  {testimonial1_1}
                                </p>
                              </div>
                      </div>
                </div>

                </h1>



                <h3 class="project-section-title" style={{"font-size": "2rem !important", "color": "black !important", "margin-top": "5%"}}>Free Online coaching for 10th grade Students</h3>

                <h1 class="text-content" style={{"padding": "2% 4%", "text-align": "justify", "font-size": "1.4rem", "margin-top": "4%"}}>
                    <p className='project-section-text'>
                    This year we started online coaching for one rural girl student which we will be continuing going forward.
                    </p>

                    <div style={{"padding": "2% 5%", "margin-top": "5%"}}>
                      <div class="card testimonial" style={{"margin-bottom": "4%"}}>
                              <div class="card-body">
                                <h5 class="card-title">Sanjana</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Student</h6>
                                <p class="card-text" style={{"font-weight": "400", "lineHeight": "25px"}}>
                                I am Sanjana K.S of grade 10 studying in Blossom school.
                                I am very thankful that the Bhoomi Seva charity organization has helped me by paying my school fees for this academic year(2021-2022) and providing scholarships for 3 years. Also, the organization helped me by giving online tuition for Chemistry. I am very thankful to both Lakshmi mam and tuition mam. I will do my best in my studies.

                                </p>
                              </div>
                      </div>
                    </div>



                </h1>

                <h3 class="project-section-title" style={{"font-size": "2rem !important", "color": "black !important", "margin-top": "5%"}}>Free Online coaching for entrance exam tests for Jawahar Navodaya Vidyalaya admission for 6th grade</h3>

                <h1 class="text-content" style={{"padding": "2% 4%", "text-align": "justify", "font-size": "1.4rem", "margin-top": "4%"}}>
                    <p className='project-section-text'>
                    Coaching selected students from 5th grade for the Jawahar Navodaya Vidyalaya 6th grade admission. Planning to start from next academic year.
                    </p>



                </h1>

                <h3 class="project-section-title" style={{"font-size": "2rem !important", "color": "black !important", "margin-top": "5%"}}>External Scholarship opportunities guidance for rural merit students</h3>

                <h1 class="text-content" style={{"padding": "2% 4%", "text-align": "justify", "font-size": "1.4rem", "margin-top": "4%"}}>
                    <p className='project-section-text'>
                    Guiding rural students with various scholarship oppurtunities available
                    </p>

                    <div style={{"padding": "2% 5%", "margin-top": "5%"}}>
                      <div class="card testimonial" style={{"margin-bottom": "4%"}}>
                              <div class="card-body">
                                <img src={testimonialImage1_4_a} alt="logo" width="50" height="50" class="d-inline-block align-text-top" style={{"border-radius": "100rem"}} />
                                <h5 class="card-title">{testimonialName1_4_a}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{testimonialProfession1_4_a}</h6>
                                <p class="card-text" style={{"font-weight": "400", "lineHeight": "25px"}}>
                                I am Shree Raksha R studying 2nd year Computer Science, engineering at BNMIT. Lakshmi ma'am,I would like to thank you for your contribution of rupees 25,000 per year through Rotary Club.Your financial support is helping me to continue my studies. The generous support of individuals like you is helping students like me to build our career. Thank you again for your support!!!
                                </p>
                              </div>
                      </div>
                    </div>

                    <div style={{"padding": "2% 5%", "margin-top": "5%"}}>
                      <div class="card testimonial" style={{"margin-bottom": "4%"}}>
                              <div class="card-body">
                                <img src={testimonialImage1_4_b} alt="logo" width="50" height="50" class="d-inline-block align-text-top" style={{"border-radius": "100rem"}} />
                                <h5 class="card-title">{testimonialName1_4_b}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{testimonialProfession1_4_b}</h6>
                                <p class="card-text" style={{"font-weight": "400", "lineHeight": "25px"}}>
                                  {testimonial1_4_b}
                                </p>
                              </div>
                      </div>
                    </div>



                </h1>


            </div>
        </div>

        <div className="col-sm-4">
          

          <div style={{"marginTop": "60%", "padding-right": "4%",  "padding-left": "4%"}}>
            <h3 className='page-title' style={{"font-size": "2.4rem"}}><GiSpotedFlower /> Gallery</h3>

            <div style={{"boxShadow": "var(--hover)", "padding": "5% 8%"}}>
              <br />
              <br />
              <img src={edugalleryImg2} alt="children studying" className='img-fluid' style={{"width": "100%", "margin-bottom": "8%"}} />
              <img src={edugalleryImg1} alt="scholarship" className='img-fluid' style={{"width": "100%", "margin-bottom": "8%"}} />

            </div>
          </div>

          <Support />

        </div>
      </div>

      <SectionSupport />

    </div>
  )
}
