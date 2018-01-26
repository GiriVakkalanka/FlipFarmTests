import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Button, Tab, Tabs } from 'react-bootstrap';
import * as actions from '../../actions';

class UserDashboard extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      navKey: 1
    };
  }

  componentDidMount() {
    this.props.fetchUserItems();
    this.props.fetchSentOffers();
    this.props.fetchReceivedOffers();
  }

  handleSelect(selectedKey) {
	   this.setState({navKey: selectedKey})
}

  render() {

    return (
      <div>
        <Jumbotron bsStyle="primary">
      		<h1>Hello, world!</h1>
      		<p>
      			This is a simple hero unit, a simple jumbotron-style component for calling
      			extra attention to featured content or information.
      		</p>
      		<p>
      			<Button>Learn more</Button>
      		</p>
      	</Jumbotron>

        <Tabs defaultActiveKey={this.state.navKey} id="uncontrolled-tab-example">
        	<Tab eventKey={1} title="Tab 1">
        		Tab 1 content
        	</Tab>
        	<Tab eventKey={2} title="Tab 2">
        		Tab 2 content
        	</Tab>
        	<Tab eventKey={3} title="Tab 3" disabled>
        		Tab 3 content
        	</Tab>
        </Tabs>;
      </div>
    );
  }
}

function mapStateToProps({ userItems, offersSent, offersReceived }) {
  return { userItems, offersSent, offersReceived };
}

export default connect(mapStateToProps, actions)(UserDashboard);
