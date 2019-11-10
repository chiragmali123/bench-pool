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

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
//import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import SimpleFooter from "components/Footers/CardsFooter.jsx";
import {connect} from 'react-redux';
import { getChallenges } from "Actions/Actions";
import { checkValueNotEmpty } from "utils";
import { isArrayEmpty } from "utils";
import { putChallengeAction } from "Actions/ChallengeAction";
class ChallengeList extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  componentWillMount() {
    this.props.fetchChallenges({});
  }

  updateAction = (userEmail, action) => {
    this.props.updateChallengeAction({ action, userEmail })
  }

  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
          <section className="section">
            <Container>
            <Card className="card-profile shadow mt--300">
                <div className="px-4">
                <Row className="justify-content-center">
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                       
                      </div>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                       <b>Employee Challenges</b>
                      </div>
                    </Col>
                  </Row>
                  {/* <div className="text-center mt-5">
                    <h3>
                      Jessica Jones{" "}
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                  </div> */}

                  <Container>
                    <Row className="row summary-header-row">
                      <Col className="col-sm-5">
                        <span>Name Name</span>
                      </Col>
                      <Col className="col-sm-7">
                        <span>Summary</span>
                      </Col>
                    </Row>
                    { (!isArrayEmpty(this.props.challengesData)) && this.props.challengesData.map(opportunity => {
                      if(!checkValueNotEmpty(opportunity.name)){
                        return null;
                      }
                      return <Row className="row summary-row">
                        <Col className="col-sm-5">
                          <span>{opportunity.name}</span>
                        </Col>
                        <Col className="col-sm-7">
                          <span>{opportunity.summary}</span>
                        </Col>
                      </Row>;
                    })}
                  </Container>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <Col lg="9">
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    challengesData: state.appData.challengesData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchChallenges: (request) => dispatch(getChallenges(request)),
    updateChallengeAction: (request) => dispatch(putChallengeAction(request))
  }
}

export default connect(
mapStateToProps,
mapDispatchToProps,
)(ChallengeList)
