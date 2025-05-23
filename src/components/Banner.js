import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Connect.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [showResume, setShowResume] = useState(false);

  const toRotate = ["Full Stack Developer", "React & .NET Core Developer", "AWS Cloud Practitioner"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to My Developer Portfolio</span>
                  <h1>{`Hi! I'm Kuldeep`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "React & .NET Core Developer", "AWS Cloud Practitioner" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    Results-driven Software Developer with 2+ years of experience building scalable backend APIs and responsive front-end apps using React, .NET Core, and AWS. Passionate about delivering clean, efficient, and impactful solutions.
                  </p>
                  <a href="https://www.linkedin.com/in/kuldeep-gaur-294176194/" target="_blank" rel="noopener noreferrer">
                    <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </a>
                  <button className="resume-btn" onClick={() => setShowResume(true)}>View Resume</button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Resume Modal */}
      {showResume && (
        <div className="resume-modal">
          <div className="resume-modal-content">
            <span className="close-btn" onClick={() => setShowResume(false)}>&times;</span>
            <iframe
              src="https://drive.google.com/file/d/1fMCbC5SrzH116vnhGXJ13nbGbVZmhZFl/preview"
              width="100%"
              height="600px"
              allow="autoplay"
              title="Resume"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};
