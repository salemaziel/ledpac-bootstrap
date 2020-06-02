import React from 'react'

import homeStyles from './home.module.css'

import {
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
  Banner7
}
from '../../../images/index'


const SectionThree = () => (
    <section id="three" className="wrapper">
    <div className={homeStyles.inner2}>
      <header className="major">
        <h2>Convallis amet interdum</h2>
        <p>Sed magna in pharetra ultricies dolor sit amet consequat adipiscing lorem.</p>
      </header>
      <div className="posts">
        <section className="post">
          <a href="#" className="image"><img src={Banner1} alt /></a>
          <div className="content">
            <h3>Ultricies sed lorem</h3>
            <p>Lorem ipsum dolor sit amet interdum arcu pulvinar lorem ipsum sed feugiat etiam sed magna adipiscing.</p>
            <a href="#" className="button">More</a>
          </div>
        </section>
        <section className="post">
          <a href="#" className="image"><img src={Banner2} alt /></a>
          <div className="content">
            <h3>Imperdiet egestas</h3>
            <p>Lorem ipsum dolor sit amet interdum arcu pulvinar lorem ipsum sed feugiat etiam sed magna adipiscing.</p>
            <a href="#" className="button">More</a>
          </div>
        </section>
        <section className="post">
          <a href="#" className="image"><img src={Banner3} alt /></a>
          <div className="content">
            <h3>Urna varius</h3>
            <p>Lorem ipsum dolor sit amet interdum arcu pulvinar lorem ipsum sed feugiat etiam sed magna adipiscing.</p>
            <a href="#" className="button">More</a>
          </div>
        </section>
        <section className="post">
          <a href="#" className="image"><img src={Banner4} alt /></a>
          <div className="content">
            <h3>Elit ligula commodo</h3>
            <p>Lorem ipsum dolor sit amet interdum arcu pulvinar lorem ipsum sed feugiat etiam sed magna adipiscing.</p>
            <a href="#" className="button">More</a>
          </div>
        </section>
        <section className="post">
          <a href="#" className="image"><img src={Banner5} alt /></a>
          <div className="content">
            <h3>Rutrum sed erat</h3>
            <p>Lorem ipsum dolor sit amet interdum arcu pulvinar lorem ipsum sed feugiat etiam sed magna adipiscing.</p>
            <a href="#" className="button">More</a>
          </div>
        </section>
        <section className="post">
          <a href="#" className="image"><img src={Banner6} alt /></a>
          <div className="content">
            <h3>Cubilia metus</h3>
            <p>Lorem ipsum dolor sit amet interdum arcu pulvinar lorem ipsum sed feugiat etiam sed magna adipiscing.</p>
            <a href="#" className="button">More</a>
          </div>
        </section>
      </div>
    </div>
  </section>

)

export default SectionThree