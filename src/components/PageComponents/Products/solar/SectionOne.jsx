import React from 'react'
import { Link } from 'gatsby'
import LSidebar from './LSidebar'

import SectionTwo from './SectionTwo'

import { Airport2, ProjectPics1_1 } from '../../../../images/index'

import solarStyles from './solar.module.css'

const SectionOne = () => (
<section id="main" className="wrapper sidebar right">
  <div className="inner">
    <header className="major">
      <h2>Solar Powered LED</h2>
      {/*<p>Sed magna in pharetra ultricies dolor sit amet consequat adipiscing lorem.</p>*/}
    </header>
    {/* Content */}
    <div className="content">
      <div className="image fit"><img src={ProjectPics1_1} alt="" /></div>
      <div className={solarStyles.Leading}>
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

 <SectionTwo />
    {/*     
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
    */}
    </div>
      <LSidebar />
  </div>
</section>

)

export default SectionOne