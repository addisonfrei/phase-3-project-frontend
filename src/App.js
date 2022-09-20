import React, {useEffect, useState} from 'react'
import './App.css';

function App() {
  const [test, setTest] = useState('')

  useEffect( () => {
    fetch('http://localhost:9292/')
      .then(r => r.json())
      .then(setTest)
  }, [])
  console.log(test)
  return (
    <div className="App">
     {test.message}
    </div>
  );
}

export default App;
