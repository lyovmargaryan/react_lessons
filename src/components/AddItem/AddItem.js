import React, { Component } from 'react';

import './AddItem.css';

// const AddItem = ( {onAddItem} ) => {
export default class AddItem extends Component{

  state = {
    text: ''
  };

  onInputChange = ( {target} ) => {
    this.setState({
      text: target.value
    })
  };
  onAddClick = () => {
    const {onAddItem} = this.props;
    this.setState(({text}) => {
      onAddItem(text);
      return {
        text: ''
      }
    })
  };

  render(){

  return (
    <div className="row add-item">
      <div className="form-group col-md-9">
        <input className="form-control" placeholder="Add new data" value={this.state.text} onChange={this.onInputChange}/>
      </div>
      <div className="form-group col-md-3">
        <button className="btn btn-info" onClick={this.onAddClick}>Add Item</button>
      </div>
    </div>
  );
  }
};

// export default AddItem;
