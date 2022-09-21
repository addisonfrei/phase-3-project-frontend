import React from 'react'
import Task from './Task'

const TaskContainer = ( { taskList } ) => {
  const task = taskList.map((task, index) => (
    <Task key={index} task={task} />
  ))

  // Add filter functionality to filter by all or specific category


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Category</th>
            <th>Due By</th>
            <th>Completed?</th>
          </tr>
        </thead>
        <tbody>
          {task}
        </tbody>  
      </table>
    </div>
  )
}

export default TaskContainer