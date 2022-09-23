import React from 'react'
import Task from './Task'
import Filter from './Filter'

const TaskContainer = ( { taskList, categoryOption } ) => {
  const task = taskList.map((task, index) => (
    <Task key={index} task={task} />
  ))

  // Add filter functionality to filter by all or specific category


  return (
    <div>
      <Filter categoryOption={categoryOption} />
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
    </div>
  )
}

export default TaskContainer