import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../App.css';
import CreateCategory from './CreateCategory';
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

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={ <Home /> }/>
                <Route 
                    path='/tasks' 
                    element={ <TaskContainer 
                        categories={categories}/>
                    }
                />
                <Route 
                    path='/modifycategory' 
                    element={<CreateCategory 
                        categories={categories} 
                        setCategories={setCategories}/>
                    } 
                />
            </Routes>
        </Router>
    )
}

export default App
