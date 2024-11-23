import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa'; // Importing icons

const ContactInfo = () => {
  return (
    <section id="contact-info" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Information</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  {/* Email */}
                  <ListGroup.Item>
                    <FaEnvelope className="me-2" />
                    <strong>Email:</strong>
                    <a href="mailto:your-email@example.com" className="ms-2">
                      your-email@example.com
                    </a>
                  </ListGroup.Item>
                  {/* Phone */}
                  <ListGroup.Item>
                    <FaPhoneAlt className="me-2" />
                    <strong>Phone:</strong>
                    <span className="ms-2">+1 (234) 567-8901</span>
                  </ListGroup.Item>
                  {/* GitHub */}
                  <ListGroup.Item>
                    <FaGithub className="me-2" />
                    <strong>GitHub:</strong>
                    <a
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-2"
                    >
                      github.com/yourusername
                    </a>
                  </ListGroup.Item>
                  {/* LinkedIn */}
                  <ListGroup.Item>
                    <FaLinkedin className="me-2" />
                    <strong>LinkedIn:</strong>
                    <a
                      href="https://linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ms-2"
                    >
                      linkedin.com/in/yourusername
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
