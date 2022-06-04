import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../navbar/navbar';
import './donate.css';
import { email, phone } from '../../../App';
import PaymentMethod from '../../../components/paymentMethod/paymentMethod';
import divider from '../../../images/divider.svg';

export default function donate() {
  return (
    <div>
        <Helmet>
            <title>Bhoomi Seva | Donate</title>
        </Helmet>

        <div className="donate-bg">
        <div class="overlay" style={{"background": "rgba(0, 0, 0, 0.2)", "height": "75vh"}}>
          <Navbar />

          <h1 className='banner-section-title' style={{"font-size": "5.5rem"}}>
            Donate to <br />
            Bhoomi Seva.
          </h1>
        </div>
      </div>

      <div>
        <h1 className='page-title text-center' style={{"fontSize": "4rem"}}><img src={divider} class="img-fluid" alt='flower stick' /> Donate <img src={divider} class="img-fluid" alt='flower stick' /></h1>
          <div className='text-center col-sm-8 mx-auto donate-content' style={{"marginTop": "4%", "fontFamily": "var(--font-mono)", "color": "var(--wood)"}}>
            <p style={{"font-size": "1.4rem"}}>
            If you want your donation to be used for a specific purpose, kindly add (CowDonation / Education / FarmersSupport / OrphanageMeal / Any) in the comment while transferring the amount.
                </p>
                <br />
                <p style={{"font-size": "1.4rem"}}>
              You can get confirmation of your transferred amount by sending whatsApp message to Bhoomi Seva(+919900103178) or by sending mail to bhoomiseva.org@gmail.com
              </p>
          </div>
                

            <h1 class="text-center italic" style={{"marginTop": "5%"}}>Choose payment method</h1>

            <PaymentMethod />

        
      </div>

    </div>
  )
}
