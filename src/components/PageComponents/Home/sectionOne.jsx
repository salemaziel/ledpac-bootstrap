import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import homeStyles from './home.module.css'

const SectionOne = () => (
<section id="one" className="wrapper">
    <Container>
      <Row>
        <Col>
        <h1 className={homeStyles.Heading}>Leading The Industry with The Latest In Cutting Edge LED Technology</h1>
        </Col>
      </Row>
    </Container>
    <div className="inner">
      <ul className="features">
        <li>
          <h3 className="icon style1 solid fa-chart-area">RGB LED Grow Lights</h3>
          <p>Lorem ipsum dolor sit amet interdum mollis sapien. Sed ac risus. Phasellus lacinia, ullamcorper laoreet, lectus arcu pulvinar lorem ipsum interdum sed tempus sagittis lorem feugiat. In fringilla diet consectetur. Morbi libero orci, consectetur in odio maximus felis.</p>
        </li>
        <li>
          <h3 className="icon style2 solid fa-chart-pie">Solar/White LED Lights</h3>
          <p>Lorem ipsum dolor sit amet interdum mollis sapien. Sed ac risus. Phasellus lacinia, ullamcorper laoreet, lectus arcu pulvinar lorem ipsum interdum sed tempus sagittis lorem feugiat. In fringilla diet consectetur. Morbi libero orci, consectetur in odio maximus felis.</p>
        </li>
        <li>
          <h3 className="icon style3 solid fa-cube">UV-C LED Disinfecting Lights</h3>
          <p>Lorem ipsum dolor sit amet interdum mollis sapien. Sed ac risus. Phasellus lacinia, ullamcorper laoreet, lectus arcu pulvinar lorem ipsum interdum sed tempus sagittis lorem feugiat. In fringilla diet consectetur. Morbi libero orci, consectetur in odio maximus felis.</p>
        </li>
        <li>
          <h3 className="icon style3 solid fa-cube">Linearal C.O.B. LED Lights</h3>
          <p>Lorem ipsum dolor sit amet interdum mollis sapien. Sed ac risus. Phasellus lacinia, ullamcorper laoreet, lectus arcu pulvinar lorem ipsum interdum sed tempus sagittis lorem feugiat. In fringilla diet consectetur. Morbi libero orci, consectetur in odio maximus felis.</p>
        </li>
      </ul>
    </div>
  </section>

)

export default SectionOne