import React from 'react'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import HunterProfile from './components/HunterProfile'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<HunterProfile />} />
    </Routes>
    </>
  )
}

export default App