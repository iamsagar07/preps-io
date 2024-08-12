import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='w-full min-h-screen flex gap-4 bg-green-600'>
        <div>
            <Sidebar />
        </div>
        <div>
        <main>
            <Outlet></Outlet>
        </main>
        </div>
    </div>
  )
}

export default AppLayout