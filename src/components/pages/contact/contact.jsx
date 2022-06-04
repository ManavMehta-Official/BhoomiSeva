import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../navbar/navbar';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { email } from '../../../App'
import { phone } from '../../../App';
import { Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import Button from '@mui/material/Button';
import divider from '../../../images/divider.svg';
import extendBG from '../../../images/contact/extendBG.png';
import {IoIosArrowRoundForward} from 'react-icons/io';
import {FaPaperPlane} from 'react-icons/fa';
import SectionSupport from '../../sectionSupport/sectionSupport';


const SERVICE_ID = "service_od8g8dn";
const TEMPLATE_ID = "template_vxmd318";
const USER_ID = "tULqTthsWNbCZT2V0";

export default function contact() {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <div>
        <Helmet>
            <title>Bhoomi Seva | Contact</title>
        </Helmet>

        <div className="contact-bg">
        <div class="overlay" style={{"background": "rgba(0, 0, 0, 0.2)", "height": "75vh"}}>
          <div>
            <Navbar />

            <h1 className='banner-section-title' style={{"font-size": "5rem", "margin-top": "12%"}}>
              Contact <br />
              Bhoomi Seva.
            </h1>
          </div>
          </div>
        </div>

        <div>
          <h1 className='page-title text-center' style={{"font-size": '4rem'}}><img src={divider} class="img-fluid" alt='flower stick' /> Contact us. <img src={divider} class="img-fluid" alt='flower stick' /> </h1>
          <div className="row" style={{"padding": "2% 4%", "marginTop": "5%"}}>
            <div className="col-sm-7" style={{"padding": "2% 8%", "backgroundColor": "rgb(250 249 231)", "border-radius": "1rem"}}>
              <h1 style={{"color": "var(--wood)", "fontFamily": "var(--font-noto)"}}>Send us a message!</h1>
            <Form onSubmit={handleOnSubmit} style={{"margin-top": "7%", "padding": "1% 1%"}} class="mx-auto text-center">
          <div className="row">
              <div className="col-sm-12 int-holder">
              <h4 style={{"textAlign": "left", "color": "var(--wood)", "fontFamily": "var(--font-noto)"}} className="input-label">Email Address</h4>
              <input
                id='form-input-control-email'
                class="email-input form-control"
                label='Email'
                name='from_email'
                placeholder='Enter your email address'
                required
              />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 int-holder " style={{"marginTop": "5%"}}>
              <h4 style={{"textAlign": "left", "color": "var(--wood)", "fontFamily": "var(--font-noto)"}} className="input-label">Your Name</h4>
                <input
                  id='form-input-control-last-name'
                  label='Name'
                  class="email-input form-control"
                  name='from_name'
                  placeholder='Enter your name'
                  required
                />
              </div>
            </div>

            <div className="col-sm-12 int-holder" style={{"marginTop": "5%"}}>
              <h4 style={{"textAlign": "left", "color": "var(--wood)", "fontFamily": "var(--font-noto)"}} className="input-label">Your Message</h4>
              <textarea
                id='form-textarea-control-opinion'
                label='Message'
                class="text-area form-control"
                name='message'
                placeholder='Enter your message'
                required
              />
            </div>
            <div className='mx-auto text-center'> 
              <Button variant="contained" size="medium" className="submitBtn" type='submit' disableElevation>
                 <FaPaperPlane /> &nbsp;Send
              </Button>
            </div>
        </Form>
            </div>
            <div className="col-sm-4 mx-auto" style={{"padding-right": "0%", "padding-left": "2%"}}>
            <h3 className="page-title">
                    Contact Details
                  </h3>
                <div className='contact-detail-box' style={{"padding-right": "0%", "padding-left": "4%", "padding": "5%"}}>
                <br /><br />
                  <div className='mx-auto text-center'>
                  <Button variant="contained" size="large" className="whatsappBtn" onClick={event =>  window.location.href='https://chat.whatsapp.com/JvzZ6pc6Gzz5Vo00B3qlRF'} disableElevation>
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" /> &nbsp; Bhoomi Seva Whatsapp
                  </Button>
                    <br />
                    <br />
                  <Button variant="contained" size="large" className="facebookBtn" onClick={event =>  window.location.href='https://www.facebook.com/bhoomiseve'} disableElevation>
                    <FontAwesomeIcon icon={faFacebook} size="lg" /> &nbsp; Bhoomi Seva Facebook
                  </Button>
                    <br />
                    <br />
                  <Button variant="contained" size="large" className="instaBtn" onClick={event =>  window.location.href='https://www.instagram.com/bhoomiseva/?igshid=YmMyMTA2M2Y='} disableElevation>
                    <FontAwesomeIcon icon={faInstagram} size="lg" /> &nbsp; Bhoomi Seva Instagram
                  </Button>
                  </div>

                  <br />
                  <br />
                  <hr />
                  <br /><br />
                    <p className='text-break'><FontAwesomeIcon icon={faEnvelope} size="lg" style={{"color": "var(--red-alphaBtn)"}} /> &nbsp; {email}</p>
                    <p className='text-break'><FontAwesomeIcon icon={faPhone} size="lg" style={{"color": "var(--red-alphaBtn)"}} /> &nbsp; {phone}</p>
                </div>
            </div>
          </div>


        </div>

        <SectionSupport />

    </div>
  )
}
