import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: ''
    };
  }

  handleChanges = e => {
    this.setState({ newItem: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(e, this.state.newItem);
    this.setState({
      newItem: ''
    });
  };

  render() {
    console.log('rendering form');
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Add New Task</label>
        <input
          value={this.state.newItem}
          onChange={this.handleChanges}
          type='text'
          name='item'
        />
        <button>Add Task</button>
      </form>
    );
  }
}

export default TodoForm;