import React, { useState, useEffect } from 'react'
import Task from './Task'
import Filter from './Filter'
import CreateTask from './CreateTask'

const TaskContainer = ( { categories } ) => {

  const [ taskList, setTaskList ] = useState([])
  const [ selectedCategory, setSelectedCategory ] = useState([0])
  //console.log("TaskList Length:",taskList.length)
  //Iterate through categories to create dropdown options
  const categoryOption = categories.map((category) => 
    <option key={category.id} value={category.id}>{category.name}</option>
  )

  // Iterate through all filtered tasks and create a Task componenet
  const task = taskList.map((task, index) => (
    <Task key={index} task={task} selectedCategory={selectedCategory} setTaskList={setTaskList}/>
  ))
  
  // READ request for tasks from database based on category filter.
  // Rerenders when category is updated.
  useEffect( () => {
    fetch(`http://localhost:9292/tasks/${selectedCategory[0]}`)
     .then(r => r.json())
     .then(tasks =>  setTaskList(tasks))
  }, [selectedCategory])
  
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
          taskList={taskList}
          setTaskList={setTaskList}
          selectedCategory={selectedCategory}
        />
        </div>
        <div align='center' className='w3-col l6'>
          <br/>
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
    </div>
  )
}

export default TaskContainer