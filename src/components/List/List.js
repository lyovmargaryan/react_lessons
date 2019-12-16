import React from 'react';
import ListItem from '../ListItem';

import './List.css';

const List = ({todoData}) => {

  const lists = todoData.map((elem) => {
    return  <ListItem key={elem.id} list={elem} />
  });
  return (
    <div className="taskLists-block">
      <ul className="allTasksLists">
        {lists}
      </ul>
    </div>
  )
};

export default List;
