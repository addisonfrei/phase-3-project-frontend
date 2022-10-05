import React, { useState } from 'react'
import CatagoryList from './CatagoryList'

const CreateCategory = ( { categories, setCategories } ) => {
  // State for adding a category
  const [ category, setCategory ] = useState({
      "name": ""
  })

  // Set state for adding category
  function handleChange(e) {
      setCategory({...category,
          [e.target.name]: e.target.value
        })
  }
  
  // CREATE request to DB
  function handleSubmit(e) {
      e.preventDefault()
      fetch("http://localhost:9292/addcategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      })
        .then(r => r.json())
        .then((updatedCategories) => setCategories(updatedCategories))

      category.name = ""
  }

  // Rendering categories into table to allow for deletion
  const individualCategory = categories.map((category, index) => (
    <CatagoryList key={index} category={category} setCategories={setCategories}/>
  ))
  
  return (
    <div>
      <div className='w3-container w3-teal'>
        <h1>Categories</h1>
      </div>
      <br/>
      <div className='w3-row'>
        <div className='w3-col l6'>
          <h3 align='center'>Create New Category</h3>
          <form align='center' onSubmit={handleSubmit}>
            <label htmlFor='category'><strong>Category:</strong></label>
            <input type='text' id='categoryAdd' value={category.name} name='name' autoFocus={true} onChange={handleChange}/>
            <br/>
            <br/>
            <input type="submit" value="Add Category" />
          </form>
        </div>
        <div className='w3-col l6'>
          <h3>Delete Category</h3>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {individualCategory}
            </tbody>  
          </table>
        </div>
      </div> 
    </div>
  )
}

export default CreateCategory