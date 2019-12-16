import React from 'react';
import './ListItem.css';

let idCounterForCheckbox = 0;
const ListItem = ({ list }) => {
  idCounterForCheckbox++;

  const colorClass = list.isDone ? 'text-success' : 'text-warning';
  // const color = list.isDone ? 'green' : 'orange';
  // const styleData = { color };

  return (
      <li className="text-center mt-3 mb-3 d-flex justify-content-between align-items-center">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" name="customCheck" id={"customCheck" + idCounterForCheckbox} />
            <label className={"custom-control-label  cursor-pointer custom-checkbox-class " + colorClass} htmlFor={"customCheck" + idCounterForCheckbox}>
              { list.title }</label>
          {/*label style={styleData}*/}
        </div>
        <div className="btn-group" role="group">
          <button className="btn btn-danger"><i className="fa fa-remove"> </i></button>
          <button className="btn btn-info"><i className="fa fa-check"> </i></button>
        </div>
      </li>
  );
};

export default ListItem;
