import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'; // Optionally use icons for added flair

const Timeline = () => {
  const timelineData = [
    {
      type: 'Experience',
      title: 'Software Developer at XYZ Corp',
      date: 'Jan 2020 - Present',
      description: 'Working on developing modern web applications using React, JavaScript, and Node.js. Focused on front-end development and optimizing user experience.',
      icon: <FaBriefcase />,
    },
    {
      type: 'Education',
      title: 'Bachelor of Science in Computer Science',
      date: 'Sep 2015 - May 2019',
      description: 'Graduated with honors from ABC University. Focused on software engineering, algorithms, and data structures.',
      icon: <FaGraduationCap />,
    },
    {
      type: 'Experience',
      title: 'Intern at Web Solutions Inc.',
      date: 'Jun 2018 - Aug 2018',
      description: 'Assisted in building client-facing websites, gained experience in HTML, CSS, and JavaScript.',
      icon: <FaBriefcase />,
    },
  ];

  return (
    <section id="timeline" className="py-5">
      <Container>
        <Row className="align-items-start">
          <Col xs={12}>
            <ListGroup variant="flush">
              {timelineData.map((item, index) => (
                <ListGroup.Item key={index} className="d-flex align-items-center">
                  {/* Timeline Icon */}
                  <div className="me-3">{item.icon}</div>
                  {/* Timeline Content */}
                  <div>
                    <h5>{item.title}</h5>
                    <small className="text-muted">{item.date}</small>
                    <p>{item.description}</p>
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
