import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import AddressForm from './AddressForm';
import AddressFormReview from './AddressFormReview'
//import ItemFormReview from './ItemFormReview';

class AddressWidget extends Component {
  state = { showAddressReview: false };

  renderContent() {
    if (this.state.showAddressReview) {
      return (
        <AddressFormReview
          onCancel={() => this.setState({ showAddressReview: false })}
        />
      );
    }

    return (
      <AddressForm
        onAddressSubmit={() => {
          this.setState({ showAddressReview: true });
          //console.log('test');
        }}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'addressForm'
})(AddressWidget);
