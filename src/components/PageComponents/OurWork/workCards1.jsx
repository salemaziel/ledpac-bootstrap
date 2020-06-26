import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

import { CostcoAfter_1, Finley8 } from '../../../images/index'


const WorkCards1 = () => (
<CardDeck>
    <Card className="bg-dark text-white">
  <Card.Img src={CostcoAfter_1} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title style={{color: 'white', fontWeight: 'bold', textShadow: '2px 2px 3px black'}}>Costco Jewelry</Card.Title>
    {/*<Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>&*/}
    {/*<Card.Text>Last updated 3 mins ago</Card.Text>*/}
  </Card.ImgOverlay>
</Card>
<Card className="bg-dark text-white">
  <Card.Img src={Finley8} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title style={{color: 'white', fontWeight: 'bold', textShadow: '2px 2px 3px black' }}>Finley Residence</Card.Title>
    {/*<Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>&*/}
    {/*<Card.Text>Last updated 3 mins ago</Card.Text>*/}
  </Card.ImgOverlay>
</Card>


</CardDeck>
)

export default WorkCards1