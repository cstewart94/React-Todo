// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';
import { StyledList } from '../Style.js';

class TodoList extends React.Component {
  render() {
    return (
      <StyledList>
        {this.props.list.map(item => (
          <Todo key={item.id} item={item} onClick={(e) => this.props.completeItem(e, item.id)} />
        ))}
      </StyledList>
    )
  }
}

export default TodoList;