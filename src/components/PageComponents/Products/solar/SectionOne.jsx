import React from 'react'
//import { Link } from 'gatsby'
import LSidebar from './LSidebar'

import SectionTwo from './SectionTwo'

import { 
//  Airport2, 
  ProjectPics1_1 
} from '../../../../images/index'

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
      <h3>The Latest in Solar Powered LED Innovation</h3>
      <p>NEW HiP solar LED illumination breakthrough using super-efficient white LEDs for bright reliable adjustable illumination, powered by the sun.</p>
      </div>

 <SectionTwo />

    </div>
      <LSidebar />
  </div>
</section>

)

export default SectionOne