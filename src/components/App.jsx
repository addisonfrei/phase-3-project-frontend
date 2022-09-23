import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../App.css';
import CreateCategory from './CreateCategory';
import CreateTask from './CreateTask';
import Home from './Home';
import NavBar from './NavBar';
import TaskContainer from './TaskContainer';


const App = () => {
    const [ categories, setCategories ] = useState([])
    
    //READ request for categories from database
    useEffect(() => {
        fetch('http://localhost:9292/categories')
         .then(r => r.json())
         .then(setCategories)
    }, [])

    //Iterate through categories to create dropdown options
    const categoryOption = categories.map((category) => 
        <option key={category.id} value={category.id}>{category.name}</option>
    )
    
    
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/tasks' element={ <TaskContainer categoryOption={categoryOption}/> }/>
                <Route path='/addtask' element={ <CreateTask categoryOption={categoryOption}/> }/>
                <Route path='/modifycategory' element={<CreateCategory categories={categories}/>} />
            </Routes>
        </Router>
    )
}

export default App


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