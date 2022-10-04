import React from 'react'

const Task = ( { task, onDelete, onUpdate } ) => {

  // DELETE request to DB
  function handleDelete() {
    fetch(`http://localhost:9292/task/${task.id}`, {
        method: "DELETE"
        })
          .then(r => r.json())
          .then((deletedTask) => onDelete(deletedTask));
  }
  // UPDATE request to DB
  function handleCheck() {
    fetch(`http://localhost:9292/task/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "completed": ''
      }),
    })
     .then(r => r.json())
     .then((updatedTask) => onUpdate(updatedTask))
  }

  return (
    <tr>
      <td>{task.description}</td>
      <td>{task.category.name}</td>
      <td>{task.due_by}</td>
      <td><input type='checkbox' onChange={handleCheck} checked={task.completed ? true : false}/></td>
      <td><button onClick={handleDelete}>Delete</button></td>
    </tr>
  )
}

export default Task