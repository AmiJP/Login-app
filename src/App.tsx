
import './App.css'
import { Dashboard } from './components/Dashboard';
import { ForgotPassword } from './components/ForgotPassword';
import { Home } from './components/Home';
import { Login } from './components/Login'
import { ResetPassword } from './components/ResetPassword';
import { Signup } from './components/Signup'
import { Route, Routes } from 'react-router-dom';


export default function App() {
  return (
     <Routes>
      <Route path='/' element={<Home/>} />
     <Route path='/signup' element={<Signup/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='/dashboard' element={<Dashboard/>} />
     <Route path='/forgot-password' element={<ForgotPassword/>} />
     <Route path={`/reset-password/:token`} element={<ResetPassword/>} />
   </Routes>
  )
}