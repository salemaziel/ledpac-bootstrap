import React from 'react'
import { Link } from 'gatsby'
import LSidebar from './LSidebar'

import { Banner2, Airport1 } from '../../../images/index'


const SectionOne = () => (
<section id="main" className="wrapper sidebar right">
  <div className="inner">
    <header className="major">
      <h2>About LEDPac</h2>
    </header>
    {/* Content */}
    <div className="content">
      <div className="image fit"><img src={Banner2} alt='' /></div>
      <h3>Who We Are</h3>
      <p>LEDpac is an innovative LED company designing products and systems for economical and functional application. Founded in 2000, LEDpac has developed products for application in interior coves, cabinets, display cases, signage, downlights, landscape lights and many other applications.</p>
      <p>LEDpac has expanded their product offering in 2010 to include a broad list of new lamp replacement products including MR16, PAR20, PAR30, BR30 and PAR38 shapes. New, more efficient LED modules in many of the original LEDpac product line has allowed for more effective light distribution and up to 33% higher light output from the same original package.</p>
      <h3>No Project Too Large or Too Small</h3>
      <p>LEDpac has North American manufacturing using only quality LEDs, and has developed systems for projects ranging in size from residential kitchens to jewelry cases for large national accounts. No project is too large or too small.</p>
      <h3>Patented Technology</h3>
      <p>LEDpac has submitted more than a dozen products which are currently Patent Pending. One of the first LED companies to submit products under the UL2108 guidelines, LEDpac offers a range of UL listed products and systems using only the finest LEDs available.</p>
      <ul>
        <li>Patented Tech 1</li>
        <li>Patented Tech 2</li>
        <li>Patented Tech 3</li>
        <li>Patented Tech 4</li>
        <li>Patented Tech 5</li>
      </ul>

    </div>
        <LSidebar />
  </div>
</section>

)

export default SectionOne