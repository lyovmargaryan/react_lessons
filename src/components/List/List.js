import React from 'react';

import ListItem from '../ListItem';

import './List.css';

const List = ({ todoList, deleteItem, onlabelClick, onImportant }) => {

  const elements = todoList.map((list) => {
    return (<ListItem
      label={list}
      key={list.id}
      deleteList={deleteItem}
      onlabelClick={onlabelClick}
      onImportant={onImportant}
    />
    )
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default List;
