import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <ul>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/view'>View To Do List</Link> </li>
            <li><Link to='/add'>Add To Do</Link> </li>
        </ul>
    </div>
  )
}

export default NavBar