import React from 'react'

const CatagoryList = ( { category } ) => {
    
    function handleDelete() {
        fetch(`http://localhost:9292/category/${category.id}`, {
            method: "DELETE"
            })
              .then(r => r.json())
              .then((deletedCategory) => console.log(deletedCategory))
    }

  return (
    <tr>
        <td>{category.name}</td>
        <td><button onClick={handleDelete}>X</button></td>
    </tr>
  )
}

export default CatagoryList