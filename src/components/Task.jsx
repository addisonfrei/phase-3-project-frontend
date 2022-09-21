import React from 'react'

const Task = ( { task } ) => {
  
  // DELETE request to DB
  function handleDelete(e) {
    console.log(task.id)
  }
  // PATCH request to DB
  function handleCheck() {
    console.log(task)
    
  }
  return (
    <li>
      <span>{task.task}</span>
      <span>{task.category}</span>
      <span>{task.dueDate}</span>
      <input style={{marginRight: "100px"}} type='checkbox' onClick={handleCheck}/>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default Task