import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import * as actions from '../../actions';
import { connect } from 'react-redux';
//import { Image } from 'react-bootstrap';

class FilePicker extends Component {
  constructor() {
    super();
    this.state = { files: [] };
  }

  onDrop(files) {
    this.setState({
      files
    });

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    };

    var formData = new FormData();

    formData.append(files, files[0]);
    this.props.submitPicture(formData, config);
    //console.log(this.state);
    //FormData.append('file', files[0]);
    //console.log(body);
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone accept="image/*" onDrop={this.onDrop.bind(this)}>
            <p> Drop image here</p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped image</h2>
          <ul>
            {this.state.files.map(f => (
              <li key={f.name}>
                {f.name} - {f.size} bytes{' '}
              </li>
            ))}
          </ul>
        </aside>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { formValues: state.form.itemForm.values };
}

export default connect(mapStateToProps, actions)(FilePicker);
