import { Button, Card, Col, Container, Row } from "react-bootstrap";

import "./Projects.css";

import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";


import usermetadata from "../usercontrol.json";
import React from "react";
import Footer from "../components/Footer";

export function Projects() {
    return <>


        <Container fluid className='project-section'>
            <Container style={{textAlign:'left'}}>

                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p>
                    Here are a few projects I've worked on recently.
                </p>


                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {usermetadata.projects.map((project, i) => {
                        return <React.Fragment key={i}>

                            <Col md={4} className="project-card">
                                <ProjectCard
                                    imgPath={project.thumbnail_link}
                                    isBlog={false}
                                    title={project.title}
                                    description={project.description}
                                    ghLink={project.link}
                                    demoLink={project.demo_link}
                                />
                            </Col>

                        </React.Fragment>
                    })}
                </Row>

            </Container>
        </Container>


        <Footer />
    </>
}



function ProjectCard(props) {
    return (
        <Card className="project-card-view">
            {props.imgPath?<Card.Img variant="top" src={props.imgPath} alt="card-img" />:<></>}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                <div style={{textAlign:'center'}}>
                    <Button variant="primary" href={props.ghLink} target="_blank">
                        <BsGithub /> &nbsp;
                        {props.isBlog ? "Blog" : "GitHub"}
                    </Button>
                </div>
                {"\n"}
                {"\n"}

                {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

                {!props.isBlog && props.demoLink && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        target="_blank"
                        style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite /> &nbsp;
                        {"Demo"}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}