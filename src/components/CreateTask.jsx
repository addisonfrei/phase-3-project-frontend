import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const CreateTask = ( { categoryOption, categories } ) => {
  
  const [ date, setDate ] = useState(new Date());
  const [ formData, setFormData ] = useState({
    "description": "",
    "category_id": categories[0].id,
    "due_by": date.toDateString(),
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
      "due_by": e.toDateString()
    })
  }

  // CREATE request to DB
  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:9292/addtask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(r => r.json())
      .then((newTask) => console.log(newTask));

    setFormData({
      "description": "",
      "category_id": categories[0].id,
      "due_by": new Date().toDateString(),
      "completed": false
    })
    // Adds message under button when submitted.  Disappears in 3 seconds
    const confirmation = document.getElementById('confirmation')
    confirmation.innerText = "Task Submitted Successfully"
    setTimeout(() => {
      confirmation.innerText = ""
    }, 3000)
  }

  return (
    <div>
      <div className='w3-container w3-teal'>
        <h1>Create a New Task</h1>
      </div>
      <br></br>
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
          <DatePicker inline  onSelect={setDate} onChange={handleCalendarChange} value={formData.due_by}/>
        </div>
          <br></br>
          <input type="submit" value="Add Task" />
      </form>
      <p id='confirmation' align='center' className='w3-text-teal'></p>
    </div>
  )
}

export default CreateTask
