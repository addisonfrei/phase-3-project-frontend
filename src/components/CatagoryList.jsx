import React from 'react'

const CatagoryList = ( { category, setCategories } ) => {
    
  function handleDelete() {
    fetch(`http://localhost:9292/categories/${category.id}`, {
        method: "DELETE"
        })
          .then(r => r.json())
          .then((resp) => {
            if (resp === "This category is assigned to a task.  Delete task before continuing.") {
              alert(resp)
            } else {
              setCategories(resp)
            }
          })
  }

  return (
    <tr>
      <td>{category.name}</td>
      <td><button onClick={handleDelete}>X</button></td>
    </tr>
  )
}

export default CatagoryList