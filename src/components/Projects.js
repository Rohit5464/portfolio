import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "Rentley",
      description: "E-commerce website",
      imgUrl: projImg1,
      Url : "https://rentley.vercel.app/"
    },
    {
      title: "Farzi-tube",
      description: "Youtube clone webapp",
      imgUrl: projImg2,
      Url : "https://farzi-tube.vercel.app/"
    },
    {
      title: "RMDB",
      description: "Movies and tvshows rating and muchmore",
      imgUrl: projImg3,
      Url : "https://rmdb-rohit5464.vercel.app/"
    }
  ];

  const projects2 = [
    {
      title: "R-keep",
      description: "Your personal notes saver",
      imgUrl: projImg1,
      Url : "https://63e627f116052f0a94f496f6--rohit-keep.netlify.app/"
    },
    {
      title: "Emoji-name",
      description: "Provide information about emojis",
      imgUrl: projImg2,
      Url : "https://63e09c0ed820f610a734e1a9--rohit-emojiname.netlify.app/"
    },
    {
      title: "Minion-talks",
      description: "Minion language translator",
      imgUrl: projImg3,
      Url : "https://rohit-miniontalks.netlify.app/"
    }
  ];

  const projects3 = [
    
    {
      title: "Dynamic-component",
      description: "Fully dynamic website",
      imgUrl: projImg3,
      Url : "https://github.com/Rohit5464/dynamic-components"
    },
    {
      title: "Rohit-quiz",
      description: "How well do you know about me?",
      imgUrl: projImg2,
      Url : "https://github.com/Rohit5464/Rohit-Quiz"
    },
    {
      title: "Portfolio",
      description: "my portfolio website which you are exploring right now",
      imgUrl: projImg1,
      Url : "https://portfolio-codesmoke.vercel.app/"
    }
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> These are some of my projects you definitely look for:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                <p>If you're interested in working together on your next web development project, please don't hesitate to reach out.<br></br>I look forward to hearing from you!</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}