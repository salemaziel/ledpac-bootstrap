import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AspectRatio from "./AspectRatio";
import { Link } from 'gatsby'

function ProductCards(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col xs={12} md={6} lg={4} className="py-3" key={index}>
          <Card>
            <AspectRatio ratio={1 / 0.55}>
              <Card.Img
                src={item.image}
                alt={item.title}
                variant="top"
              ></Card.Img>
            </AspectRatio>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Subtitle><strong>{item.subtitle}</strong></Card.Subtitle>
              <hr style={{margin: '1rem'}}/>
              {item.body}
              
              <ul>
                <li>{item.feature1}</li>
                <li>{item.feature2}</li>
                <li>{item.feature3}</li>
                <li>{item.feature4}</li>
                <li>{item.feature5}</li>
                <li>{item.feature6}</li>
              </ul>
              <div className="justify-content-center" style={{margin: 'auto'}}>
              <ul className="actions">
                <li>
                <a href={item.link}class="button" target="_blank">Learn More</a>
                </li>
              </ul>
              <ul className="actions">
                <li>
                <Link to="/contact" class="button" target="_blank">Contact</Link>
                </li>
              </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default ProductCards;
