import React from 'react'
import Task from './Task'

const TaskContainer = ( { taskList } ) => {
  const task = taskList.map((task, index) => (
    <Task key={index} task={task} />
  ))

  // Add filter functionality to filter by all or specific category


  return (
    <div>
      <h1>Task List</h1>
      <ul className='Task'>
        <li>
          <strong>Task</strong>
          <strong>Category</strong>
          <strong>Due By</strong>
          <strong>Completed?</strong>
        </li>
        {task}
      </ul>
    </div>
  )
}

export default TaskContainer