import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../../actions';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  renderItems() {
    return this.props.items.map(item => {
      return (
        <div className="card darken-1" key={item._id}>
          <div className="card-content">
            <span className="card-title">{item.name}</span>
            <p>{item.description}</p>
            <p className="right">
              Sent On: {new Date(item.dateCreated).toLocaleDateString()}
            </p>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

function mapStateToProps({ items }) {
  return { items };
}

export default connect(mapStateToProps, { fetchItems })(ItemList);
