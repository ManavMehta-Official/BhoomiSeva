import React from 'react';
import './navbar.css';
import logo from '../../images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-transparent">
    <div class="container-fluid">
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
      <FontAwesomeIcon icon={faBars} size="xl" style={{"color": "white"}} />
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/bhoomiseva">HOME</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#!" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PROJECTS
          </a>
          <ul class="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="/bhoomiseva/#/environment">ENVIRONMENT</a></li>
            <li><a class="dropdown-item" href="/bhoomiseva/#/education">EDUCATION</a></li>
            <li><a class="dropdown-item" href="/bhoomiseva/#/orphanage-support">ORPHANAGE SUPPORT</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/bhoomiseva/#/get-involved">GET INVOLVED</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/bhoomiseva/#/donate">DONATE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/bhoomiseva/#/contact">CONTACT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/bhoomiseva/#/about">ABOUT US</a>
        </li>
      </ul>
        <a href="https://www.facebook.com/bhoomiseve" rel="noreferrer" target="_blank" className='social-link' style={{"textDecoration": "none"}}><FontAwesomeIcon icon={faFacebook} size="lg" /> Facebook</a>
        {/* <a href="#!" className='social-link'><FontAwesomeIcon icon={faInstagram} size="lg" /></a> */}
        {/* <a href="#!" className='social-link'><FontAwesomeIcon icon={faTwitter}  size="lg" /></a> */}
    </div>
  </div>
</nav>

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                  <h5 id="offcanvasRightLabel" class="title">Menu</h5>
                  <button class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body mx-auto text-center">
                  <div style={{"margin-top": "5%"}}>
                  <br />
                    <a href="/bhoomiseva" class="offcanvas-link">HOME</a><br /><br />
                    <a href="/bhoomiseva/#/environment" class="offcanvas-link">ENVIRONMENT</a><br /><br />
                    <a href="/bhoomiseva/#/education" class="offcanvas-link">EDUCATION</a><br /><br />
                    <a href="/bhoomiseva/#/orphanage-support" class="offcanvas-link">ORPHANAGE SUPPORT</a><br /><br />
                    <a href="/bhoomiseva/#/get-involved" class="offcanvas-link">GET INVOLVED</a><br /><br />
                    <a href="/bhoomiseva/#/donate" class="offcanvas-link">DONATE</a><br /><br />
                    <a href="/bhoomiseva/#/contact" class="offcanvas-link">CONTACT</a><br /><br />
                    <a href="/bhoomiseva/#/about" class="offcanvas-link">ABOUT US</a><br />
                  </div>
                </div>
              </div>

        </div>
      )
}
