import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Header from './Header';
import Dashboard from './Dashboard';
//import SurveyNew from './surveys/SurveyNew';
import ItemNew from './items/ItemNew';
import ItemPage from './items/ItemPage';
import UserPage from './user/UserPage';
import AddressWidget from './user/AddressWidget';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/items" component={Dashboard} />
              <Route path="/items/new" component={ItemNew} />
              <Route path="/offer/:itemID" component={ItemPage} />
              <Route path="/user" component={UserPage} />
              <Route path="/address" component={AddressWidget} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
//<Route exact path="/items/:itemID" component={ItemPage} />
