import React from 'react';

import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';

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

  addItem = newItemText => {
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
        <div className='header'>
          <h1>To-Do List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default App;
