import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import ItemForm from './ItemForm';
import ItemFormReview from './ItemFormReview';

class ItemNew extends Component {
  state = { showItemReview: false };

  renderContent() {
    if (this.state.showItemReview) {
      return (
        <ItemFormReview
          onCancel={() => this.setState({ showItemReview: false })}
        />
      );
    }

    return (
      <ItemForm onItemSubmit={() => this.setState({ showItemReview: true })} />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'itemForm'
})(ItemNew);