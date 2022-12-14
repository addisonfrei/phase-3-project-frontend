import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const CreateTask = ( { categoryOption, categories, setTaskList, setFilteredCategory } ) => {
  
  const [ date, setDate ] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState("")
  const [ formData, setFormData ] = useState({
    "description": "",
    "category_id": 0,
    "due_by": date,
    "completed": false
  });
  
  // Handles task and category changes
  function handleFormChange(e) {
    setSelectedCategory(e.target.value)
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
    // category_id initially 0 due to categories[0].id not being available on load.  On submit this will change id to first category if it not changed
    if (formData.category_id === 0) {
      formData.category_id = categories[0].id
      }
    fetch(`http://localhost:9292/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(r => r.json())
      .then((updatedTasks) => setTaskList(updatedTasks));
    // Clear Task input
    formData.description = ""
    setSelectedCategory("")
    setFilteredCategory("")
  }

  return (
    <div>
      <h3>Create a New Task</h3>
      <form onSubmit={handleSubmit} align='center'>
        <div>
          <label htmlFor='task'><strong>Task:</strong></label>
          <input type='text' id='task' name='description' value={formData.description} autoFocus={true} onChange={handleFormChange}/>
          <label>&nbsp;<strong>Category:</strong></label>
          <select id='category' name='category_id' value={selectedCategory} onChange={handleFormChange}>
            <option>Select</option>
            {categoryOption}
          </select>
          <br></br>
          <label><strong>Due By:</strong></label>
          <DatePicker inline selected={date} onChange={handleCalendarChange} />
        </div>
          <br></br>
          <input type="submit" value="Add Task" />
      </form>
    </div>
  )
}

export default CreateTask
