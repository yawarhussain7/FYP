import React, { useState } from 'react'
import Login from './pages/Login'

const App = () => {
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  return isAuthenticated ? (
    <>
    <h1>Hello Yawar</h1>
    
    </>
  ):<Login/>
}

export default App