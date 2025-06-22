// src/pages/Login.jsx
import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Header from '../components/Header'

const Login = () => {
  const { userType } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const formatUserType = (type) => {
    return type.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', { userType, ...formData })
    alert(`Login attempt for ${formatUserType(userType)} with email: ${formData.email}`)
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-gray-50 font-inter">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[480px] flex-1">
            <h2 className="text-[#101419] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
              {formatUserType(userType)} Login
            </h2>
            <p className="text-[#101419] text-base font-normal leading-normal pb-6 pt-1 px-4 text-center">
              Enter your credentials to access your account
            </p>

            <form onSubmit={handleSubmit} className="px-4">
              <div className="mb-4">
                <label className="block text-[#101419] text-sm font-medium mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e9edf1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d2e2f3] focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-[#101419] text-sm font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#e9edf1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#d2e2f3] focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#d2e2f3] text-[#101419] text-sm font-bold py-3 px-4 rounded-xl hover:bg-[#c2d2e3] transition-colors mb-4"
              >
                Login
              </button>

              <div className="text-center">
                <p className="text-[#101419] text-sm">
                  Don't have an account?{' '}
                  <Link 
                    to={`/register/${userType}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Register here
                  </Link>
                </p>
              </div>

              <div className="text-center mt-4">
                <Link 
                  to="/"
                  className="text-[#101419] text-sm hover:underline"
                >
                  ← Back to Welcome
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login