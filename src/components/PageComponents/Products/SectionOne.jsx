import React from 'react'
//import { Link } from 'gatsby'
import LSidebar from './LSidebar'

//import SectionTwo from './SectionTwo'

import ContentCardsSection from './ContentCardsSection'

//import { 
//  Airport2, 
//  Airport4 
//} from '../../../images/index'

import productStyles from './products.module.css'
//import Fade from 'react-reveal/Fade';

const SectionOne = () => (
<section id="main" className="wrapper sidebar right">
  <div className="inner">
    <header className="major">
      <h2>Products</h2>
      {/*<p>Sed magna in pharetra ultricies dolor sit amet consequat adipiscing lorem.</p>*/}
    </header>
    {/* Content */}
    <div className="content">
      {/*<Fade left cascade>*/}
      <div className={productStyles.Leading}>
      <h3>Leading Through Innovation</h3>
      <p>In the rapidly advancing world of SSL technology, LEDpac leads the way with superior quality LED solutions. Whether it's retrofit, new construction, residential, commercial, or industrial, interior or exterior, big or small, LEDpac's suite of SSL solutions is consistently the discriminating choice of homeowners, business owners, contractors, lighting designers and architects – and has been for 20 years.</p>
      </div>
      {/*</Fade>*/}

      {/*<SectionTwo />*/}
      <ContentCardsSection />

      <h3>No Project Too Large or Too Small</h3>
      <p>LEDpac has North American manufacturing using only quality LEDs, and has developed systems for projects ranging in size from residential kitchens to jewelry cases for large national accounts. No project is too large or too small.</p>
      <h3>Patented Technology</h3>
      <p>LEDpac has 4 patents in LED technology, with 12 additional patents pending. One of the first LED companies to submit products under the UL2108 guidelines, LEDpac offers a range of UL listed products and electronic systems using only the finest LEDs available.</p>

 
    </div>
      <LSidebar />
  </div>
</section>

)

export default SectionOne