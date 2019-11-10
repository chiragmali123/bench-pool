import React from "react";
// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import { authenticateUser } from "Actions/AuthenticationAction";
import { dispactSignInAction } from "Actions/AuthenticationAction";

class MyAccount extends React.Component {
  render() {
    return (
      <>
        <UncontrolledDropdown group>
          <DropdownToggle caret color="secondary">
            Hi User!
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem  nav to="/profile-page" tag={Link} >
              My Profile
            </DropdownItem>
            <DropdownItem  onClick={ (e) => {
              localStorage.removeItem('sessionInfo');this.props.signOut({})}} >
              Sign out
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </>
    );
  }
}
function mapStateToProps(state) {
    return {
      userEmail: state.appData.userEmail
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      userAuthenticate: (request) => dispatch(authenticateUser(request)),
      signOut: (request) => dispatch(dispactSignInAction(request))
    }
  }
  
  export default connect(
  mapStateToProps,
  mapDispatchToProps,
  )(MyAccount);