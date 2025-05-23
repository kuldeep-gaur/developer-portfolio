import { Container, Row, Col } from "react-bootstrap";

export const Certifications = () => {
  const certs = [
    {
      title: "AWS Cloud Practitioner",
      source: "Amazon Web Services",
      link: "https://www.credly.com/badges/...",
    },
    {
      title: "JavaScript Fundamentals",
      source: "Udemy",
      link: "https://udemy.com/...",
    },
    {
      title: "Learning JDBC",
      source: "LinkedIn Learning",
      link: "https://www.linkedin.com/posts/kuldeep-gaur-294176194_just-finished-the-course-learning-jdbc-activity-7029062943287754752-cLmU",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <Container>
        <h2>Certifications</h2>
        <Row>
          {certs.map((cert, index) => (
            <Col key={index} sm={12} md={4}>
              <div className="proj-imgbx">
                <div className="proj-txtx">
                  <h4>{cert.title}</h4>
                  <p>{cert.source}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
