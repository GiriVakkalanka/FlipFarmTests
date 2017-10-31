import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import * as actions from '../../actions';

const ItemFormReview = ({ onCancel, formValues, pic, submitItem, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  const formValuesWithURL = {
    name: formValues.name,
    description: formValues.description,
    url: pic
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
        onClick={() => submitItem(formValuesWithURL, history)}
        className="green btn-flat right white-text"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  //console.log(state.form);
  return { formValues: state.form.itemForm.values, pic: state.pic };
}

export default connect(mapStateToProps, actions)(withRouter(ItemFormReview));
