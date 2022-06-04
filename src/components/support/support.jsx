import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { email } from '../../App'
import { phone } from '../../App';
import Button from '@mui/material/Button';
import {GiSpotedFlower} from 'react-icons/gi';
import './support.css';

export default function support() {
  return (
    <div style={{"marginTop": "20%", "padding-right": "4%", "padding-left": "4%"}}>
      <h3 className='page-title section-comp-title' style={{"font-size": "2.4rem"}}><GiSpotedFlower /> Support us</h3>

      <div style={{"boxShadow": "var(--hover)", "padding": "5% 8%"}}>
        <p>Join our whatsapp group or support us on our facebook page.</p> <br />

        <div className='mx-auto text-center'>
        <Button variant="contained" size="large" className="whatsappBtn" onClick={event =>  window.location.href='https://chat.whatsapp.com/JvzZ6pc6Gzz5Vo00B3qlRF'} target="_blank" disableElevation>
          <FontAwesomeIcon icon={faWhatsapp} size="lg" /> &nbsp; Bhoomi Seva Whatsapp
        </Button>
          <br />
          <br />
        <Button variant="contained" size="large" className="facebookBtn" onClick={event =>  window.location.href='https://www.facebook.com/bhoomiseve'} target="_blank" disableElevation>
          <FontAwesomeIcon icon={faFacebook} size="lg" /> &nbsp; Bhoomi Seva Facebook
        </Button>
        <br />
          <br />
        <Button variant="contained" size="large" className="instaBtn" onClick={event =>  window.location.href='https://www.instagram.com/bhoomiseva/?igshid=YmMyMTA2M2Y='} target="_blank" disableElevation>
          <FontAwesomeIcon icon={faInstagram} size="lg" /> &nbsp; Bhoomi Seva Instagram
        </Button>
        </div>

        <br />
        <hr />
        <br />

        <p className='text-break'><FontAwesomeIcon icon={faEnvelope} size="lg" style={{"color": "var(--red-alphaBtn)"}} /> &nbsp; {email}</p>
        <p className='text-break'><FontAwesomeIcon icon={faPhone} size="lg" style={{"color": "var(--red-alphaBtn)"}} /> &nbsp; {phone}</p>

        <br />

        <div className='text-center mx-auto'>
          <Button variant="contained" size="large" className="donateBtn" onClick={event =>  window.location.href='/bhoomiseva/#/donate'} disableElevation>
           Donate
          </Button>
        </div>

      </div>
    </div>
  )
}

