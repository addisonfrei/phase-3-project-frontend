import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../App.css';
import CreateTask from './CreateTask';
import Home from './Home';
import NavBar from './NavBar';
import TaskContainer from './TaskContainer';


const App = () => {
    const [taskList, setTaskList] = useState([
        {id: 1,
        task: "Walk Dog", 
        category: "Pets",
        dueDate: "Wed Sep 21 2022", 
        completed: false},
        {id: 2,
        task: "Wash Dishes", 
        category: "Home",
        dueDate: "Wed Sep 21 2022", 
        completed: false}
    ])

    
    //Fetch data from database
    // useEffect(() => {
    //     fetch('http://localhost:9292/')
    //      .then(r => r.json())
    //      .then(setToDoList)
    // }, [])

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/view' element={ <TaskContainer taskList={taskList} /> }/>
                <Route path='/add' element={ <CreateTask /> }/>
            </Routes>
        </Router>
    )
}

export default App