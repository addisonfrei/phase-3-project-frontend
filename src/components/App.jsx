import React, {useEffect, useState} from 'react'
import '../App.css';

const App = () => {
    const [test, setTest] = useState('')

    useEffect(() => {
        fetch('http://localhost:9292/')
         .then(r => r.json())
         .then(setTest)
    }, [])

    return (
        <div align='center' >
            {test.message}
        </div>
    )
}

export default App