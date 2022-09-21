import React from 'react'

const ToDo = ( { toDo } ) => {
  // Make a box to select when completed
  return (
    <li>
      <span>{toDo.task}</span>
      <span>{toDo.category}</span>
      <span>Due By: {toDo.dueDate}</span>
      <input type='checkbox' />
      <button>Delete</button>
    </li>
  )
}

export default ToDo