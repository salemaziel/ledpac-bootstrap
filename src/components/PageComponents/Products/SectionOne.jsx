import React from 'react'
import { Link } from 'gatsby'
import LSidebar from './LSidebar'

import SectionTwo from './SectionTwo'

import { Airport2 } from '../../../images/index'


const SectionOne = () => (
<section id="main" className="wrapper sidebar right">
  <div className="inner">
    <header className="major">
      <h2>Products</h2>
      <p>Sed magna in pharetra ultricies dolor sit amet consequat adipiscing lorem.</p>
    </header>
    {/* Content */}
    <div className="content">
      <Link to="#" className="image fit"><img src={Airport2} alt='' /></Link>
      <h3>Dolore Amet Consequat</h3>
      <p>Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam quam, mollis at magna consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam.</p>

      <SectionTwo />

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