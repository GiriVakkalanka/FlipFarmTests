import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
//import * as actions from '../../actions';

class ReceivedOfferCard extends Component {
  render() {
    return (
      <div>
        <Panel>
          <h3>{this.props.name}</h3>
          <p>{this.props._itemOffered}</p>
          <p>{this.props._offerFrom}</p>
          <p>
            <Button
              onClick={() => {
                this.props.handleAccept();
                //this.handleShow();
                //console.log(this.state);
              }}
              bsStyle="primary"
            >
              Accept Offer
            </Button>
          </p>
        </Panel>
      </div>
    );
  }
}

export default ReceivedOfferCard;
