// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login/:userType" element={<Login />} />
      <Route path="/register/:userType" element={<Register />} />
    </Routes>
  )
}

export default App