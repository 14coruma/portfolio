import { Container, Row, Col, Card } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import HeadshotImg from "../assets/headshot.jpg";

const Summary = () => {
  return (
    <section id="summary" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center">
            {/* Headshot image */}
              <Image src={HeadshotImg} roundedCircle fluid />
          </Col>
          <Col xs={12} md={8}>
            {/* Summary text */}
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h2>Hi, I'm Andrew</h2>
                <p>
                  With over three years of professional experience, my role as a Software Developer
                  at Epic honed my expertise in full stack .NET web app dev, while my time as an
                  Associate Instructor at Indiana University Bloomington demonstrated my capacity
                  for education and mentorship. Committed to leveraging my programming skills to
                  develop innovative solutions, I am guided by a mission to empower technology
                  with practical and academic insights. My core competencies lie in crafting robust
                  code and fostering learning environments, reflecting my dedication to quality and
                  growth.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Summary;