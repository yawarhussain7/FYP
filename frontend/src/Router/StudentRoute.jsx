import React from 'react'
import { Route, Routes } from 'react-router-dom'

import StudentLayout from '../components/Students/StudentLayout'
import Dashboard from '../pages/Students/Dashboard'

const StudentRoute = ({ userRole }) => {
    return (
        <>
            <Routes>
                <Route path="/student/*" element={
                    <Protected_Route allowedRole="user">
                        <StudentLayout />
                    </Protected_Route>
                }>
                    <Route path="dashboard" element={<Dashboard />} />

                    <Route path="*" element={<h1>404 Not found </h1>} />
                </Route>
            </Routes>

        </>
    )
}

export default StudentRoute