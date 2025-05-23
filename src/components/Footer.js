import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Developer_Logo_Final.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import githubimg from '../assets/img/github-375.png';
import navIcon3 from '../assets/img/mail-200.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kuldeep-gaur-294176194/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
            </a>
                <a href="https://github.com/kuldeep-gaur" target="_blank" rel="noopener noreferrer">
                    <img src={githubimg} alt="GitHub" className="social-icon-img" />
                </a>
                <a href="mailto:kuldeepgaur268@gmail.com">
                    <img src={navIcon3} alt="Email" className="social-icon-img" />
                </a>

            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}