import React, { useState } from 'react'

const CreateCategory = () => {

    const [ category, setCategory ] = useState([{
        "category_name": ''
    }])

    function handleChange(e) {
        setCategory({...category,
            [e.target.name]: e.target.value
          })
    }
    
    // CREATE request to DB
    function handleSubmit(e) {
        e.preventDefault()
        console.log("Category:", category)
    }
  return (
    <div>
      <h1>Create a New Category</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='category'><strong>Category:</strong></label>
          <input type='text' id='categoryAdd' name='category_name' autoFocus={true} onChange={handleChange}/>
        </div>
          <br></br>
          <input type="submit" value="Add Category" />
      </form>
    </div>
  )
}

export default CreateCategory