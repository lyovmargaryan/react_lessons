import React from 'react';
import ListItem from '../ListItem';

import './List.css';

const List = () => {

  return (
    <div className="taskLists-block">
      <ul className="allTasksLists">
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
      </ul>
    </div>
  )
};

export default List;
