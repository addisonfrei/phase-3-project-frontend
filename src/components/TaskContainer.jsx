import React, { useState, useEffect } from 'react'
import Task from './Task'
import Filter from './Filter'

const TaskContainer = ( { categoryOption } ) => {

  const [ taskList, setTaskList ] = useState([])
  const [ selectedCategory, setSelectedCategory ] = useState([0])
  
  //READ request for tasks from database based on category filter. Rerenders when category or task list is updated.
  useEffect(() => {
    fetch(`http://localhost:9292/tasks/${selectedCategory[0]}`)
     .then(r => r.json())
     .then(tasks => setTaskList(tasks))
  }, [selectedCategory, taskList])
  
  // Iterate through all filtered tasks and create a Task componenet
  const task = taskList.map((task, index) => (
    <Task key={index} task={task} setTaskList={setTaskList}/>
  ))

  return (
    <div>
      <div className='w3-container w3-teal'>
        <h1>Task List</h1>
      </div>
      <br></br>
      <div align='center'>
        <Filter 
          categoryOption={categoryOption} 
          setSelectedCategory={setSelectedCategory}
        />
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