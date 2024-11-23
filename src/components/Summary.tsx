import { Container, Row, Col, Card } from "react-bootstrap";

const Summary = () => {
  return (
    <section id="summary" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center">
            {/* Headshot image */}
            <div className="circle-image-container">
              <img
                src="path-to-your-image.jpg"  // Replace with your image path
                alt="Your Name"
                className="circle-image"
              />
            </div>
          </Col>
          <Col xs={12} md={8}>
            {/* Summary text */}
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h2>Hi, I'm [Your Name]</h2>
                <p>
                  I am a passionate and driven software developer with experience in
                  building web applications using modern technologies such as React, 
                  JavaScript, HTML, CSS, and Bootstrap. I have a keen interest in problem-solving, 
                  and I am always looking for opportunities to learn and grow as a developer.
                </p>
                <p>
                  I specialize in creating user-friendly, efficient, and responsive web experiences, 
                  and I am always exploring new ways to enhance the functionality and design of my projects.
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