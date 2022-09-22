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

  // If completed === true then have box be checked
  return (
    <tr>
      <td>{task.description}</td>
      <td>{task.category.name}</td>
      <td>{task.due_by}</td>
      <td><input type='checkbox' onClick={handleCheck} checked={task.completed ? true : false}/></td>
      <td><button onClick={handleDelete}>Delete</button></td>
    </tr>
  )
}

export default Task