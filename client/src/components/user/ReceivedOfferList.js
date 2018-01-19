import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Col, Modal, Button } from 'react-bootstrap';
import AddressWidget from './AddressWidget';
import ReceivedOfferCard from './ReceivedOfferCard';
import * as actions from '../../actions';

class ReceivedOfferList extends Component {
  constructor(...args) {
    super(...args);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = { showModal: false };
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  handleShow() {
    this.setState({ showModal: true });
    //console.log(this.state);
  }

  renderItems() {
    //console.log(this.props.auth);
    //const itemWanted = this.props.itemWanted;
    //console.log(this.props.offersReceived);
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
            handleAccept={() => {
              this.props.acceptOffer(offerObj);
              this.handleShow();
              //console.log(this.props.auth);
            }}
          />
        </Col>
      );
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <div>{this.renderItems()}</div>
        </Grid>

        <Modal
          {...this.props}
          show={this.state.showModal}
          onHide={this.handleClose}
          bsSize="large"
          aria-labelledby="contained-modal-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddressWidget />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps({ offersReceived, offersAccepted, auth }) {
  return { offersReceived, offersAccepted, auth };
}

export default connect(mapStateToProps, actions)(ReceivedOfferList);
