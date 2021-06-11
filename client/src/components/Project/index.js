import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import data from '../../data';
import Card from "../Card/Card";
// import './App.css';


const Project = () => {
  return (
      <div className="section" id="work">
      <Container>
          <Row bottom>
            <h1>Project</h1>
          </Row>

          <Row>
            <Col>
              {data.projects.map((project, index) => (
                <Card
                  key={index}
                  heading={project.title}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Col>
          </Row>
      </Container>
    </div>
  )
}

export default Project;