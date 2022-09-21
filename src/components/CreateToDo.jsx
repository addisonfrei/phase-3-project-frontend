import React, { useState } from 'react'

const CreateToDo = () => {
  // Make a controlled form with inputs adjusted below.  
  // State?  New state here or on App passed as prop?
  const [ formData, setFormData ] = useState({
    "task": "",
    "category": ""
  })

  return (
    <div>
      <h2>Create a To Do</h2>
      <form>
        <div>
          <label>Task:</label>
          <input type='text' id='task'/>
          <label>&nbsp;Category:</label>
          <select id='category' name='category'>
            <option value='home'>Home</option>
            <option value='pet'>Pet</option>
            <option value='vehicle'>Vehicle</option>
            <option value='miscellaneous'>Miscellaneous</option>
          </select>
        </div>
          <br></br>
          <input type="submit" value="Create Task" />
      </form>
    </div>
  )
}

export default CreateToDo