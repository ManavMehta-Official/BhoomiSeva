import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import qr from '../../images/donate/QR.jpeg';
import upi from '../../images/donate/upi.png';
import gpay from '../../images/donate/gpay.png';
import paytm from '../../images/donate/paytm.png';


export default function UnstyledTabsBasic() {

    const TabsList = styled(TabsListUnstyled)`
        min-width: 320px;
        background-color: white;
        text-align: center;
        border-radius: 8px;
        width: 65%;
        margin-top: 2%;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: space-between;

        @media only screen and (max-width: 600px) {
            padding: 2% 8%;
        }

        @media only screen and (max-width: 375px) {
            padding: 2% 8%;
        }
        `;

    const Tab = styled(TabUnstyled)`
        font-family: IBM Plex Sans, sans-serif;
        color: black;
        cursor: pointer;
        font-size: 1rem;
        font-weight: normal;
        background-color: transparent;
        width: 100%;
        padding: 1% 0.8%;
        letter-spacing: 3.5px;
        margin: 6px 6px;
        border: none;
        border-radius: 100rem;
        display: flex;
        justify-content: center;
        transition: 0.3s ease;

        &:hover {
            background-color: rgb(250, 250, 248);
        }

        &.${tabUnstyledClasses.selected} {
            background-color: var(--lighter-bg);
            color: black;
        }

        &.${buttonUnstyledClasses.disabled} {
            opacity: 0.5;
            cursor: not-allowed;
        }

        @media only screen and (max-width: 600px) {
            padding: 2% 5%;
        }

        @media only screen and (max-width: 375px) {
            padding: 2% 5%;
        }
        `;

        const TabPanel = styled(TabPanelUnstyled)`
        width: 70%;
        font-family: IBM Plex Sans, sans-serif;
        font-size: 0.875rem;
        background-color: white;

        @media only screen and (max-width: 600px) {
            text-align: center;
        }

        @media only screen and (max-width: 375px) {
            text-align: center;
        }

      `;

  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList className='mx-auto text-center'>
        <Tab>QR CODE</Tab>
        <Tab>UPI</Tab>
        <Tab>PAYTM</Tab>
        <Tab>GOOGLE PAY</Tab>
      </TabsList>
      <TabPanel className='mx-auto' value={0}>
        <div className="row" style={{"marginTop": "7%"}}>
            <div className="col-sm-12 mx-auto">
                <div className="row">
                    <div className="col-sm-6 text-center">
                        <img src={qr} alt="qr code" className='img-fluid' />
                    </div>
                    <div className="col-sm-6 my-auto">
                        <h1>
                        Pay to 9900103178@ybl using this QR code
                        </h1>
                    </div>
                </div>
            </div>
        </div>
      </TabPanel>
      <TabPanel className='mx-auto' value={1}>
      <div className="row" style={{"marginTop": "7%"}}>
            <div className="col-sm-12 mx-auto">
                <div className="row">
                    <div className="col-sm-6 text-center">
                        <img src={upi} alt="qr code" className='img-fluid ms-auto text-center' style={{"width": "55%"}} />
                    </div>
                    <div className="col-sm-6 my-auto">
                        <h1>
                        <span style={{"fontFamily": "var(--font-noto)"}}>Pay to </span><br />
                        9900103178@ybl
                        </h1>
                    </div>
                </div>
            </div>
        </div>
      </TabPanel>
      <TabPanel className='mx-auto' value={2}>
      <div className="row" style={{"marginTop": "7%"}}>
            <div className="col-sm-12 mx-auto">
                <div className="row">
                    <div className="col-sm-6 text-center">
                        <img src={paytm} alt="qr code" className='img-fluid ms-auto text-center' style={{"width": "55%"}} />
                    </div>
                    <div className="col-sm-6 my-auto">
                        <h1>
                        <span style={{"fontFamily": "var(--font-noto)"}}>Pay to </span><br />
                        +919900103178
                        </h1>
                    </div>
                </div>
            </div>
        </div>
      </TabPanel>
      <TabPanel className='mx-auto' value={3}>
      <div className="row" style={{"marginTop": "7%"}}>
            <div className="col-sm-12 mx-auto">
                <div className="row">
                    <div className="col-sm-6 text-center">
                        <img src={gpay} alt="qr code" className='img-fluid ms-auto text-center' style={{"width": "85%"}} />
                    </div>
                    <div className="col-sm-6 my-auto">
                        <h1>
                        <span style={{"fontFamily": "var(--font-noto)"}}>Pay to </span><br />
                        +919900103178
                        </h1>
                    </div>
                </div>
            </div>
        </div>
      </TabPanel>
    </TabsUnstyled>
  );
}