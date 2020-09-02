import React from 'react'
//import { Link } from 'gatsby'
import LSidebar from './LSidebar'

import SectionTwo from './SectionTwo'

import { 
//  Airport2, 
  RGBGrow3 
} from '../../../../images/index'

import rgbStyles from './rgb.module.css'

const SectionOne = () => (
<section id="main" className="wrapper sidebar right">
  <div className="inner">
    <header className="major">
      <h2>RGB LED</h2>
    </header>
    {/* Content */}
    <div className="content">
    <div className="image fit"><img src={RGBGrow3} alt="" /*className={rgbStyles.TopPic}*/ /></div>
      <div className={rgbStyles.Leading}>
      <h3>Lorem ipsum dolor sit amet</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

   <SectionTwo />

    </div>
      <LSidebar />
  </div>
</section>

)

export default SectionOne