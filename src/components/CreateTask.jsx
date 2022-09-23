import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const CreateTask = ( { categoryOption } ) => {
  
  const [ date, setDate ] = useState(new Date());
  const [ formData, setFormData ] = useState({
    "description": "",
    "category_id": "home",
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
    console.log(formData)
    fetch("http://localhost:9292/addtask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(r => r.json())
      .then((newTask) => console.log(newTask))
  }

  return (
    <div>
      <h1>Create a New Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='task'><strong>Task:</strong></label>
          <input type='text' id='task' name='description' value={formData.task} autoFocus={true} onChange={handleFormChange}/>
          <label>&nbsp;<strong>Category:</strong></label>
          <select id='category' name='category_id' onChange={handleFormChange}>
            {categoryOption}
          </select>
          <br></br>
          <label><strong>Due By:</strong></label>
          <DatePicker selected={date} onSelect={setDate} onChange={handleCalendarChange}/>
        </div>
          <br></br>
          <input type="submit" value="Add Task" />
      </form>
    </div>
  )
}

export default CreateTask
