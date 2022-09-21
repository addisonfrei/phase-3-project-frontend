import React from 'react'

const ToDo = ( { toDo, onCheck } ) => {
  
  // DELETE request to DB
  function handleDelete(e) {
    console.log(toDo.id)
  }
  // PATCH request to DB
  function handleCheck() {
    console.log(toDo)
    
  }
  return (
    <li>
      <span>{toDo.task}</span>
      <span>{toDo.category}</span>
      <span>{toDo.dueDate}</span>
      <input style={{marginRight: "100px"}} type='checkbox' onClick={handleCheck}/>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default ToDo