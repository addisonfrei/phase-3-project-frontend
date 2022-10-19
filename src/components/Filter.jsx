import React from 'react'

const Filter = ( { categoryOption, setTaskList, filteredCategory, setFilteredCategory } ) => {


  function handleChange(e) {
    setFilteredCategory(e.target.value)
    fetch(`http://localhost:9292/categories/${e.target.value}`)
     .then(r => r.json())
     .then(tasks =>  setTaskList(tasks))
  }
  // All option with value of 0 due to fetch request needing value in url.  0 is defualt and will return all tasks.
  return (
    <div>
        <label><b>Filter by Category: </b></label>
        <select  value={filteredCategory} onChange={handleChange}>
            <option>Select</option>
            <option value="0" name="All">All</option>
            {categoryOption}
        </select>
    </div>
  )
}

export default Filter