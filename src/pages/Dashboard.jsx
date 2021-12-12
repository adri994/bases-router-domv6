import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  const handleClick = () =>{
    // es el useHistory de la version 5
    navigate('/') 
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>logout</button>
      {/* esto es donde estara la ruta hija */}
      <Outlet />
    </div>
  )
}

export default Dashboard
