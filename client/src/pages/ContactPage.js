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
      </Row>
    </Container>
  );
}

export default ContactPage;