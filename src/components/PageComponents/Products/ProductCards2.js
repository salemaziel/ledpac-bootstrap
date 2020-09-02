import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import AspectRatio from "./AspectRatio";
import { Link } from "gatsby";
import Accordion from "react-bootstrap/Accordion";

function ProductCards2(props) {
  return (
    <>
      <Row className="justify-content-center">
        {props.items.map((item, index) => (
          <Col xs={12} md={6} lg={4} className="py-3" key={index}>
            <Accordion /*defaultActiveKey="0"*/>
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
                  <br />
                  <Card.Subtitle>
                    <strong>{item.subtitle}</strong>
                  </Card.Subtitle>
                </Card.Body>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Learn More
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {" "}
                    {item.body}
                    <ul>
                      <li>{item.feature1}</li>
                      <li>{item.feature2}</li>
                      <li>{item.feature3}</li>
                      <li>{item.feature4}</li>
                      <li>{item.feature5}</li>
                      <li>{item.feature6}</li>
                    </ul>

                    <ul className="actions">
                    <li>
                      <a href={item.specs} className="button" target="_blank">
                        See Spec Sheet
                      </a>
                    </li>
                  </ul>
                  </Card.Body>
                </Accordion.Collapse>

                <Card.Footer as={Link} to={item.link}>Contact To Order</Card.Footer>
              </Card>
            </Accordion>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ProductCards2;
