import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import usermetadata from "../usercontrol.json";
import homeMainSvg from '../Assets/home-main.svg'
import FindMeOn from "../components/FindMeOn";
import Footer from "../components/Footer";

let social_icons = {
  github: <AiFillGithub />,
  instagram: <AiFillInstagram />,
  linkedin: <FaLinkedinIn />,
  twitter: <AiOutlineTwitter />
}

function AboutDescription() {
  return (<>

    <div style={{ 'whiteSpace': 'pre-line' }}>{usermetadata['about']}</div>

  </>)
}

function Home2() {
  return (
    <>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                {<AboutDescription />}
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={homeMainSvg} style={{ borderRadius: 1000 }} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>

        </Container>
      </Container>
      <FindMeOn />
      <br/><br/><br/>
      <Footer />
    </>
  );
}


export default Home2;