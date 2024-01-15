

import { Col, Container, Row } from "react-bootstrap";
import usermetadata from "../usercontrol.json";
import utshavPic from "../Assets/102865357.png";
import Type from '../components/Type';
import "./Home.css"
import Home2 from "./Home2";

export function Home() {
    return <>
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                    <Col md={5} style={{ paddingBottom: 20, marginTop: 70, textAlign:'center' }}>
                            <img
                                src={usermetadata['profile_pic_link']}
                                alt="home pic"
                                className="img-fluid"
                                style={{ maxHeight: "250px", borderRadius: 100000 }}
                            />
                        </Col>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name" style={{textTransform:'uppercase'}}> {usermetadata['name']}</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>

                        
                    </Row>
                </Container>
            </Container>
            {/* <br/><br/><br/><br/> */}
            <Home2 />
        </section>
    </>
}
