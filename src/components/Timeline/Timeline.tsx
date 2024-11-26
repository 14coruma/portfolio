import { useState } from 'react';
import { Container, Row, Col, ListGroup, Card, Button, Modal } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap, FaGlobeAmericas } from 'react-icons/fa'; // Optionally use icons for added flair
import { TimelineEvent } from './TimelineEvent';

const Timeline = () => {
  const events = [
    new TimelineEvent(
      "Experience 1",
      "Organization 1",
      "Location 1",
      new Date("2024-03-01"),
      new Date("2024-08-20"),
      <p>My long description</p>,
      <FaBriefcase/>,
      true
    ),
    new TimelineEvent(
      "Experience 2",
      "Organization 2",
      "Location 2",
      new Date("2023-03-01"),
      new Date("2023-08-20"),
      <p>My long description</p>,
      <FaGlobeAmericas/>,
      false 
    ),
    new TimelineEvent(
      "Experience 3",
      "Organization 3",
      "Location 3",
      new Date("2023-07-01"),
      new Date("2022-03-01"),
      <p>My long description</p>,
      <FaGraduationCap/>,
      false 
    ),
  ];

  const [allModalState, setAllModalState] = useState(new Array(events.length).fill(false));

  function setModalState(id: number, show: boolean) {
    const newState = [...allModalState];
    newState[id] = show;
    setAllModalState(newState);
  }

  function setModalStateWithId(id: number) {
    return (show: boolean) => setModalState(id, show);
  } 

  return (
    <section id="timeline" className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col>
          </Col>
          <Col xs={1}>
            <div className="vr" style={{height: '200px'}}></div>
          </Col>
          <Col></Col>
        </Row>
        <Row className="justify-content-center">
          <Col></Col>
          <Col xs={1}>
            <div className="vr" style={{height: '100px'}}></div>
          </Col>
          <Col></Col>
        </Row>
        <Row className="justify-content-center">
          <Col></Col>
          <Col xs={1}>
            <div className="vr" style={{height: '50px'}}></div>
          </Col>
          <Col>
            <Card style={{height: '50px'}}>
              <Card.Title>Experience</Card.Title>
              <Card.Subtitle>Location</Card.Subtitle>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="align-items-start">
          <Col xs={12}>
            <ListGroup variant="flush">
              {timelineData.map((item, index) => (
                <ListGroup.Item key={index} className="d-flex align-items-top">
                  {/* Timeline Icon */}
                  <div className="me-3">{item.icon}</div>
                  {/* Timeline Content */}
                  <div>
                    <h5>{item.title}</h5>
                    <small className="text-muted">{item.date}</small>
                    {item.description}
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Timeline;
