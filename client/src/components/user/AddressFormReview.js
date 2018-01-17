import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import addressFormFields from './addressFormFields';
import { withRouter } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import * as actions from '../../actions';

const AddressFormReview = ({ onCancel, formValues, pic, submitAddress, history }) => {
  const reviewFields = _.map(addressFormFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  const userAddress = {
    name: formValues.name,
    addressOne: formValues.addressOne,
    addressTwo: formValues.addressTwo,
    city: formValues.city,
    state: formValues.state,
    zip: formValues.zip
  };

  return (
    <div>
      <h5> Please confirm your entries </h5>
      <Image src={pic} rounded />
      {reviewFields}

      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitAddress(userAddress, history)}
        className="green btn-flat right white-text"
      >
        Add Address
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  //console.log(state.form);
  return { formValues: state.form.addressForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(AddressFormReview));
