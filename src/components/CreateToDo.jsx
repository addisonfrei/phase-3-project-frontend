import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const CreateToDo = () => {
  
  const [ date, setDate ] = useState(new Date());
  const [ formData, setFormData ] = useState({
    "task": "",
    "category": "home",
    "dueDate": date.toDateString(),
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
      "dueDate": e.toDateString()
    })
  }
  console.log(formData)

  return (
    <div>
      <h2>Create a Task</h2>
      <form>
        <div>
          <label htmlFor='task'>Task:</label>
          <input type='text' id='task' name='task' value={formData.task} autoFocus={true} onChange={handleFormChange}/>
          <label>&nbsp;Category:</label>
          <select id='category' name='category' onChange={handleFormChange}>
            <option value='home'>Home</option>
            <option value='pet'>Pet</option>
            <option value='vehicle'>Vehicle</option>
            <option value='miscellaneous'>Miscellaneous</option>
          </select>
          <br></br>
          <label>Due By:</label>
          <DatePicker selected={date} onSelect={setDate} onChange={handleCalendarChange}/>
        </div>
          <br></br>
          <input type="submit" value="Add Task" />
      </form>
    </div>
  )
}

export default CreateToDo