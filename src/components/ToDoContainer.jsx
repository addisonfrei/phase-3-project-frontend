import React from 'react'
import ToDo from './ToDo'

const ToDoContainer = ( { toDoList } ) => {
  const toDo = toDoList.map((toDo, index) => (
    <ToDo key={index} toDo={toDo} />
  ))

  // Add filter functionality to filter by all or specific category


  return (
    <div>
      <h1>Task List</h1>
      <ul className='ToDo'>
        <li>
          <strong>Task</strong>
          <strong>Category</strong>
          <strong>Due By</strong>
          <strong>Completed?</strong>
        </li>
        {toDo}
      </ul>
    </div>
  )
}

export default ToDoContainer