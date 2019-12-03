import React from 'react';

import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';
import { StyledHeader } from './components/Style.js';

const list = [
  {
    task: "Organize Garage",
    id: 123,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 124,
    completed: false
  },
  {
    task: "Create Shopping List",
    id: 1235,
    completed: false
  },
  {
    task: "Make Bed",
    id: 1246,
    completed: false
  },
  {
    task: "Clean Kitchen",
    id: 1237,
    completed: false
  },
  {
    task: "Meal Prep",
    id: 1248,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: list,
      anotherOne: ''
    };
  }

  completeItem = (e, itemId) => {
    e.preventDefault(
      this.setState({
        list: this.state.list.map(item => {
          if (item.id === itemId) {
            return {
              ...item,
              completed: !item.completed
            }
          }
          else {
            return item
          }
        })
      })
    )
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.filter(item => {
        return !item.completed
      })
    })
  }

  addItem = (e, newItemText) => {
    const newItem = {
      task: newItemText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      list: [...this.state.list, newItem]
    });
  };


  render() {
    console.log('rendering...');
    return (
      <div>
        <StyledHeader>
          <h1>To-Do List</h1>
          <TodoForm addItem={this.addItem} />
        </StyledHeader>
        <TodoList list={this.state.list} completeItem={this.completeItem} />
        <StyledHeader>
          <button onClick={this.clearCompleted}>Clear Completed Tasks</button>
        </StyledHeader>
      </div>
    );
  }
}

export default App;
