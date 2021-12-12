import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  const userId = 10
  return (
    <div>
      <h1>Hola about</h1>

      <Link to={`/user/${userId}`}>Ir a home</Link>
    </div>
  )
}

export default About
