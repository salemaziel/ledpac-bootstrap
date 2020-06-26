import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AspectRatio from "./AspectRatio";
import { Link } from 'gatsby'

function ContentCards(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col xs={12} md={6} lg={3} className="py-3" key={index}>
          <Link to={item.link}>
          <Card>
            <AspectRatio ratio={1 / 0.65}>
              <Card.Img
                src={item.image}
                alt={item.title}
                variant="top"
              ></Card.Img>
            </AspectRatio>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.body}</Card.Text>
            </Card.Body>
          </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default ContentCards;
