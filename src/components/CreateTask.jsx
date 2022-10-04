import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const CreateTask = ( { categoryOption, categories, taskList, setTaskList, selectedCategory } ) => {
  
  const [ date, setDate ] = useState(new Date());
  const [ formData, setFormData ] = useState({
    "description": "",
    "category_id": 0,
    "due_by": date,
    "completed": false
  });
  // Handles task and category changes
  function handleFormChange(e) {
    setFormData({...formData,
      [e.target.name]: e.target.value
    })
  }
  // Handles calendar change due to event being the date.  No target included
  function handleCalendarChange(e) {
    setFormData({...formData,
      "due_by": e
    })
    setDate(e)
  }

  // CREATE request to DB
  function handleSubmit(e) {
    e.preventDefault()
    if (formData.category_id === 0) {
      formData.category_id = categories[0].id
      }
    fetch(`http://localhost:9292/${selectedCategory[0]}/addtask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(r => r.json())
      .then((updatedTasks) => setTaskList(updatedTasks));
    
    formData.description = ""
    // Adds message under button when submitted.  Disappears in 3 seconds
    const confirmation = document.getElementById('confirmation')
    confirmation.innerText = "Task Submitted Successfully"
    setTimeout(() => {
      confirmation.innerText = ""
    }, 3000)
  }

  return (
    <div>
      <h3>Create a New Task</h3>
      <form onSubmit={handleSubmit} align='center'>
        <div>
          <label htmlFor='task'><strong>Task:</strong></label>
          <input type='text' id='task' name='description' value={formData.description} autoFocus={true} onChange={handleFormChange}/>
          <label>&nbsp;<strong>Category:</strong></label>
          <select id='category' name='category_id' onChange={handleFormChange}>
            {categoryOption}
          </select>
          <br></br>
          <label><strong>Due By:</strong></label>
          <DatePicker inline selected={date} onChange={handleCalendarChange} />
        </div>
          <br></br>
          <input type="submit" value="Add Task" />
      </form>
      <p id='confirmation' align='center' className='w3-text-teal'></p>
    </div>
  )
}

export default CreateTask
