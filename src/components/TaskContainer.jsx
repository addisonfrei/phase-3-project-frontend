import React, { useState, useEffect } from 'react'
import Task from './Task'
import Filter from './Filter'
import CreateTask from './CreateTask'

const TaskContainer = ( { categories } ) => {

  const [ taskList, setTaskList ] = useState([])
  const [filteredCategory, setFilteredCategory] = useState("")
  
  //Iterate through categories to create dropdown options
  const categoryOption = categories.map((category) => 
    <option key={category.id} value={category.id} name={category.name}>{category.name}</option>
  )

  // READ request for tasks
  useEffect( () => {
    fetch('http://localhost:9292/tasks')
     .then(r => r.json())
     .then(tasks =>  setTaskList(tasks))
  }, [])

  // Iterate through all tasks and create a Task componenet
  const task = taskList.map((task, index) => (
    <Task key={index} task={task} setTaskList={setTaskList} setFilteredCategory={setFilteredCategory}/>
  ))
  
  return (
    <div>
      <div className='w3-container w3-teal'>
        <h1>Task List</h1>
      </div>
      <br></br>
      <div className='w3-row'>
        <div align='center' className='w3-col l6'>
        <CreateTask 
          categoryOption={categoryOption} 
          categories={categories}
          setTaskList={setTaskList}
          setFilteredCategory={setFilteredCategory}
        />
        </div>
        <div align='center' className='w3-col l6'>
          <br/>
          <Filter 
            categoryOption={categoryOption}
            setTaskList={setTaskList}
            filteredCategory={filteredCategory}
            setFilteredCategory={setFilteredCategory}
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
    </div>
  )
}

export default TaskContainer