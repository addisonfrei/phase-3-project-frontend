import React from 'react'

const ToDo = ( { toDo } ) => {
  
  // function will send Delete request to DB
  function handleDelete(e) {
    console.log(toDo)
  }
  function handleCheck(e) {
    console.log(toDo)
    console.log("Checked")
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