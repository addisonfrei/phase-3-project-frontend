import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../App.css';
import CreateToDo from './CreateToDo';
import Home from './Home';
import NavBar from './NavBar';
import ToDoContainer from './ToDoContainer';


const App = () => {
    const [test, setTest] = useState('')
    //Fetch data from database
    useEffect(() => {
        fetch('http://localhost:9292/')
         .then(r => r.json())
         .then(setTest)
    }, [])

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route path='/view' element={ <ToDoContainer /> }/>
                <Route path='/add' element={ <CreateToDo /> }/>
            </Routes>
        </Router>
    )
}

export default App