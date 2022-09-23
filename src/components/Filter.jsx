import React from 'react'

const Filter = ( { categoryOption}) => {
  return (
    <div>
        <label>Filter by Category: </label>
        <select name='filter'>
            {categoryOption}
        </select>
    </div>
  )
}

export default Filter