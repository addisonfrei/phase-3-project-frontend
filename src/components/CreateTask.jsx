import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const CreateTask = ( { categories } ) => {
  
  const [ date, setDate ] = useState(new Date());
  const [ formData, setFormData ] = useState({
    "task": "",
    "category": "home",
    "dueDate": date.toDateString(),
    "completed": false
  });
  //Iterate through categories to create dropdown options
  const categoryOption = categories.map((category) => 
    <option key={category.id} value={category.name}>{category.name}</option>
  )
  
  
  console.log("Category:", categoryOption)

  // Handles task and category changes
  function handleFormChange(e) {
    setFormData({...formData,
      [e.target.name]: e.target.value
    })
  }
  // Handles calendar change due to event being the date.  No target included
  function handleCalendarChange(e) {
    setFormData({...formData,
      "dueDate": e.toDateString()
    })
  }
  // CREATE request to DB
  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
  }



  return (
    <div>
      <h1>Create a New Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='task'><strong>Task:</strong></label>
          <input type='text' id='task' name='task' value={formData.task} autoFocus={true} onChange={handleFormChange}/>
          <label>&nbsp;<strong>Category:</strong></label>
          <select id='category' name='category' onChange={handleFormChange}>
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

{/* <option value='home'>Home</option>
<option value='pet'>Pet</option>
<option value='vehicle'>Vehicle</option>
<option value='work'>Work</option> */}