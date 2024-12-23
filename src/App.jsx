import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css'
import {RegisterForm} from './Register/Register';
import {LoginForm} from './Login/Login';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<RegisterForm />}/>
          <Route path='/login' element={<LoginForm />}/>
        </Routes>
      </Router>

      
    </>
  )
}

export default App
