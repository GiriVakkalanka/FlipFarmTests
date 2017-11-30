import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col } from 'react-bootstrap';
import UserItemCard from './UserItemCard';
import * as actions from '../../actions';

class UserItemInventory extends Component {
  renderItems() {
    //console.log(this.props.auth);
    //const itemWanted = this.props.itemWanted;
    return this.props.userItems.map(item => {
      return (
        <Col xs={12} sm={6} md={4} key={item._id}>
          <UserItemCard
            _id={item._id}
            src={item.picture}
            name={item.name}
            description={item.description}
            buttonLabel="Edit Item"
          />
        </Col>
      );
    });
  }
  render() {
    return (
      <Grid>
        <div>{this.renderItems()}</div>
      </Grid>
    );
  }
}

function mapStateToProps({ items, userItems, auth }) {
  return { items, userItems, auth };
}

export default connect(mapStateToProps, actions)(UserItemInventory);
