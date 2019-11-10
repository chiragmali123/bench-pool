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
import { Button, Card, Container, Row, Col, Collapse, CardBody, CardTitle } from "reactstrap";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
//import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import SimpleFooter from "components/Footers/CardsFooter.jsx";
import { connect } from 'react-redux';
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

  state={
    challengesData: []
  }

  componentWillMount() {
    this.props.fetchChallenges({});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      challengesData: nextProps.challengesData
    })
  }

  getStatus = (cell, row, challengesDataList) => {
    const challengesData = challengesDataList.find(x => x.guid === row.guid);
    const completedByUsers = challengesData.completedByUsers;
    const completedByUsersId = completedByUsers ? completedByUsers.map(x => x.employeeId) : [];
    const startedByUsers = challengesData.startedByUsers;
    const startedByUsersId = startedByUsers ? startedByUsers.map(x => x.employeeId) : [];
    const submittedByUsers = challengesData.submittedByUsers;
    const submittedByUsersId = submittedByUsers ? submittedByUsers.map(x => x.employeeId) : [];
    let status = '';
    if (startedByUsersId.includes(cell)) {
      status = 'IN_PROGRESS';
    }
    if (completedByUsersId.includes(cell)) {
      status = 'COMPLETED';
    }
    if (submittedByUsersId.includes(cell)) {
      status = 'SUBMITTED';
    }
    return status;
  }

  getAction = (cell, row, challengesDataList) => {
    const challengesData = challengesDataList.find(x => x.guid === row.guid);
    const completedByUsers = challengesData.completedByUsers;
    const completedByUsersId = completedByUsers ? completedByUsers.map(x => x.employeeId) : [];
    const startedByUsers = challengesData.startedByUsers;
    const startedByUsersId = startedByUsers ? startedByUsers.map(x => x.employeeId) : [];
    const submittedByUsers = challengesData.submittedByUsers;
    const submittedByUsersId = submittedByUsers ? submittedByUsers.map(x => x.employeeId) : [];
    let status = '';
    if (startedByUsersId.includes(cell)) {
      status = 'IN_PROGRESS';
    }
    
    if (completedByUsersId.includes(cell)) {
      status = 'COMPLETED';
    }
    if (submittedByUsersId.includes(cell)) {
      status = 'SUBMITTED';
    }
    let allUsers = completedByUsers ? completedByUsers : [];
    if (startedByUsers) {
      startedByUsers.forEach(x => {
        if (!completedByUsersId.includes(x.employeeId)) {
          allUsers.push(x);
        }
      });
    }
    if (submittedByUsers) {
      submittedByUsers.forEach(x => {
        if (!completedByUsersId.includes(x.employeeId) && !startedByUsersId.includes(x.employeeId)) {
          allUsers.push(x);
        }
      });
    }
    const user = allUsers.find(x => x.employeeId === cell);

    if (status === 'SUBMITTED') {
      return (
        <Button
          color="primary"
          onClick={() => this.updateAction(user.email, 'COMPLETED', row.guid)}>
          Complete
        </Button>
      );
    }

    return null;
  }

  expandComponent = (row) => {
    const challengesData = { ...row };
    const completedByUsers = challengesData.completedByUsers;
    const completedByUsersId = completedByUsers ? completedByUsers.map(x => x.employeeId) : [];
    const startedByUsers = challengesData.startedByUsers;
    const startedByUsersId = startedByUsers ? startedByUsers.map(x => x.employeeId) : [];
    const submittedByUsers = challengesData.submittedByUsers;
    const submittedByUsersId = submittedByUsers ? submittedByUsers.map(x => x.employeeId) : [];

    let allUsers = completedByUsers ? completedByUsers : [];
    if (startedByUsers) {
      startedByUsers.forEach(x => {
        if (!completedByUsersId.includes(x.employeeId)) {
          allUsers.push(x);
        }
      });
    }
    if (submittedByUsers) {
      submittedByUsers.forEach(x => {
        if (!completedByUsersId.includes(x.employeeId) && !startedByUsersId.includes(x.employeeId)) {
          allUsers.push(x);
        }
      });
    }

    let jsx = '';
    if(allUsers && allUsers.length > 0) {
      jsx = (
        <div>
          <BootstrapTable data={(allUsers && allUsers.length > 0) ? allUsers : null} version='4'>
            <TableHeaderColumn isKey dataField='firstName'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='employeeId' dataFormat={(cell) => this.getStatus(cell, challengesData, this.props.challengesData)}>Status</TableHeaderColumn>
            <TableHeaderColumn dataField='employeeId' dataFormat={(cell) => this.getAction(cell, challengesData, this.props.challengesData)}>Action</TableHeaderColumn>
          </BootstrapTable>
        </div>
      )
    } else {
      jsx = (
        <div>None user accepted this challenge</div>
      )
    }

    let details = (
      <div>
        <section className='mb-3'>
          <div className='row mb-2'>
            <div className='col-sm-3'>
              <large>Description:</large>
            </div>
            <div className='col-sm-9' style={{ 'white-space': 'normal' }}>
              <large>{row.description}</large>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-sm-3'>
              <large>Created by:</large>
            </div>
            <div className='col-sm-9' style={{ 'white-space': 'normal' }}>
              <large>{row.addedByUser.firstName + ' ' + row.addedByUser.lastName}</large>
            </div>
          </div>
        </section>
        {jsx}
      </div>
    );
    return details;
  }

  expandColumnComponent = ({ isExpandableRow, isExpanded }) => {
    let content = '';

    if (isExpandableRow) {
      content = (isExpanded ? <i class="fa fa-minus" aria-hidden="true"></i> : <i class="fa fa-plus" aria-hidden="true"></i>);
    } else {
      content = ' ';
    }
    return (
      <div> {content} </div>
    );
    }
  updateAction = (userEmail, action, guid) => {
    this.props.updateChallengeAction(guid, { action, userEmail })
  }

  render() {
    console.log(this.props.challengesData)
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
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                      </Col>
                    </Row>
                  </div>
                  <Container>
                    <div>
                      <BootstrapTable data={JSON.parse(JSON.stringify([ ...this.props.challengesData]))} version='4'
                        expandComponent={this.expandComponent}
                        expandableRow={() => { return true }}
                        expandColumnOptions={{
                          expandColumnVisible: true,
                          expandColumnComponent: this.expandColumnComponent,
                        }}>
                        <TableHeaderColumn isKey dataField='name'>Challenge Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='summary'>Summary</TableHeaderColumn>
                      </BootstrapTable>
                    </div>
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
    updateChallengeAction: (guid, request) => dispatch(putChallengeAction(guid, request))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChallengeList)
