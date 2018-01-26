import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
//import Payments from './Payments';

class BootstrapHeader extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <NavItem eventKey={1} href="/auth/google">
            Login With Google
          </NavItem>
        );
      default:
        return [
          <NavItem eventKey={2} key="2" href="/api/logout">
            Logout
          </NavItem>
        ];
    }
  }

  render() {
    //console.log(this.props);
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Nav pullRight>
          {this.renderContent()}
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  //console.log({ auth });
  return { auth };
}

export default connect(mapStateToProps)(BootstrapHeader);
