import React, { useState } from 'react'

const CreateCategory = () => {

    const [ category, setCategory ] = useState("")

    function handleChange(e) {
        setCategory(e.target.value)
    }
    console.log("Category:", category)
    
    // CREATE request to DB
    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
    }
  return (
    <div>
      <h1>Create a New Category</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='category'><strong>Category:</strong></label>
          <input type='text' id='categoryAdd' name='categoryAdd' autoFocus={true} onChange={handleChange}/>
        </div>
          <br></br>
          <input type="submit" value="Add Category" />
      </form>
    </div>
  )
}

export default CreateCategory