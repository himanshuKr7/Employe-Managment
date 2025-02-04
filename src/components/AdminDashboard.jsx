import React from 'react'
import Header from './Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = () => {
  return (
    <div className="h-full w-full p-10">
      <Header/> 
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdminDashboard
