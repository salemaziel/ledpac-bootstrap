import React from 'react'

import {
    LogoLight
  } from '../../images/index'

  import { FaEnvelope, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

import { Link } from 'gatsby'


const Footer2 = (props) => {
    return(
        <>
<footer className="py-5 bg-black">
  <div className="container text-center pb-5 border-bottom">
    <Link to="#" className="d-inline-block mx-auto mb-4" >
      <img className="img-fluid" src={LogoLight} alt width="150px" />
    </Link>
    <ul className="d-flex flex-wrap justify-content-center align-items-center list-unstyled mb-4">
      <li><Link to="#" className="link-secondary mr-4 text-white" >About</Link></li>
      <li><Link to="#" className="link-secondary mr-4 text-white" >Company</Link></li>
      <li><Link to="#" className="link-secondary mr-4 text-white" >Services</Link></li>
      <li><Link to="#" className="link-secondary text-white" >Testimonials</Link></li>
    </ul>
    <div>
      <a className="d-inline-block mr-4" href="#">
        <FaFacebook size="1.5rem" color="white"  />
      </a>
      <a className="d-inline-block mr-4" href="#">
        <FaLinkedin size="1.5rem" color="white" />
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
  <div className="mb-5" />
  <div className="container">
    <p className="text-center">All rights reserved © LEDpac LLC 2021</p>
  </div>
</footer>


        </>
    )
}

export default Footer2