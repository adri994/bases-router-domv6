import React from 'react'
import { BrowserRouter as Router, Route,Routes, Navigate } from 'react-router-dom'
import About from './pages/About'
import HomePage from './pages/HomePage'
import Page404 from './pages/Page404'
import Navbar from './components/Navbar'
import Users from './pages/Users'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <Router>
      <Navbar />
      {/* es el swwitch */}
      <Routes>
        {/* en la version 6 es element y no component */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* ES EL REDIRECT y el replace hace lo mismo*/}
        <Route path="/nosotros" element={<Navigate replace to="/about" />} />
        <Route path="/user/:id" element={<Users />} />
        {/* para hacer un redirect en v6 hacemos lo siguiente */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<p>welcome</p>}/>
        </Route>
        <Route path="*" element={ <Page404 /> } /> 
      </Routes>
    </Router>
  )
}

export default App

