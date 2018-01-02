import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import UserItemInventory from './UserItemInventory';
import ReceivedOfferList from './ReceivedOfferList';

class UserPage extends Component {
  componentDidMount() {
    this.props.fetchUserItems();
    this.props.fetchReceivedOffers();
  }

  render() {
    //console.log(this.props.userItems);
    return (
      <div>
        <UserItemInventory />
        <ReceivedOfferList />;
      </div>
    );
  }
}

function mapStateToProps({ userItems }) {
  return { userItems };
}

export default connect(mapStateToProps, actions)(UserPage);
