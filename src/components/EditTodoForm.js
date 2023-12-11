import React from 'react';
import { useState } from "react";

export const EditTodoForm = ({editTodo, task}) =>  {
  const [value , setValue] = React.useState(task.task);
  const handleSubmit = e => {
    e.preventDefault();
    editTodo(value, task.id);
  }
  return (
      <form className='TodoForm' onSubmit={handleSubmit}>
        <h1>Edit List</h1>
        <input type='text' className='todo-input' value={value} placeholder='Update Task' 
        onChange={(e)=> setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
      </form>
   );
}
