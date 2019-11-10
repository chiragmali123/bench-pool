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
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
//import SimpleFooter from "components/Footers/SimpleFooter.jsx";
import SimpleFooter from "components/Footers/CardsFooter.jsx";
import { connect } from 'react-redux';
import { getOpportunities } from "Actions/Actions";
import { checkValueNotEmpty } from "utils";
import { isArrayEmpty } from "utils";
import { putOpportunityAction } from "Actions/OpportunityAction";
class OpportunityList extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  componentWillMount() {
    this.props.fetchOpportunities({});
  }

  getStatus = (cell, row, opportunitiesDataList) => {
    const opportunityData = opportunitiesDataList.find(x => x.guid === row.guid);
    const interestedUsers = opportunityData.interestedUsers;
    const interestedUsersId = interestedUsers ? interestedUsers.map(x => x.employeeId) : [];
    const approvedUsers = opportunityData.approvedUsers;
    const approvedUsersId = approvedUsers ? approvedUsers.map(x => x.employeeId) : [];
    const notInterestedUsers = opportunityData.notInterestedUsers;
    const notInterestedUsersId = notInterestedUsers ? notInterestedUsers.map(x => x.employeeId) : [];

    let status = ''
    if (interestedUsersId.includes(cell)) {
      status = 'INTERESTED';
    }
    if (notInterestedUsersId.includes(cell)) {
      status = 'NOT INTERESTED';
    }
    if (approvedUsersId.includes(cell)) {
      status = 'APPROVED';
    }
    return status;
  }

  getAction = (cell, row, opportunitiesDataList) => {
    const opportunityData = opportunitiesDataList.find(x => x.guid === row.guid);
    const interestedUsers = opportunityData.interestedUsers;
    const interestedUsersId = interestedUsers ? interestedUsers.map(x => x.employeeId) : [];
    const approvedUsers = opportunityData.approvedUsers;
    const approvedUsersId = approvedUsers ? approvedUsers.map(x => x.employeeId) : [];
    const notInterestedUsers = opportunityData.notInterestedUsers;
    const notInterestedUsersId = notInterestedUsers ? notInterestedUsers.map(x => x.employeeId) : [];
    let status = ''
    if (interestedUsersId.includes(cell)) {
      status = 'INTERESTED';
    }
    if (notInterestedUsersId.includes(cell)) {
      status = 'NOT INTERESTED';
    }
    if (approvedUsersId.includes(cell)) {
      status = 'APPROVED';
    }

    if (status === 'INTERESTED') {
      return (
        <Button
          color="primary"
          href="#pablo"
          onClick={e => e.preventDefault()}>
          Approve
        </Button>
      );
    }

    return null;
  }

  expandComponent = (row) => {
    const opportunityData = row;
    const interestedUsers = opportunityData.interestedUsers;
    const interestedUsersId = interestedUsers ? interestedUsers.map(x => x.employeeId) : [];
    const approvedUsers = opportunityData.approvedUsers;
    const approvedUsersID = approvedUsers ? approvedUsers.map(x => x.employeeId) : [];
    const notInterestedUsers = opportunityData.notInterestedUsers;
    const notInterestedUsersId = notInterestedUsers ? notInterestedUsers.map(x => x.employeeId) : [];

    let allUsers = interestedUsers ? interestedUsers : [];
    if (approvedUsers) {
      approvedUsers.forEach(x => {
        if (!interestedUsersId.includes(x.employeeId)) {
          allUsers.push(x);
        }
      });
    }
    if (notInterestedUsers) {
      notInterestedUsers.forEach(x => {
        if (!interestedUsersId.includes(x.employeeId) && !approvedUsersID.includes(x.employeeId)) {
          allUsers.push(x);
        }
      });
    }

    let jsx = ''
    if (allUsers && allUsers.length > 0) {
      jsx = (
        <div>
          <BootstrapTable data={(allUsers && allUsers.length > 0) ? allUsers : null} version='4'>
            <TableHeaderColumn isKey dataField='firstName'>Name</TableHeaderColumn>
            <TableHeaderColumn dataField='employeeId' dataFormat={(cell) => this.getStatus(cell, row, this.props.opportunitiesData)}>Status</TableHeaderColumn>
            <TableHeaderColumn dataField='employeeId' dataFormat={(cell) => this.getAction(cell, row, this.props.opportunitiesData)}>Action</TableHeaderColumn>
          </BootstrapTable>
        </div>)
    } else {
      jsx = (<div>None user accepted this opportunity</div>)
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
              <large>Technologies:</large>
            </div>
            <div className='col-sm-9' style={{ 'white-space': 'normal' }}>
              <large>{row.technologies && row.technologies.join(', ')}</large>
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-sm-3'>
              <large>Number of Days:</large>
            </div>
            <div className='col-sm-9' style={{ 'white-space': 'normal' }}>
              <large>{row.durationInNumberOfDays}</large>
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


  updateAction = (userEmail, action) => {
    this.props.updateOpportunityAction({ action, userEmail })
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
                       <b>Employee Opportunities</b>
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
                    {/* <Row className="row summary-header-row">
                      <Col className="col-sm-5">
                        <span>Project Name</span>
                      </Col>
                      <Col className="col-sm-7">
                        <span>Project Summary</span>
                      </Col>
                    </Row> */}
                    {/* {this.props.opportunitiesData && this.props.opportunitiesData.map(opportunity => {
                      if (!checkValueNotEmpty(opportunity.projectName)) {
                        return null;
                      }
                      return <Row className="row summary-row">
                        <Col className="col-sm-5">
                          <span>{opportunity.projectName}</span>
                        </Col>
                        <Col className="col-sm-7">
                          <span>{opportunity.summary}</span>
                        </Col>
                      </Row>;
                    })} */}
                    <div>
                      <BootstrapTable data={JSON.parse(JSON.stringify(this.props.opportunitiesData))} version='4'
                        expandComponent={this.expandComponent}
                        expandableRow={() => { return true }}
                        expandColumnOptions={{
                          expandColumnVisible: true,
                          expandColumnComponent: this.expandColumnComponent,
                        }}>
                        <TableHeaderColumn isKey dataField='projectName'>Opportunity Name</TableHeaderColumn>
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
    opportunitiesData: state.appData.opportunitiesData
  }
}

function mapDispatchToProps(dispatch) {
    return {
      fetchOpportunities: (request) => dispatch(getOpportunities(request)),
      updateOpportunityAction: (request) => dispatch(putOpportunityAction(request))
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OpportunityList)