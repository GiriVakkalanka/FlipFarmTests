import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import ItemCard from './ItemCard';
import * as actions from '../../actions';

class ItemGallery extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
  }

  renderItems() {
    return this.props.items.map(item => {
      return (
        <div key={item._id}>
          <ItemCard
            _id={item._id}
            src={item.picture}
            name={item.name}
            description={item.description}
            handleOffer={() => this.props.loadItem(item._id)}
          />
        </div>
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

function mapStateToProps({ items }) {
  return { items };
}

export default connect(mapStateToProps, actions)(ItemGallery);
