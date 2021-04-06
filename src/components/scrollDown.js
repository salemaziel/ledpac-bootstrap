import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import scrollDownStyle from "./scrollDown.module.css"

const ScrollDown = () => {
  return (
    <>
    <Container>
        <Row className="justify-center justify-content-center">
          <Col xs={10} md={4}>
              <div className="flex flex-row py-3">
            <div className={scrollDownStyle.arrowContainer}>
              <div className={scrollDownStyle.chevron} />
              <div className={scrollDownStyle.chevron} />
              <div className={scrollDownStyle.chevron} />
              <span className={scrollDownStyle.text}>Scroll down</span>
              </div>
            </div>
          </Col>
        </Row>
        </Container>
    </>
  );
};

export default ScrollDown