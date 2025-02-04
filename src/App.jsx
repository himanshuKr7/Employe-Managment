import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import EmployeeProfile from './components/EmployeeProfile'
import AdminDashboard from './components/AdminDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-black">
      {/* <Login/> */}
      {/* <EmployeeProfile/> */}
      <AdminDashboard/>
   </div>
  )
}

export default App
