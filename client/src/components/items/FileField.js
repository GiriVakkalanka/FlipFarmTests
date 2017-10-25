import React from 'react';
import { Field, reduxForm } from 'redux-form';
//import { connect } from 'react-redux';
//import * as actions from '../../actions';

const FileUpload = props => {
  const { handleSubmit } = props;
  const onFormSubmit = data => {
    let formData = new FormData();
    formData.append('item_pic', data.item_pic[0]);
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <label>Picture</label>
        <Field name="pic" component="input" type="file" />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
};

export default reduxForm({
  form: 'photoForm'
})(FileUpload);
