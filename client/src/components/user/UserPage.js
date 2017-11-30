import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import UserItemInventory from './UserItemInventory';

class UserPage extends Component {
  componentDidMount() {
    this.props.fetchUserItems();
  }

  render() {
    //console.log(this.props.userItems);
    return <UserItemInventory />;
  }
}

function mapStateToProps({ userItems }) {
  return { userItems };
}

export default connect(mapStateToProps, actions)(UserPage);
