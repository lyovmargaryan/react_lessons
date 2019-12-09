import React from 'react';

import './AddItem.css';

const AddItem = () => {

  return (
    <div className="addItem-block d-flex justify-content-between">
      <textarea className="w-75"> </textarea>
      <button className="btn btn-success">Add</button>
    </div>

  )
};

export default AddItem;
