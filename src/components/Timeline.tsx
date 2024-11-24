import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap, FaGlobeAmericas } from 'react-icons/fa'; // Optionally use icons for added flair

const Timeline = () => {
  const timelineData = [
    {
      type: 'Travel',
      title: 'Appalachian Trail',
      date: 'Apr 2024 - Jul 2024',
      description:
      <>
        <p>
          Hiked 1,030 miles of trail through the Appalachian Mountains. Traveled north through
          GA, NC, and TN, then continuing in WV, MD, PA, NJ, NY, CT, MA, and VT.
        </p>
      </>,
      icon: <FaGlobeAmericas />,
    },
    {
      type: 'Experience',
      title: 'Software Developer at Epic',
      date: 'Oct 2021 - Feb 2024',
      description:
      <>
        <p>
          Responsible for the research, design, and development of projects for SlicerDicer, a
          medical data analytics platform. Web application development using MVC and MVVM
          architectures. Area expert for data import and export designs. Mentored two new hires
          through training and their first projects.Interviewed over 100 applicants for software
          developer role.
        </p>
        <em>Project ownership:</em>
        <ul>
          <li>User-friendly administrative build activity (FDS Editor).</li>
          <li>Distribution and access control for user-imported data (Data Gateway).</li>
          <li>Reduced size of cached sessions by ~60% by deduplicating and compressing data.</li>
          <li>Export summarized result data to excel.</li>
        </ul>
      </>,
      icon: <FaBriefcase />,
    },
    {
      type: 'Education',
      title: 'MS in Computer Science',
      date: 'Aug 2019 - May 2021',
      description: 
      <>
        <p>Studied at Indiana University - Bloomington.</p>
        <ul>
          <li>ML, Computer Vision, Graphics, Elements of AI, Algorithms, Cryptography - GPA 3.91</li>
          <li>Vision-based puzzle solver, using Naïve Bayes, TensorFlow CNN, and classic AI algorithms.</li>
          <li>RandWire (Xie et. al.ICCV 2019) implementation via graph-theoretic DAG generators.</li>
        </ul>
      </>,
      icon: <FaGraduationCap />,
    },
    {
      type: 'Experience',
      title: 'Associate Instructor at Indiana University - Bloomington',
      date: 'Aug 2019 - May 2021',
      description:
      <>
        <p>
          Deliver weekly discussions and recitations, administer tests and quizzes, and
          complete course grading for B401 - Fundamentals of Computing Theory.
        </p>
      </>,
      icon: <FaBriefcase />,
    },
    {
      type: 'Experience',
      title: 'Web Developer at CCEL (Calvin University)',
      date: 'Apr 2019 - Aug 2019',
      description:
      <>
        <ul>
          <li>Performed site visual redesign using Bootstrap, wrote database management scripts,
            and completed a mobile-friendly OCR book activity. Site redesign is still used today.</li>
          <li>Worked in a tight-knit, agile team to quickly deliver new features and high-quality
            code</li>
        </ul>
      </>,
      icon: <FaBriefcase />,
    },
    {
      type: 'Education',
      title: 'BCS in Computer Science; BS in Mathematics',
      date: 'Aug 2014 - Dec 2018',
      description: 
      <>
        <p>Studied at Calvin University.</p>
        <ul>
          <li>Projects in AI, Web Dev, HPC, Graphics, and Mathematics - GPA 3.88</li>
          <li>Academic tutor for 3.5 years, helping students excel in CS, math, and engineering.</li>
        </ul>
      </>,
      icon: <FaGraduationCap />,
    },
    {
      type: 'Experience',
      title: 'Undergraduate Research (REU) at New Mexico Tech',
      date: 'May 2018 - Aug 2018',
      description:
      <>
        <p>Created a novel method of PDF malware detection using ML and CV techniques.</p>
        <p>
          "Robust PDF Malware Detection with Image Visualization and Processing
          Techniques," 2019 2nd International Conference on Data Intelligence and Security (ICDIS) 
          &nbsp;
          <a href='https://ieeexplore.ieee.org/abstract/document/8855273'>https://ieeexplore.ieee.org/</a>
        </p>
      </>,
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
