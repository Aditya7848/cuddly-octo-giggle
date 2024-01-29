import React from 'react'
import { Outlet } from 'react-router-dom'

const BusesLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default BusesLayout