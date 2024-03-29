import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemCard from './ItemCard';
import ItemInventory from './ItemInventory';
import * as actions from '../../actions';
//import { Row, Col, Thumbnail, Button } from 'react-bootstrap';

class ItemPage extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
    this.props.fetchUserItems();
    //console.log('component mouted');
  }
  render() {
    const i = this.props.items.findIndex(
      item => item._id === this.props.loadedItem
    );
    //console.log(i);
    const item = this.props.items[i];
    return (
      <div>
        <ItemCard
          _id={item._id}
          src={item.picture}
          name={item.name}
          description={item.description}
          onOffer={() => this.props.loadItem(item._id)}
        />
        <div>
          <ItemInventory itemWanted={this.props.items[i]} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ items, loadedItem }) {
  return { items, loadedItem };
}

export default connect(mapStateToProps, actions)(ItemPage);
