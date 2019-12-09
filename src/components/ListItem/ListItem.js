import React from 'react';

import './ListItem.css';

let idCounterForCheckbox = 0;
const ListItem = () => {
  idCounterForCheckbox++;
  return (
      <li className="tasksListBlock d-flex justify-content-between align-items-center">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" name="customCheck" id={"customCheck" + idCounterForCheckbox} />
            <label className="custom-control-label cursor-pointer custom-checkbox-class" htmlFor={"customCheck" + idCounterForCheckbox}>
              Take a trash out</label>
        </div>
        <div className="btn-group" role="group">
        <button className="btn btn-danger">Delete</button>
        <button className="btn btn-info">Check</button>
        </div>
      </li>
  );

};

export default ListItem;
