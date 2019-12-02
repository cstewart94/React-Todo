// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
  return (
    <div>
      {props.list.map(item => (
        <Todo key={item.id} item={item} />
      ))}
      <button onClick={props.clearList}>
        Clear Completed
    </button>
    </div>
  )
}

export default TodoList;