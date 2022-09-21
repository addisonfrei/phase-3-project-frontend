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
    <tr>
      <td>{task.task}</td>
      <td>{task.category}</td>
      <td>{task.dueDate}</td>
      <td><input  type='checkbox' onClick={handleCheck}/></td>
      <td><button onClick={handleDelete}>Delete</button></td>
    </tr>
  )
}

export default Task