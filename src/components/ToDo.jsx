import React from 'react'

const ToDo = ( { toDo } ) => {
  
  // function will send Delete request to DB
  function handleDelete(e) {
    console.log(e)
  }
  return (
    <li>
      <span>{toDo.task}</span>
      <span>{toDo.category}</span>
      <span>{toDo.dueDate}</span>
      <input style={{marginRight: "100px"}} type='checkbox' />
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default ToDo