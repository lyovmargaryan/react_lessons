import React, { Component } from 'react';

import './ListItem.css';

class ListItem extends Component {

  render() {
    const { label, deleteList, onlabelClick, onImportant } = this.props;

    let listClassName = 'pull-left todo-list-title';

    listClassName += label.important ? ' important': '';
    listClassName += label.isDone ? ' done': '';

    return (
      <li className="list-group-item">
        <span className={ listClassName } onClick={() => onlabelClick(label.id) }>
          { label.title }
        </span>

        <span className="pull-right todo-list-buttons">
          <button className="btn btn-danger" onClick={() => deleteList(label.id)}>
            <i className="fa fa-trash"></i>
          </button>
          <button className="btn btn-success" onClick={() => onImportant(label.id) }>
            <i className="fa fa-info"></i>
          </button>
        </span>
      </li>
    );
  }
};

export default ListItem;
