import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          {/* en el className puede ser un callback que nos entrega el isActive */}
          <NavLink
            to="/about"
            className={({isActive})=>isActive ? 'active' : ''}
            >About</NavLink>
        </li>
        <li>
          <NavLink
            className={({isActive})=>isActive ? 'active':''}
            to="/">Home</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
