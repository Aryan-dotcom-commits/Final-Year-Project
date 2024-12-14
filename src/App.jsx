import {Router, Route, Routes, Link} from 'react-router-dom';
import './App.css'
import Sidebar from './Sidebar/Sidebar';
import RegisterForm from './Register/Register';

function App() {

  return (
    <>
    <div className='app-container'>
    <Sidebar />
    <RegisterForm />
    </div>
    </>
  )
}

export default App
