import React from 'react'
import { Link } from 'gatsby'
import LSidebar from './LSidebar'
import SectionTwo from './SectionTwo'
import Card from 'react-bootstrap/Card'

import ContentCardsSection from './ContentCardsSection'
import WorkCards1 from './workCards1'

import { Airport2 } from '../../../images/index'


const SectionOne = () => (
<section id="main" className="wrapper sidebar right">
  <div className="inner">
    <header className="major">
      <h2>Our Work</h2>
     {/* <p>Sed magna in pharetra ultricies dolor sit amet consequat adipiscing lorem.</p>*/}
    </header>
    {/* Content */}
    <div className="content">
      <a href="#" className="image fit"><img src={Airport2} alt='' /></a>
      <h3>Dolore Amet Consequat</h3>
      <p>Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam quam, mollis at magna consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam.</p>
      <h3>Sed Magna Ornare</h3>
      <p>In vestibulum massa quis arcu lobortis tempus. Nam pretium arcu in odio vulputate luctus. Suspendisse euismod lorem eget lacinia fringilla. Sed sed felis justo. Nunc sodales elit in laoreet aliquam. Nam gravida, nisl sit amet iaculis porttitor, risus nisi rutrum metus.</p>
      <WorkCards1 />
      <ContentCardsSection />
      <SectionTwo />

    </div>
      <LSidebar />
  </div>
</section>


)

export default SectionOne