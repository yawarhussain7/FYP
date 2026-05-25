import React, { useState } from 'react'
import {  Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import Protected_Route from './Router/Protected_Route'
import Register from './pages/Register'

import AdminRoute from './Router/AdminRoute'
import StudentRoute from './Router/StudentRoute'


const App = () => {
  const [userRole, set_userRole] = useState('')
  return(
    <>
    <Routes>
      <Route path='auth/SignIn' element={<Login/>}/>
      <Route path='auth/SignUp' element={<Register/>}/>

      <Route path='*' element={<h1> 404 Page not found</h1>}/>
    </Routes>
    </>
  )
}

export default App