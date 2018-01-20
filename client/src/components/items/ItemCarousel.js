import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'react-bootstrap';
import ItemCard from './ItemCard';
import * as actions from '../../actions';

class ItemCarousel extends Component {
  constructor(...args) {
    super(...args);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  componentDidMount() {
    this.props.fetchAllItems();
    //console.log(this.props.items);
    //this.props.fetchUserItems();
  }

  renderItems() {
    //console.log(this.props.items);
    return this.props.items.map(item => {
      return (
        <Carousel.Item key={item._id}>
          <div>
            <ItemCard
              _id={item._id}
              src={item.picture}
              name={item.name}
              description={item.description}
              handleOffer={() => this.props.loadItem(item._id)}
              buttonLabel="Make Offer"
            />
          </div>
        </Carousel.Item>
      );
    });
  }
  render() {
    return (
      <Carousel
        activeIndex={this.state.index}
        direction={this.state.direction}
        onSelect={this.handleSelect}
      >
        {this.renderItems()}
      </Carousel>
    );
  }
}

function mapStateToProps({ items, userItems }) {
  return { items, userItems };
}

export default connect(mapStateToProps, actions)(ItemCarousel);
