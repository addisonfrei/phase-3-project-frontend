import React from 'react'

const Filter = ( { categoryOption, setSelectedCategory } ) => {

  function handleChange(e) {
    console.log(e.target.value)
    setSelectedCategory([e.target.value])
  }

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