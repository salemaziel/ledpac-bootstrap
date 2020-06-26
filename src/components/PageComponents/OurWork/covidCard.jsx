import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import { CostcoAfter_1, Finley8, UVCWand3_1 } from '../../../images/index'

import workStyles from './ourwork.module.css'
import { Link } from 'gatsby'

const CovidCard = () => (
    <section className="">
    <Card className={workStyles.StillCard}>
        <Link to="/our-work/covid-19">
  <Card.Img src={UVCWand3_1} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title style={{color: 'white', fontWeight: 'bold', textShadow: '2px 2px 3px black'}}>Fighting to Eradicate Covid 19</Card.Title>
    {/*<Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>&*/}
    {/*<Card.Text>Last updated 3 mins ago</Card.Text>*/}
  </Card.ImgOverlay>
  </Link>
</Card>

</section>

)

export default CovidCard