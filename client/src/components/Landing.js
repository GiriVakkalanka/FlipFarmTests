import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Landing extends Component {
  componentDidMount() {
    this.props.fetchAllItems();
    this.props.fetchUserItems();
    //console.log(this.props.items);
    //console.log(this.props.userItems);
  }

  render() {
    //console.log(this.props.items);
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Boilerplate!</h1>
        Good starting point.
      </div>
    );
  }
}

function mapStateToProps({ items, userItems }) {
  return { items, userItems };
}

export default connect(mapStateToProps, actions)(Landing);
