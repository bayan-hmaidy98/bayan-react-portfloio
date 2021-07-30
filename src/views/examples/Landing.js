/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes

import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/myke-simon-atsUqIm3wxo-unsplash.jpg";
import ill2 from "assets/img/ill/ill-2.svg";


// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";


class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Things I found in them excitement in Technology
                        {/* <span>completed with examples</span> */}
                      </h1>
                      <p className="lead text-white">
					  Technology is moving the world ahead to unpredictable place. What seems impossible in 70s or never been thought of, is a reality we live in these days. Also, with the different majors of tech including AI, Data analysis, etc.., things are changing fastly and even the plans are changing depending on the occuring changes. 
                      </p>
                      
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
						  <i class="fa fa-coffee" aria-hidden="true"></i>
                          </div>
                          <h6 className="text-primary text-uppercase">
                            One minute café 
                          </h6>
                          <p className="description mt-3">
						  One minute café is an online website allows you to order your drink from different cafés assgined to the website
                          </p>
                       
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://one-minute-cafe.github.io/one-min-cafe/"
                            onClick={e => e.preventDefault()}
                          >
                            Visit One minute café
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
						  <i class="fa fa-female" aria-hidden="true"></i>
                          </div>
                          <h6 className="text-success text-uppercase">
                            About me
                          </h6>
                          <p className="description mt-3">
                         A small blog where I have introduced myself in. Click the buuton bellow if you are interested to know more about me.
                          </p>
                      
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://bayan-hmaidy98.github.io/AboutMe/"
                            onClick={e => e.preventDefault()}
                          >
                            About me
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
						  <i class='fas fa-cookie' aria-hidden="true"></i>
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Salmon Cookies store
                          </h6>
                          <p className="description mt-3">
						  <br/> It's a project in 201 course. We applied the concepts we were taught for a week in it.
							
                          </p>
                         
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://bayan-hmaidy98.github.io/cookie-stand/"
                            onClick={e => e.preventDefault()}
                          >
                            See more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={promo1}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
					<i class="fa fa-child" aria-hidden="true"></i>
                    </div> <br/>
                    <h3>Fus7a فسحة</h3> <br/>
                    <p>
                     A website that is specialized in children entertainment. It includes two main parts. One part for parent guidence to teach them how to deal with children behaviours and issues and safe places in there area for children entertainment. 
					 the other part is for children, that includes stories with paintings to read, movies to watch, and a guidence to learn languages for kids.
                    </p>
                    
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={cardImg}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
					  And Action!
                      </h4>
                      <p className="lead text-italic text-white">
                        This place is for people who are interested in cinema field. Feel comfortable to join us and be part of our family!
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
					<i class="fa fa-film" aria-hidden="true"></i>
                    </div>
                    <h3>Movies Area</h3>
                    <p className="lead">
					A specialized area for movies. It's like social media place but only to talk about filming, directing, writing scenarios or even by posting reviews for movies you have watched, ranking movies in special categories and lists.
                    </p>
                    <p>
					All of the above only allowed to be inserted with gifs, frames, and videos from movies all around the world. You can interact with all of the above, add comments, and follow poeople and contents posted there. 
                    </p>
                 
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={ill2}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
					  <i class="fa fa-info" aria-hidden="true"></i>
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">More About me!</h4>
                      <p className="text-white">
					  As william shakespeare once said, Hello. It's me Bayan. I'm 23 yars old. I enjoy reading books and watching movies with my friend and then start a long chat (Longer than the movie itself).
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
						  <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Education
                          </h5>
                          <p>
						  A bachelor degree in electrical power engineering and a student in ASAC in software development.
                          </p>
                        
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
						  <i class="fa fa-briefcase" aria-hidden="true"></i>
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Work experience
                          </h5>
                          <p>
						  A trainee in renewable power engineering (Sep 2020 - Dec 2020)
                          </p>
                       
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          
        </main>
      
      </>
    );
  }
}

export default Landing;
