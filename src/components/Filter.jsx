import React from 'react'

const Filter = ( { categoryOption, setSelectedCategory } ) => {

  function handleChange(e) {
    setSelectedCategory([e.target.value])
  }
  // All option with value of 0 due to fetch request needing value in url.  0 is defualt and will return all tasks.
  return (
    <div>
        <label><b>Filter by Category: </b></label>
        <select name='filter' onChange={handleChange}>
            <option value="0">All</option>
            {categoryOption}
        </select>
    </div>
  )
}

export default Filter