import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminPanel, Dashboard, Login, Signup, BookingForm, Web, SubAdmin } from '../screens'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Web />}></Route>
            <Route path="/login" element={< Login />}></Route>
            <Route path="/Signup" element={< Signup />}></Route>
            <Route path="/Dashboard" element={< Dashboard />}></Route>
            <Route path="/AdminPanel" element={< AdminPanel />}></Route>
            <Route path="/subAdmin" element={< SubAdmin />}></Route>
            <Route path='/booking' element={<BookingForm />}></Route> 
            <Route path='*' element={<h1>Page Not Found 404</h1>}></Route>
        </Routes>
    )
}

export default AppRoutes
