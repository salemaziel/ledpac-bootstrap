import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import { CostcoAfter_1, Finley8, UVCWand3_1, WholeRoom_1_1_dark} from '../../../images/index'

import workStyles from './ourwork.module.css'
import { Link } from 'gatsby'

const CovidCard = () => (
    <section className="">
    <Card className={workStyles.StillCard}>
        <Link to="/our-work/covid-19">
  <Card.Img src={WholeRoom_1_1_dark} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title style={{color: 'white', fontWeight: 'bold', textShadow: '2px 2px 3px black'}}>Fighting to Eradicate Covid 19 with UltraViolet Light</Card.Title>
    <Card.Body>
    <Card.Text>
    <p className={workStyles.CovidText}> 
          LEDPac, LLC has partnered with The Global Lighting Project, a 501 C3
          organization, to offer one of its patented products containing
          Ultraviolet LED diodes that promise to quickly disinfect surfaces
          contaminated with the Covid-19 virus. The design and LED diodes
          contained in this new product exceed CDC requirements for devices that
          can kill COVID-19 in under 4 seconds.{" "}
        </p>
       
        <p style={{marginLeft: '60%', color: 'white', textShadow: '2px 2px 4px red', fontSize: '2rem', fontWeight: '600'}}>Click to Learn More </p>

        

    </Card.Text>
    </Card.Body>

    {/*<Card.Text>Last updated 3 mins ago</Card.Text>*/}
  </Card.ImgOverlay>
  </Link>
</Card>

</section>

)

export default CovidCard