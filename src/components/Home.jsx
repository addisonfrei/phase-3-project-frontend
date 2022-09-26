import React from 'react'
import picture from '../thomas-bormans-pcpsVsyFp_s-unsplash.jpg'


const Home = () => {
  return (
    <div>
      <div className='w3-container w3-teal'>
        <h1>To Do List</h1>
      </div>
      <div align='center'>
        <p>This application allows you to create a task with: a description, category, and a due date.  All tasks can be viewed from the Viewed Task List link. A task can be marked as completed, or deleted, upon completion.  Categories can be added and removed as needed.</p>
      </div>
      <div align='center'>
      <img src={picture} alt='to do list' className='w3-circle' height={600} width={750}/>
      </div>
      
      
      
    </div>
  )
}

export default Home