import React, { useState } from 'react'
import Login from './pages/Login'
import { Routes,Route} from 'react-router-dom'

import AdminDashboard from './pages/Admin/AdminDashboard'
import ResourceModeration from './pages/Admin/ResourceModeration'
import Layout from './components/Admin/Layout'
import ReportedContent from './pages/Admin/ReportedContent'
import UserManagement from './pages/Admin/UserManagement'

import StudentLayout from './components/Students/StudentLayout'
import Dashboard from './pages/Students/Dashboard'
const App = () => {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<h1> Helo</h1>}/>
        <Route path='auth/login' element={<Login/>}/>

        <Route path="/student/*" element={<StudentLayout/>}>
          <Route path="dashboard" element={<Dashboard/>}/>
          
          <Route path="*" element={<h1>404 Not found </h1>}/>
        </Route>

        <Route path="/admin/*" element={<Layout/>}>
        
          <Route path='dashboard' element={<AdminDashboard/>}/>
          <Route path='resource-moderation' element={<ResourceModeration/>}/>
          <Route path='reports' element={<ReportedContent/>}/>
          <Route path='users' element={<UserManagement/>}/>
          <Route path="*" element={"404 Not Found"} />

        </Route>

      </Routes>
     
    </>
  )
}

export default App