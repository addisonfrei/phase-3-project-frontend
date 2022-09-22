import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../App.css';
import CreateCategory from './CreateCategory';
import CreateTask from './CreateTask';
import Home from './Home';
import NavBar from './NavBar';
import TaskContainer from './TaskContainer';


const App = () => {
    const [taskList, setTaskList] = useState([])

    // Fake data before fetching from database
    // {id: 1,
    //     task: "Walk Dog", 
    //     category: "pets",
    //     dueDate: "Wed Sep 21 2022", 
    //     completed: false},
    //     {id: 2,
    //     task: "Wash Dishes", 
    //     category: "home",
    //     dueDate: "Wed Sep 21 2022", 
    //     completed: false}
    

    
    //Fetch data from database
    useEffect(() => {
        fetch('http://localhost:9292/viewtasks')
         .then(r => r.json())
         .then(setTaskList)
    }, [])

    console.log(taskList)

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/viewtasks' element={ <TaskContainer taskList={taskList} /> }/>
                <Route path='/addtask' element={ <CreateTask /> }/>
                <Route path='/addcategory' element={<CreateCategory />} />
            </Routes>
        </Router>
    )
}

export default App