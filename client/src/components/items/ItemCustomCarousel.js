import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import ItemCard from './ItemCard';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import * as actions from '../../actions';

class ItemCustomCarousel extends Component {
  constructor(...args) {
    super(...args);

    this.handleSelect = this.handleNext.bind(this);
    this.handleSelect = this.handleNext.bind(this);

    this.state = {
      index: 0
    };
  }

  handleNext() {
    let indexState = this.state.index;
    indexState++;
    this.setState({
      index: indexState
    });
  }

  handlePrev() {
    let indexState = this.state.index;
    indexState--;
    this.setState({
      index: indexState
    });
  }

  componentDidMount() {
    this.props.fetchAllItems();
    //console.log(this.props.items);
    //this.props.fetchUserItems();
  }

  renderItems() {
    //console.log(this.props.items);
    const carouselItems = this.props.items.map(item => {
      return (
        <ItemCard
          key={item._id}
          _id={item._id}
          src={item.picture}
          name={item.name}
          description={item.description}
          handleOffer={() => this.props.loadItem(item._id)}
          buttonLabel="Make Offer"
        />
      );
    });

    let carouselItem = carouselItems[this.state.index];

    return carouselItem;
  }
  render() {
    return (
      <div>
        {this.renderItems()}
        <Button
          onClick={() => {
            this.handlePrev();
            //console.log(this.props.loadedItem);
          }}
          bsStyle="primary"
        >
          Prev
        </Button>

        <Button
          onClick={() => {
            this.handleNext();
            //console.log(this.props.loadedItem);
          }}
          bsStyle="primary"
        >
          Next
        </Button>
      </div>
    );
  }
}

function mapStateToProps({ items, userItems }) {
  return { items, userItems };
}

export default connect(mapStateToProps, actions)(ItemCustomCarousel);
