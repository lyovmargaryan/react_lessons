import React from 'react';

import Filter from '../Filter';
import List from '../List';
import AddItem from '../AddItem';

import './App.css';

const data = [
  {
    id: 1,
    title: "List 1",
    isDone: true
  },
  {
    id: 2,
    title: "List 2",
    isDone: false
  }
];

const App = () => {
//  <React.Fragment> kam datark html tag  havai html tag chgrenq
  return (
    <div className="container todoList">
      <h1 className="todoListTitle">Lyov TodoList</h1>
      <Filter />
      <List />
      <AddItem />
    </div>
  )
};

export default App;
