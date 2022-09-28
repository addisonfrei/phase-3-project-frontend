import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w3-bar w3-black'>
      <Link to='/' className='w3-bar-item w3-button'>Home</Link> 
      <Link to='/tasks' className='w3-bar-item w3-button'>Task List</Link> 
      <Link to='/modifycategory' className='w3-bar-item w3-button'>Modify Categories</Link>
    </div>
  )
}

export default NavBar