import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons

const ContactInfo = () => {
  return (
    <section id="contact-info" className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  {/* Email */}
                  <ListGroup.Item>
                    <FaEnvelope className="me-2" />
                    <strong>Email:</strong>
                    <a href="mailto:14coruma@gmail.com" className="ms-2">
                      14coruma@gmail.com 
                    </a>
                  </ListGroup.Item>
                  {/* Phone */}
                  <ListGroup.Item>
                    <FaPhoneAlt className="me-2" />
                    <strong>Phone:</strong>
                    <span className="ms-2">+1 (734) 904-3117</span>
                  </ListGroup.Item>
                  {/* GitHub */}
                  <ListGroup.Item>
                    <FaGithub className="me-2" />
                    <strong>GitHub:</strong>
                    <a
                      href="https://github.com/14coruma"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-2"
                    >
                      github.com/14coruma
                    </a>
                  </ListGroup.Item>
                  {/* LinkedIn */}
                  <ListGroup.Item>
                    <FaLinkedin className="me-2" />
                    <strong>LinkedIn:</strong>
                    <a
                      href="https://linkedin.com/in/andrew-corum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-2"
                    >
                      linkedin.com/in/andrew-corum
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactInfo;
