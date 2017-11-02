import React from 'react';
import { Link } from 'react-router-dom';
//import ItemList from './items/ItemList';
import ItemGallery from './items/ItemGallery';

const Dashboard = () => {
  return (
    <div>
      <ItemGallery />
      <div className="fixed-action-btn">
        <Link to="/items/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
