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
import { saveChallenges } from "Actions/Actions";

class ChallengeModal extends React.Component {
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };

  state = {
    challengeName: '',
    summary: '',
    description: '',
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
    this.props.saveChallenges(body);
    this.toggleModal("defaultModal");
  }

  render() {
    return (
      <>
        <React.Fragment>
          <Button
            className="mt-4"
            color="success"
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
                  Create a Challenge.
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
                <Form role="form">
                  <FormGroup>
                    <InputGroup className="input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-laptop" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Challenge Name" type="text" onChange={this.onChangeValue} name="challengeName" value={this.state.challengeName}/>
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
                </Form>
              </div>
              <div className="modal-footer">
                <Button color="success" type="button" onClick={this.onSave}>
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
  saveChallenges: body => dispatch(saveChallenges(body))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeModal);