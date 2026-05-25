import React from 'react'
import { Routes, Route } from 'react-router-dom'


import AdminDashboard from '../pages/Admin/AdminDashboard'
import ResourceModeration from '../pages/Admin/ResourceModeration'
import Layout from '../components/Admin/Layout'
import ReportedContent from '../pages/Admin/ReportedContent'
import UserManagement from '../pages/Admin/UserManagement'

const AdminRoute = ({ userRole }) => {
    return (
        <>
            <Route path="/admin/*" element={
                <Protected_Route allowedRole="admin">
                    <Layout />
                </Protected_Route>
            }>

                <Route path='dashboard' element={<AdminDashboard />} />
                <Route path='resource-moderation' element={<ResourceModeration />} />
                <Route path='reports' element={<ReportedContent />} />
                <Route path='users' element={<UserManagement />} />
                <Route path="*" element={"404 Not Found"} />

            </Route>

        </>
    )
}

export default AdminRoute