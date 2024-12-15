import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css'
import {RegisterForm} from './Register/Register';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<RegisterForm />}/>
        </Routes>
      </Router>

      
    </>
  )
}

export default App
