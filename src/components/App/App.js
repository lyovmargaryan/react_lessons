import React from 'react';
import Filter from '../Filter';
import List from '../List';
import AddItem from '../AddItem';

import './App.css';
import Hello from '../Hello';

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

const addNewItem = (title) => {
  const obj = {
    id: data[data.length - 1].id + 1,
    isDone: false,
    title
  };

  data.push(obj);
    return title
};

const App = () => {
//  <React.Fragment> kam datark html tag  havai html tag chgrenq
  return (
    <div className="container todoList">
      <h1 className="todoListTitle">Lyov TodoList</h1>
      <Filter />
      <List todoData={data}/>
      <AddItem  addFunc={addNewItem}/>
      {/*<Hello test="helo"/>*/}
        <Hello test={addNewItem}/>
    </div>
  )
};

export default App;
