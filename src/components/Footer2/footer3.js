import React from 'react'

import {
    LogoLight
  } from '../../images/index'

  import { FaEnvelope, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'


const Footer3 = (props) => {
    return(
        <>
<footer className="py-5 bg-black">
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-between border-bottom">
      <div className="mb-5">
        <a className="d-inline-block" href="#">
          <img className="img-fluid" src={LogoLight} alt width="96px" />
        </a>
      </div>
      <div>
        <ul className="list-unstyled d-flex flex-wrap align-items-center">
          <li className="mr-4"><a className="link-secondary text-white" href="#">About</a></li>
          <li className="mr-4"><a className="link-secondary text-white" href="#">Company</a></li>
          <li className="mr-4"><a className="link-secondary text-white" href="#">Services</a></li>
          <li><a className="link-secondary text-white" href="#">Testimonials</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="mb-5" />
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-between">
      <p>All rights reserved © LEDpac LLC 2021</p>
      <div>
      <a className="d-inline-block mr-4" href="#">
        <FaFacebook size="1.5rem" color="white"  />
      </a>
      <a className="d-inline-block mr-4" href="#">
        <FaLinkedin size="1.5rem" color="white"  />
      </a>
      <a className="d-inline-block mr-4" href="#">
       <FaEnvelope size="1.5rem" color="white"  />
      </a>
      <a className="d-inline-block mr-4" href="#">
        <FaTwitter size="1.5rem" color="white"  />
      </a>
      <a className="d-inline-block" href="#">
        <FaInstagram size="1.5rem" color="white"  />
        </a>
      </div>
    </div>
  </div>
</footer>



        </>
    )
}

export default Footer3