import React, { useState } from 'react'

const CreateToDo = () => {
  // Make a controlled form with inputs adjusted below.  
  // State?  New state here or on App passed as prop?
  const [ formData, setFormData ] = useState({
    "task": "",
    "category": "home"
  })

  function handleFormChange(e) {
    setFormData({...formData,
      [e.target.name]: e.target.value
    })
  }
  console.log("formData:", formData)

  return (
    <div>
      <h2>Create a To Do</h2>
      <form>
        <div>
          <label>Task:</label>
          <input type='text' id='task' name='task' value={formData.task} onChange={handleFormChange}/>
          <label>&nbsp;Category:</label>
          <select id='category' name='category' onChange={handleFormChange}>
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