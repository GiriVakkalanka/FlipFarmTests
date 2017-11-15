import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col } from 'react-bootstrap';
import ItemCard from './ItemCard';
import * as actions from '../../actions';

class ItemInventory extends Component {
  renderItems() {
    console.log(this.props.auth);
    const itemWanted = this.props.itemWanted;
    return this.props.userItems.map(item => {
      const offer = {
        _offerTo: itemWanted._user,
        _offerFrom: this.props.auth._id,
        _itemOffered: item._id,
        _itemWanted: itemWanted._id
      };
      return (
        <Col xs={12} sm={6} md={4} key={item._id}>
          <ItemCard
            _id={item._id}
            src={item.picture}
            name={item.name}
            description={item.description}
            handleOffer={() => this.props.makeOffer(offer)}
            buttonLabel="Offer Item"
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

export default connect(mapStateToProps, actions)(ItemInventory);
