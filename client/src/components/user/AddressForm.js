import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import ItemField from '../items/ItemField';
//import FileField from './FileField';
import addressFormFields from './addressFormFields';
//import DropZone from './DropZone';
//import FilePicker from './FilePicker';
//import { Image } from 'react-bootstrap';
//import { Image } from 'react-bootstrap';
//import Img from 'react-image';
//import CloudinaryPicker from './CloudinaryPicker';

class AddressForm extends Component {
  renderFields() {
    return _.map(addressFormFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={ItemField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onAddressSubmit)}>
          {this.renderFields()}
          <Link to="/items" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(addressFormFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'addressForm',
  destroyOnUnmount: false
})(AddressForm);
