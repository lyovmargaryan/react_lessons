import React, {Component} from 'react';

import Header from '../Header';
import Filter from '../Filter';
import List from '../List';
import AddItem from '../AddItem';

import './App.css';

export default class App extends Component{

  state = {
   todoData: [
     this.createNewItem(1, 'Սովորել React'),
     this.createNewItem(2, 'Կոֆե խմել'),
     this.createNewItem(3, 'Սովորել Node.js'),
     this.createNewItem(4, 'Հաց ուտել')
  ]
};

  createNewItem(id,title){
    return {
      id,
      title,
      important: false,
      isDone: false
    }
  }

  getObjData(id,data) {
    this.setState(({ todoData }) => {
    const idx = todoData.findIndex((obj) => obj.id === id);
      let obj = {};
      switch (data) {
      case 'isDone':
        obj = {
          ...todoData[idx],
          isDone: !todoData[idx].isDone,
        };
        break;
      case 'important' :
        obj = {
          ...todoData[idx],
          important: !todoData[idx].important
        };
        break;
      }
    return {
      todoData: [ ...todoData.slice(0, idx), obj, ...todoData.slice(idx + 1) ]
    }
    });
  }

  onlabelClick = (id) => {
      this.getObjData(id,'isDone');
  };

  onImportant = (id) => {
    this.getObjData(id,'important');
  };

  onDeleteItem = (id) =>{
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((obj) => obj.id === id);

      return {
        todoData: [
          ...todoData.slice(0, idx),
          ...todoData.slice(idx + 1)
        ]
      }
    })
  };

  onAddItem = (text) => {
    const title = text.trim();
    if(!title) return;

    this.setState(({todoData}) => {
      let id = 1;
      if(todoData[todoData.length - 1]){
       id = todoData[todoData.length - 1].id + 1;
      }

      return {
        todoData: [...todoData, this.createNewItem(id,title)]
      }
    });
  };

 render() {
   return (
     <div className="container">
       <Header />
       <Filter />
       <List
         todoList={this.state.todoData}
         deleteItem={this.onDeleteItem}
         onlabelClick={this.onlabelClick}
         onImportant={this.onImportant}
       />
       <AddItem onAddItem={this.onAddItem}/>
     </div>
   );
 }
};

