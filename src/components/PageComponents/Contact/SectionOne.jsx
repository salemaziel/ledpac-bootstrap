import React from 'react'
import { Link } from 'gatsby'
import LSidebar from './LSidebar'
import ContactForm from './contactForm'

import { Banner2, Airport1 } from '../../../images/index'


const SectionOne = () => (
<section id="main" className="wrapper sidebar right">
  <div className="inner">
    <header className="major">
      <h2>Contact Us</h2>
    </header>
    {/* Content */}
    <div className="content">
      <h3>Dolore Amet Consequat</h3>
      <p>Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est. Cras vel neque eros.</p>

    <br />
      <ContactForm />
    </div>
        <LSidebar />
  </div>
</section>

)

export default SectionOne