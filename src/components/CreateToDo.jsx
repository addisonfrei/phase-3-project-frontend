import React from 'react'

const CreateToDo = () => {
  return (
    <div>
      <h2>Create a To Do</h2>
      <form>
        <div>
          <label>Task:</label>
          <input type='text'/>
          <label>Category:</label>
          <select id='category' name='category'>
            <option value='home'>Home</option>
            <option value='pet'>Pet</option>
            <option value='vehicle'>Vehicle</option>
            <option value='miscellaneous'>Miscellaneous</option>
          </select>
        </div>
          <br></br>
          <input type="submit" />
      </form>
    </div>
  )
}

export default CreateToDo