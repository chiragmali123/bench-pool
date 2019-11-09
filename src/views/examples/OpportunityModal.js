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
import { connect } from 'react-redux';
// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
} from "reactstrap";
import { saveOpportunities } from "Actions/Actions";

class OpportunityModal extends React.Component {
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
  state = {
    projectName: '',
    summary: '',
    description: '',
    salePerson: '',
    teamLead: ''
  }

  onChangeValue = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  onSave = () => {
    // call API
    const body = {...this.state, "userEmail": "chirag.mali@synerzip.com"};
    this.props.saveOpportunities(body);
    this.toggleModal("defaultModal");
  }
  render() {
    return (
      <>
        <React.Fragment>
          <Button
            className="mt-4"
            color="primary"
            type="button"
            onClick={() => this.toggleModal("defaultModal")}>
            Create
            </Button>
          <Modal
            className="modal-dialog-centered"
            isOpen={this.state.defaultModal}
            toggle={() => this.toggleModal("defaultModal")}
          >
            <div className="modal-header">
              <h6 className="modal-title" id="modal-title-default">
                Create an opportunity.
                </h6>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal("defaultModal")}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="modal-body">
              <Form role="form" autoComplete={"false"}>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-laptop" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Project Name" type="text" onChange={this.onChangeValue} name="projectName" value={this.state.projectName} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-align-left-2" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Summary" type="text" onChange={this.onChangeValue} name="summary" value={this.state.summary}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-bullet-list-67" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Description" type="text" onChange={this.onChangeValue} name="description" value={this.state.description}/>
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Sales Person" type="text" onChange={this.onChangeValue} name="salePerson" value={this.state.salePerson} />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-male" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Team Lead" type="text" onChange={this.onChangeValue} name="teamLead" value={this.state.teamLead} />
                  </InputGroup>
                </FormGroup>
              </Form>
            </div>
            <div className="modal-footer">
              <Button color="primary" type="button" onClick={this.onSave}>
                Create
                </Button>
              <Button
                className="ml-auto"
                color="link"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal("defaultModal")}
              >
                Close
                </Button>
            </div>
          </Modal>
        </React.Fragment>
      </>
    );
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
  saveOpportunities: body => dispatch(saveOpportunities(body))
});

export default connect(mapStateToProps, mapDispatchToProps)(OpportunityModal);
