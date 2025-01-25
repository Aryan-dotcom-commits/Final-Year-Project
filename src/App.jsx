import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css'
import {RegisterForm} from './Register/Register';
import {LoginForm} from './Login/Login';
import { Homepage } from './Homepage/Homepage';
import ForgotPassword from './Forgot Password/ForgotPassword';
import Messages from './Messages/Messages';
import { Chatbot } from './Chatbot/Chatbot';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/register' element={<RegisterForm />}/>
          <Route path='/login' element={<LoginForm />}/>
          <Route path='/' element={<Homepage />} />
          <Route path='/reset-password' element={<ForgotPassword />}/>
          <Route path='/messages' element={<Messages />}/>
          <Route path='/chatbot' element={<Chatbot />}/>
        </Routes>
      </Router>

      
    </>
  )
}

export default App
