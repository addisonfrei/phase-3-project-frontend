import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <ul>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/viewtasks'>View Task List</Link> </li>
            <li><Link to='/addtask'>Add Task</Link> </li>
            <li><Link to='/addcategory'>Add Category</Link></li>
        </ul>
    </div>
  )
}

export default NavBar