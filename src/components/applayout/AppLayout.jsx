import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'
const AppLayout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AppLayout