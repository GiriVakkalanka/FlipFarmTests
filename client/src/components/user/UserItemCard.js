import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Thumbnail, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';

class UserItemCard extends Component {
  render() {
    //console.log(this.props);
    const buttonLabel = this.props.buttonLabel;
    return (
      <Row>
        <Col xs={12}>
          <Thumbnail src={this.props.src} alt="item">
            <h3>{this.props.name}</h3>
            <p>{this.props.description}</p>
            <p>
              <Link to={`/`}>
                <Button
                  onClick={() => {
                    console.log('button');
                  }}
                  bsStyle="primary"
                >
                  {`${buttonLabel}`}
                </Button>
              </Link>
            </p>
          </Thumbnail>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ items, loadedItem }) {
  return { items };
}

export default connect(mapStateToProps, actions)(UserItemCard);
