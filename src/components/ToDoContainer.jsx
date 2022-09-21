import React from 'react'
import ToDo from './ToDo'

const ToDoContainer = ( { toDoList } ) => {
  const toDo = toDoList.map((toDo, index) => (
    <ToDo key={index} toDo={toDo} />
  ))

  // Add filter functionality to filter by all or specific category


  return (
    <div>
      <h1>ToDoContainer</h1>
      <ul className='ToDo'>
        <li>
          <span><strong>Task</strong></span>
          <span><strong>Category</strong></span>
          <span><strong>Due By</strong></span>
          <span><strong>Completed?</strong></span>
        </li>
        {toDo}
      </ul>
    </div>
  )
}

export default ToDoContainer