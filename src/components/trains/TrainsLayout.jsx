import React from 'react'
import { Outlet } from 'react-router-dom'

const TrainsLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default TrainsLayout