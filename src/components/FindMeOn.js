import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import usermetadata from "../usercontrol.json";

let social_icons = {
  github: <AiFillGithub />,
  instagram: <AiFillInstagram />,
  linkedin: <FaLinkedinIn />,
  twitter: <AiOutlineTwitter />,
  email: <AiFillMail />
};

export default function FindMeOn() {
  return <Container>
    <Row>
      <Col md={12} className="home-about-social">
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className="purple">connect </span>with me
        </p>
        <ul className="home-about-social-links">
          {usermetadata.socials.map((social, i) => {
            return (<li key={i} className="social-icons">
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                {social_icons[social.name]}
              </a>
            </li>)
          })}
        </ul>
      </Col>
    </Row>
  </Container>
}