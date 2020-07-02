import React from 'react'
import { Link } from 'gatsby'
import LSidebar from './LSidebar'
import SectionTwo from './SectionTwo'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

import ContentCardsSection from './ContentCardsSection'
import WorkCards1 from './workCards1'
import CovidCard from './covidCard'

import { Airport2, UVCWand3_1 } from '../../../images/index'


const SectionOne = () => (
<section id="main" className="wrapper sidebar right">
  <div className="inner">
<div className="content">
  <CovidCard />
  </div>
    <header className="major">
      <h2>Our Work</h2>
     {/* <p>Sed magna in pharetra ultricies dolor sit amet consequat adipiscing lorem.</p>*/}
    </header>
    {/* Content */}
    <div className="content">
      <br />
      <Row>
      <p>In the rapidly advancing world of SSL technology, LEDpac leads the way with superior quality LED solutions. Whether it's retrofit, new construction, residential, commercial, or industrial, interior or exterior, big or small, LEDpac's suite of SSL solutions is consistently the discriminating choice of homeowners, business owners, contractors, lighting designers and architects – and has been for 10 years.</p>
      </Row>
  {/*    <div className="image fit"><img src={UVCWand3_1} alt='' /></div>*/}
  <WorkCards1 />

  <br />
  <hr />
  <br />
  <h2>Photo Gallery</h2>
      <SectionTwo />
      
      <br />
      <hr />
      <br />
      

    </div>
      <LSidebar />
  </div>
</section>


)

export default SectionOne