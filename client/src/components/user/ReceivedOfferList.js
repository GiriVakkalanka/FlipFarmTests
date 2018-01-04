import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col } from 'react-bootstrap';
import ReceivedOfferCard from './ReceivedOfferCard';
import * as actions from '../../actions';

class ReceivedOfferList extends Component {
  renderItems() {
    //console.log(this.props.auth);
    //const itemWanted = this.props.itemWanted;
    console.log(this.props.offersReceived);
    return this.props.offersReceived.map(offer => {
      const keyNum = Math.random();
      const offerObj = {
        offerID: offer.offerID,
        itemWanted: offer.itemWanted._id,
        itemOffered: offer.itemOffered._id
      };
      return (
        <Col xs={12} key={keyNum}>
          <ReceivedOfferCard
            name={offer.itemWanted.name}
            _itemOffered={offer.itemOffered.name}
            _offerFrom={offer.itemOffered._id}
            handleAccept={() => this.props.acceptOffer(offerObj)}
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

function mapStateToProps({ offersReceived, offersAccepted, auth }) {
  return { offersReceived, offersAccepted, auth };
}

export default connect(mapStateToProps, actions)(ReceivedOfferList);
