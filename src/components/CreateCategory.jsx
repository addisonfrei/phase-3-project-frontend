import React, { useState } from 'react'
import CatagoryList from './CatagoryList'


const CreateCategory = ( { categories, setCategories } ) => {

    const [ category, setCategory ] = useState({
        "name": ""
    })
    console.log(categories)
    // Rendering categories into table to allow for deletion
    const individualCategory = categories.map((category, index) => (
      <CatagoryList key={index} category={category} setCategories={setCategories}/>
    ))

    function handleChange(e) {
        setCategory({...category,
            [e.target.name]: e.target.value
          })
    }
    
    // CREATE request to DB
    function handleSubmit(e) {
        e.preventDefault()
        console.log(category)
        fetch("http://localhost:9292/addcategory", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(category),
        })
          .then(r => r.json())
          .then((updatedCategories) => setCategories(updatedCategories))

    // Reloads page without updating state
    //window.location.reload(false)
    }
  return (
    <div>
      <div className='w3-container w3-teal'>
      <h1>Categories</h1>
      </div>
      <br/>
      <div align='center'>
        <h3>Create New Category</h3>
      </div>
      <form align='center' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='category'><strong>Category:</strong></label>
          <input type='text' id='categoryAdd' name='name' autoFocus={true} onChange={handleChange}/>
        </div>
        <br></br>
        <input type="submit" value="Add Category" />
      </form>
      <div align='center'>
        <h3>Delete Category</h3>
        <table>
          <thead>
            <tr>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {individualCategory}
          </tbody>  
        </table>
      </div>
    </div>
  )
}

export default CreateCategory