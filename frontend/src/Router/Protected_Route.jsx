import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected_Route = ({children,userRole,allowedRole}) => {

    if(!userRole){
        return <Navigate to='/auth/login'/>
    }

    if(userRole !== allowedRole){
        return <Navigate to='/unauthorized'/>
    }

    return children

  }

export default Protected_Route