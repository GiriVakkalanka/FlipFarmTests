import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import * as actions from '../../actions';

class ReceivedOfferCard extends Component {
  render() {
    return (
      <Panel>
        <h3>{this.props.name}</h3>
        <p>{this.props._itemOffered}</p>
        <p>{this.props._offerFrom}</p>
        <p>
          <Link to={`/`}>
            <Button
              onClick={() => {
                console.log('button');
              }}
              bsStyle="primary"
            >
              Accept Offer
            </Button>
          </Link>
        </p>
      </Panel>
    );
  }
}

export default ReceivedOfferCard;