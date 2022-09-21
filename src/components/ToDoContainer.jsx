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
      {toDo}
    </div>
  )
}

export default ToDoContainer