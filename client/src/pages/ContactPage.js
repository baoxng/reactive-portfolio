import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Contact from "../components/Contact";

function ContactPage() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <Contact />
        </Col>
        <Col size="md-6 sm-12">
        <p>
          <h1>Connect with me:</h1>
        </p>
        <h3><a href="https://github.com/baoxng"><span>GitHub</span><i class="fab fa-github-square"></i></a></h3>
        <h3><a href="https://www.linkedin.com/in/bao-xiong/"><span>LinkedIn</span><i class="fab fa-linkedin"></i></a></h3>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;