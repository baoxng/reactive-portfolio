import React from 'react';
import { Container, Col, Row, Media } from 'reactstrap';
import { NavLink } from "react-router-dom";
import './App.css';


const Project = () => {
  return (
    <>
    <br></br>
      <Container className="dark-container" fluid={true}>
      <Row>
        <Col xs="12">
        <hr></hr>
        <h1>Day Planner</h1>
        <NavLink href="https://baoxng.github.io/Day-Planner/">
              <Media className="img img-fluid" src="" alt=""/>
        </NavLink>
        <br></br>
        <h1>Travel Today</h1>
        <NavLink href="https://litabeach.github.io/Travel-Today/">
              <Media className="img img-fluid" src="" alt=""/>
        </NavLink>
        <br></br>
        <h1>Note Taker</h1>
        <NavLink href="https://thoughts-with-notes.herokuapp.com/">
              <Media className="img img-fluid" src="" alt=""/>
        </NavLink>
        <br></br>
        <h1>Dear Dairy</h1>
        <NavLink href="https://team-awesome-project2.herokuapp.com/">
              <Media className="img img-fluid" src="" alt=""/>
        </NavLink>
        <br></br>
        <h1>The Break Room</h1>
        <NavLink href="https://the-breakroom.herokuapp.com/">
              <Media className="img img-fluid" src="" alt=""/>
        </NavLink>
        <br></br>
        </Col>
      </Row>
      </Container>
    </>

  );
}

export default Project;