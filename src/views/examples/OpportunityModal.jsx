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
  Button,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  Row,
  Col
} from "reactstrap";

class OpportunityModal extends React.Component {
  state = {};
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state]
    });
  };
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
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-laptop" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Project Name" type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-align-left-2" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Summary" type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-bullet-list-67" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Description" type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-user" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Sales Person" type="text" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="fa fa-male" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Team Lead" type="text" />
                  </InputGroup>
                </FormGroup>
              </Form>
            </div>
            <div className="modal-footer">
              <Button color="primary" type="button">
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

export default OpportunityModal;
