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
   
  </section>

)

export default SectionOne