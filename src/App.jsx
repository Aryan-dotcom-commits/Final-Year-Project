import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css'
import {RegisterForm} from './User Side/Register/Register';
import {LoginForm} from './User Side/Login/Login';
import { Homepage } from './User Side/Homepage/Homepage';
import ForgotPassword from './User Side/Forgot Password/ForgotPassword';
import Messages from './User Side/Messages/Messages';
import { Chatbot } from './User Side/Chatbot/Chatbot';
import   DoctorDashboard  from './DoctorSide Homepage/DoctorHomepage';

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
          <Route path='/dashboard' element={<DoctorDashboard/>}/>
        </Routes>
      </Router>

      
    </>
  )
}

export default App
