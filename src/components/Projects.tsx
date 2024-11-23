import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Sample data for projects
const projectData = [
  {
    id: 1,
    title: 'Project One',
    image: 'https://via.placeholder.com/200',
    description: 'A brief summary of Project One.',
    link: '/project-one', // Path to the project detail page
  },
  {
    id: 2,
    title: 'Project Two',
    image: 'https://via.placeholder.com/200',
    description: 'A brief summary of Project Two.',
    link: '/project-two', // Path to the project detail page
  },
  {
    id: 3,
    title: 'Project Three',
    image: 'https://via.placeholder.com/200',
    description: 'A brief summary of Project Three.',
    link: '/project-three', // Path to the project detail page
  },
  {
    id: 4,
    title: 'Project Four',
    image: 'https://via.placeholder.com/200',
    description: 'A brief summary of Project Four.',
    link: '/project-four', // Path to the project detail page
  },
];

const Projects = () => {
  return (
    <section id="project-showcase" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        {/* Grid layout for the projects */}
        <Row className="g-4 justify-content-start">
          {projectData.map((project) => (
            <Col lg={3} md={4} sm={6} xs={12} key={project.id}>
              <Card
                style={{ cursor: 'pointer' }}
              >
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default Projects;
