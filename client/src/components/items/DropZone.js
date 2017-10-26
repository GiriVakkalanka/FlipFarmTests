import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

import Dropzone from 'react-dropzone';

const FILE_FIELD_NAME = 'files';

const renderDropzoneInput = field => {
  const files = field.input.value;

  return (
    <div>
      <Dropzone
        name={field.name}
        onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
      >
        <div> files here </div>
      </Dropzone>
      {field.meta.touched &&
        field.meta.error && <span className="error">{field.meta.error}</span>}
      {files &&
        Array.isArray(files) && (
          <ul>{files.map((file, i) => <li key={i}>{file.name}</li>)}</ul>
        )}
    </div>
  );
};

class DropZone extends Component {
  onSubmit(data) {
    var body = new FormData();
    Object.keys(data).forEach(key => {
      body.append(key, data[key]);
    });
    console.log(body);
  }

  render() {
    const { handleSubmit, reset } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <label htmlFor={FILE_FIELD_NAME}>Files</label>
          <Field name={FILE_FIELD_NAME} component={renderDropzoneInput} />
        </div>
        <div>
          <button type="submit">Submit</button>
          <button onClick={reset}>Clear Values</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'fileForm'
})(DropZone);
