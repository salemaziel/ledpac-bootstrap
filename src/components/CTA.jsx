import React from 'react'
import { Link } from 'gatsby'
import homeStyles from './PageComponents/Home/home.module.css'

const CTA = () => (
    <section id="two" className={homeStyles.cta}>
    <div className={homeStyles.inner}>
      <header>
        <h2>Ultrices ante sagittis nunc senectus libero netus</h2>
        <ul className={homeStyles.actions}>
          <li><Link to="#" className="button big">How it works</Link></li>
        </ul>
      </header>
      <p>Lorem ipsum dolor sit amet interdum mollis sapien. Sed ac risus. Phasellus lacinia, ullamcorper laoreet, lectus arcu pulvinar lorem ipsum interdum sed tempus sagittis lorem feugiat. In fringilla diet consectetur. Morbi libero orci, consectetur in odio maximus felis. Lorem ipsum ullamcorper laoreet, lectus arcu pulvinar lorem ipsum interdum sed tempus sagittis lorem feugiat. In fringilla diet consectetur.</p>
    </div>
  </section>
)

export default CTA