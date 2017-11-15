import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col } from 'react-bootstrap';
import ItemCard from './ItemCard';
import * as actions from '../../actions';

class ItemGallery extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
    //this.props.fetchUserItems();
  }

  renderItems() {
    return this.props.items.map(item => {
      return (
        <Col xs={12} key={item._id}>
          <ItemCard
            _id={item._id}
            src={item.picture}
            name={item.name}
            description={item.description}
            handleOffer={() => this.props.loadItem(item._id)}
            buttonLabel="Make Offer"
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

function mapStateToProps({ items, userItems }) {
  return { items, userItems };
}

export default connect(mapStateToProps, actions)(ItemGallery);
