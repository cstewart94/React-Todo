import React from 'react';

import { StyledTask, TaskBox } from '../Style.js';

const Todo = props => {
  return (
    <TaskBox onClick={props.onClick} className={`item${props.item.completed ? 'completed' : ''}`}>
      <StyledTask>{props.item.task}</StyledTask>
    </TaskBox>
  )
}

export default Todo;