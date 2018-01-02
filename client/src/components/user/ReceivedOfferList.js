import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col } from 'react-bootstrap';
import ReceivedOfferCard from './ReceivedOfferCard';
import * as actions from '../../actions';

class ReceivedOfferList extends Component {
  renderItems() {
    //console.log(this.props.auth);
    //const itemWanted = this.props.itemWanted;
    return this.props.offersReceived.map(offer => {
      return (
        <Col xs={12} key={offer._id}>
          <ReceivedOfferCard
            name={offer.itemWanted.name}
            _itemOffered={offer.itemOffered.name}
            _offerFrom={offer.itemOffered._id}
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

function mapStateToProps({ offersReceived, auth }) {
  return { offersReceived, auth };
}

export default connect(mapStateToProps, actions)(ReceivedOfferList);
