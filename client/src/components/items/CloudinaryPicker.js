import React, { Component } from 'react';
import cloudinary from 'cloudinary';

class CloudinaryPicker extends Component {
  uploadWidget() {
    cloudinary.openUploadWidget(
      {
        cloud_name: 'flipfarm',
        upload_preset: 'rtbhz98k',
        tags: ['test']
      },
      function(error, result) {
        console.log(result);
      }
    );
  }

  render() {
    return (
      <div className="upload">
        <button
          onClick={this.uploadWidget.bind(this)}
          className="upload-button"
        >
          Add Image
        </button>
      </div>
    );
  }
}

export default CloudinaryPicker;
