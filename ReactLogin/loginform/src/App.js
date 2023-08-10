
import './App.css';
import Login  from './Components/Login'
import Register from './Components/Register'
import React, {useState} from 'react';

function App() {
  const [currentForm,setCurrentForm] = useState('login');

  const toggleForm = (formName) =>{
      setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm === 'login' ?  <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
     
    </div>
  );
}

export default App;
