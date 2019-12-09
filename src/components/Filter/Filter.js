import React from 'react';

import './Filter.css';

const Filter = () => {

  return (
    <div className="filter-block">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search this blog" />
          <div className="input-group-append">
            <button className="btn btn-secondary" type="button">
              <i className="fa fa-search"> </i>
            </button>
          </div>
        <button className="btn btn-info">Active</button>
        <button className="btn btn-warning">Passive</button>
      </div>

    </div>

  )
};

export default Filter;
