/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";


// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import CardsFooter from "components/Footers/CardsFooter.jsx";

// index page sections
import Download from "../IndexSections/Download.jsx";
import OpportunityModal from "./OpportunityModal.jsx";
import ChallengeModal from "./ChallengeModal.jsx";

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
              {/* <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        A beautiful Design System{" "}
                        <span>completed with examples</span>
                      </h1>
                      <p className="lead text-white">
                        The design system comes with four pre-built pages to
                        help you get started faster. You can change the text and
                        images and you're good to go.
                      </p>
                      <div className="btn-wrapper">
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container> */}
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
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Opportunities
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>

                          </div>
                          {/* <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Create
                          </Button> */}
                          <OpportunityModal></OpportunityModal>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Challenges
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>

                          </div>
                          {/* <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Create
                          </Button> */}
                          <ChallengeModal />
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Pool
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            View
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
