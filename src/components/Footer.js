import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiFillMail, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import usermetadata from "../usercontrol.json";

let social_icons = {
    github: <AiFillGithub />,
    instagram: <AiFillInstagram />,
    linkedin: <FaLinkedinIn />,
    twitter: <AiOutlineTwitter />,
    email: <AiFillMail />
  }


export default function Footer({stickToBottom}){

  return <Container fluid className="footer" style={stickToBottom?{position:"absolute", bottom:'8%'}:{}}>
  <Row>
    <Col md="4" className="footer-copywright">
      <h3>{usermetadata['name']}</h3>
    </Col>
    <Col md="4" className="footer-copywright">
      <h3>Copyright © {usermetadata['copyright_tag']} </h3>
    </Col>
    <Col md="4" className="footer-body">
      <ul className="footer-icons">
        {usermetadata.socials.map((social, i) => {
            return (<li key={i} className="social-icons">
              <a
                href={social.link}
                style={{ color: "white" }}
                target="_blank"
                rel="noreferrer"
              >
                {social_icons[social.name]}
              </a>
            </li>)
          })}
      </ul>
    </Col>
  </Row>
</Container>;
}
