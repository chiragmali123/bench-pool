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
import { Badge } from "reactstrap";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
//import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import SimpleFooter from "components/Footers/CardsFooter.jsx";
import { checkValueNotEmpty } from "utils";
import {connect} from 'react-redux';
import { getPool } from "Actions/Actions";
import { isArrayEmpty } from "utils";
import { getChallenges } from "Actions/Actions";
import { getOpportunities } from "Actions/Actions";
class PoolList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      userSummaryMap:this.getSummary(props)
    }
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  getSummary = (props) => {
    const opportunityMap = { interestedUsers: {}, notInterestedUsers: {}, approvedUsers: {} }
    if (props.opportunitiesData) {
      props.opportunitiesData.map(opportunity => {
        let interested = !isArrayEmpty(opportunity.interestedUsers) ? opportunity.interestedUsers : [];;
        let notInterested = !isArrayEmpty(opportunity.notInterestedUsers) ? opportunity.notInterestedUsers : [];
        let approved = !isArrayEmpty(opportunity.approvedUsers) ? opportunity.approvedUsers : [];
        interested.map(user => {
          let count = opportunityMap['interestedUsers'][user.guid];
          if (count) {
            opportunityMap['interestedUsers'][user.guid] = ++count;
          } else {
            opportunityMap['interestedUsers'][user.guid] = 1;
          }
        });
        notInterested.map(user => {
          let count = opportunityMap['notInterestedUsers'][user.guid];

          if (count) {
            opportunityMap['notInterestedUsers'][user.guid] = ++count;
          } else {
            opportunityMap['notInterestedUsers'][user.guid] = 1;
          }
        });
        approved.map(user => {
          let count = opportunityMap['approvedUsers'][user.guid];

          if (count) {
            opportunityMap['approvedUsers'][user.guid] = ++count;
          } else {
            opportunityMap['approvedUsers'][user.guid] = 1;
          }
        });
      })
    }

    const challengeMap = { inProgress: {}, submitted: {}, completed: {} }
    if (props.challengesData) {
      props.challengesData.map(challenge => {
        let inProgress = !isArrayEmpty(challenge.interestedUsers) ? challenge.interestedUsers : [];;
        let submitted = !isArrayEmpty(challenge.notInterestedUsers) ? challenge.notInterestedUsers : [];
        let completed = !isArrayEmpty(challenge.approvedUsers) ? challenge.approvedUsers : [];
        inProgress.map(user => {
          let count = challengeMap['inProgress'][user.guid];
          if (count) {
            challengeMap['inProgress'][user.guid] = ++count;
          } else {
            challengeMap['inProgress'][user.guid] = 1;
          }
        });
        submitted.map(user => {
          let count = challengeMap['submitted'][user.guid];

          if (count) {
            challengeMap['submitted'][user.guid] = ++count;
          } else {
            challengeMap['submitted'][user.guid] = 1;
          }
        });
        completed.map(user => {
          let count = challengeMap['completed'][user.guid];

          if (count) {
            challengeMap['completed'][user.guid] = ++count;
          } else {
            challengeMap['completed'][user.guid] = 1;
          }
        });
      })
    }
    //const userMap = JSON.parse(JSON.stringify(this.state.userSummaryMap));
    const userSummaryMap = [];
    props.poolData.map(user => {
      let interestedCount = opportunityMap['interestedUsers'][user.guid];
      let notInterestedCount = opportunityMap['notInterestedUsers'][user.guid];
      let approvedCount = opportunityMap['approvedUsers'][user.guid];
      let inProgressCount = challengeMap['inProgress'][user.guid];
      let submittedCount = challengeMap['submitted'][user.guid];
      let completedCount = challengeMap['completed'][user.guid];
      // console.log(` name: ${user.firstName}`);
      // console.log(` interested: ${interestedCount}`);
      // console.log(` notInterested: ${notInterestedCount}`);
      // console.log(` approved: ${approvedCount}`);
      userSummaryMap.push({
        user: user,
        opportunity: { interested: interestedCount, notInterested: notInterestedCount, approved: approvedCount },
        challenge: { inProgress: inProgressCount, submitted: submittedCount, completed: completedCount }
      })
    })
    return userSummaryMap;
  }

  componentWillMount() {
    this.props.fetchChallenges({});
    this.props.fetchOpportunities({});
    this.props.fetchPool({});
  }

  componentWillReceiveProps(nextProps) {
    
    const userSummaryMap = this.getSummary(nextProps);

    if (JSON.stringify(this.state.userSummaryMap) !== JSON.stringify(userSummaryMap)) {
      this.setState({ userSummaryMap });
    }
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
                       <b>Employee Pool Statistics</b>
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
                      <Col className="col-sm-2">
                        <span>Name</span>
                      </Col>
                      <Col className="col-sm-5">
                        <span>Opportunities</span>
                      </Col>
                      <Col className="col-sm-5">
                        <span>Challenges</span>
                      </Col>
                    </Row>
                    {(!isArrayEmpty(this.state.userSummaryMap)) && this.state.userSummaryMap.map(userSummary => {
                      
                      return <Row className="row summary-row">
                        <Col className="col-sm-2">
                          <span>{`${userSummary.user.firstName?userSummary.user.firstName:''} ${userSummary.user.lastName?userSummary.user.lastName:''}`}</span>
                        </Col>
                        <Col className="col-sm-5">
                          <Badge color="success" className="skill-badge" pill>
                            Interested : {`${userSummary.opportunity.interested ? userSummary.opportunity.interested : 0}`}
                          </Badge>
                          <Badge color="warning" className="skill-badge" pill>
                            Not Interested : {`${userSummary.opportunity.notInterested ? userSummary.opportunity.notInterested : 0}`}
                          </Badge>
                          <Badge color="primary" className="skill-badge" pill>
                            Approved : {`${userSummary.opportunity.approved ? userSummary.opportunity.approved : 0}`}
                          </Badge>
                        </Col>
                        <Col className="col-sm-5">
                          <Badge color="success" className="skill-badge" pill>
                            In Progress : {`${userSummary.challenge.inProgress ? userSummary.opportunity.inProgress : 0}`}
                          </Badge>
                          <Badge color="default" className="skill-badge" pill>
                            Submitted : {`${userSummary.challenge.submitted ? userSummary.opportunity.submitted : 0}`}
                          </Badge>
                          <Badge color="primary" className="skill-badge" pill>
                            Completed : {`${userSummary.challenge.completed ? userSummary.opportunity.completed : 0}`}
                          </Badge>
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
    poolData: state.appData.poolData,
    challengesData: state.appData.challengesData,
    opportunitiesData: state.appData.opportunitiesData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPool: (request) => dispatch(getPool(request)),
    fetchOpportunities: (request) => dispatch(getOpportunities(request)),
    fetchChallenges: (request) => dispatch(getChallenges(request))
  }
}

export default connect(
mapStateToProps,
mapDispatchToProps,
)(PoolList)
