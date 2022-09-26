import React from 'react'

const CatagoryList = ( { category } ) => {
    
    function handleDelete() {
      fetch(`http://localhost:9292/category/${category.id}`, {
          method: "DELETE"
          })
            .then(r => r.json())
            .then((resp) => {
              if (resp === "This category is assigned to a task.  Delete task before continuing.") {
                alert(resp)
              } else {
                console.log(resp)
              }
            })
      // Reloads page without updating state
      window.location.reload(false)
    }

  return (
    <tr>
        <td>{category.name}</td>
        <td><button onClick={handleDelete}>X</button></td>
    </tr>
  )
}

export default CatagoryList